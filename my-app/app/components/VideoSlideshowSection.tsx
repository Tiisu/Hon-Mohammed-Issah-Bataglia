"use client";

import React, { useState } from "react";

// Video slideshow with main center video and side thumbnails
export default function VideoSlideshowSection() {
  const videos = [
    {
      id: 1,
      title: "Main Address to Constituents",
      description: "Hon. Bataglia shares important updates and messages with the people of Sissala East",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1318108600071699%2F&show_text=false&width=560&t=0",
      duration: "5:30",
      category: "Main Address"
    },
    {
      id: 2,
      title: "Community Engagement Update",
      description: "Direct communication with constituents about ongoing community initiatives and programs",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=322&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1538401377303529%2F&show_text=false&width=560&t=0",
      duration: "4:45",
      category: "Community"
    },
    {
      id: 3,
      title: "Development Projects Progress",
      description: "Updates on infrastructure and development projects across Sissala East constituency",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F838397061900565%2F&show_text=false&width=560&t=0",
      duration: "6:20",
      category: "Development"
    },
    {
      id: 4,
      title: "Parliamentary Work Update",
      description: "Report from Parliament on legislative work and advocacy efforts for Sissala East",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F3938126273076583%2F&show_text=false&width=560&t=0",
      duration: "7:15",
      category: "Parliament"
    },
    {
      id: 5,
      title: "Youth Empowerment Initiative",
      description: "Announcements and updates on programs supporting young people in the constituency",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fissah.mohammedbataglia%2Fvideos%2F2210643236031651%2F&show_text=false&width=560&t=0",
      duration: "8:10",
      category: "Youth"
    },
    {
      id: 6,
      title: "Healthcare Access Update",
      description: "Progress on healthcare facilities and medical services for rural communities",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=329&href=https%3A%2F%2Fwww.facebook.com%2Fissah.mohammedbataglia%2Fvideos%2F2604028939802775%2F&show_text=false&width=560&t=0",
      duration: "5:40",
      category: "Healthcare"
    },
    {
      id: 7,
      title: "Agricultural Support Programs",
      description: "Information about programs supporting farmers and agricultural development in Sissala East",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=316&href=https%3A%2F%2Fwww.facebook.com%2Fissah.mohammedbataglia%2Fvideos%2F639626735655069%2F&show_text=false&width=560&t=0",
      duration: "6:55",
      category: "Agriculture"
    },
    {
      id: 8,
      title: "Education and Infrastructure",
      description: "Updates on educational facilities and infrastructure development in Sissala East",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1298212581576072%2F&show_text=false&width=560&t=0",
      duration: "4:20",
      category: "Education"
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
                  className="group relative rounded-lg overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 p-4"
                >
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <span className="text-xs text-gray-400">{video.duration}</span>
                    </div>
                    <h4 className="text-sm font-medium text-white line-clamp-2 mb-1">{video.title}</h4>
                    <span className="text-xs text-green-400">{video.category}</span>
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
                    // Real Facebook video embed
                    <iframe
                      src={videos[currentVideo].embedUrl}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  ) : (
                    // Video Preview with Play Button
                    <div 
                      className="relative w-full h-full cursor-pointer group bg-gray-900 flex items-center justify-center"
                      onClick={() => setIsPlaying(true)}
                    >
                      <div className="text-center text-white">
                        <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300 shadow-lg mx-auto mb-4">
                          <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{mainVideo.title}</h3>
                        <p className="text-gray-300 text-sm mb-2">{mainVideo.description}</p>
                        <div className="flex items-center justify-center gap-4">
                          <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full">
                            {mainVideo.category}
                          </span>
                          <span className="text-gray-400 text-sm">{mainVideo.duration}</span>
                        </div>
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
                  className="group relative rounded-lg overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 p-4"
                >
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <span className="text-xs text-gray-400">{video.duration}</span>
                    </div>
                    <h4 className="text-sm font-medium text-white line-clamp-2 mb-1">{video.title}</h4>
                    <span className="text-xs text-green-400">{video.category}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Video List */}
          <div className="lg:hidden mt-6 overflow-x-auto">
            <div className="flex gap-3 pb-2" style={{ width: 'max-content' }}>
              {videos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => handleVideoChange(index)}
                  className={`flex-shrink-0 w-48 rounded-lg overflow-hidden transition-all p-3 bg-gray-800 hover:bg-gray-700 ${
                    index === currentVideo 
                      ? 'ring-2 ring-green-600 transform scale-105' 
                      : 'hover:scale-105'
                  }`}
                >
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                        <svg className="w-2 h-2 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <span className="text-xs text-gray-400">{video.duration}</span>
                    </div>
                    <h4 className="text-xs text-white line-clamp-2 mb-1">{video.title}</h4>
                    <span className="text-xs text-green-400">{video.category}</span>
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