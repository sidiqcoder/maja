import React from 'react';
import { ShieldCheck, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function PolicySection() {
  return (
    <section 
      id="policy-section" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      
      {/* Background with warm ambient gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F7CEC2]/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#7B2E3A] font-medium">
            Please Note Before Booking
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3A1E1E] mt-2 leading-tight font-normal">
            Cancellation &amp; Deposit Policy
          </h2>
          <div className="w-14 h-0.5 bg-[#B97A86] mx-auto mt-3 mb-4" />
          <p className="text-xs sm:text-sm text-[#3A1E1E]/80 max-w-2xl mx-auto leading-relaxed font-normal">
            We understand that plans can change, and we appreciate your understanding that our time matters too. If you need to cancel, please let us know in advance so we can offer your slot to another client.
          </p>
        </div>

        {/* Policy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          
          {/* 1. 20% Deposit */}
          <div className="bg-luxury-card rounded-3xl p-6 sm:p-7 border border-[#D8B1B7]/40 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#D8B1B7]/25 flex items-center justify-center text-[#7B2E3A]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-[#F3E4DB] text-[#7B2E3A] border border-[#D8B1B7]/40">
                  Deposit Policy
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#3A1E1E] mb-3 font-normal">
                20% Deposit Required
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#3A1E1E]/80 font-normal">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7B2E3A] shrink-0 mt-0.5" />
                  <span>Your first visit to Maja Beauty Bar</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7B2E3A] shrink-0 mt-0.5" />
                  <span>Future bookings following three consecutive cancellations or no-shows</span>
                </li>
              </ul>
            </div>
            <div className="mt-5 pt-3.5 border-t border-[#D8B1B7]/30 text-[11px] sm:text-xs text-[#8C7474] italic font-normal">
              * The deposit will be deducted from the final cost of your appointment.
            </div>
          </div>

          {/* 2. 50% Deposit */}
          <div className="bg-luxury-card rounded-3xl p-6 sm:p-7 border border-[#D8B1B7]/40 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#D8B1B7]/25 flex items-center justify-center text-[#7B2E3A]">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-[#F3E4DB] text-[#7B2E3A] border border-[#D8B1B7]/40">
                  Extended Sessions
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#3A1E1E] mb-3 font-normal">
                50% Deposit Required
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#3A1E1E]/80 font-normal">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7B2E3A] shrink-0 mt-0.5" />
                  <span>Appointments over 3 hours</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7B2E3A] shrink-0 mt-0.5" />
                  <span>High cost appointments</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7B2E3A] shrink-0 mt-0.5" />
                  <span>Hair Extension appointments</span>
                </li>
              </ul>
            </div>
            <div className="mt-5 pt-3.5 border-t border-[#D8B1B7]/30 text-[11px] sm:text-xs text-[#8C7474] italic font-normal">
              * The deposit will be deducted from the final cost of your appointment.
            </div>
          </div>

          {/* 3. Cancellation & Rescheduling Fees */}
          <div className="bg-luxury-card rounded-3xl p-6 sm:p-7 border border-[#D8B1B7]/40 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#D8B1B7]/25 flex items-center justify-center text-[#7B2E3A]">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-[#F3E4DB] text-[#7B2E3A] border border-[#D8B1B7]/40">
                  Notice Period
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#3A1E1E] mb-3 font-normal">
                Cancellation &amp; Rescheduling Fees
              </h3>
              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="p-2.5 rounded-xl bg-white/70 border border-[#D8B1B7]/30 flex items-center justify-between">
                  <span className="font-normal text-[#3A1E1E]">24 hours’ notice or more</span>
                  <span className="text-[11px] sm:text-xs text-green-700 font-medium">No charge</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/70 border border-[#D8B1B7]/30 flex items-center justify-between">
                  <span className="font-normal text-[#3A1E1E]">Less than 12 hours’ notice</span>
                  <span className="text-[11px] sm:text-xs text-[#B45309] font-medium">50% charge</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/70 border border-[#D8B1B7]/30 flex items-center justify-between">
                  <span className="font-normal text-[#3A1E1E]">No-show</span>
                  <span className="text-[11px] sm:text-xs text-red-600 font-medium">100% charge</span>
                </div>
              </div>
            </div>
            <div className="mt-5 pt-3.5 border-t border-[#D8B1B7]/30 text-[11px] text-[#8C7474] flex items-center justify-between font-normal">
              <span>Inclusive of 5% UAE VAT</span>
              <span className="font-medium text-[#7B2E3A]">Maja Policy</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

