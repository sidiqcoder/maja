import React from 'react';
import { ShieldCheck, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function PolicySection() {
  return (
    <section 
      id="policy-section" 
      className="relative min-h-screen lg:h-screen lg:max-h-[1080px] flex items-center justify-center overflow-hidden pt-20 pb-8"
    >
      
      {/* Background with warm ambient gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F4ECE1]/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6 lg:mb-8">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#A6865A] font-medium">
            Please Note Before Booking
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1816] mt-1.5 leading-tight font-normal">
            Cancellation &amp; Deposit Policy
          </h2>
          <div className="w-14 h-0.5 bg-[#C5A880] mx-auto mt-2.5" />
          <p className="mt-2.5 text-xs sm:text-sm text-[#5C5048] max-w-2xl mx-auto leading-relaxed font-normal">
            We understand unexpected circumstances arise. We kindly ask that you notify us in advance so we have time to offer your appointment to another client on our waiting list.
          </p>
        </div>

        {/* Policy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          
          {/* 1. 20% Deposit */}
          <div className="bg-luxury-card rounded-3xl p-5 sm:p-6 border border-[#C5A880]/30 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#C5A880]/15 flex items-center justify-center text-[#9E7D47]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider bg-[#C5A880]/20 text-[#73572E]">
                  Deposit Policy
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1C1816] mb-2.5 font-normal">
                20% Deposit Required
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#4A3E39] font-normal">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D47] shrink-0 mt-0.5" />
                  <span>Your first visit to Maja Beauty Bar</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D47] shrink-0 mt-0.5" />
                  <span>Future bookings following 3 consecutive cancellations or no-shows</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-[#C5A880]/20 text-[11px] text-[#7A6F68] italic font-normal">
              * Deducted from the final cost of your appointment.
            </div>
          </div>

          {/* 2. 50% Deposit */}
          <div className="bg-luxury-card rounded-3xl p-5 sm:p-6 border border-[#C5A880]/30 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#C5A880]/15 flex items-center justify-center text-[#9E7D47]">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider bg-[#C5A880]/20 text-[#73572E]">
                  Extended Sessions
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1C1816] mb-2.5 font-normal">
                50% Deposit Required
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#4A3E39] font-normal">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D47] shrink-0 mt-0.5" />
                  <span>Appointments scheduled for over 3 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D47] shrink-0 mt-0.5" />
                  <span>High-cost bespoke transformations &amp; packages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D47] shrink-0 mt-0.5" />
                  <span>Hair Extension applications and refits</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-[#C5A880]/20 text-[11px] text-[#7A6F68] italic font-normal">
              * Deducted from the final cost of your appointment.
            </div>
          </div>

          {/* 3. Cancellation & Rescheduling Fees */}
          <div className="bg-luxury-card rounded-3xl p-5 sm:p-6 border border-[#C5A880]/30 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#C5A880]/15 flex items-center justify-center text-[#9E7D47]">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider bg-[#C5A880]/20 text-[#73572E]">
                  Notice Period
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1C1816] mb-2.5 font-normal">
                Cancellation &amp; Rescheduling
              </h3>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="p-2 rounded-xl bg-white/70 border border-[#C5A880]/20 flex items-center justify-between">
                  <span className="font-medium text-[#1C1816]">24h+ Notice</span>
                  <span className="text-[11px] text-green-700 font-medium">Free rescheduling</span>
                </div>
                <div className="p-2 rounded-xl bg-white/70 border border-[#C5A880]/20 flex items-center justify-between">
                  <span className="font-medium text-[#1C1816]">&lt; 12h Notice</span>
                  <span className="text-[11px] text-[#B45309] font-medium">50% charge</span>
                </div>
                <div className="p-2 rounded-xl bg-white/70 border border-[#C5A880]/20 flex items-center justify-between">
                  <span className="font-medium text-[#1C1816]">No-Show</span>
                  <span className="text-[11px] text-red-600 font-medium">100% charge</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#C5A880]/20 text-[11px] text-[#7A6F68] flex items-center justify-between">
              <span>Inclusive of 5% VAT</span>
              <span className="font-medium text-[#9E7D47]">Maja Policy</span>
            </div>
          </div>

        </div>

        {/* VAT & Assurance banner */}
        <div className="mt-4 lg:mt-5 p-3.5 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#C5A880]/20 max-w-2xl mx-auto text-center text-[11px] sm:text-xs text-[#5C5048]">
          <span className="font-medium text-[#1C1816]">Transparency Guarantee:</span> All listed prices across our menus are inclusive of 5% UAE VAT. Deposits paid are strictly deducted from your final bill on the day of treatment.
        </div>

      </div>
    </section>
  );
}

