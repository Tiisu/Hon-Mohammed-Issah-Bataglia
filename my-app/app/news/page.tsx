"use client";

import React, { useState } from "react";
import { Button } from "../components/Button";
import Section from "../components/Section";
import Link from "next/link";

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", label: "All News", count: 24 },
    { id: "parliament", label: "Parliament", count: 8 },
    { id: "development", label: "Development", count: 6 },
    { id: "community", label: "Community", count: 5 },
    { id: "achievements", label: "Achievements", count: 3 },
    { id: "press", label: "Press Releases", count: 2 },
  ];

  const allNewsArticles = [
    // Recent News
    {
      id: 1,
      category: "parliament",
      title: "Hon. Bataglia Champions Education Bill in Parliament",
      excerpt: "A comprehensive bill to improve educational infrastructure and teacher training across Sissala East has been presented to Parliament.",
      content: "In a passionate address to Parliament, Hon. Mohammed Issah Bataglia presented groundbreaking legislation aimed at transforming education in Sissala East. The bill proposes increased funding for school construction, teacher training programs, and student support initiatives that will benefit over 15,000 students across the constituency.",
      image: "/honinparliament.jpg",
      date: "2024-01-15",
      readTime: "4 min read",
      author: "Parliamentary Reporter",
      tags: ["Education", "Parliament", "Policy"],
      featured: true
    },
    {
      id: 2,
      category: "development",
      title: "New Health Clinic Opens in Gwollu",
      excerpt: "Modern healthcare facility brings medical services closer to rural communities in Sissala East constituency.",
      content: "The newly constructed health clinic in Gwollu was officially commissioned, bringing quality healthcare services to over 5,000 residents in the area. The facility features modern equipment, emergency services, and maternal health care.",
      image: "/honhealthcare.jpg",
      date: "2024-01-12",
      readTime: "3 min read",
      author: "Development Desk",
      tags: ["Healthcare", "Infrastructure", "Rural Development"]
    },
    {
      id: 3,
      category: "community",
      title: "Youth Empowerment Program Graduates 200 Students",
      excerpt: "Skills training initiative equips young people with marketable skills and entrepreneurship knowledge.",
      content: "The latest cohort of the youth empowerment program celebrated their graduation, with participants trained in various skills including digital literacy, agriculture, and small business management. The program has a 85% job placement rate.",
      image: "/honyouthdev.jpg",
      date: "2024-01-10",
      readTime: "2 min read",
      author: "Community Correspondent",
      tags: ["Youth", "Training", "Employment"]
    },
    {
      id: 4,
      category: "development",
      title: "Road Construction Project Reaches Milestone",
      excerpt: "25km of new roads connecting rural communities nears completion ahead of schedule.",
      content: "The ambitious road construction project linking five rural communities has reached 80% completion, significantly improving transportation and trade in the area. The project is expected to boost local economic activity by 40%.",
      image: "/honinfac.jpg",
      date: "2024-01-08",
      readTime: "3 min read",
      author: "Infrastructure Team",
      tags: ["Roads", "Transportation", "Rural Development"]
    },
    {
      id: 5,
      category: "achievements",
      title: "Sissala East Receives National Recognition",
      excerpt: "Constituency honored for outstanding progress in agricultural development and poverty reduction.",
      content: "The Ministry of Agriculture recognized Sissala East as a model constituency for its innovative farming programs and significant reduction in rural poverty. The constituency saw a 30% increase in agricultural productivity.",
      image: "/campaignpic.jpg",
      date: "2024-01-05",
      readTime: "3 min read",
      author: "Awards Desk",
      tags: ["Agriculture", "Awards", "Development"]
    },
    {
      id: 6,
      category: "parliament",
      title: "Parliamentary Committee Visit to Sissala East",
      excerpt: "National development committee inspects ongoing projects and meets with local leaders.",
      content: "A high-level parliamentary committee visited various development projects across Sissala East, praising the quality of implementation and community engagement. The visit resulted in additional funding approval.",
      image: "/honwithcommemebrs.jpg",
      date: "2024-01-03",
      readTime: "4 min read",
      author: "Political Correspondent",
      tags: ["Parliament", "Development", "Inspection"]
    },
    {
      id: 7,
      category: "community",
      title: "Women's Cooperative Receives Equipment Support",
      excerpt: "Local women's groups benefit from new agricultural processing equipment and training.",
      content: "Women's cooperatives across Sissala East received modern agricultural processing equipment worth GHS 500,000, enabling them to add value to their produce and increase income by an average of 60%.",
      image: "/honwithcommemebrs.jpg",
      date: "2024-01-02",
      readTime: "3 min read",
      author: "Women's Development Reporter",
      tags: ["Women", "Agriculture", "Equipment"]
    },
    {
      id: 8,
      category: "development",
      title: "Solar Power Project Brings Electricity to 5 Villages",
      excerpt: "Renewable energy initiative provides clean electricity access to remote communities.",
      content: "The solar power project has successfully brought reliable electricity to five remote villages in Sissala East, benefiting over 3,000 residents. The project includes solar panels, battery storage, and distribution infrastructure.",
      image: "/hoonnin school.jpg",
      date: "2023-12-28",
      readTime: "4 min read",
      author: "Energy Correspondent",
      tags: ["Solar", "Energy", "Rural Electrification"]
    }
  ];

  const filteredArticles = allNewsArticles.filter(article => {
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    const matchesSearch = searchTerm === "" || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-white py-8">
      {/* Hero Section */}
      <Section className="text-center bg-gradient-to-b from-green-50 to-white py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            News & Updates
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Stay informed about Hon. Mohammed Issah Bataglia's work representing Sissala East
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search news articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
              <svg
                className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </Section>

      {/* Category Filter */}
      <Section className="bg-white py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Results Info */}
        <div className="mb-8">
          <p className="text-gray-600">
            {searchTerm ? `Found ${filteredArticles.length} articles matching "${searchTerm}"` : `Showing ${filteredArticles.length} articles`}
          </p>
        </div>

        {/* News Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
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
                {article.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>{formatDate(article.date)}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                  <span>•</span>
                  <span>By {article.author}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/news/${article.id}`}>
                  <Button variant="secondary" className="w-full">
                    Read Full Article
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or category filter.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("all");
              }}
              variant="secondary"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More (if needed for future expansion) */}
        {filteredArticles.length >= 8 && (
          <div className="text-center mt-12">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              Load More Articles
            </Button>
          </div>
        )}
      </Section>
    </div>
  );
}