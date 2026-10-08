import React from 'react';
import { Calendar, MessageCircle, ArrowRight } from 'lucide-react';

export default function Hero({ onExploreServices }) {
  const freshaUrl = "https://www.fresha.com/a/maja-beauty-bar-dubai-m1m-building-al-meydan-d8xwkzcg?utm_source=ig&utm_medium=social&utm_content=link_in_bio";
  const waUrl = "https://wa.me/971509964626?text=Hi%20Maja%20Beauty%20Bar%2C%20I'd%20like%20to%20book%20an%20appointment.";

  return (
    <section className="relative h-screen min-h-[560px] max-h-[1080px] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-8">
      
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

      {/* Main Hero Content (Vertically Centered in Viewport) */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto my-auto">
        
        {/* Subtle Luxury Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 sm:mb-5 animate-in fade-in duration-700">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#F3E7D7] font-medium">
            Maja Beauty Bar · Meydan, Dubai
          </span>
        </div>

        {/* Main Headline - Instrument Serif Font */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-[#FFFDF9] leading-[1.08] max-w-4xl drop-shadow-sm">
          Because Every Woman Deserves Her <span className="italic font-serif text-[#E2CEB5]">Maja Moment.</span>
        </h1>

        {/* Subtitle Headline */}
        <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl lg:text-2xl font-light text-[#EFE8DF] tracking-wide max-w-3xl">
          Your Go-To Premium Beauty Routine, All in One Place.
        </p>

        {/* Supporting Copy */}
        <p className="mt-3 text-xs sm:text-sm md:text-base text-white/80 max-w-2xl leading-relaxed font-light">
          From nails, hair and lashes to brows and relaxing treatments, Maja Beauty Bar brings your favourite beauty essentials together under one roof in Dubai.
        </p>

        {/* Call to Actions (Bright, shimmering luminous movement button) */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md">
          
          {/* Primary Book on Fresha (Bright Luminous CTA with Movement) */}
          <a
            href={freshaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luminous w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-2xl group"
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
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Message on WhatsApp</span>
          </a>

        </div>

      </div>

    </section>
  );
}

