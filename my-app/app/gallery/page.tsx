"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../components/Button";
import Section from "../components/Section";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery items organized by rows
  const galleryRows = [
    // Row 1 - Parliament (Left to Right)
    [
      { id: 1, title: "Parliamentary Debate on Education Bill", desc: "Presenting comprehensive education reform legislation", img: "https://images.unsplash.com/photo-1541872705-1f73c6400ec9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Parliament" },
      { id: 2, title: "Committee Meeting Session", desc: "Working on rural development policies", img: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Parliament" },
      { id: 3, title: "Budget Review Discussion", desc: "Advocating for Sissala East allocation", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Parliament" },
      { id: 4, title: "Cross-Party Collaboration", desc: "Working across party lines for development", img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Parliament" },
      { id: 5, title: "Media Interview", desc: "Discussing constituency development plans", img: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Parliament" },
      { id: 6, title: "Legislative Review", desc: "Analyzing bills affecting rural communities", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Parliament" },
      { id: 7, title: "Parliamentary Address", desc: "Speaking on behalf of Sissala East", img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Parliament" },
      { id: 8, title: "Committee Hearing", desc: "Education policy development session", img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Parliament" },
    ],
    // Row 2 - Community Events (Right to Left)
    [
      { id: 9, title: "Annual Cultural Festival", desc: "Celebrating Sissala East traditions", img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Community" },
      { id: 10, title: "Youth Skills Graduation", desc: "800+ young people complete training", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Community" },
      { id: 11, title: "Women's Group Meeting", desc: "Supporting women entrepreneurs", img: "https://images.unsplash.com/photo-1573164713347-c3dd532f7054?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Community" },
      { id: 12, title: "Health Awareness Campaign", desc: "Community health education program", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Community" },
      { id: 13, title: "Agricultural Fair", desc: "Promoting local farming innovations", img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Community" },
      { id: 14, title: "School Prize Day", desc: "Awarding academic excellence", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Community" },
      { id: 15, title: "Sports Tournament", desc: "Youth football championship", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Community" },
      { id: 16, title: "Cultural Dance Performance", desc: "Traditional dance celebration", img: "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Community" },
    ],
    // Row 3 - Development Projects (Left to Right)
    [
      { id: 17, title: "New Primary School Opening", desc: "15th classroom block completion", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Development" },
      { id: 18, title: "Rural Road Construction", desc: "25km road network completion", img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Development" },
      { id: 19, title: "Clean Water Project", desc: "Borehole installation ceremony", img: "https://images.unsplash.com/photo-1594736797933-d0a9ba2fe38f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Development" },
      { id: 20, title: "Health Clinic Commissioning", desc: "Gwollu health facility opening", img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Development" },
      { id: 21, title: "Solar Power Installation", desc: "Renewable energy for rural schools", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Development" },
      { id: 22, title: "Market Rehabilitation", desc: "Improved trading facilities", img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Development" },
      { id: 23, title: "Library Construction", desc: "Community knowledge center", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Development" },
      { id: 24, title: "Agricultural Processing Center", desc: "Modern equipment for farmers", img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Development" },
    ]
  ];

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 50); // Move every 50ms for smooth fast scroll

    return () => clearInterval(timer);
  }, []);

  const openLightbox = (rowIndex: number, imageIndex: number) => {
    const absoluteIndex = rowIndex * 8 + imageIndex;
    setSelectedImage(absoluteIndex);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < 23) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const getAllImages = () => {
    return galleryRows.flat();
  };

  const getCarouselTransform = (rowIndex: number) => {
    const direction = rowIndex === 1 ? -1 : 1; // Row 1 (index 1) goes right to left
    const movement = (currentIndex * direction * 2); // Move by 2px each step for smoother movement
    const cardWidth = 256 + 16; // 64 * 4 (w-64) + gap
    const totalWidth = cardWidth * 8; // 8 original images
    const wrappedMovement = movement % totalWidth;
    return `translateX(${wrappedMovement}px)`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Section className="py-16 md:py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A dynamic visual journey through parliamentary work, community engagement, and development projects across Sissala East
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              <span>Parliament Work</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span>Community Events</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
              <span>Development Projects</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Triple Carousel Section */}
      <div className="py-16 bg-white">
        <div className="w-full overflow-hidden">
          {galleryRows.map((row, rowIndex) => (
            <div key={rowIndex} className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              {/* Row Header */}
              <div className="text-center mb-6">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                  rowIndex === 0 ? 'bg-green-100 text-green-800' :
                  rowIndex === 1 ? 'bg-blue-100 text-blue-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  <span>{rowIndex === 0 ? 'Parliament Work' : rowIndex === 1 ? 'Community Events' : 'Development Projects'}</span>
                  <span className="text-lg">{rowIndex === 1 ? '←' : '→'}</span>
                </div>
              </div>

              {/* Carousel Container */}
              <div className="overflow-hidden w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 relative">
                <div 
                  className="flex gap-4 h-full absolute"
                  style={{
                    transform: getCarouselTransform(rowIndex),
                    width: 'max-content',
                  }}
                >
                  {/* Duplicate images for infinite scroll effect */}
                  {[...row, ...row, ...row].map((item, index) => (
                    <div
                      key={`${item.id}-${index}`}
                      className="flex-shrink-0 w-64 h-64 relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                      onClick={() => openLightbox(rowIndex, index % row.length)}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
                          <div className={`text-xs font-medium mb-1 uppercase ${
                            rowIndex === 0 ? 'text-green-400' :
                            rowIndex === 1 ? 'text-blue-400' :
                            'text-orange-400'
                          }`}>
                            {item.category}
                          </div>
                          <h3 className="text-white text-xs sm:text-sm font-semibold mb-1 line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-white/90 text-xs line-clamp-2 hidden sm:block">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl z-10"
            >
              ✕
            </button>
            
            {/* Image */}
            <div className="relative">
              <img
                src={getAllImages()[selectedImage].img}
                alt={getAllImages()[selectedImage].title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Navigation arrows */}
              {selectedImage > 0 && (
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
                >
                  ‹
                </button>
              )}
              {selectedImage < 23 && (
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
                >
                  ›
                </button>
              )}
            </div>

            {/* Caption */}
            <div className="mt-4 text-center text-white max-w-2xl mx-auto">
              <div className="text-green-400 text-sm font-medium mb-1 uppercase">
                {getAllImages()[selectedImage].category}
              </div>
              <h3 className="text-xl font-semibold mb-2">{getAllImages()[selectedImage].title}</h3>
              <p className="text-gray-300 mb-2">{getAllImages()[selectedImage].desc}</p>
              <div className="text-sm text-gray-400">
                Image {selectedImage + 1} of {getAllImages().length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}