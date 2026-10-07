import React from 'react';
import { Calendar, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero({ onExploreServices }) {
  const freshaUrl = "https://www.fresha.com/a/maja-beauty-bar-dubai-m1m-building-al-meydan-d8xwkzcg?utm_source=ig&utm_medium=social&utm_content=link_in_bio";
  const waUrl = "https://wa.me/971509964626?text=Hi%20Maja%20Beauty%20Bar%2C%20I'd%20like%20to%20book%20an%20appointment.";

  return (
    <section className="relative h-screen min-h-[580px] max-h-[1080px] flex flex-col justify-between overflow-hidden pt-20 pb-4 sm:pb-6">
      
      {/* Background Video with Fallback Poster and Luxury Warm Tint Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/why-maja/hero-fallback.jpg"
          className="w-full h-full object-cover scale-105 filter brightness-[0.76] contrast-[1.05]"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <source src="/videos/hero-salon.mp4" type="video/mp4" />
        </video>

        {/* Multi-layered Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1816]/95 via-[#1C1816]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1816]/75 via-transparent to-[#1C1816]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#1C1816]/30 to-[#1C1816]/80" />
      </div>

      {/* Main Hero Content (Vertically Centered in Available Space) */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto my-auto">
        
        {/* Subtle Luxury Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-3 sm:mb-4 animate-in fade-in duration-700">
          <Sparkles className="w-3.5 h-3.5 text-[#E5D2BA]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#F3E7D7] font-medium">
            Maja Beauty Bar · Meydan, Dubai
          </span>
        </div>

        {/* Main Headline - Instrument Serif Font */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#FFFDF9] leading-[1.08] max-w-3xl drop-shadow-sm">
          Because Every Woman Deserves Her <span className="italic font-serif text-[#E2CEB5]">Maja Moment.</span>
        </h1>

        {/* Subtitle Headline */}
        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-light text-[#EFE8DF] tracking-wide max-w-2xl">
          Your Go-To Premium Beauty Routine, All in One Place.
        </p>

        {/* Supporting Copy */}
        <p className="mt-2 text-xs sm:text-sm md:text-base text-white/80 max-w-xl leading-relaxed font-light">
          From nails, hair and lashes to brows and relaxing treatments, Maja Beauty Bar brings your favourite beauty essentials together under one roof in Dubai.
        </p>

        {/* Call to Actions (Bright, shimmering luminous movement button) */}
        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md">
          
          {/* Primary Book on Fresha (Bright Luminous CTA with Movement) */}
          <a
            href={freshaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luminous w-full sm:w-auto px-7 py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-2xl group"
          >
            <Calendar className="w-4 h-4 text-[#1A1614]" />
            <span>Book Your Appointment</span>
            <ArrowRight className="w-4 h-4 text-[#1A1614] group-hover:translate-x-1 transition-transform" />
          </a>

          {/* WhatsApp Button */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Message on WhatsApp</span>
          </a>

        </div>

      </div>

      {/* Quick Highlights Bar (Anchored at Bottom of Hero) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pb-2 sm:pb-3">
        <div className="pt-3 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg sm:text-2xl text-[#E5D2BA]">4.8 ★</span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70">394+ Verified Clients</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg sm:text-2xl text-[#E5D2BA]">5 Years</span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70">Beauty Expertise</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg sm:text-2xl text-[#E5D2BA]">5 Suites</span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70">Hair · Nails · Brows · Spa</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg sm:text-2xl text-[#E5D2BA]">Dubai</span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70">Meydan Nad Al Sheba</span>
          </div>
        </div>
      </div>

    </section>
  );
}

