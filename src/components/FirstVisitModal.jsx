import React, { useState, useEffect } from 'react';
import { X, Sparkles, Calendar, MessageCircle, Copy, Check, Gift } from 'lucide-react';

export default function FirstVisitModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Check if user has already seen or closed the modal in this session
    const hasSeen = sessionStorage.getItem('maja_first_visit_seen');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2500); // Gentle 2.5s delay after page load

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('maja_first_visit_seen', 'true');
  };

  const handleCopyCode = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText('FIRST20')
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {});
    }
  };

  if (!isOpen) return null;

  const freshaUrl = "https://www.fresha.com/a/maja-beauty-bar-dubai-m1m-building-al-meydan-d8xwkzcg?utm_source=ig&utm_medium=social&utm_content=link_in_bio";
  const waPromoUrl = `https://wa.me/971509964626?text=${encodeURIComponent("Hi Maja Beauty Bar, I'd like to book my first visit and claim 20% OFF with code FIRST20. Could you please share the next available times?")}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-lg bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F6EFE6] rounded-[32px] p-8 sm:p-10 shadow-2xl border border-[#B97A86]/40 text-center overflow-hidden"
        style={{
          boxShadow: '0 25px 60px -15px rgba(58, 30, 30, 0.4), 0 0 0 1px rgba(216, 177, 183, 0.3)'
        }}
      >
        {/* Decorative corner background glows */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#F7CEC2]/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D8B1B7]/30 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close welcome offer"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#5C5048] hover:text-[#1C1816] flex items-center justify-center transition-all border border-[#B97A86]/20 shadow-sm"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative z-10">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B97A86]/15 border border-[#B97A86]/30 text-[11px] font-medium uppercase tracking-[0.2em] text-[#7B2E3A] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B97A86]" />
            <span>First Visit Privilege</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif italic text-3xl sm:text-5xl text-[#3A1E1E] leading-tight font-normal">
            Enjoy 20% OFF
          </h2>
          <p className="font-serif italic text-xl sm:text-2xl text-[#7B2E3A] mt-1 mb-3 font-normal">
            Your First Maja Sanctuary Visit
          </p>

          <p className="text-xs sm:text-sm text-[#5C5048] leading-relaxed max-w-sm mx-auto font-light">
            Welcome to Maja Beauty Bar Dubai. Indulge in our bespoke hair styling, BIAB nail artistry, lash treatments, or lymphatic massage with an exclusive welcome gift.
          </p>

          {/* Promo Code Box */}
          <div className="my-6 p-4 rounded-2xl bg-white border border-[#B97A86]/30 shadow-inner flex items-center justify-between max-w-xs mx-auto">
            <div className="text-left">
              <span className="text-[10px] uppercase tracking-wider text-[#8C7D73] block">
                Promo Code
              </span>
              <span className="font-mono text-base font-medium tracking-widest text-[#7B2E3A]">
                FIRST20
              </span>
            </div>
            <button
              onClick={handleCopyCode}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider bg-[#FAF7F2] hover:bg-[#F3E4DB] text-[#3A1E1E] border border-[#B97A86]/40 flex items-center gap-1.5 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#7B2E3A]" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Dual CTAs */}
          <div className="space-y-2.5 max-w-sm mx-auto">
            <a
              href={waPromoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="btn-maja-wine w-full py-3.5 px-5 rounded-full text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all"
            >
              <div className="w-4 h-4 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                <MessageCircle className="w-3 h-3 fill-[#25D366]" />
              </div>
              <span>Claim via WhatsApp Concierge</span>
            </a>

            <a
              href={freshaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="w-full py-3.5 px-5 rounded-full text-xs font-medium uppercase tracking-wider bg-white hover:bg-[#FAF7F2] text-[#3A1E1E] border border-[#B97A86]/30 flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-[#7B2E3A]" />
              <span>Book Online on Fresha</span>
            </a>
          </div>

          {/* Subtext and Dismiss */}
          <div className="mt-5 text-[10.5px] text-[#8C7D73] space-y-1 font-light">
            <p>Valid for first-time guests on any individual service · Inclusive of 5% UAE VAT</p>
            <button
              onClick={handleClose}
              className="text-[#7B2E3A] hover:underline font-normal text-[11px] pt-1"
            >
              Remind me later
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
