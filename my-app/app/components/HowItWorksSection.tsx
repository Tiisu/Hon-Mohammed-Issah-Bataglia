"use client";

import React, { useEffect, useRef, useState } from "react";

// Vertical scroll drives horizontal slide transition for MP's approach
export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0); // 0 -> 1 across this section

  const steps = [
    {
      title: "Listen to the Community",
      desc:
        "Engaging directly with constituents to understand the real needs and challenges facing Sissala East.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Advocate in Parliament",
      desc: "Representing Sissala East's interests with passion and dedication in the national assembly.",
      img: "https://images.unsplash.com/photo-1541872705-1f73c6400ec9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Deliver Results",
      desc: "Working tirelessly to bring development projects, resources, and opportunities to our constituency.",
      img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    },
  ];

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const total = el.offsetHeight - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Reveal thresholds for step 2 and 3
  const t2 = 0.33; 
  const t3 = 0.66; 

  // Active index for markers (0,1,2)
  const activeIndex = progress < t2 ? 0 : progress < t3 ? 1 : 2;

  // Horizontal progress (0%..100%)
  const progressPercent = Math.max(0, Math.min(100, progress * 100));

  // Translate the horizontal track based on progress
  const totalSlides = steps.length;
  const translatePercent = -(progress * (totalSlides - 1) * 100);

  return (
    <section ref={sectionRef} className="relative" style={{ height: `${totalSlides * 100}vh` }}>
      {/* Sticky viewport that stays while we scroll through the section */}
      <div className="sticky top-24 sm:top-28 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <header className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
              How I Serve Sissala East
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              My commitment to meaningful representation and community development
            </p>
          </header>

          {/* Horizontal progress line with markers */}
          <div className="mb-6">
            <div className="relative h-6">
              {/* Base line */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-green-200" />
              {/* Fill line */}
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 h-px bg-green-600"
                style={{ width: `${progressPercent}%` }}
              />
              {/* Markers at 0%, 50%, 100% */}
              {[
                { pos: "0%", label: 1 },
                { pos: "50%", label: 2 },
                { pos: "100%", label: 3 },
              ].map((m, idx) => (
                <div
                  key={idx}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                  style={{ left: m.pos }}
                >
                  <div
                    className={
                      "flex items-center justify-center h-8 w-8 rounded-full border-2 shadow-md " +
                      (idx <= activeIndex
                        ? "bg-green-600 border-green-600 text-white"
                        : "bg-white border-green-400 text-green-700")
                    }
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Viewport frame */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            {/* Horizontal track */}
            <div
              className="flex w-full transition-transform duration-200 ease-out"
              style={{ transform: `translateX(${translatePercent}%)` }}
            >
              {steps.map((s, i) => (
                <div key={i} className="w-full flex-shrink-0">
                  <div className="aspect-video w-full overflow-hidden">
                    <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">{s.title}</h3>
                    <p className="mt-3 text-gray-600 text-base md:text-lg">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}