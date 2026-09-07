"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Send, Clock, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/data/content";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultVehicle?: string;
  initialDetails?: {
    from?: string;
    to?: string;
    date?: string;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService,
  defaultVehicle,
  initialDetails,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    serviceRequired: defaultService || "Train Ticket",
    vehiclePreference: defaultVehicle || "",
    travelDate: initialDetails?.date || "",
    from: initialDetails?.from || "",
    to: initialDetails?.to || "",
    passengers: "1",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({
        ...prev,
        serviceRequired: defaultService,
        vehiclePreference: defaultVehicle || prev.vehiclePreference,
        from: initialDetails?.from || prev.from,
        to: initialDetails?.to || prev.to,
        travelDate: initialDetails?.date || prev.travelDate,
      }));
    }
    if (isOpen) {
      setSubmitted(false);
    }
  }, [defaultService, defaultVehicle, initialDetails, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*New Booking Request*
    
*Name:* ${formData.name}
*Phone:* ${formData.phoneNumber}
*Service:* ${formData.serviceRequired}
*Date:* ${formData.travelDate || "Flexible"}
*Route:* ${formData.from} to ${formData.to}
*Passengers:* ${formData.passengers}
*Notes:* ${formData.message || "N/A"}`;

    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    const randomId = "SKT-" + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(randomId);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-deep/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-brand-deep text-white px-6 py-4 flex items-center justify-between border-b border-brand-blue">
          <div>
            <span className="text-xs font-semibold text-brand-yellow uppercase tracking-wider">
              {BUSINESS_INFO.locationBadge}
            </span>
            <h3 className="text-lg font-bold font-heading">
              {submitted ? "Enquiry Confirmed" : "Book Your Travel / Enquire"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-brand-deep font-heading">
                Booking Request Registered!
              </h4>
              <p className="text-slate-600 text-sm">
                Reference ID: <strong className="font-mono bg-slate-100 px-2 py-0.5 rounded text-brand-deep">{referenceId}</strong>
              </p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Our team at Station Road, Pupri will review availability for your selected {formData.serviceRequired} request promptly.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="btn-yellow px-6 py-2.5 rounded-xl text-sm font-bold text-slate-950"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Service Required *
                  </label>
                  <select
                    required
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
                  >
                    <option value="Train Ticket">Train Ticket</option>
                    <option value="Flight Ticket">Flight Ticket</option>
                    <option value="Four-Wheeler Service">Four-Wheeler Service</option>
                    <option value="Tour Packages">Tour Packages</option>
                    <option value="Haj & Umrah">Haj & Umrah</option>
                    <option value="Visa Services">Visa Services</option>
                    <option value="Money Exchange">Money Exchange</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Travel Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    From (Pickup / Station) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pupri"
                    value={formData.from}
                    onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    To (Destination) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Delhi / Patna"
                    value={formData.to}
                    onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Number of Passengers *
                  </label>
                  <select
                    required
                    value={formData.passengers}
                    onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
                  >
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4 Passengers</option>
                    <option value="5-7">5-7 Passengers</option>
                    <option value="8+">8+ Passengers</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Special Notes / Preference
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. AC tier preference, vehicle category choice, etc."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none resize-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-yellow py-3 rounded-xl font-bold text-slate-950 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Booking Enquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
