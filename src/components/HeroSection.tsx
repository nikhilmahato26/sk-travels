"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Train, Plane, Car, MapPin, Calendar, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO } from "@/data/content";

interface HeroSectionProps {
  onOpenBooking: (serviceName?: string, details?: any) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<"train" | "flight" | "car">("train");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [travelDate, setTravelDate] = useState("");

  const handleQuickEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceMap = {
      train: "Train Ticket",
      flight: "Flight Ticket",
      car: "Four-Wheeler Service",
    };
    onOpenBooking(serviceMap[activeTab], {
      from: fromCity,
      to: toCity,
      date: travelDate,
    });
  };

  return (
    <section id="home" className="relative bg-slate-900 text-white overflow-hidden pt-6 pb-16 sm:pb-24">
      {/* Background Hero Image with Deep Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_travel_montage.jpg"
          alt="Travel Journey - Train, Flight and Car"
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-75 transition-transform duration-1000"
        />
        {/* Flat clean blue tone gradient overlay as per color palette requirements */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/95 via-brand-deep/85 to-brand-royal/60" />
        <div className="absolute inset-0 bg-slate-950/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14">
        {/* Location & Brand Badge Highlight */}
        <div className="inline-flex items-center space-x-2.5 pl-1.5 pr-4 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm">
          <div className="relative w-6 h-6 rounded-full overflow-hidden border border-amber-400 shrink-0 bg-white">
            <Image
              src={BUSINESS_INFO.logo}
              alt="Logo Badge"
              fill
              className="object-cover"
            />
          </div>
          <span>{BUSINESS_INFO.locationBadge}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading leading-tight">
              {BUSINESS_INFO.tagline}
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-2xl font-semibold text-amber-400 tracking-wide">
              {BUSINESS_INFO.subTagline}
            </p>

            <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed">
              Your dependable local partner in Pupri for prompt railway reservation assistance, 
              domestic flight bookings, and personalized four-wheeler passenger travel services.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenBooking()}
                id="hero-book-now-btn"
                className="btn-yellow px-7 py-3.5 rounded-xl text-base font-bold text-slate-950 flex items-center space-x-2 shadow-glow hover:scale-105 transition-all"
              >
                <span>Book Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#contact"
                id="hero-contact-us-btn"
                className="px-7 py-3.5 rounded-xl text-base font-bold text-white border-2 border-white/80 hover:bg-white hover:text-brand-deep transition-all duration-200"
              >
                Contact Us
              </a>
            </div>

            {/* Trust Highlights Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-700/60">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>Station Road Office</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>Verified Booking Support</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>Diverse Vehicle Fleet</span>
              </div>
            </div>
          </div>

          {/* Quick Travel Enquiry Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-7 shadow-2xl border-4 border-amber-400/30">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-lg font-bold text-brand-deep font-heading">
                    Quick Booking Enquiry
                  </h2>
                  <p className="text-xs text-slate-500">
                    Get prompt booking assistance in Pupri
                  </p>
                </div>
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-brand-yellow/60 bg-brand-deep shrink-0 shadow-sm">
                  <Image
                    src={BUSINESS_INFO.logo}
                    alt="Siliguri Tour and Travels Logo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Service Selection Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl my-4 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveTab("train")}
                  className={`py-2 px-1 rounded-lg flex flex-col items-center justify-center space-y-1 transition-all ${
                    activeTab === "train"
                      ? "bg-brand-deep text-white shadow-sm"
                      : "text-slate-600 hover:text-brand-deep"
                  }`}
                >
                  <Train className="w-4 h-4" />
                  <span>Train</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("flight")}
                  className={`py-2 px-1 rounded-lg flex flex-col items-center justify-center space-y-1 transition-all ${
                    activeTab === "flight"
                      ? "bg-brand-deep text-white shadow-sm"
                      : "text-slate-600 hover:text-brand-deep"
                  }`}
                >
                  <Plane className="w-4 h-4" />
                  <span>Flight</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("car")}
                  className={`py-2 px-1 rounded-lg flex flex-col items-center justify-center space-y-1 transition-all ${
                    activeTab === "car"
                      ? "bg-brand-deep text-white shadow-sm"
                      : "text-slate-600 hover:text-brand-deep"
                  }`}
                >
                  <Car className="w-4 h-4" />
                  <span>Vehicle</span>
                </button>
              </div>

              {/* Input Fields Form */}
              <form onSubmit={handleQuickEnquiry} className="space-y-3 text-sm">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    From (Origin / Pickup)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={
                      activeTab === "train"
                        ? "e.g. Pupri / Janakpur Road"
                        : activeTab === "flight"
                        ? "e.g. Patna / Darbhanga Airport"
                        : "e.g. Pupri Station Road"
                    }
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    To (Destination)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={
                      activeTab === "train"
                        ? "e.g. Delhi, Mumbai, Kolkata"
                        : activeTab === "flight"
                        ? "e.g. Bengaluru, Delhi, Mumbai"
                        : "e.g. Patna, Muzaffarpur, Sitamarhi"
                    }
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Travel Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-yellow mt-2 py-3 rounded-xl font-bold text-slate-950 flex items-center justify-center space-x-2"
                >
                  <span>Enquire Availability</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <p className="text-[11px] text-center text-slate-500 mt-3">
                📍 Station Road, Near Krishna Complex, Pupri
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
