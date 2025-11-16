"use client";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "../config/site";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="rounded-2xl bg-white/95 backdrop-blur border border-gray-200/50 shadow-lg px-6 py-3">
          <div className="flex items-center justify-between gap-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 font-semibold text-gray-900">
              <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-brand/20">
                <img 
                  src="/honbataglia.png" 
                  alt="Hon. Mohammed Issah Bataglia"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-lg">{siteConfig.candidateName}</div>
                <div className="text-xs text-brand font-medium">{siteConfig.constituency}</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 md:flex">
              {siteConfig.nav.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className="rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-brand/10 hover:text-brand"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-3">
              <Link 
                href="/volunteer" 
                className="hidden sm:inline-flex items-center rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600 hover:shadow-md"
              >
                Join Campaign
              </Link>
              
              {/* Mobile menu button */}
              <button 
                aria-label="Toggle menu" 
                className="md:hidden rounded-full p-2 hover:bg-gray-100 transition-colors" 
                onClick={() => setOpen((v) => !v)}
              >
                <div className="h-5 w-5 relative">
                  <span className={`absolute block h-0.5 w-5 bg-gray-700 transition-all duration-200 ${open ? 'top-2 rotate-45' : 'top-1'}`}></span>
                  <span className={`absolute top-2 block h-0.5 w-5 bg-gray-700 transition-all duration-200 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`absolute block h-0.5 w-5 bg-gray-700 transition-all duration-200 ${open ? 'top-2 -rotate-45' : 'top-3'}`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {open && (
            <div className="mt-4 pt-4 border-t border-gray-200 md:hidden">
              <div className="grid gap-1">
                {siteConfig.nav.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className="rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-brand/10 hover:text-brand" 
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link 
                  href="/volunteer" 
                  className="mt-2 rounded-xl bg-brand px-4 py-3 text-center text-sm font-semibold text-white hover:bg-brand-600" 
                  onClick={() => setOpen(false)}
                >
                  Join Campaign
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}