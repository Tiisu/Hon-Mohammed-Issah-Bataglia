"use client";

import React, { useEffect, useRef, useState } from "react";

// Sticky left column with revealing right items for MP's focus areas
export default function StickyRevealSection() {
  const itemRefs = [useRef<HTMLDivElement | null>(null), useRef<HTMLDivElement | null>(null), useRef<HTMLDivElement | null>(null), useRef<HTMLDivElement | null>(null)];
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idxAttr = entry.target.getAttribute("data-idx");
          const idx = idxAttr ? parseInt(idxAttr, 10) : NaN;
          if (!isNaN(idx) && entry.isIntersecting) {
            setVisibleCount((prev) => Math.max(prev, idx + 1));
          }
        });
      },
      { root: null, rootMargin: "0px 0px -20% 0px", threshold: 0.35 }
    );

    itemRefs.forEach((ref) => ref.current && observer.observe(ref.current));
    return () => observer.disconnect();
  }, []);

  const items = [
    {
      title: "Education & Youth Development",
      desc: "Building better schools and creating opportunities for our young people to thrive.",
      img: "/honyouthdev.jpg",
    },
    {
      title: "Healthcare Access",
      desc: "Ensuring quality healthcare reaches every corner of Sissala East constituency.",
      img: "/honhealthcare.jpg",
    },
    {
      title: "Infrastructure Development",
      desc: "Roads, water, and electricity projects that connect our communities and drive growth.",
      img: "/honinfac.jpg",
    },
    {
      title: "Agricultural Support",
      desc: "Supporting our farmers with modern techniques, resources, and market access.",
      img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    },
  ];

  const styleFor = (i: number) => {
    const revealed = i < visibleCount;
    return {
      opacity: revealed ? 1 : 0,
      transform: `translateY(${revealed ? 0 : 16}px)`,
      transition: "opacity 400ms ease, transform 400ms ease",
    } as React.CSSProperties;
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Sticky Left */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                My Priorities for Sissala East
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                Focused on delivering real change and development for our communities. 
                These are the key areas where I am working to make a difference.
              </p>
              <div className="h-px bg-green-200 mb-4" />
              <p className="text-gray-700 text-sm">
                Scroll to discover more about each priority area.
              </p>
            </div>
          </div>

          {/* Revealing Right */}
          <div className="lg:col-span-3 space-y-6">
            {items.map((it, i) => (
              <div
                key={i}
                data-idx={i}
                ref={itemRefs[i]}
                style={styleFor(i)}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative w-full h-56 md:h-72 lg:h-80 overflow-hidden bg-gray-100">
                  <img src={it.img} alt={it.title} className="h-full w-full object-cover object-top" />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{it.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm md:text-base">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}