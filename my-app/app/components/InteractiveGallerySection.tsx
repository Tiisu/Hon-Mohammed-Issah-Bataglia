"use client";

import React, { useState } from "react";
import { Button } from "./Button";

// Interactive gallery: left = big image + 4 thumbnails; right = rich content matching selection
export default function InteractiveGallerySection() {
  const items = [
    {
      key: "parliament",
      title: "Parliamentary Work & Advocacy",
      desc:
        "Strong voice in Parliament, advocating for policies and resources that benefit Sissala East.",
      img: "/honinparliament.jpg",
      bullets: [
        "Active participation in parliamentary debates",
        "Championing constituency-focused legislation",
        "Building coalitions for development projects",
      ],
      cta: { label: "View Parliamentary Record", href: "/agenda" },
      stats: [
        { label: "Bills Presented", value: "12+" },
        { label: "Committee Roles", value: "3" },
        { label: "Years in Parliament", value: "Current" },
      ],
    },
    {
      key: "projects",
      title: "Development Projects",
      desc:
        "Successful delivery of infrastructure, education, and health projects across Sissala East.",
      img: "/honinfac.jpg",
      bullets: [
        "Road construction and rehabilitation",
        "School building and renovation projects",
        "Healthcare facility improvements",
      ],
      cta: { label: "See All Projects", href: "/projects" },
      stats: [
        { label: "Schools Built/Renovated", value: "15+" },
        { label: "Roads Constructed", value: "25km+" },
        { label: "Health Facilities", value: "8" },
      ],
    },
    {
      key: "community",
      title: "Community Engagement",
      desc:
        "Regular town halls, community visits, and direct engagement with constituents.",
      img: "/honwithcommemebrs.jpg",
      bullets: [
        "Monthly community town halls",
        "Village-to-village engagement tours",
        "Direct feedback and consultation",
      ],
      cta: { label: "Join Community Events", href: "/contact" },
      stats: [
        { label: "Town Halls Held", value: "50+" },
        { label: "Villages Visited", value: "100%" },
        { label: "Community Projects", value: "30+" },
      ],
    },
    {
      key: "youth",
      title: "Youth & Education Focus",
      desc:
        "Empowering the next generation through scholarships, skills training, and educational support.",
      img: "/honyouthdev.jpg",
      bullets: [
        "Scholarship programs for students",
        "Skills training and job creation",
        "Youth leadership development",
      ],
      cta: { label: "Apply for Programs", href: "/contact" },
      stats: [
        { label: "Scholarships Awarded", value: "200+" },
        { label: "Youth Trained", value: "500+" },
        { label: "Job Placements", value: "150+" },
      ],
    },
  ];

  const [selected, setSelected] = useState(0);
  const [prevSelected, setPrevSelected] = useState<number | null>(null);
  const active = items[selected];
  const prev = prevSelected !== null ? items[prevSelected] : null;

  const onSelect = (i: number) => {
    if (i === selected) return;
    setPrevSelected(selected);
    setSelected(i);
    // Clear prev after fade completes
    window.setTimeout(() => setPrevSelected(null), 400);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Track Record of Service
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Click to explore different aspects of my work representing Sissala East
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Big image + thumbnails (sticky on large screens) */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              {/* Big image with crossfade */}
              <div className="relative w-full h-72 md:h-96 lg:h-[28rem] overflow-hidden rounded-2xl border border-gray-200 shadow-lg bg-gray-100">
                {prev && (
                  <img
                    key={prev.key}
                    src={prev.img}
                    alt={prev.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                    loading="lazy"
                  />
                )}
                <img
                  key={active.key}
                  src={active.img}
                  alt={active.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${prev ? 'opacity-0 animate-[fadeIn_0.5s_forwards]' : 'opacity-100'}`}
                  loading={selected === 0 ? 'eager' : 'lazy'}
                />
              </div>

              {/* Thumbnails */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                {items.map((it, i) => {
                  const isActive = i === selected;
                  return (
                    <button
                      key={it.key}
                      onClick={() => onSelect(i)}
                      className={
                        "group relative overflow-hidden rounded-xl border transition-all text-left " +
                        (isActive
                          ? "border-green-600 ring-1 ring-green-600"
                          : "border-gray-200 hover:border-green-300")
                      }
                      aria-pressed={isActive}
                      aria-label={`Show ${it.title}`}
                    >
                      <div className="relative w-full h-12 md:h-16 bg-gray-100">
                        <img src={it.img} alt={it.title} className="h-full w-full object-cover" loading={i < 2 ? 'eager' : 'lazy'} />
                      </div>
                      <div className="p-2">
                        <div className="text-sm font-medium text-gray-900 line-clamp-2">{it.title}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Rich content for selected item with gentle fade/slide */}
          <div className="lg:col-span-3">
            <div key={active.key} className="max-w-2xl transition-all duration-300 ease-out opacity-0 translate-y-2" style={{opacity: 1, transform: 'translateY(0)'}}>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{active.title}</h3>
              <p className="text-gray-600 text-base md:text-lg mb-6">{active.desc}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
                {active.stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-gray-200 bg-white p-3 text-center transition-all duration-300 hover:shadow-sm">
                    <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                    <div className="text-xs md:text-sm text-gray-600">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Bullets */}
              <ul className="space-y-2 mb-6">
                {active.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-green-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex gap-3">
                <Button
                  href={active.cta.href}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  {active.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { to { opacity: 1 } }
      `}</style>
    </section>
  );
}