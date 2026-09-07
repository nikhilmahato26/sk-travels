"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Compass, Menu, X, PhoneCall, MapPin, ChevronRight } from "lucide-react";
import { BUSINESS_INFO, NAV_LINKS } from "@/data/content";

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top micro-bar with location highlight */}
      <div className="bg-brand-deep text-slate-200 text-xs py-1.5 px-4 border-b border-brand-blue/30 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
            <span>{BUSINESS_INFO.address}</span>
          </div>
          <div className="flex items-center space-x-4 text-xs">
            <span className="bg-brand-blue/50 text-amber-300 px-2 py-0.5 rounded font-medium">
              Train • Flight • Four-Wheeler
            </span>
            <span className="text-slate-300">Station Road, Pupri</span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80"
            : "bg-white py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-sm border-2 border-brand-yellow/60 group-hover:scale-105 transition-transform bg-brand-deep shrink-0">
              <Image
                src={BUSINESS_INFO.logo}
                alt="Siliguri Tour and Travels Official Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xl font-extrabold tracking-tight text-brand-deep font-heading">
                  SILIGURI
                </span>
                <span className="text-xl font-extrabold tracking-tight text-brand-yellow font-heading">
                  TOUR & TRAVELS
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Pupri, Station Road
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-brand-deep hover:bg-slate-100/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => onOpenBooking()}
              className="btn-yellow px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm flex items-center space-x-2"
              id="header-book-now-btn"
            >
              <span>Book Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => onOpenBooking()}
              className="btn-yellow px-3 py-1.5 rounded-lg text-xs font-semibold"
            >
              Book Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
            <div className="p-2 mb-2 bg-amber-50 rounded-lg text-xs text-amber-900 flex items-center space-x-2 border border-amber-200">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Pupri, Near Krishna Complex, Station Road</span>
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-100 hover:text-brand-deep"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full btn-yellow py-3 rounded-xl text-center font-bold text-slate-950 flex items-center justify-center space-x-2"
              >
                <span>Book Now</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
