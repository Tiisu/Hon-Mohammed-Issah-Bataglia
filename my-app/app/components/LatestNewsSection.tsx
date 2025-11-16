"use client";

import React, { useState } from "react";
import { Button } from "./Button";

// Enhanced news section with categories, featured articles, and engaging layout
export default function LatestNewsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All News" },
    { id: "parliament", label: "Parliament" },
    { id: "development", label: "Development" },
    { id: "community", label: "Community" },
    { id: "achievements", label: "Achievements" },
  ];

  const newsArticles = [
    {
      id: 1,
      category: "parliament",
      featured: true,
      title: "Hon. Bataglia Champions Education Bill in Parliament",
      excerpt: "A comprehensive bill to improve educational infrastructure and teacher training across Sissala East has been presented to Parliament...",
      content: "In a passionate address to Parliament, Hon. Mohammed Issah Bataglia presented groundbreaking legislation aimed at transforming education in Sissala East. The bill proposes increased funding for school construction, teacher training programs, and student support initiatives.",
      image: "https://images.unsplash.com/photo-1541872705-1f73c6400ec9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      date: "2024-01-15",
      readTime: "4 min read",
      author: "Parliamentary Reporter",
      tags: ["Education", "Parliament", "Policy"]
    },
    {
      id: 2,
      category: "development",
      featured: false,
      title: "New Health Clinic Opens in Gwollu",
      excerpt: "Modern healthcare facility brings medical services closer to rural communities in Sissala East constituency.",
      content: "The newly constructed health clinic in Gwollu was officially commissioned, bringing quality healthcare services to over 5,000 residents in the area.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024-01-12",
      readTime: "3 min read",
      author: "Development Desk",
      tags: ["Healthcare", "Infrastructure", "Rural Development"]
    },
    {
      id: 3,
      category: "community",
      featured: false,
      title: "Youth Empowerment Program Graduates 200 Students",
      excerpt: "Skills training initiative equips young people with marketable skills and entrepreneurship knowledge.",
      content: "The latest cohort of the youth empowerment program celebrated their graduation, with participants trained in various skills including digital literacy, agriculture, and small business management.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024-01-10",
      readTime: "2 min read",
      author: "Community Correspondent",
      tags: ["Youth", "Training", "Employment"]
    },
    {
      id: 4,
      category: "development",
      featured: false,
      title: "Road Construction Project Reaches Milestone",
      excerpt: "25km of new roads connecting rural communities nears completion ahead of schedule.",
      content: "The ambitious road construction project linking five rural communities has reached 80% completion, significantly improving transportation and trade in the area.",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024-01-08",
      readTime: "3 min read",
      author: "Infrastructure Team",
      tags: ["Roads", "Transportation", "Rural Development"]
    },
    {
      id: 5,
      category: "achievements",
      featured: false,
      title: "Sissala East Receives National Recognition",
      excerpt: "Constituency honored for outstanding progress in agricultural development and poverty reduction.",
      content: "The Ministry of Agriculture recognized Sissala East as a model constituency for its innovative farming programs and significant reduction in rural poverty.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024-01-05",
      readTime: "3 min read",
      author: "Awards Desk",
      tags: ["Agriculture", "Awards", "Development"]
    },
    {
      id: 6,
      category: "parliament",
      featured: false,
      title: "Parliamentary Committee Visit to Sissala East",
      excerpt: "National development committee inspects ongoing projects and meets with local leaders.",
      content: "A high-level parliamentary committee visited various development projects across Sissala East, praising the quality of implementation and community engagement.",
      image: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024-01-03",
      readTime: "4 min read",
      author: "Political Correspondent",
      tags: ["Parliament", "Development", "Inspection"]
    }
  ];

  const filteredArticles = activeCategory === "all" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeCategory);

  const featuredArticle = filteredArticles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest News
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest developments, achievements, and initiatives from Hon. Mohammed Issah Bataglia
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
                  : "bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Article + Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article (Left - spans 2 columns) */}
          {featuredArticle && (
            <div className="lg:col-span-2">
              <article className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <span className="bg-white/20 px-2 py-1 rounded">
                        {featuredArticle.tags[0]}
                      </span>
                      <span>•</span>
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span>{formatDate(featuredArticle.date)}</span>
                    <span>•</span>
                    <span>By {featuredArticle.author}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {featuredArticle.content}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {featuredArticle.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button href={`/news/${featuredArticle.id}`} variant="secondary" className="text-sm">
                      Read Full Article
                    </Button>
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* Regular Articles (Right column) */}
          <div className="space-y-6">
            {regularArticles.slice(0, 3).map((article) => (
              <article key={article.id} className="group bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200">
                <div className="flex gap-4">
                  <div className="relative w-24 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">
                        {article.category}
                      </span>
                      <span>•</span>
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                      <Button href={`/news/${article.id}`} variant="secondary" className="text-xs px-3 py-1">
                        Read
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {/* View All News Button */}
            <div className="pt-4">
              <Button href="/news" className="w-full bg-green-600 hover:bg-green-700 text-white">
                View All News Articles
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Articles Grid */}
        {regularArticles.length > 3 && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">More News</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.slice(3).map((article) => (
                <article key={article.id} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-sm text-gray-500 mb-2">
                      {formatDate(article.date)} • {article.readTime}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                    <Button href={`/news/${article.id}`} variant="secondary" className="text-sm w-full">
                      Read Article
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}