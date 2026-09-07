"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Train, Plane, Car, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/data/content";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Accent Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 aspect-[4/3]">
              <Image
                src="/images/about_travel_hub.jpg"
                alt="SK Travels Booking Assistance Desk in Pupri"
                fill
                className="object-cover"
              />
            </div>
            {/* Overlay location & brand badge card */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-brand-deep text-white p-4 sm:p-5 rounded-2xl shadow-xl max-w-xs border border-brand-yellow/30 flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-amber-400 shrink-0 bg-white shadow">
                <Image
                  src={BUSINESS_INFO.logo}
                  alt="Siliguri Tour and Travels Badge"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center space-x-1.5 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Pupri, Station Road</span>
                </div>
                <p className="text-[11px] text-slate-200 leading-snug">
                  Near Krishna Complex, Bihar.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-bold uppercase tracking-wider">
              <span>About Our Agency</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep font-heading tracking-tight leading-tight">
              About Our Travel Services
            </h2>

            <p className="text-slate-700 text-base leading-relaxed">
              Based in <strong>Pupri, Bihar</strong>, <strong>Siliguri Tour and Travels</strong> provides dedicated travel-related assistance designed to make your journeys smooth, organized, and hassle-free. From our conveniently situated office on <strong>Station Road, Near Krishna Complex</strong>, we assist travelers with end-to-end booking needs.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether you require timely assistance with <strong>train ticket bookings</strong> across Indian Railways routes, <strong>flight ticket bookings</strong> for domestic travel, or dependable <strong>four-wheeler passenger travel services</strong> for local or outstation travel, our focus is on providing clear, patient, and customer-centered guidance.
            </p>

            {/* Core Offerings List */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3 text-sm text-slate-700">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
                  <Train className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold text-brand-deep">Train Ticket Booking:</span> Indian railway route and reservation guidance.
                </div>
              </div>

              <div className="flex items-start space-x-3 text-sm text-slate-700">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
                  <Plane className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold text-brand-deep">Flight Ticket Booking:</span> Domestic and available flight itinerary support.
                </div>
              </div>

              <div className="flex items-start space-x-3 text-sm text-slate-700">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
                  <Car className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold text-brand-deep">Four-Wheeler Services:</span> Diverse vehicle types suited for personal, family, and group journeys.
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center space-x-4">
              <a
                href="#contact"
                className="btn-yellow px-6 py-3 rounded-xl text-sm font-bold text-slate-950 inline-flex items-center space-x-2 shadow-sm"
              >
                <span>Enquire With Us</span>
              </a>
              <a
                href="#location"
                className="btn-outline-blue px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center space-x-2"
              >
                <span>Visit Our Location</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
