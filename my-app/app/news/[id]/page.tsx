"use client";

import React from "react";
import { Button } from "../../components/Button";
import Section from "../../components/Section";
import Link from "next/link";
import { notFound } from "next/navigation";

// This would ideally come from a database or CMS
const newsArticles = [
  {
    id: 1,
    slug: "education-bill-parliament",
    category: "parliament",
    title: "Hon. Bataglia Champions Education Bill in Parliament",
    excerpt: "A comprehensive bill to improve educational infrastructure and teacher training across Sissala East has been presented to Parliament.",
    content: `In a passionate address to Parliament, Hon. Mohammed Issah Bataglia presented groundbreaking legislation aimed at transforming education in Sissala East. The bill proposes increased funding for school construction, teacher training programs, and student support initiatives that will benefit over 15,000 students across the constituency.

The Education Enhancement Bill, as it has been formally titled, represents months of consultation with educators, parents, and community leaders throughout Sissala East. "Education is the cornerstone of development," Hon. Bataglia stated during his presentation. "We cannot continue to accept substandard facilities and under-resourced schools while our children's futures hang in the balance."

Key provisions of the bill include:

**Infrastructure Development**: The legislation allocates GHS 50 million over five years for the construction and renovation of primary and secondary schools across the constituency. This includes building 15 new classroom blocks, renovating 25 existing structures, and constructing modern libraries and science laboratories.

**Teacher Training and Support**: A comprehensive teacher development program will provide ongoing professional development opportunities, competitive salary supplements for teachers in rural areas, and housing allowances to attract qualified educators to underserved communities.

**Student Support Programs**: The bill establishes scholarship funds for bright but needy students, free meal programs in primary schools, and transportation support for students in remote areas who must travel long distances to reach secondary schools.

**Technology Integration**: Modern computer labs and internet connectivity will be installed in all secondary schools, ensuring students are prepared for the digital economy.

The response from fellow parliamentarians has been overwhelmingly positive, with members from both sides of the aisle praising the comprehensive nature of the proposal. The Minister of Education has indicated strong support from the executive branch, suggesting the bill has excellent prospects for passage.

"This is exactly the kind of visionary leadership we need to see from our representatives," said Dr. Amina Zakaria, Education Coordinator for the Upper West Region. "Hon. Bataglia has done his homework, consulted widely, and presented a practical roadmap for educational transformation."

The bill is expected to go through committee review over the next month, with full parliamentary debate scheduled for the following session. If passed, implementation would begin in the 2024 academic year, marking a new chapter in educational development for Sissala East.

Community leaders from across the constituency have already begun preparing for the changes, with Parent-Teacher Associations organizing to support implementation efforts and traditional authorities pledging land for new school construction.`,
    image: "https://images.unsplash.com/photo-1541872705-1f73c6400ec9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-01-15",
    readTime: "8 min read",
    author: "Parliamentary Reporter",
    tags: ["Education", "Parliament", "Policy", "Development"],
    featured: true
  },
  {
    id: 2,
    slug: "health-clinic-gwollu",
    category: "development",
    title: "New Health Clinic Opens in Gwollu",
    excerpt: "Modern healthcare facility brings medical services closer to rural communities in Sissala East constituency.",
    content: `The newly constructed health clinic in Gwollu was officially commissioned yesterday, bringing quality healthcare services to over 5,000 residents in the area. The state-of-the-art facility represents a major milestone in Hon. Mohammed Issah Bataglia's commitment to improving healthcare access across Sissala East.

The modern clinic features emergency services, maternal health care, a pharmacy, laboratory services, and consultation rooms equipped with modern medical equipment. The facility is staffed by qualified healthcare professionals, including a resident doctor, nurses, and community health officers.

**Comprehensive Health Services**: The clinic offers a full range of primary healthcare services including general consultations, maternal and child health services, immunizations, family planning, and basic emergency care. Laboratory services enable on-site diagnosis, reducing the need for patients to travel to regional hospitals for basic tests.

**Maternal Health Focus**: With a dedicated maternity ward and skilled birth attendants, the clinic addresses one of the constituency's most pressing healthcare needs. Previously, many women had to travel over 50 kilometers to access safe delivery services.

**Community Health Outreach**: The facility serves as a base for community health workers who conduct regular outreach programs in surrounding villages, providing health education, preventive care, and follow-up services.

The project, funded through the constituency development fund and supported by the Ministry of Health, cost GHS 2.8 million and took 18 months to complete. Local contractors and workers were prioritized during construction, creating employment opportunities and building local capacity.

"This clinic will save lives," said Madam Fatima Alhassan, a local resident and mother of four. "No longer will we watch our children suffer because healthcare is too far away or too expensive."

The clinic is part of a broader health improvement initiative that includes the construction of two additional health posts in remote villages and the renovation of existing facilities across the constituency.

Hon. Bataglia emphasized that healthcare is a fundamental right, not a privilege. "Every citizen of Sissala East deserves access to quality healthcare close to home. This clinic brings us one step closer to achieving that goal."

The facility will serve communities within a 30-kilometer radius, significantly reducing travel times and healthcare costs for rural families. Plans are already underway to expand services to include specialized clinics for diabetes and hypertension management.`,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-01-12",
    readTime: "6 min read",
    author: "Health Correspondent",
    tags: ["Healthcare", "Infrastructure", "Rural Development", "Community"]
  },
  {
    id: 3,
    slug: "youth-empowerment-graduation",
    category: "community",
    title: "Youth Empowerment Program Graduates 200 Students",
    excerpt: "Skills training initiative equips young people with marketable skills and entrepreneurship knowledge.",
    content: `Two hundred young people from across Sissala East celebrated their graduation from the comprehensive Youth Empowerment and Skills Development Program yesterday, marking another success in Hon. Mohammed Issah Bataglia's commitment to youth development.

The six-month intensive program equipped participants with practical skills in agriculture, digital literacy, small business management, and entrepreneurship. The initiative, which has achieved an impressive 85% job placement rate among previous graduates, represents a model for youth development across Ghana.

**Skills Training Components**: Participants received training in modern farming techniques, computer literacy, financial management, and business plan development. The curriculum was designed in consultation with local employers and market needs assessments.

**Entrepreneurship Focus**: Beyond technical skills, the program emphasized entrepreneurship, with participants developing business plans and receiving seed funding to start their own enterprises. Microfinance partnerships provide ongoing support for business development.

**Digital Literacy**: Recognizing the importance of technology in the modern economy, all participants received comprehensive computer training, including basic programming, social media marketing, and online business development.

**Agricultural Innovation**: Given the constituency's agricultural base, significant emphasis was placed on modern farming techniques, including greenhouse management, organic farming, and agro-processing.

Success stories from previous cohorts provided inspiration for new graduates. Ibrahim Yakubu, a 2023 graduate, now runs a successful agro-processing business that employs 15 people. "The program gave me the confidence and skills to turn my ideas into reality," he said.

The program's success has attracted attention from development partners, with the World Bank expressing interest in scaling the model to other constituencies. The European Union has also provided additional funding to expand capacity.

"Our young people are our greatest asset," Hon. Bataglia noted during the graduation ceremony. "When we invest in their skills and dreams, we invest in the future of Sissala East."

Graduates receive ongoing mentorship and access to a alumni network that provides continued support and business connections. The next cohort of 250 participants will begin training next month, with expanded programs in renewable energy and digital marketing.

The program has particularly focused on encouraging young women's participation, with 60% of graduates being female. Special childcare provisions and flexible scheduling have made it accessible to young mothers.`,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-01-10",
    readTime: "5 min read",
    author: "Youth Development Reporter",
    tags: ["Youth", "Training", "Employment", "Skills", "Entrepreneurship"]
  }
  // Add more articles as needed
];

