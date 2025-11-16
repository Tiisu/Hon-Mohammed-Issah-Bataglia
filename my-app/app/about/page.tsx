"use client";

import Section from "../components/Section";
import { Button } from "../components/Button";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

// Values Carousel Section Component
function ValuesCarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const values = [
    {
      title: "Transparency",
      subtitle: "Open Leadership",
      description: "Every decision, every action, every allocation - all transparent and accountable to the people of Sissala East.",
      details: "I believe in open communication where constituents are informed about every decision and its impact. From parliamentary voting records to development fund allocations, transparency builds trust and ensures accountability.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      bgImage: "/honinparliament.jpg",
      commitments: ["Monthly constituency reports", "Open budget discussions", "Regular town halls", "Accessible office hours"]
    },
    {
      title: "Unity",
      subtitle: "Bringing People Together", 
      description: "Building bridges across party lines, ethnic groups, and communities to achieve common goals.",
      details: "True development happens when we work together. I focus on bringing people together across party lines, ethnic groups, and communities to work toward common goals and shared prosperity for all of Sissala East.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      bgImage: "/honwithcommemebrs.jpg",
      commitments: ["Cross-party collaboration", "Inclusive development", "Community partnerships", "Traditional leader engagement"]
    },
    {
      title: "Progress",
      subtitle: "Sustainable Development",
      description: "Driving meaningful change through education, infrastructure, healthcare, and economic opportunities.",
      details: "Real progress means sustainable development that benefits everyone. Through strategic investments in education, infrastructure, healthcare, and economic opportunities, we build a stronger future for Sissala East.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bgImage: "/honinfac.jpg",
      commitments: ["Quality education access", "Modern infrastructure", "Healthcare expansion", "Job creation initiatives"]
    },
    {
      title: "Innovation",
      subtitle: "Forward-Thinking Solutions",
      description: "Embracing modern approaches to solve traditional challenges facing rural constituencies.",
      details: "Innovation in governance means finding creative solutions to age-old problems. By embracing technology, modern farming techniques, and innovative service delivery, we prepare Sissala East for the future.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      bgImage: "/honyouthdev.jpg",
      commitments: ["Digital literacy programs", "Modern farming techniques", "Tech-enabled services", "Youth innovation hubs"]
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % values.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, [values.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % values.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + values.length) % values.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentValue = values[currentSlide];

  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out"
        style={{
          backgroundImage: `url(${currentValue.bgImage})`,
          transform: `scale(${1.1})` // Slight zoom for parallax effect
        }}
      />
      <div className="absolute inset-0 bg-gray-900/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Values & Vision
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The principles that guide my service to the people of Sissala East
          </p>
        </div>

        {/* Main Slide Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center">
                {currentValue.icon}
              </div>
            </div>
            
            <div className="text-green-400 text-sm font-medium mb-2 uppercase tracking-wide">
              {currentValue.subtitle}
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {currentValue.title}
            </h3>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              {currentValue.description}
            </p>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              {currentValue.details}
            </p>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <button
                onClick={prevSlide}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur border border-white/20"
                aria-label="Previous value"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex gap-2">
                {values.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? 'bg-green-400 w-8' : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur border border-white/20"
                aria-label="Next value"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Content - Commitments */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
            <h4 className="text-xl font-semibold mb-6 text-center">My Commitments</h4>
            <div className="space-y-4">
              {currentValue.commitments.map((commitment, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.5s ease-out forwards'
                  }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                  <span className="text-gray-200">{commitment}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/20 text-center">
              <div className="text-sm text-gray-400 mb-2">Slide {currentSlide + 1} of {values.length}</div>
              <div className="text-xs text-gray-500">Auto-advancing every 6 seconds</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

// FAQ Section Component
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "Background & Experience",
      question: "What is your educational background and experience?",
      answer: "I hold a Bachelor's degree in Political Science and Public Administration from the University of Ghana, graduating with honors. My practical experience includes serving as District Chief Executive and Community Development Officer, which has equipped me with both theoretical knowledge and hands-on experience in governance, public administration, and grassroots development."
    },
    {
      category: "Constituency Development",
      question: "What are your top priorities for Sissala East's development?",
      answer: "My top three priorities are: 1) Education - improving school infrastructure and ensuring quality education for all children; 2) Healthcare - expanding access to quality healthcare services in rural communities; and 3) Infrastructure - building roads, improving water systems, and ensuring reliable electricity supply to boost economic opportunities."
    },
    {
      category: "Community Engagement",
      question: "How can constituents reach you or schedule meetings?",
      answer: "I maintain an open-door policy with regular office hours every Tuesday and Thursday from 9 AM to 4 PM at my constituency office in Tumu. You can also reach me through my official phone line, email, or social media channels. I hold monthly town hall meetings in different communities across the constituency."
    },
    {
      category: "Development Projects",
      question: "What major projects have you completed since taking office?",
      answer: "Since 2021, I have successfully completed over 50 development projects including the construction of 3 new health clinics, rehabilitation of 25km of rural roads, building 15 classroom blocks, establishing 4 boreholes for clean water access, and launching youth empowerment programs that have trained over 800 young people."
    },
    {
      category: "Future Vision",
      question: "What are your plans for the next term if re-elected?",
      answer: "My vision for the next term includes: completing ongoing education infrastructure projects and starting 10 new schools; establishing a district hospital to improve healthcare access; completing the rural electrification project; launching a comprehensive agricultural modernization program; and creating a youth innovation hub for technology and entrepreneurship."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about my background, work, and vision for Sissala East
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
              >
                <div className="flex-1">
                  <div className="text-sm text-green-600 font-medium mb-1">
                    {faq.category}
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </div>
                </div>
                <div className="ml-4">
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
{openIndex === index && (
                <div className="px-6 pb-4 border-t border-gray-100">
                  <div className="pt-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-green-50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Don't see your question answered?
          </h3>
          <p className="text-gray-600 mb-6">
            I'm always happy to address any concerns or questions from my constituents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" className="bg-green-600 hover:bg-green-700 text-white">
              Contact Me Directly
            </Button>
            <Button href="/volunteer" variant="secondary">
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Journey Section Component
function JourneySection() {
  const itemRefs = [useRef<HTMLDivElement | null>(null), useRef<HTMLDivElement | null>(null), useRef<HTMLDivElement | null>(null), useRef<HTMLDivElement | null>(null), useRef<HTMLDivElement | null>(null)];
  const [visibleCount, setVisibleCount] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idxAttr = entry.target.getAttribute("data-idx");
          const idx = idxAttr ? parseInt(idxAttr, 10) : NaN;
          if (!isNaN(idx) && entry.isIntersecting) {
            setVisibleCount((prev) => Math.max(prev, idx + 1));
            setActiveIndex(idx);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -40% 0px", threshold: 0.6 }
    );

    itemRefs.forEach((ref) => ref.current && observer.observe(ref.current));
    return () => observer.disconnect();
  }, []);

  const journeySteps = [
    {
      period: "Early Life & Foundation",
      year: "1980s-2000s",
      title: "Rural Roots & Academic Excellence",
      desc: "Born into a farming family in Sissala East, walking miles to school daily and experiencing rural challenges firsthand.",
      details: "Growing up in a farming family, Hon. Bataglia experienced firsthand the challenges facing rural communities - limited access to quality education, healthcare, and economic opportunities. Despite financial constraints, he excelled academically, earning a scholarship to pursue higher education. These early experiences shaped his worldview and instilled in him a deep commitment to community development.",
      img: "/honyouthdev.jpg",
      highlights: ["Scholarship recipient", "Top academic performer", "Community volunteer"]
    },
    {
      period: "Higher Education",
      year: "2000-2004", 
      title: "University of Ghana Excellence",
      desc: "Bachelor's degree in Political Science and Public Administration, graduating with honors and active in student leadership.",
      details: "At the University of Ghana, Hon. Bataglia pursued Political Science and Public Administration, graduating with honors. His academic journey was marked by active participation in student leadership and community service initiatives. He served as class representative and was involved in various student organizations focused on rural development and social justice.",
      img: "/honinparliament.jpg",
      highlights: ["Graduated with honors", "Student leadership roles", "Community service awards"]
    },
    {
      period: "Professional Development", 
      year: "2004-2015",
      title: "Local Government & Community Service",
      desc: "Rising through local government ranks as Community Development Officer and Local Government Administrator.",
      details: "Beginning his career in local government, Hon. Bataglia served as a Community Development Officer, directly working with rural communities to implement development projects. His exceptional performance led to promotions, including roles as Youth Development Coordinator and Local Government Administrator, where he gained invaluable experience in public administration and grassroots development.",
      img: "/honwithcommemebrs.jpg",
      highlights: ["Community Development Officer", "Youth Development Coordinator", "Local Government Administrator"]
    },
    {
      period: "Executive Leadership",
      year: "2016-2020",
      title: "District Chief Executive",
      desc: "Appointed as District Chief Executive, overseeing major development projects and community transformation initiatives.",
      details: "As District Chief Executive, Hon. Bataglia demonstrated exceptional leadership in coordinating development projects across the district. He spearheaded initiatives in education, healthcare, and infrastructure, while fostering unity among diverse communities. His tenure was marked by significant improvements in rural road networks, school construction, and healthcare facility upgrades.",
      img: "/honinfac.jpg",
      highlights: ["Infrastructure development", "Community unity initiatives", "Educational improvements"]
    },
    {
      period: "Parliamentary Service",
      year: "2021-Present",
      title: "Member of Parliament",
      desc: "Elected to represent Sissala East in Parliament, advocating for constituency development and national policy reform.",
      details: "Elected as Member of Parliament for Sissala East, Hon. Bataglia has brought his grassroots experience to the national level. He actively participates in parliamentary debates, chairs important committees, and has successfully advocated for policies benefiting rural constituencies. His parliamentary work focuses on education reform, healthcare access, agricultural development, and youth empowerment.",
      img: "/honhealthcare.jpg",
      highlights: ["Parliamentary committee roles", "Policy advocacy", "Constituency representation"]
    }
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
                My Journey to Public Service
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-8">
                From humble beginnings to representing the people of Sissala East in Parliament - a journey guided by service, dedication, and unwavering commitment to community development.
              </p>
              
              {/* Journey Timeline List */}
              <div className="space-y-4">
                {journeySteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border-l-4 transition-all duration-300 ${
                      activeIndex === index 
                        ? 'border-green-600 bg-green-50' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className={`text-sm font-medium mb-1 ${
                      activeIndex === index ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      {step.year}
                    </div>
                    <div className={`font-semibold mb-1 ${
                      activeIndex === index ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {step.period}
                    </div>
                    <div className={`text-sm ${
                      activeIndex === index ? 'text-gray-700' : 'text-gray-600'
                    }`}>
                      {step.title}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-sm text-gray-500">
                Scroll to explore each phase of the journey →
              </div>
            </div>
          </div>

          {/* Revealing Right */}
          <div className="lg:col-span-3 space-y-8">
            {journeySteps.map((step, i) => (
              <div
                key={i}
                data-idx={i}
                ref={itemRefs[i]}
                style={styleFor(i)}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative w-full h-56 md:h-72 lg:h-80 overflow-hidden bg-gray-100">
                  <img src={step.img} alt={step.title} className="h-full w-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {step.year}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="text-green-600 text-sm font-medium mb-2 uppercase tracking-wide">
                    {step.period}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                    {step.details}
                  </p>
                  
                  {/* Key Highlights */}
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-medium text-gray-900 mb-3">Key Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {step.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner with Image */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/honbataglia.png)',
            backgroundPosition: 'center 20%'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="mx-auto max-w-7xl px-4 md:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
              {/* Left Content */}
              <div className="text-white">
                <div className="inline-flex items-center rounded-full bg-green-600/20 backdrop-blur px-4 py-2 text-sm font-medium text-green-300 mb-4">
                  <span className="mr-2 h-2 w-2 rounded-full bg-green-400"></span>
                  Member of Parliament • NDC
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Hon. Mohammed Issah
                  <span className="text-green-400 block">Bataglia</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-200 mb-6 font-medium">
                  "Development starts with the people"
                </p>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
                  From walking miles to school as a child to representing over 100,000 constituents in Parliament - committed to transforming Sissala East through inclusive development.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/projects" className="bg-green-600 hover:bg-green-700 text-white">
                    See My Impact
                  </Button>
                  <Button 
                    href="/contact" 
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur"
                  >
                    Meet With Me
                  </Button>
                </div>
              </div>

              {/* Right Stats */}
              <div className="lg:justify-self-end">
                <div className="grid grid-cols-2 gap-6 max-w-sm">
                  <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
                    <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">3+</div>
                    <div className="text-sm text-gray-300">Years in Parliament</div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
                    <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">50+</div>
                    <div className="text-sm text-gray-300">Projects Completed</div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
                    <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">100k+</div>
                    <div className="text-sm text-gray-300">Constituents Served</div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
                    <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">25km</div>
                    <div className="text-sm text-gray-300">Roads Built</div>
                  </div>
                </div>
                
                {/* Quick Facts */}
                <div className="mt-6 bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10">
                  <h3 className="text-white font-semibold mb-3">Quick Facts</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span>Born and raised in Sissala East</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span>University of Ghana graduate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span>Former District Chief Executive</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span>Farmer and community leader</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Section - Sticky Left + Reveal Right */}
      <JourneySection />

      {/* Values & Vision Carousel */}
      <ValuesCarouselSection />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}