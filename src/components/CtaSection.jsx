import React from 'react';
import { Calendar, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function CtaSection() {
  const freshaUrl = "https://www.fresha.com/a/maja-beauty-bar-dubai-al-meydan-road-m1m-building-nad-al-sheba-1-nsc10s67";
  const waUrl = "https://wa.me/971509964626?text=Hi%20Maja%20Beauty%20Bar%2C%20I'm%20ready%20for%20my%20Maja%20moment%21%20I'd%20like%20to%20book%20an%20appointment.";

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      
      {/* Background Image with Dark Luxury Scrim as Requested */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/why-maja/ambiance-main.jpg"
          alt="Maja Beauty Bar Dubai Ambiance"
          className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.08] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1816] via-[#1C1816]/75 to-[#1C1816]/65" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#1C1816]/40 to-[#1C1816]/90" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
        
        {/* Subtle Icon Accent */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 text-[#E2CEB5]">
          <Sparkles className="w-5 h-5" />
        </div>

        {/* Headline with Instrument Serif Font */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#FFFDF9] tracking-tight leading-[1.12]">
          Ready for Your <span className="italic text-[#E2CEB5]">Maja Moment?</span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-xl text-white/85 max-w-2xl mx-auto font-light leading-relaxed">
          Step into our serene Dubai sanctuary for manicures, blow-dries, lash lifts, and restorative body rituals made exclusively for you.
        </p>

        {/* CTAs with Movement & Shimmer */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          
          <a
            href={freshaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luminous w-full sm:w-auto px-9 py-4 rounded-full text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-3 shadow-2xl group"
          >
            <Calendar className="w-4 h-4 text-[#1A1614]" />
            <span>Book Online on Fresha</span>
            <ArrowRight className="w-4 h-4 text-[#1A1614] group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wide bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Chat via WhatsApp</span>
          </a>

        </div>

        {/* Location Subtext */}
        <div className="mt-12 text-xs uppercase tracking-widest text-white/60">
          M1M Building · Al Meydan Road · Dubai
        </div>

      </div>
    </section>
  );
}
