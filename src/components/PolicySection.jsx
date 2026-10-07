import React from 'react';
import { ShieldCheck, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function PolicySection() {
  return (
    <section id="policy-section" className="py-20 lg:py-24 relative overflow-hidden">
      
      {/* Background with warm ambient gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F4ECE1]/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A6865A] font-semibold">
            Please Note Before Booking
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1816] mt-3 leading-tight">
            Cancellation & Deposit Policy
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-4" />
          <p className="mt-4 text-sm sm:text-base text-[#5C5048] max-w-2xl mx-auto leading-relaxed">
            We understand that unexpected circumstances can arise, and we always try to be as accommodating as possible. We kindly ask that you notify us in advance so we have enough time to offer your appointment to another client on our waiting list.
          </p>
        </div>

        {/* Policy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* 1. 20% Deposit */}
          <div className="bg-luxury-card rounded-3xl p-8 border border-[#C5A880]/30 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#C5A880]/15 flex items-center justify-center text-[#9E7D47] mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C5A880]/20 text-[#73572E] mb-3">
                Deposit Policy
              </div>
              <h3 className="font-serif text-2xl text-[#1C1816] mb-3">
                20% Deposit Required
              </h3>
              <ul className="space-y-3 text-sm text-[#4A3E39] mt-4">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#9E7D47] shrink-0 mt-0.5" />
                  <span>Your first visit to Maja Beauty Bar</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#9E7D47] shrink-0 mt-0.5" />
                  <span>Future bookings following three consecutive cancellations or no-shows</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-[#C5A880]/20 text-xs text-[#7A6F68] italic">
              * The deposit is deducted from the final cost of your appointment.
            </div>
          </div>

          {/* 2. 50% Deposit */}
          <div className="bg-luxury-card rounded-3xl p-8 border border-[#C5A880]/30 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#C5A880]/15 flex items-center justify-center text-[#9E7D47] mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C5A880]/20 text-[#73572E] mb-3">
                Extended Sessions
              </div>
              <h3 className="font-serif text-2xl text-[#1C1816] mb-3">
                50% Deposit Required
              </h3>
              <ul className="space-y-3 text-sm text-[#4A3E39] mt-4">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#9E7D47] shrink-0 mt-0.5" />
                  <span>Appointments scheduled for over 3 hours</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#9E7D47] shrink-0 mt-0.5" />
                  <span>High-cost bespoke transformations & packages</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#9E7D47] shrink-0 mt-0.5" />
                  <span>Hair Extension applications and refits</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-[#C5A880]/20 text-xs text-[#7A6F68] italic">
              * The deposit is deducted from the final cost of your appointment.
            </div>
          </div>

          {/* 3. Cancellation & Rescheduling Fees */}
          <div className="bg-luxury-card rounded-3xl p-8 border border-[#C5A880]/30 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#C5A880]/15 flex items-center justify-center text-[#9E7D47] mb-6">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C5A880]/20 text-[#73572E] mb-3">
                Notice Period
              </div>
              <h3 className="font-serif text-2xl text-[#1C1816] mb-3">
                Cancellation & Rescheduling
              </h3>
              <div className="space-y-3.5 text-sm mt-4">
                <div className="p-3 rounded-xl bg-white/70 border border-[#C5A880]/20">
                  <span className="font-semibold text-[#1C1816] block">24 Hours’ Notice or More</span>
                  <span className="text-xs text-green-700 font-medium">No charge · Free rescheduling</span>
                </div>
                <div className="p-3 rounded-xl bg-white/70 border border-[#C5A880]/20">
                  <span className="font-semibold text-[#1C1816] block">Less than 12 Hours’ Notice</span>
                  <span className="text-xs text-[#B45309] font-medium">50% appointment charge</span>
                </div>
                <div className="p-3 rounded-xl bg-white/70 border border-[#C5A880]/20">
                  <span className="font-semibold text-[#1C1816] block">No-Show</span>
                  <span className="text-xs text-red-600 font-medium">100% appointment charge</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#C5A880]/20 text-xs text-[#7A6F68] flex items-center justify-between">
              <span>All prices are inclusive of 5% UAE VAT</span>
              <span className="font-semibold text-[#9E7D47]">Maja Policy</span>
            </div>
          </div>

        </div>

        {/* VAT & Assurance banner */}
        <div className="mt-10 p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#C5A880]/20 max-w-2xl mx-auto text-center text-xs text-[#5C5048]">
          <span className="font-semibold text-[#1C1816]">Transparency Guarantee:</span> All listed prices across our menus are inclusive of 5% VAT. Deposits paid are strictly deducted from your final bill on the day of treatment.
        </div>

      </div>
    </section>
  );
}


