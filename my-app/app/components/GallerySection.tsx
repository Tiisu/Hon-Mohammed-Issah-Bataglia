"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "./Button";

// Interactive photo gallery with categories and lightbox
export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState(8);
  const galleryRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: "all", label: "All Photos", count: 24 },
    { id: "parliament", label: "Parliament", count: 6 },
    { id: "community", label: "Community Events", count: 8 },
    { id: "projects", label: "Development Projects", count: 6 },
    { id: "meetings", label: "Town Halls", count: 4 },
  ];

  const galleryItems = [
    // Parliament
    { id: 1, category: "parliament", title: "Parliamentary Debate", desc: "Speaking on behalf of Sissala East", img: "/honinparliament.jpg" },
    { id: 2, category: "parliament", title: "Committee Meeting", desc: "Working on education policy", img: "/honinparliament.jpg" },
    { id: 3, category: "parliament", title: "Bill Presentation", desc: "Presenting constituency development bill", img: "/honbataglia.png" },
    { id: 4, category: "parliament", title: "Budget Discussion", desc: "Advocating for Sissala East allocation", img: "/honinparliament.jpg" },
    { id: 5, category: "parliament", title: "Cross-Party Collaboration", desc: "Working across party lines", img: "/honinparliament.jpg" },
    { id: 6, category: "parliament", title: "Media Interview", desc: "Discussing constituency issues", img: "/honbataglia.png" },

    // Community Events
    { id: 7, category: "community", title: "Community Festival", desc: "Celebrating local culture and traditions", img: "/honwithcommemebrs.jpg" },
    { id: 8, category: "community", title: "Youth Empowerment", desc: "Skills training graduation ceremony", img: "/honwithstudents.jpg" },
    { id: 9, category: "community", title: "Women's Group Meeting", desc: "Supporting women entrepreneurs", img: "/honwithcommemebrs.jpg" },
    { id: 10, category: "community", title: "Health Awareness Campaign", desc: "Community health education", img: "/honhealthcare.jpg" },
    { id: 11, category: "community", title: "Agricultural Fair", desc: "Promoting local farming", img: "/campaignpic.jpg" },
    { id: 12, category: "community", title: "School Prize Day", desc: "Awarding academic excellence", img: "/honwithstudents.jpg" },
    { id: 13, category: "community", title: "Sports Tournament", desc: "Youth football championship", img: "/honinfootball.jpg" },
    { id: 14, category: "community", title: "Cultural Dance", desc: "Traditional dance performance", img: "/honwithcommemebrs.jpg" },

    // Development Projects
    { id: 15, category: "projects", title: "School Construction", desc: "New primary school completion", img: "/hoonnin school.jpg" },
    { id: 16, category: "projects", title: "Road Construction", desc: "Connecting rural communities", img: "/honinfac.jpg" },
    { id: 17, category: "projects", title: "Water Project", desc: "Clean water access for villages", img: "/honinfac.jpg" },
    { id: 18, category: "projects", title: "Health Clinic", desc: "New healthcare facility opening", img: "/honhealthcare.jpg" },
    { id: 19, category: "projects", title: "Solar Installation", desc: "Renewable energy for schools", img: "/honinfac.jpg" },
    { id: 20, category: "projects", title: "Market Rehabilitation", desc: "Improving trading conditions", img: "/honinfac.jpg" },

    // Town Halls
    { id: 21, category: "meetings", title: "Village Town Hall", desc: "Direct community engagement", img: "/honwithcommemebrs.jpg" },
    { id: 22, category: "meetings", title: "Chiefs Meeting", desc: "Traditional authority consultation", img: "/hongreeting.jpg" },
    { id: 23, category: "meetings", title: "Farmers Forum", desc: "Agricultural policy discussion", img: "/campaignpic.jpg" },
    { id: 24, category: "meetings", title: "Youth Assembly", desc: "Listening to young voices", img: "/honyouthdev.jpg" },
  ];

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const visibleGalleryItems = filteredItems.slice(0, visibleItems);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < filteredItems.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  useEffect(() => {
    setVisibleItems(8);
  }, [activeCategory]);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Photo Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A visual journey through my work representing Sissala East - from Parliament to community events
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-green-50 hover:text-green-700 border border-gray-300"
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleGalleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading={index < 8 ? "eager" : "lazy"}
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white text-sm font-semibold">{item.title}</h4>
                <p className="text-white/90 text-xs mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleItems < filteredItems.length && (
          <div className="text-center mt-8">
            <Button
              onClick={() => setVisibleItems(prev => prev + 8)}
              variant="secondary"
              className="px-6 py-3"
            >
              Load More Photos ({filteredItems.length - visibleItems} remaining)
            </Button>
          </div>
        )}

        {/* View All Gallery Button */}
        <div className="text-center mt-8">
          <Button href="/gallery" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            View Complete Gallery
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl"
            >
              ✕
            </button>
            
            {/* Image */}
            <div className="relative">
              <img
                src={filteredItems[selectedImage].img}
                alt={filteredItems[selectedImage].title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Navigation arrows */}
              {selectedImage > 0 && (
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300"
                >
                  ‹
                </button>
              )}
              {selectedImage < filteredItems.length - 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300"
                >
                  ›
                </button>
              )}
            </div>

            {/* Caption */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold">{filteredItems[selectedImage].title}</h3>
              <p className="text-gray-300 mt-1">{filteredItems[selectedImage].desc}</p>
              <p className="text-gray-400 text-sm mt-2">
                {selectedImage + 1} of {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}