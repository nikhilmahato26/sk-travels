"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  Calendar,
  Users,
  MapPin,
  Clock,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/content";

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    serviceRequired: prefilledService || "Train Ticket",
    travelDate: "",
    from: "",
    to: "",
    passengers: "1",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = "SKT-" + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(randomId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phoneNumber: "",
      serviceRequired: "Train Ticket",
      travelDate: "",
      from: "",
      to: "",
      passengers: "1",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Enquiry Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep font-heading tracking-tight">
            Book or Enquire About Your Travel
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Submit your trip details below. Our booking team in Pupri will promptly review your request.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-card border border-slate-200 overflow-hidden">
          {submitted ? (
            /* Submission Confirmation Message */
            <div className="p-8 sm:p-12 text-center space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Enquiry Received Successfully
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-deep font-heading pt-2">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto">
                  Your travel enquiry has been registered with reference{" "}
                  <strong className="text-brand-deep font-mono bg-slate-100 px-2 py-0.5 rounded">
                    {referenceId}
                  </strong>
                  . Our team at Station Road, Pupri will review and attend to your travel requirements.
                </p>
              </div>

              {/* Summary of submitted request */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left max-w-lg mx-auto text-sm space-y-3">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-semibold text-brand-deep">{formData.serviceRequired}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Route:</span>
                  <span className="font-semibold text-brand-deep">
                    {formData.from} → {formData.to}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Travel Date:</span>
                  <span className="font-semibold text-brand-deep">{formData.travelDate || "Flexible"}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Passengers:</span>
                  <span className="font-semibold text-brand-deep">{formData.passengers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Contact Number:</span>
                  <span className="font-semibold text-brand-deep">{formData.phoneNumber}</span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-center space-x-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-yellow px-6 py-3 rounded-xl text-sm font-bold text-slate-950 flex items-center space-x-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Submit Another Enquiry</span>
                </button>
              </div>
            </div>
          ) : (
            /* Enquiry Form */
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
              <div className="border-b border-slate-100 pb-4 mb-2 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-brand-deep font-heading">
                    Travel Enquiry Form
                  </h3>
                  <p className="text-xs text-slate-500">
                    All enquiries are handled directly from our Station Road office in Pupri.
                  </p>
                </div>
                <div className="hidden sm:flex items-center space-x-1.5 text-xs text-amber-800 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
                  <Clock className="w-3.5 h-3.5 text-brand-yellow" />
                  <span>Prompt Response</span>
                </div>
              </div>

              {/* Grid Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                {/* Service Required Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
                  >
                    <option value="Train Ticket">Train Ticket</option>
                    <option value="Flight Ticket">Flight Ticket</option>
                    <option value="Four-Wheeler Service">Four-Wheeler Service</option>
                    <option value="Haj & Umrah">Haj & Umrah</option>
                    <option value="Visa Services">Visa Services</option>
                    <option value="Money Exchange">Money Exchange</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Travel Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Travel Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                {/* From */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    From (Departure Place) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pupri / Janakpur Road"
                    value={formData.from}
                    onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                {/* To */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    To (Destination) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. New Delhi / Mumbai / Patna"
                    value={formData.to}
                    onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                {/* Number of Passengers */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Number of Passengers <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.passengers}
                    onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
                  >
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4 Passengers</option>
                    <option value="5-7">5 - 7 Passengers (Family / Group)</option>
                    <option value="8+">8+ Passengers (Large Group)</option>
                  </select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Message / Additional Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify preferred train class, return journey dates, or any special vehicle preference..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  id="submit-enquiry-btn"
                  className="w-full btn-yellow py-3.5 rounded-xl font-bold text-slate-950 flex items-center justify-center space-x-2 text-base shadow-md hover:shadow-lg transition-all"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Enquiry</span>
                </button>
              </div>

              <div className="text-center text-xs text-slate-500 flex items-center justify-center space-x-2 pt-2">
                <MapPin className="w-3.5 h-3.5 text-brand-royal" />
                <span>Station Road, Near Krishna Complex, Pupri, Bihar</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
