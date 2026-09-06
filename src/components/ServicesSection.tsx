"use client";

import React from "react";
import Image from "next/image";
import { Train, Plane, Car, ArrowRight, CheckCircle2, Moon, FileText, Banknote } from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/content";

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: ServiceItem["iconName"]) => {
    switch (iconName) {
      case "Train":
        return <Train className="w-6 h-6 text-brand-yellow" />;
      case "Plane":
        return <Plane className="w-6 h-6 text-brand-yellow" />;
      case "Car":
        return <Car className="w-6 h-6 text-brand-yellow" />;
      case "Moon":
        return <Moon className="w-6 h-6 text-brand-yellow" />;
      case "FileText":
        return <FileText className="w-6 h-6 text-brand-yellow" />;
      case "Banknote":
        return <Banknote className="w-6 h-6 text-brand-yellow" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <span>Our Core Travel Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep font-heading tracking-tight">
            Comprehensive Ticket & Travel Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Professional travel assistance conveniently available from our Station Road office in Pupri, Bihar.
          </p>
        </div>

        {/* 3 Modern Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent" />
                  
                  {/* Service Badge */}
                  <div className="absolute top-4 left-4 bg-brand-deep/90 backdrop-blur-sm text-brand-yellow px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                    {service.badge}
                  </div>

                  {/* Icon Circle */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-2xl bg-brand-deep/95 border-2 border-brand-yellow flex items-center justify-center shadow-md">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-brand-deep font-heading mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 font-medium">
                    {service.shortDesc}
                  </p>

                  <p className="text-slate-500 text-xs leading-relaxed mb-6">
                    {service.longDesc}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2 pt-4 border-t border-slate-200">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card CTA Footer */}
              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="w-full btn-yellow py-3 rounded-xl font-bold text-slate-950 flex items-center justify-center space-x-2 shadow-sm"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
