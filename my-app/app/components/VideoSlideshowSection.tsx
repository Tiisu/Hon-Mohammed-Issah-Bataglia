"use client";

import React, { useState } from "react";

// Video slideshow with main center video and side thumbnails
export default function VideoSlideshowSection() {
  const videos = [
    {
      id: 1,
      title: "Addressing Parliament on Education Reform",
      description: "Speaking passionately about improving education infrastructure in Sissala East",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D12345&width=560&show_text=false&height=315&appId",
      thumbnail: "https://images.unsplash.com/photo-1541872705-1f73c6400ec9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3:45",
      category: "Parliament"
    },
    {
      id: 2,
      title: "Community Town Hall - Tumu",
      description: "Engaging directly with constituents about healthcare improvements",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D23456&width=560&show_text=false&height=315&appId",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "8:20",
      category: "Community"
    },
    {
      id: 3,
      title: "Agricultural Development Plans",
      description: "Outlining support programs for local farmers",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D34567&width=560&show_text=false&height=315&appId",
      thumbnail: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "5:12",
      category: "Development"
    },
    {
      id: 4,
      title: "Youth Empowerment Initiative Launch",
      description: "Announcing new skills training programs for young people",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D45678&width=560&show_text=false&height=315&appId",
      thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "6:30",
      category: "Youth"
    },
    {
      id: 5,
      title: "Infrastructure Update - Road Projects",
      description: "Progress report on road construction across the constituency",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D56789&width=560&show_text=false&height=315&appId",
      thumbnail: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "4:15",
      category: "Infrastructure"
    },
    {
      id: 6,
      title: "Women's Empowerment Meeting",
      description: "Supporting women entrepreneurs and business development",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D67890&width=560&show_text=false&height=315&appId",
      thumbnail: "https://images.unsplash.com/photo-1573164713347-c3dd532f7054?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "7:45",
      category: "Community"
    },
    {
      id: 7,
      title: "Healthcare Facility Commissioning",
      description: "Opening ceremony for new health clinic in Gwollu",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D78901&width=560&show_text=false&height=315&appId",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "5:55",
      category: "Healthcare"
    }
  ];

  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoChange = (index: number) => {
    setCurrentVideo(index);
    setIsPlaying(false); // Reset playing state when changing videos
  };

  const nextVideo = () => {
    const next = (currentVideo + 1) % videos.length;
    handleVideoChange(next);
  };

  const prevVideo = () => {
    const prev = (currentVideo - 1 + videos.length) % videos.length;
    handleVideoChange(prev);
  };

  // Get videos to display as side thumbnails (3 on each side)
  const getSideVideos = () => {
    const totalVideos = videos.length;
    const leftVideos = [];
    const rightVideos = [];

    // Get 3 videos for each side, ensuring they don't include the current video
    for (let i = 1; i <= 3; i++) {
      const leftIndex = (currentVideo - i + totalVideos) % totalVideos;
      const rightIndex = (currentVideo + i) % totalVideos;
      leftVideos.unshift(videos[leftIndex]);
      rightVideos.push(videos[rightIndex]);
    }

    return { leftVideos, rightVideos };
  };

  const { leftVideos, rightVideos } = getSideVideos();
  const mainVideo = videos[currentVideo];

  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Messages from Your Representative
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Watch Hon. Mohammed Issah Bataglia share updates, address issues, and communicate directly with the people of Sissala East
          </p>
        </div>

        {/* Video Slideshow Container */}
        <div className="relative">
          {/* Main Video Area */}
          <div className="flex items-center justify-center gap-4 md:gap-8">
            
            {/* Left Side Videos */}
            <div className="hidden lg:flex flex-col gap-3 w-48">
              {leftVideos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => handleVideoChange(videos.findIndex(v => v.id === video.id))}
                  className="group relative rounded-lg overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="aspect-video relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                        <svg className="w-3 h-3 text-gray-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-2">
                    <h4 className="text-xs font-medium text-white line-clamp-2">{video.title}</h4>
                  </div>
                </button>
              ))}
            </div>

            {/* Main Video */}
            <div className="flex-1 max-w-4xl">
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                {/* Video Container */}
                <div className="aspect-video relative">
                  {isPlaying ? (
                    // Replace with actual Facebook embed
                    <iframe
                      src={mainVideo.embedUrl}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  ) : (
                    // Video Thumbnail with Play Button
                    <div 
                      className="relative w-full h-full cursor-pointer group"
                      onClick={() => setIsPlaying(true)}
                    >
                      <img 
                        src={mainVideo.thumbnail} 
                        alt={mainVideo.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-lg">
                          <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded">
                        {mainVideo.duration}
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-6 bg-gray-800">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                          {mainVideo.category}
                        </span>
                        <span className="text-gray-400 text-sm">{mainVideo.duration}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{mainVideo.title}</h3>
                      <p className="text-gray-300">{mainVideo.description}</p>
                    </div>
                    
                    {/* Navigation Controls */}
                    <div className="flex items-center gap-2 ml-4">
                      <button
                        onClick={prevVideo}
                        className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                        title="Previous video"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextVideo}
                        className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                        title="Next video"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Videos */}
            <div className="hidden lg:flex flex-col gap-3 w-48">
              {rightVideos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => handleVideoChange(videos.findIndex(v => v.id === video.id))}
                  className="group relative rounded-lg overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="aspect-video relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                        <svg className="w-3 h-3 text-gray-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-2">
                    <h4 className="text-xs font-medium text-white line-clamp-2">{video.title}</h4>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Thumbnail Strip */}
          <div className="lg:hidden mt-6 overflow-x-auto">
            <div className="flex gap-3 pb-2" style={{ width: 'max-content' }}>
              {videos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => handleVideoChange(index)}
                  className={`flex-shrink-0 w-32 rounded-lg overflow-hidden transition-all ${
                    index === currentVideo 
                      ? 'ring-2 ring-green-600 transform scale-105' 
                      : 'hover:scale-105'
                  }`}
                >
                  <div className="aspect-video relative bg-gray-800">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 bg-white/80 rounded-full flex items-center justify-center">
                        <svg className="w-2 h-2 text-gray-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded text-[10px]">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-1">
                    <h4 className="text-xs text-white line-clamp-2">{video.title}</h4>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Video Counter */}
          <div className="text-center mt-6">
            <span className="text-gray-400 text-sm">
              Video {currentVideo + 1} of {videos.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}