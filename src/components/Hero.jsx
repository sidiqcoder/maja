import React from 'react';
import { Calendar, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero({ onExploreServices }) {
  const freshaUrl = "https://www.fresha.com/a/maja-beauty-bar-dubai-al-meydan-road-m1m-building-nad-al-sheba-1-nsc10s67";
  const waUrl = "https://wa.me/971509964626?text=Hi%20Maja%20Beauty%20Bar%2C%20I'd%20like%20to%20book%20an%20appointment.";

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Video with Fallback Poster and Luxury Warm Tint Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/why-maja/hero-fallback.jpg"
          className="w-full h-full object-cover scale-105 filter brightness-[0.78] contrast-[1.05]"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <source src="/videos/hero-salon.mp4" type="video/mp4" />
        </video>

        {/* Multi-layered Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1816] via-[#1C1816]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1816]/75 via-transparent to-[#1C1816]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#1C1816]/30 to-[#1C1816]/80" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-16 lg:py-24">
        
        {/* Subtle Luxury Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <Sparkles className="w-3.5 h-3.5 text-[#E5D2BA]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#F3E7D7] font-medium">
            Maja Beauty Bar · Meydan, Dubai
          </span>
        </div>

        {/* Main Headline - Instrument Serif Font */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FFFDF9] leading-[1.08] max-w-4xl mx-auto drop-shadow-sm">
          Because Every Woman Deserves Her <span className="italic font-serif text-[#E2CEB5]">Maja Moment.</span>
        </h1>

        {/* Subtitle Headline */}
        <p className="mt-5 sm:mt-6 text-lg sm:text-xl md:text-2xl font-light text-[#EFE8DF] tracking-wide max-w-3xl mx-auto">
          Your Go-To Premium Beauty Routine, All in One Place.
        </p>

        {/* Supporting Copy */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
          From nails, hair and lashes to brows and relaxing treatments, Maja Beauty Bar brings your favourite beauty essentials together under one roof in Dubai.
        </p>

        {/* Call to Actions (Bright, shimmering luminous movement button) */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 max-w-md mx-auto">
          
          {/* Primary Book on Fresha (Bright Luminous CTA with Movement) */}
          <a
            href={freshaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luminous w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-3 shadow-2xl group"
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
            className="w-full sm:w-auto px-7 py-4 rounded-full text-sm font-semibold tracking-wide bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Message on WhatsApp</span>
          </a>

        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-3xl text-[#E5D2BA]">4.8 ★</span>
            <span className="text-xs uppercase tracking-wider text-white/70 mt-0.5">394+ Verified Clients</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-3xl text-[#E5D2BA]">5 Years</span>
            <span className="text-xs uppercase tracking-wider text-white/70 mt-0.5">Beauty Expertise</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-3xl text-[#E5D2BA]">5 Suites</span>
            <span className="text-xs uppercase tracking-wider text-white/70 mt-0.5">Hair · Nails · Brows · Spa</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-3xl text-[#E5D2BA]">Dubai</span>
            <span className="text-xs uppercase tracking-wider text-white/70 mt-0.5">Meydan Nad Al Sheba</span>
          </div>
        </div>

      </div>

      {/* Smooth Bottom Blend to Section 2 */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#FAF7F2] pointer-events-none" />

    </section>
  );
}

