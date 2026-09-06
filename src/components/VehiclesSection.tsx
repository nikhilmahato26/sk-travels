"use client";

import React from "react";
import Image from "next/image";
import { Car, Check, Calendar, ArrowRight, Info } from "lucide-react";
import { VEHICLE_CATEGORIES, VehicleCategory } from "@/data/content";

interface VehiclesSectionProps {
  onOpenBooking: (serviceName?: string, vehicleCategory?: string) => void;
}

export const VehiclesSection: React.FC<VehiclesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="four-wheeler" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Car className="w-3.5 h-3.5 text-brand-yellow" />
            <span>Dedicated Road Travel Options</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep font-heading tracking-tight">
            Our Four-Wheeler Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Choose from different categories of four-wheelers based on your passenger capacity, travel comfort, and journey requirements.
          </p>
        </div>

        {/* Visual Category Notice Banner */}
        <div className="mb-10 max-w-3xl mx-auto p-4 rounded-2xl bg-blue-50/80 border border-blue-200 text-slate-700 flex items-start space-x-3 text-xs sm:text-sm">
          <Info className="w-5 h-5 text-brand-royal shrink-0 mt-0.5" />
          <p>
            <span className="font-semibold text-brand-deep">Vehicle Availability Notice:</span> Vehicle categories below are visual representations to guide your selection. Specific models and availability are confirmed directly at the time of your enquiry according to current booking schedules.
          </p>
        </div>

        {/* 5 Vehicle Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VEHICLE_CATEGORIES.map((veh) => (
            <div
              key={veh.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Vehicle Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={veh.image}
                    alt={`${veh.category} Travel Service`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-brand-deep/90 backdrop-blur-sm text-brand-yellow px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                    {veh.badge}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-brand-deep/85 backdrop-blur-sm px-3 py-1.5 rounded-xl text-xs text-slate-200 flex items-center justify-between">
                    <span className="font-medium text-white">{veh.category}</span>
                    <span className="text-amber-300 font-medium">{veh.suitability}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-deep font-heading mb-1.5">
                    {veh.category}
                  </h3>
                  <p className="text-amber-700 text-xs font-semibold mb-3">
                    {veh.tagline}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {veh.description}
                  </p>
                </div>
              </div>

              {/* Dual CTA Buttons */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => onOpenBooking("Four-Wheeler Service", veh.category)}
                  className="w-full btn-yellow py-2.5 rounded-xl font-bold text-slate-950 flex items-center justify-center space-x-2 text-sm shadow-sm"
                >
                  <span>Book Your Vehicle</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenBooking("Four-Wheeler Service", veh.category)}
                  className="w-full btn-outline-blue py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center space-x-2"
                >
                  <span>Enquire Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
