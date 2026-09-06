"use client";

import React from "react";
import {
  CheckCircle2,
  Train,
  Plane,
  Layers,
  Car,
  MapPin,
  HeartHandshake,
  Shield,
} from "lucide-react";
import { WHY_CHOOSE_US_FACTORS, TrustFactor } from "@/data/content";

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "CheckCircle2":
        return <CheckCircle2 className="w-6 h-6 text-brand-yellow" />;
      case "Train":
        return <Train className="w-6 h-6 text-brand-yellow" />;
      case "Plane":
        return <Plane className="w-6 h-6 text-brand-yellow" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-brand-yellow" />;
      case "Car":
        return <Car className="w-6 h-6 text-brand-yellow" />;
      case "MapPin":
        return <MapPin className="w-6 h-6 text-brand-yellow" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-brand-yellow" />;
      default:
        return <Shield className="w-6 h-6 text-brand-yellow" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <span>Our Commitment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep font-heading tracking-tight">
            Why Choose SK Tour & Travel
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Dedicated travel and ticket booking assistance rooted in reliability and attentive local service in Pupri.
          </p>
        </div>

        {/* 7 Trust Factor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_FACTORS.map((factor, idx) => (
            <div
              key={factor.title}
              className={`p-6 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-amber-400/50 hover:shadow-card transition-all duration-300 ${
                idx === 6 ? "sm:col-span-2 lg:col-span-1 xl:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-deep flex items-center justify-center mb-4 shadow-sm">
                {getIcon(factor.iconName)}
              </div>
              <h3 className="text-lg font-bold text-brand-deep font-heading mb-2">
                {factor.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
