import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, ExternalLink, Navigation } from 'lucide-react';

export default function VisitUs() {
  // Google Map Search query for Maja Beauty Bar Dubai
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Maja+Beauty+Bar+Al+Meydan+Road+Dubai";

  return (
    <section id="visit-us" className="py-20 lg:py-28 relative overflow-hidden">
      
      {/* Non-solid subtle ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F3ECE1]/70 to-[#FAF7F2] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A6865A] font-semibold">
            Find Us
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1C1816] mt-3 leading-tight">
            Visit Maja Beauty Bar
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-4" />
          <p className="mt-4 text-sm sm:text-base text-[#5C5048] max-w-xl mx-auto">
            A welcoming beauty haven conveniently located on Al Meydan Road, Dubai.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Details Cards (Clickable to Google Maps as instructed) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Main Location Card */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-luxury-card rounded-3xl p-7 border border-[#C5A880]/30 shadow-lg hover:shadow-2xl transition-all duration-300 block hover:border-[#C5A880] transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#C5A880]/15 flex items-center justify-center text-[#9E7D47] group-hover:bg-[#C5A880] group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#9E7D47] group-hover:text-[#1C1816]">
                  Open in Google Maps
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#1C1816] mt-5 mb-2">
                Salon Location
              </h3>
              <p className="text-sm text-[#4A3E39] leading-relaxed font-medium">
                M1M Building, Al Meydan Road<br />
                Nad Al Sheba 1, Dubai, United Arab Emirates
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A6865A] group-hover:text-[#1C1816]">
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Instant Driving Directions</span>
              </div>
            </a>

            {/* Opening Hours Card */}
            <div className="bg-luxury-card rounded-3xl p-7 border border-[#C5A880]/30 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C5A880]/15 flex items-center justify-center text-[#9E7D47] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#1C1816] mb-1">
                    Opening Hours
                  </h3>
                  <p className="text-base font-semibold text-[#2D2622]">
                    11:00 AM – 09:00 PM
                  </p>
                  <p className="text-xs text-[#7A6F68] mt-1">
                    Open Daily (Monday through Sunday)
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone */}
              <a
                href="tel:+97142649989"
                className="bg-luxury-card rounded-2xl p-5 border border-[#C5A880]/30 shadow hover:shadow-md transition-all hover:border-[#C5A880] block"
              >
                <div className="w-9 h-9 rounded-xl bg-[#C5A880]/15 flex items-center justify-center text-[#9E7D47] mb-3">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-xs text-[#7A6F68]">Direct Call</div>
                <div className="text-sm font-bold text-[#1C1816] mt-0.5">(04) 264 9989</div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/971509964626"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-luxury-card rounded-2xl p-5 border border-[#C5A880]/30 shadow hover:shadow-md transition-all hover:border-[#25D366] block"
              >
                <div className="w-9 h-9 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#25D366] mb-3">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="text-xs text-[#7A6F68]">WhatsApp Chat</div>
                <div className="text-sm font-bold text-[#1C1816] mt-0.5">+971 50 996 4626</div>
              </a>

            </div>

          </div>

          {/* Interactive Map Visual with Direct Google Maps Link */}
          <div className="lg:col-span-7">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Click to navigate with Google Maps"
              className="group block relative h-[420px] lg:h-full min-h-[380px] rounded-3xl overflow-hidden border border-[#C5A880]/40 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Map Embed Simulation / Interactive Iframe */}
              <iframe
                title="Maja Beauty Bar Location Dubai"
                src="https://maps.google.com/maps?q=Al%20Meydan%20Road,%20Nad%20Al%20Sheba%201,%20Dubai&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter saturate-[0.85] contrast-[1.05] pointer-events-none group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />

              {/* Overlay Glass Card prompting Google Maps */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md bg-[#1C1816]/85 backdrop-blur-md rounded-2xl p-5 text-white border border-white/20 shadow-2xl flex items-center justify-between gap-4 group-hover:bg-[#1C1816] transition-colors">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#E5D2BA] font-semibold">
                    Google Maps Navigation
                  </div>
                  <div className="font-serif text-lg text-white font-medium">
                    Tap to open directions
                  </div>
                  <div className="text-xs text-white/75 mt-0.5">
                    M1M Building, Al Meydan Road
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#C5A880] text-[#1C1816] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
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

