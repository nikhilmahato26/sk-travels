"use client";

import React, { useState } from "react";
import { MessageSquare, Calendar, PhoneCall, X } from "lucide-react";

interface FloatingCTAProps {
  onOpenBooking: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onOpenBooking }) => {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2">
      {tooltipVisible && (
        <div className="bg-brand-deep text-white text-xs px-3 py-1.5 rounded-xl shadow-lg border border-amber-400/40 flex items-center space-x-2 animate-bounce">
          <span className="font-semibold text-brand-yellow">Need Ticket or Vehicle?</span>
          <button
            onClick={() => setTooltipVisible(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <button
        onClick={onOpenBooking}
        id="floating-enquiry-btn"
        className="btn-yellow h-14 px-5 rounded-full shadow-2xl flex items-center space-x-2.5 font-bold text-slate-950 border-2 border-white hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Quick Travel Enquiry"
      >
        <MessageSquare className="w-5 h-5 text-slate-950 fill-current" />
        <span className="text-sm font-extrabold tracking-wide">Quick Enquiry</span>
      </button>
    </div>
  );
};
