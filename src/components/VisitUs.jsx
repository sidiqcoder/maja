import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, ExternalLink, Navigation, Calendar, ArrowRight } from 'lucide-react';

export default function VisitUs() {
  // Google Map Search query for Maja Beauty Bar Dubai
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Maja+Beauty+Bar+Al+Meydan+Road+Dubai";
  const freshaUrl = "https://www.fresha.com/a/maja-beauty-bar-dubai-m1m-building-al-meydan-d8xwkzcg?utm_source=ig&utm_medium=social&utm_content=link_in_bio";
  const waUrl = "https://wa.me/971509964626?text=Hi%20Maja%20Beauty%20Bar%2C%20I'd%20like%20to%20book%20an%20appointment.";

  return (
    <section id="visit-us" className="py-24 lg:py-32 relative overflow-hidden text-white">
      
      {/* Background Image from Drive (Ambiance) with Multi-layered Luxury Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/why-maja/ambiance-main.jpg"
          alt="Maja Beauty Bar Salon Ambiance"
          className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.08] scale-105"
        />
        {/* Layered Warm Gradients for Luxury Aesthetic (Non-solid) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1816] via-[#1C1816]/75 to-[#1C1816]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1816]/90 via-[#26201C]/70 to-[#1C1816]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Instrument Serif Typography */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E5D2BA] font-semibold">
            Visit Us
          </span>
          
          {/* Ready for Your Maja Moment & Better Yet See Us in Person (Deck Page 5 & landing page.txt line 50) */}
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#FFFDF9] mt-3 leading-tight tracking-tight">
            Ready for Your <span className="italic font-serif text-[#E2CEB5]">Maja Moment?</span>
          </h2>
          <p className="font-serif text-2xl sm:text-3xl text-[#E5D2BA] mt-2 font-light">
            Better Yet, See Us in Person
          </p>
          <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-5" />
          <p className="mt-5 text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            Visit us at Maja Beauty Bar or get in touch with our team to book your next appointment. A welcoming beauty haven conveniently located on Al Meydan Road, Dubai.
          </p>

          {/* Quick Dual Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href={freshaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luminous w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-2xl group"
            >
              <Calendar className="w-4 h-4 text-[#1A1614]" />
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4 text-[#1A1614] group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Message Us on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Info Grid & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Details Cards (Clickable to Google Maps as instructed) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Main Location Card (Direct Google Maps Link) */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#2A231F]/80 backdrop-blur-md rounded-3xl p-7 border border-[#C5A880]/30 shadow-xl hover:shadow-2xl transition-all duration-300 block hover:border-[#C5A880] transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#C5A880]/20 flex items-center justify-center text-[#E5D2BA] group-hover:bg-[#C5A880] group-hover:text-[#1C1816] transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#E5D2BA] group-hover:text-white">
                  Open in Google Maps
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFDF9] mt-5 mb-2 font-medium">
                Maja Beauty Bar
              </h3>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                M1M Building, Al Meydan Road<br />
                Nad Al Sheba 1, Dubai, United Arab Emirates
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E5D2BA] group-hover:text-white">
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Instant Driving Directions →</span>
              </div>
            </a>

            {/* Opening Hours Card */}
            <div className="bg-[#2A231F]/80 backdrop-blur-md rounded-3xl p-7 border border-[#C5A880]/30 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C5A880]/20 flex items-center justify-center text-[#E5D2BA] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#FFFDF9] mb-1 font-medium">
                    Opening Hours
                  </h3>
                  <p className="text-base font-semibold text-[#E5D2BA]">
                    11:00 AM – 09:00 PM
                  </p>
                  <p className="text-xs text-white/70 mt-1">
                    Open Daily · Monday through Sunday
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone */}
              <a
                href="tel:+97142649989"
                className="bg-[#2A231F]/80 backdrop-blur-md rounded-2xl p-5 border border-[#C5A880]/30 shadow hover:shadow-lg transition-all hover:border-[#C5A880] block group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#C5A880]/20 flex items-center justify-center text-[#E5D2BA] mb-3 group-hover:bg-[#C5A880] group-hover:text-[#1C1816] transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-xs text-white/60">Phone Call</div>
                <div className="text-sm font-bold text-[#FFFDF9] mt-0.5">(04) 264 9989</div>
              </a>

              {/* WhatsApp */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2A231F]/80 backdrop-blur-md rounded-2xl p-5 border border-[#C5A880]/30 shadow hover:shadow-lg transition-all hover:border-[#25D366] block group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366] mb-3 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="text-xs text-white/60">WhatsApp</div>
                <div className="text-sm font-bold text-[#FFFDF9] mt-0.5">+971 50 996 4626</div>
              </a>

            </div>

          </div>

          {/* Interactive Map Visual with Direct Google Maps Link */}
          <div className="lg:col-span-7">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Click to open Google Maps directions to Maja Beauty Bar"
              className="group block relative h-[440px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden border border-[#C5A880]/40 shadow-2xl hover:shadow-amber-500/10 transition-all duration-300"
            >
              {/* Map Embed Simulation */}
              <iframe
                title="Maja Beauty Bar Location Dubai"
                src="https://maps.google.com/maps?q=Al%20Meydan%20Road,%20Nad%20Al%20Sheba%201,%20Dubai&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter saturate-[0.85] contrast-[1.05] pointer-events-none group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />

              {/* Overlay Glass Card prompting Google Maps */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md bg-[#1C1816]/90 backdrop-blur-md rounded-2xl p-5 text-white border border-white/20 shadow-2xl flex items-center justify-between gap-4 group-hover:bg-[#1C1816] transition-colors">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#E5D2BA] font-semibold">
                    Google Maps Navigation
                  </div>
                  <div className="font-serif text-xl text-white font-medium">
                    Tap to Open Directions
                  </div>
                  <div className="text-xs text-white/75 mt-0.5">
                    M1M Building, Al Meydan Road, Dubai
                  </div>
                </div>
                <div className="w-11 h-11 rounded-full bg-[#C5A880] text-[#1C1816] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg font-bold">
                  <Navigation className="w-5 h-5" />
                </div>
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}


