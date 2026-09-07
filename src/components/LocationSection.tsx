"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Phone, Check, Copy, ExternalLink } from "lucide-react";
import { BUSINESS_INFO } from "@/data/content";

interface LocationSectionProps {
  onOpenBooking: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenBooking }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    BUSINESS_INFO.googleMapsQuery
  )}`;

  return (
    <section id="location" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-brand-royal" />
            <span>Our Physical Office</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep font-heading tracking-tight">
            Visit Us
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Conveniently located on Station Road, Near Krishna Complex in Pupri, Bihar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address & Direct CTA Card */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-soft">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-deep flex items-center justify-center text-brand-yellow shadow-md">
                <MapPin className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-100 px-2.5 py-1 rounded-md">
                  Station Road Hub
                </span>
                <h3 className="text-2xl font-bold text-brand-deep font-heading mt-2">
                  Siliguri Tour and Travels Pupri
                </h3>
                <p className="text-slate-700 text-base font-medium mt-3 leading-relaxed">
                  📍 {BUSINESS_INFO.address}
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2">
                <p className="text-xs font-semibold text-slate-500 uppercase">
                  Landmark Assistance
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Located near Krishna Complex along the main Station Road in Pupri, easily accessible from the railway station and market center.
                </p>
              </div>
            </div>

            <div className="pt-8 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={getDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-yellow py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-950 flex items-center justify-center space-x-2 shadow-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="btn-outline-blue py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full btn-blue py-3 rounded-xl text-sm font-bold text-white flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>Make A Booking Enquiry</span>
              </button>
            </div>
          </div>

          {/* Interactive Google Maps Frame */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-soft min-h-[380px] relative">
            <iframe
              title="SK Travels Pupri Location Map"
              src={BUSINESS_INFO.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-md border border-slate-200 text-xs font-semibold text-slate-800 flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-brand-royal" />
              <span>Pupri, Station Road</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