interface NewsArticlePageProps {
  params: {
    id: string;
  };
}

export default function NewsArticlePage({ params }: NewsArticlePageProps) {
  const article = newsArticles.find(article => article.id === parseInt(params.id));

  if (!article) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Get related articles (same category, excluding current)
  const relatedArticles = newsArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <Section className="py-4 border-b border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <span>→</span>
          <Link href="/news" className="hover:text-green-600">News</Link>
          <span>→</span>
          <span className="text-gray-900">{article.title}</span>
        </div>
      </Section>

      {/* Article Header */}
      <Section className="py-8">
        <div className="max-w-4xl mx-auto">
          {/* Category and Meta */}
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium uppercase">
              {article.category}
            </span>
            {article.featured && (
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>{formatDate(article.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⏱️</span>
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✍️</span>
              <span>By {article.author}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Article Content */}
      <Section className="py-0">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                // Bold headings
                return (
                  <h3 key={index} className="text-xl font-bold text-gray-900 mt-8 mb-4">
                    {paragraph.replace(/\*\*/g, '')}
                  </h3>
                );
              } else if (paragraph.includes('**')) {
                // Paragraphs with bold text
                const parts = paragraph.split(/(\*\*.*?\*\*)/);
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6">
                    {parts.map((part, i) => 
                      part.startsWith('**') && part.endsWith('**') ? (
                        <strong key={i} className="font-semibold text-gray-900">
                          {part.replace(/\*\*/g, '')}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </p>
                );
              } else {
                // Regular paragraphs
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>
        </div>
      </Section>

      {/* Share Section */}
      <Section className="py-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Share this article</h3>
              <div className="flex items-center gap-3">
                <Button 
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: article.title,
                        text: article.excerpt,
                        url: window.location.href,
                      });
                    }
                  }}
                  variant="secondary" 
                  className="text-sm"
                >
                  📤 Share
                </Button>
                <Button 
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                  }}
                  variant="secondary" 
                  className="text-sm"
                >
                  🔗 Copy Link
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/news">
                <Button variant="secondary">← Back to News</Button>
              </Link>
              <Link href="/newsletter">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Subscribe for Updates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <Section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((related) => (
                <Link key={related.id} href={`/news/${related.id}`}>
                  <article className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={related.image} 
                        alt={related.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                          {related.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-sm text-gray-500 mb-2">
                        {formatDate(related.date)} • {related.readTime}
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                        {related.title}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {related.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}
    </div>
  );
}