import { siteConfig } from "../config/site";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { label: "About", href: "/about" },
    { label: "Parliamentary Work", href: "/agenda" },
    { label: "Development Projects", href: "/projects" },
    { label: "News & Updates", href: "/news" },
    { label: "Photo Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const priorities = [
    { label: "Education & Youth", href: "/projects#education" },
    { label: "Healthcare Access", href: "/projects#healthcare" },
    { label: "Infrastructure", href: "/projects#infrastructure" },
    { label: "Agriculture Support", href: "/projects#agriculture" },
  ];

  const involvement = [
    { label: "Volunteer", href: "/volunteer" },
    { label: "Donate", href: "/donate" },
    { label: "Town Hall Meetings", href: "/contact#meetings" },
    { label: "Community Events", href: "/gallery#community" },
  ];

  const socialLinks = [
    { 
      name: "Facebook", 
      href: "https://facebook.com/honbataglia", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: "Twitter", 
      href: "https://twitter.com/honbataglia", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    { 
      name: "Instagram", 
      href: "https://instagram.com/honbataglia", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297l-.348.348-.348-.348c-.807-.849-1.297-1.999-1.297-3.296 0-2.578 2.089-4.667 4.667-4.667s4.667 2.089 4.667 4.667c0 1.297-.49 2.447-1.297 3.296l-.348.348-.348-.348c-.878.807-2.029 1.297-3.326 1.297z"/>
        </svg>
      )
    },
    { 
      name: "YouTube", 
      href: "https://youtube.com/@honbataglia", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-green-500/30">
                  <img 
                    src="/honbataglia.png" 
                    alt="Hon. Mohammed Issah Bataglia"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{siteConfig.candidateName}</h3>
                  <p className="text-green-400 text-sm font-medium">{siteConfig.constituency}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Dedicated to serving the people of Sissala East with integrity, transparency, and unwavering commitment to development and progress.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="inline-flex h-2 w-2 rounded-full bg-green-400"></span>
                <span>{siteConfig.party} • {siteConfig.role}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Priorities */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Key Priorities</h4>
            <ul className="space-y-2">
              {priorities.map((priority) => (
                <li key={priority.href}>
                  <Link 
                    href={priority.href} 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {priority.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Get Involved</h4>
            <ul className="space-y-2 mb-6">
              {involvement.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-2">
              <h5 className="font-medium text-white text-sm">Contact</h5>
              <div className="space-y-1 text-sm text-gray-300">
                <p>📧 info@honbataglia.com</p>
                <p>📱 +233 XX XXX XXXX</p>
                <p>📍 Tumu, Sissala East</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400 mr-2">Follow:</span>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                aria-label={`Follow on ${social.name}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-300">Stay updated:</span>
            <Link 
              href="/newsletter" 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © {new Date().getFullYear()} {siteConfig.candidateName}. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
              <span>•</span>
              <span>Authorized by {siteConfig.party}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}