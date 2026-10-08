import React from 'react';
import { Instagram, MessageCircle, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Maja+Beauty Bar+Al+Meydan+Road+Dubai";
  const igUrl = "https://www.instagram.com/majabeauty.ae";
  const waUrl = "https://wa.me/971509964626";

  return (
    <footer className="bg-dark-mesh text-[#EAE2D7] pt-20 pb-12 border-t border-[#C5A880]/20 relative overflow-hidden">
      
      {/* Subtle gold ambient glow in footer background */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Column 1: Cream Logo Only (No text underneath as explicitly instructed in landing page.txt line 57) */}
          <div className="lg:col-span-2 flex flex-col items-start justify-start">
            <button
              onClick={() => { onNavigate('home'); scrollToTop(); }}
              className="focus:outline-none group mb-6 text-left"
              aria-label="Maja Beauty Bar Home"
            >
              {/* Logo in Cream color as explicitly requested */}
              <img
                src="/images/logo-cream.png"
                alt="Maja Beauty Bar"
                className="h-12 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={igUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Maja Beauty Bar"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#E5D2BA] hover:text-[#E1306C] hover:border-[#E1306C] hover:bg-white/10 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Maja Beauty Bar"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#E5D2BA] hover:text-[#25D366] hover:border-[#25D366] hover:bg-white/10 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="tel:+97142649989"
                aria-label="Call Maja Beauty Bar"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#E5D2BA] hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C5A880] font-medium mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button 
                  onClick={() => { onNavigate('home'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('services'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('packages'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Packages & Offers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('about'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  About Us & Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('refer'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Refer a Friend
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Menu */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C5A880] font-medium mb-5">
              Treatments
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button 
                  onClick={() => { onNavigate('services', 'nails'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Nails & BIAB
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('services', 'hair'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Hair & Balayage
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('services', 'lashes-brows'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Lashes & Brows
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('services', 'waxing'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Body Waxing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('services', 'massages'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Lymphatic Massages
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C5A880] font-medium mb-5">
              Visit Maja
            </h4>
            <div className="space-y-3.5 text-sm">
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-white transition-colors group"
              >
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  M1M Building, Al Meydan Road, Nad Al Sheba 1, Dubai
                </span>
              </a>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href="tel:+97142649989" className="hover:text-white transition-colors">
                  (04) 264 9989
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +971 50 996 4626
                </a>
              </div>

              <div className="pt-2 text-xs text-white/60">
                Daily: 11:00 AM – 09:00 PM
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright & Scroll to Top */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Maja Beauty Bar Dubai. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Prices inclusive of 5% VAT</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#C5A880] hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

