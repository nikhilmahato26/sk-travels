"use client";

import React from "react";
import Image from "next/image";
import { Compass, MapPin, ArrowUp, Train, Plane, Car, ShieldCheck, Palmtree, Moon, FileText, Banknote } from "lucide-react";
import { BUSINESS_INFO, NAV_LINKS, SERVICES } from "@/data/content";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 pb-12 border-t-4 border-brand-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Address Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-amber-400 bg-brand-deep shrink-0 shadow-md">
                <Image
                  src={BUSINESS_INFO.logo}
                  alt="Siliguri Tour and Travels Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-2xl font-bold tracking-tight text-white font-heading">
                    SK
                  </span>
                  <span className="text-2xl font-bold tracking-tight text-brand-yellow font-heading">
                    TOUR & TRAVEL
                  </span>
                </div>
                <p className="text-xs text-slate-400 uppercase tracking-wider">
                  Explore • Dream • Discover
                </p>
              </div>
            </div>

            <p className="text-amber-400 font-semibold text-sm">
              Train & Flight Tickets | Tour Packages | Haj & Umrah | Four-Wheelers
            </p>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Reliable travel and ticket booking assistance for train reservations, domestic flight bookings, holiday tour packages, and convenient four-wheeler passenger travel.
            </p>

            <div className="flex items-start space-x-2.5 text-sm text-slate-300 pt-2">
              <MapPin className="w-4 h-4 text-brand-yellow shrink-0 mt-1" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-white font-heading uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-brand-yellow transition-colors flex items-center space-x-1.5"
                  >
                    <span>•</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services List Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-base font-bold text-white font-heading uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center space-x-2">
                <Train className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>Train Ticket Booking Assistance</span>
              </li>
              <li className="flex items-center space-x-2">
                <Plane className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>Flight Ticket Booking Assistance</span>
              </li>
              <li className="flex items-center space-x-2">
                <Palmtree className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>Custom & Group Tour Packages</span>
              </li>
              <li className="flex items-center space-x-2">
                <Car className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>Four-Wheeler Services (Sedan, SUV, etc.)</span>
              </li>
              <li className="flex items-center space-x-2">
                <Moon className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>Haj & Umrah Packages</span>
              </li>
              <li className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>Visa Documentation & Processing</span>
              </li>
              <li className="flex items-center space-x-2">
                <Banknote className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>Foreign Currency & Money Exchange</span>
              </li>
            </ul>

            <div className="pt-3">
              <div className="p-3 bg-brand-deep/60 rounded-xl border border-slate-800 text-xs text-slate-400 flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>Dedicated customer assistance at Station Road</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Station Road, Pupri, Bihar, India.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-slate-400 hover:text-brand-yellow transition-colors font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
