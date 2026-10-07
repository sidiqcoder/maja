import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, ExternalLink, Navigation, Calendar, ArrowRight } from 'lucide-react';

export default function VisitUs() {
  // Google Map Search query for Maja Beauty Bar Dubai
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Maja+Beauty+Bar+Al+Meydan+Road+Dubai";
  const freshaUrl = "https://www.fresha.com/a/maja-beauty-bar-dubai-m1m-building-al-meydan-d8xwkzcg?utm_source=ig&utm_medium=social&utm_content=link_in_bio";
  const waUrl = "https://wa.me/971509964626?text=Hi%20Maja%20Beauty%20Bar%2C%20I'd%20like%20to%20book%20an%20appointment.";

  return (
    <section 
      id="visit-us" 
      className="relative min-h-screen lg:h-screen lg:max-h-[1080px] flex items-center justify-center overflow-hidden pt-20 pb-8 text-white"
    >
      
      {/* Background Image from Drive (Ambiance) with Multi-layered Luxury Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/why-maja/ambiance-main.jpg"
          alt="Maja Beauty Bar Salon Ambiance"
          className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.08] scale-105"
        />
        {/* Layered Warm Gradients for Luxury Aesthetic (Non-solid) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1816] via-[#1C1816]/75 to-[#1C1816]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1816]/90 via-[#26201C]/70 to-[#1C1816]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center my-auto">
        
        {/* Section Header with Instrument Serif Typography */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#E5D2BA] font-semibold">
            Visit Us
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFFDF9] mt-1.5 leading-tight tracking-tight">
            Ready for Your <span className="italic font-serif text-[#E2CEB5]">Maja Moment?</span>
          </h2>
          <p className="font-serif text-base sm:text-xl text-[#E5D2BA] mt-0.5 font-light">
            Better Yet, See Us in Person
          </p>
          <div className="w-14 h-0.5 bg-[#C5A880] mx-auto mt-2" />

          {/* Quick Dual Action Buttons */}
          <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-md mx-auto">
            <a
              href={freshaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luminous w-full sm:w-auto px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-2xl group"
            >
              <Calendar className="w-3.5 h-3.5 text-[#1A1614]" />
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#1A1614] group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Info Grid & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
          
          {/* Info Details Cards (Clickable to Google Maps as instructed) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5">
            
            {/* Main Location Card (Direct Google Maps Link) */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#2A231F]/80 backdrop-blur-md rounded-2xl p-4 sm:p-4.5 border border-[#C5A880]/30 shadow-xl hover:shadow-2xl transition-all duration-300 block hover:border-[#C5A880] transform hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between">
                <div className="w-9 h-9 rounded-xl bg-[#C5A880]/20 flex items-center justify-center text-[#E5D2BA] group-hover:bg-[#C5A880] group-hover:text-[#1C1816] transition-colors">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <span className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-[#E5D2BA] group-hover:text-white">
                  Open in Google Maps
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>

              <h3 className="font-serif text-lg sm:text-xl text-[#FFFDF9] mt-2 mb-0.5 font-medium">
                Maja Beauty Bar
              </h3>
              <p className="text-[11.5px] text-white/80 leading-relaxed font-light">
                M1M Building, Al Meydan Road<br />
                Nad Al Sheba 1, Dubai, United Arab Emirates
              </p>
              <div className="mt-2 inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-[#E5D2BA] group-hover:text-white">
                <Navigation className="w-3 h-3" />
                <span>Get Driving Directions →</span>
              </div>
            </a>

            {/* Opening Hours Card */}
            <div className="bg-[#2A231F]/80 backdrop-blur-md rounded-2xl p-4 border border-[#C5A880]/30 shadow-xl">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#C5A880]/20 flex items-center justify-center text-[#E5D2BA] shrink-0">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg text-[#FFFDF9] mb-0.5 font-medium">
                    Opening Hours
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#E5D2BA]">
                    11:00 AM – 09:00 PM
                  </p>
                  <p className="text-[10.5px] text-white/70">
                    Open Daily · Monday through Sunday
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              
              {/* Phone */}
              <a
                href="tel:+97142649989"
                className="bg-[#2A231F]/80 backdrop-blur-md rounded-xl p-3 border border-[#C5A880]/30 shadow hover:shadow-lg transition-all hover:border-[#C5A880] block group"
              >
                <div className="w-6 h-6 rounded-lg bg-[#C5A880]/20 flex items-center justify-center text-[#E5D2BA] mb-1.5 group-hover:bg-[#C5A880] group-hover:text-[#1C1816] transition-colors">
                  <Phone className="w-3 h-3" />
                </div>
                <div className="text-[9.5px] text-white/60">Phone Call</div>
                <div className="text-[11.5px] font-bold text-[#FFFDF9] mt-0.5">(04) 264 9989</div>
              </a>

              {/* WhatsApp */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2A231F]/80 backdrop-blur-md rounded-xl p-3 border border-[#C5A880]/30 shadow hover:shadow-lg transition-all hover:border-[#C5A880] block group"
              >
                <div className="w-6 h-6 rounded-lg bg-[#25D366]/20 flex items-center justify-center text-[#25D366] mb-1.5 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle className="w-3 h-3" />
                </div>
                <div className="text-[9.5px] text-white/60">WhatsApp Direct</div>
                <div className="text-[11.5px] font-bold text-[#FFFDF9] mt-0.5">+971 50 996 4626</div>
              </a>

            </div>

          </div>

          {/* Interactive Google Maps Embed (Exact Dubai Coordinates) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#C5A880]/40 shadow-2xl relative min-h-[260px] lg:min-h-full">
            <iframe
              title="Maja Beauty Bar Dubai Google Maps Location"
              src="https://maps.google.com/maps?q=Maja%20Beauty%20Bar%20M1M%20Building%20Al%20Meydan%20Road%20Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-[1.1] contrast-[1.05]"
            />
            
            {/* Overlay click to open full Google Maps */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-[#1C1816]/90 backdrop-blur-md text-white border border-[#C5A880]/50 text-[10.5px] font-semibold flex items-center gap-1.5 hover:bg-[#C5A880] hover:text-[#1C1816] transition-colors shadow-lg"
            >
              <Navigation className="w-3 h-3" />
              <span>Open in Google Maps App</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

