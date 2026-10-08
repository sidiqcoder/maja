import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';

export default function FloatingActions() {
  const waUrl = "https://wa.me/971509964626?text=Hi%20Maja%20Beauty%20Bar%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.";
  const igUrl = "https://www.instagram.com/majabeauty.ae";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3.5 pointer-events-auto">
      
      {/* Floating Instagram Button (Above WhatsApp as requested) */}
      <div className="group relative flex items-center">
        <span className="hidden md:block absolute right-16 px-3 py-1.5 rounded-full text-xs font-medium text-white bg-[#1C1816]/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
          Follow @majabeauty.ae
        </span>
        <a
          href={igUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Maja Beauty Bar on Instagram"
          className="w-13 h-13 p-3.5 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center glow-pulse-ig"
        >
          <Instagram className="w-6 h-6" />
        </a>
      </div>

      {/* Floating WhatsApp Button with Pulsing Animation */}
      <div className="group relative flex items-center">
        <span className="hidden md:block absolute right-16 px-3 py-1.5 rounded-full text-xs font-medium text-white bg-[#1C1816]/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
          Chat with Maja Concierge
        </span>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Maja Beauty Bar on WhatsApp"
          className="w-14 h-14 p-3.5 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center glow-pulse-wa"
        >
          <MessageCircle className="w-7 h-7 fill-white/20 stroke-white stroke-[2.2]" />
        </a>
      </div>

    </div>
  );
}

