import { Button } from "./Button";
import { siteConfig } from "../config/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      {/* Geometric line elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" fill="none">
            {/* Main diagonal lines */}
            <line x1="0" y1="0" x2="300" y2="300" stroke="rgba(34, 139, 34, 0.1)" strokeWidth="2" className="animate-pulse" />
            <line x1="100" y1="0" x2="400" y2="300" stroke="rgba(34, 139, 34, 0.15)" strokeWidth="1" className="animate-pulse delay-1000" />
            <line x1="700" y1="0" x2="1000" y2="300" stroke="rgba(220, 38, 38, 0.1)" strokeWidth="2" className="animate-pulse delay-500" />
            <line x1="800" y1="100" x2="1000" y2="300" stroke="rgba(220, 38, 38, 0.08)" strokeWidth="1" className="animate-pulse delay-1500" />
            
            {/* Connecting horizontal lines */}
            <line x1="0" y1="200" x2="200" y2="200" stroke="rgba(34, 139, 34, 0.12)" strokeWidth="1" className="animate-expandWidth delay-2000" />
            <line x1="300" y1="150" x2="500" y2="150" stroke="rgba(255, 193, 7, 0.15)" strokeWidth="2" className="animate-expandWidth delay-2500" />
            <line x1="600" y1="250" x2="800" y2="250" stroke="rgba(34, 139, 34, 0.1)" strokeWidth="1" className="animate-expandWidth delay-3000" />
            
            {/* Bottom accent lines */}
            <line x1="0" y1="800" x2="250" y2="550" stroke="rgba(220, 38, 38, 0.12)" strokeWidth="2" className="animate-pulse delay-1000" />
            <line x1="750" y1="1000" x2="1000" y2="750" stroke="rgba(34, 139, 34, 0.15)" strokeWidth="2" className="animate-pulse delay-2000" />
          </svg>
        </div>

        {/* Floating geometric shapes with lines - simplified for mobile */}
        <div className="hidden sm:block absolute top-20 left-20 transform rotate-12 animate-float delay-1000">
          <div className="relative">
            <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-brand/20 rotate-45"></div>
            <div className="absolute -top-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-brand/30 rotate-45"></div>
          </div>
        </div>
        
        <div className="hidden sm:block absolute top-1/3 right-16 transform -rotate-12 animate-float delay-2000">
          <div className="relative">
            <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-ndc-red/20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-ndc-red/40"></div>
          </div>
        </div>

        <div className="hidden md:block absolute bottom-32 left-1/4 transform rotate-45 animate-float delay-3000">
          <div className="w-6 h-16 sm:w-8 sm:h-20 border-l-2 border-brand/15"></div>
        </div>

        <div className="hidden md:block absolute bottom-1/4 right-1/3 transform -rotate-30 animate-float delay-4000">
          <div className="relative">
            <div className="w-16 h-1 sm:w-24 sm:h-1 bg-gradient-to-r from-brand/20 to-transparent"></div>
            <div className="w-1 h-8 sm:h-12 bg-gradient-to-b from-brand/20 to-transparent absolute -top-4 sm:-top-6 left-4 sm:left-6"></div>
          </div>
        </div>
      </div>

      {/* Background pattern with geometric elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-white to-ndc-red/5"></div>
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(34, 139, 34, 0.08) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="relative mx-auto max-w-7xl px-2 sm:px-4 py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left relative w-full max-w-full overflow-hidden px-1 sm:px-0">
            {/* Decorative geometric lines around content - hidden on mobile to prevent overflow */}
            <div className="hidden sm:block absolute -top-8 -left-8 w-16 h-16 border-l-2 border-t-2 border-brand/30 animate-pulse"></div>
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-16 h-16 border-r-2 border-b-2 border-ndc-red/30 animate-pulse delay-1000"></div>
            
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full bg-brand/10 px-4 py-2 text-sm font-medium text-brand animate-fadeInUp delay-300">
                <span className="mr-2 h-2 w-2 rounded-full bg-brand animate-pulse"></span>
                {siteConfig.party}
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-gray-900 relative">
                <span className="block animate-fadeInUp delay-500">Hon. Mohammed</span>
                <span className="block text-brand animate-fadeInUp delay-700 hover:scale-105 transition-transform duration-300 cursor-default">Issah Bataglia</span>
                {/* Accent line under name - responsive with overflow protection */}
                <div className="absolute -bottom-2 sm:-bottom-4 left-0 w-16 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-brand to-ndc-red animate-expandWidth delay-1000 max-w-full"></div>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 animate-fadeInUp delay-1000">
                {siteConfig.role} for <span className="font-semibold text-brand hover:text-brand-600 transition-colors duration-300">{siteConfig.constituency}</span>
              </p>
              
              <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0 animate-fadeInUp delay-1200">
                {siteConfig.slogan}
              </p>
            </div>

            <div className="w-full">
              <div className="flex flex-col gap-2 sm:gap-3 sm:flex-row sm:justify-center lg:justify-start animate-fadeInUp delay-1500 max-w-full">
                <Button href="/volunteer" className="bg-brand hover:bg-brand-600 text-white text-xs sm:text-sm transition-all duration-300 hover:shadow-lg w-full sm:w-auto sm:flex-1 sm:max-w-[140px] md:max-w-none">
                  <span className="sm:hidden">Join</span>
                  <span className="hidden sm:inline">Join Campaign</span>
                </Button>
                <Button href="/about" variant="secondary" className="border-brand text-brand hover:bg-brand/10 text-xs sm:text-sm transition-all duration-300 hover:shadow-md w-full sm:w-auto sm:flex-1 sm:max-w-[140px] md:max-w-none">
                  <span className="sm:hidden">More</span>
                  <span className="hidden sm:inline">Learn More</span>
                </Button>
              </div>
            </div>

            {/* Quick stats with geometric accents */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6 pt-6 sm:pt-8 border-t border-gray-200 animate-fadeInUp delay-1700 relative overflow-hidden">
              {/* Geometric accent lines for stats - hidden on mobile */}
              <div className="hidden sm:block absolute -top-4 left-4 sm:left-8 w-6 sm:w-8 h-1 bg-brand/30"></div>
              <div className="hidden sm:block absolute -top-4 right-4 sm:right-8 w-6 sm:w-8 h-1 bg-ndc-red/30"></div>
              
              <div className="text-center group cursor-default relative">
                <div className="hidden sm:block absolute -top-2 -left-2 w-4 h-4 border border-brand/20 rotate-45 animate-pulse"></div>
                <div className="text-xl sm:text-2xl font-bold text-brand transition-all duration-300 group-hover:scale-110 group-hover:text-brand-600">2024</div>
                <div className="text-xs sm:text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800">Election Year</div>
              </div>
              <div className="text-center group cursor-default relative">
                <div className="hidden sm:block absolute -top-2 -right-2 w-4 h-4 border border-yellow-400/30 rotate-45 animate-pulse delay-500"></div>
                <div className="text-xl sm:text-2xl font-bold text-brand transition-all duration-300 group-hover:scale-110 group-hover:text-brand-600">NDC</div>
                <div className="text-xs sm:text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800">Proven Leadership</div>
              </div>
              <div className="text-center group cursor-default relative">
                <div className="hidden sm:block absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 border border-ndc-red/20 rotate-45 animate-pulse delay-1000"></div>
                <div className="text-xl sm:text-2xl font-bold text-brand transition-all duration-300 group-hover:scale-110 group-hover:text-brand-600">Unity</div>
                <div className="text-xs sm:text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800">Progress Together</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fadeInUp delay-1000">
            <div className="relative mx-auto max-w-xs sm:max-w-md lg:max-w-none">
              {/* Geometric line frame around image - simplified for mobile */}
              <div className="absolute -inset-4 sm:-inset-8 border-2 border-transparent">
                <div className="hidden sm:block absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-l-2 border-t-2 border-brand/40 animate-pulse"></div>
                <div className="hidden sm:block absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-r-2 border-t-2 border-ndc-red/40 animate-pulse delay-500"></div>
                <div className="hidden sm:block absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-l-2 border-b-2 border-yellow-400/40 animate-pulse delay-1000"></div>
                <div className="hidden sm:block absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-r-2 border-b-2 border-brand/40 animate-pulse delay-1500"></div>
              </div>

              {/* Connecting lines - hidden on mobile */}
              <div className="hidden sm:block absolute -top-4 left-1/4 w-1/2 h-1 bg-gradient-to-r from-brand/30 via-transparent to-ndc-red/30 animate-expandWidth delay-2000"></div>
              <div className="hidden sm:block absolute -bottom-4 left-1/4 w-1/2 h-1 bg-gradient-to-r from-ndc-red/30 via-transparent to-brand/30 animate-expandWidth delay-2500"></div>
              <div className="hidden sm:block absolute -left-4 top-1/4 w-1 h-1/2 bg-gradient-to-b from-brand/30 via-transparent to-yellow-400/30 animate-expandWidth delay-3000"></div>
              <div className="hidden sm:block absolute -right-4 top-1/4 w-1 h-1/2 bg-gradient-to-b from-yellow-400/30 via-transparent to-brand/30 animate-expandWidth delay-3500"></div>

              {/* Animated decorative elements - simplified for mobile */}
              <div className="hidden sm:block absolute -top-4 -right-4 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-brand/20 blur-xl animate-pulse delay-2000"></div>
              <div className="hidden sm:block absolute -bottom-4 -left-4 h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-ndc-red/20 blur-xl animate-pulse delay-3000"></div>
              
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 p-2 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-3xl group">
                <div className="overflow-hidden rounded-2xl bg-white relative">
                  {/* Image overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="/honbataglia.png" 
                    alt={`${siteConfig.candidateName} - ${siteConfig.role}`}
                    className="h-full w-full object-contain aspect-[3/4] transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Floating badge with geometric accent - mobile optimized */}
              <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border-2 border-brand/20 animate-bounce delay-2000 hover:bg-brand hover:text-white transition-all duration-300 cursor-default relative" style={{ animationDuration: '2s' }}>
                <div className="hidden sm:block absolute -top-2 -left-2 w-4 h-4 border border-brand/30 rotate-45"></div>
                <div className="hidden sm:block absolute -top-2 -right-2 w-4 h-4 border border-ndc-red/30 rotate-45"></div>
                <p className="text-xs sm:text-sm font-semibold text-gray-900 transition-colors duration-300">For Sissala East</p>
              </div>

              {/* Additional floating geometric elements - hidden on mobile */}
              <div className="hidden sm:block absolute top-8 -left-4 text-brand/30 animate-float delay-1000">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                </svg>
              </div>
              <div className="hidden sm:block absolute bottom-12 -right-4 text-ndc-red/30 animate-float delay-2000">
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="m8 16 2-2m6-6 2-2"></path>
                  <path d="m8 8 2 2m6 6 2 2"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}