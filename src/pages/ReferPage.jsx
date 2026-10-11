import React, { useState, useRef } from 'react';
import { 
  Heart, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowRight, 
  MessageCircle,
  ShieldCheck,
  Share2
} from 'lucide-react';

export default function ReferPage() {
  const [referrerName, setReferrerName] = useState('');
  const [hasGenerated, setHasGenerated] = useState(false);
  const [generatedName, setGeneratedName] = useState('');
  const [copied, setCopied] = useState(false);
  const [inputError, setInputError] = useState(false);

  const resultRef = useRef(null);
  const inputRef = useRef(null);
  const linkInputRef = useRef(null);

  // Official Maja Beauty Bar WhatsApp
  const WA_NUMBER = '971509964626';

  const currentName = generatedName || referrerName.trim() || 'My Bestie';

  // Direct WhatsApp booking message to Maja (Direct 1-on-1 Chat)
  const directBookingMsg = `Hi Maja Beauty Bar, I'm booking an appointment through the Maja Girls Club referral circle (referred by ${currentName}). I'd love to claim the AED 50 first visit welcome gift (minimum spend AED 200). Could you please share available appointments?`;
  const directWhatsAppChatUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(directBookingMsg)}`;

  // Share text that referrer sends to friends
  const shareText = `Hey darling! I wanted to share my go-to luxury beauty spot in Dubai — Maja Beauty Bar (Meydan). Here's an exclusive invitation for AED 50 OFF your first visit (minimum spend AED 200):\n\nBook directly on WhatsApp with Maja: ${directWhatsAppChatUrl}`;
  const shareWhatsAppUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;

  const handleGenerate = (e) => {
    if (e) e.preventDefault();
    const clean = referrerName.trim();
    if (!clean) {
      setInputError(true);
      if (inputRef.current) inputRef.current.focus();
      setTimeout(() => setInputError(false), 2500);
      return;
    }

    setGeneratedName(clean);
    setHasGenerated(true);
    setInputError(false);

    setTimeout(() => {
      if (resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };

  const handleCopy = () => {
    if (linkInputRef.current) {
      linkInputRef.current.select();
      linkInputRef.current.setSelectionRange(0, 99999);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(directWhatsAppChatUrl)
        .then(() => triggerCopied())
        .catch(() => fallbackCopy());
    } else {
      fallbackCopy();
    }
  };

  const fallbackCopy = () => {
    try {
      document.execCommand('copy');
    } catch (_) {}
    triggerCopied();
  };

  const triggerCopied = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToGenerate = () => {
    const el = document.getElementById('pass-generator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (inputRef.current) inputRef.current.focus();
    }
  };

  return (
    <div className="pt-28 pb-24 relative overflow-hidden bg-[#FAF5F2]">
      
      {/* Background ambient luxury mesh in Maja Peach, Blush & Nude palette */}
      <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-[#F7CEC2]/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-5 w-[500px] h-[500px] bg-[#D8B1B7]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-[#F3E4DB]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Header Hero: Maja Girls Club & Referral Circle */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B97A86]/15 border border-[#B97A86]/30 text-xs font-medium uppercase tracking-[0.2em] text-[#7B2E3A] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B97A86]" />
            <span>Maja Girls Club · Member Privileges</span>
          </div>

          <h1 className="font-serif italic text-4xl sm:text-6xl text-[#3A1E1E] leading-tight font-normal">
            The Referral Circle
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#3A1E1E]/80 max-w-2xl mx-auto font-light leading-relaxed">
            Because beauty rituals are always sweeter shared. Introduce your friends to Maja Beauty Bar and celebrate together with exclusive club benefits.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={scrollToGenerate}
              className="btn-maja-wine px-7 py-3 rounded-full text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-lg"
            >
              <span>Create Your Invitation Pass</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 2. Maja Girls Club Privileges: 3 Cards matching Drive without icons */}
        <div className="mb-20 max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B97A86] font-medium">
              Curated Privileges
            </span>
            <h2 className="font-serif italic text-3xl sm:text-4xl text-[#3A1E1E] font-normal mt-1">
              Maja Girls Club
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-[#7B2E3A] mt-1">
              Beauty that gives back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 1: Better Together (Referral) */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-[#B97A86]/25 shadow-[0_10px_35px_rgba(58,30,30,0.04)] hover:shadow-[0_15px_40px_rgba(185,122,134,0.15)] transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[10px] font-medium uppercase tracking-widest text-[#B97A86]">
                  Referral Rewards
                </span>
                <h3 className="font-serif uppercase tracking-wider text-2xl text-[#3A1E1E] font-medium mt-2 mb-3">
                  BETTER TOGETHER
                </h3>
                <p className="text-xs sm:text-sm text-[#3A1E1E]/80 leading-relaxed font-light">
                  Refer a friend and she receives <strong className="text-[#3A1E1E] font-medium">AED 50 OFF</strong> her first visit with a minimum spend of AED 200. Once completed, you receive <strong className="text-[#3A1E1E] font-medium">AED 50 OFF</strong> on your next visit.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F3E4DB] flex items-center justify-between text-[11px] text-[#7B2E3A] font-medium">
                <span>Min. Spend AED 200</span>
                <span>Both Receive AED 50</span>
              </div>
            </div>

            {/* Card 2: It's Your Week (Birthday) */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-[#B97A86]/25 shadow-[0_10px_35px_rgba(58,30,30,0.04)] hover:shadow-[0_15px_40px_rgba(185,122,134,0.15)] transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[10px] font-medium uppercase tracking-widest text-[#B97A86]">
                  Birthday Treat
                </span>
                <h3 className="font-serif uppercase tracking-wider text-2xl text-[#3A1E1E] font-medium mt-2 mb-3">
                  IT’S YOUR WEEK
                </h3>
                <p className="text-xs sm:text-sm text-[#3A1E1E]/80 leading-relaxed font-light">
                  Enjoy <strong className="text-[#3A1E1E] font-medium">20% OFF</strong> one visit during your birthday week. A valid Emirates ID must be presented to redeem the offer.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F3E4DB] flex items-center justify-between text-[11px] text-[#7B2E3A] font-medium">
                <span>20% OFF</span>
                <span>Birthday Week</span>
              </div>
            </div>

            {/* Card 3: Every Visit Counts (Points & Loyalty) */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-[#B97A86]/25 shadow-[0_10px_35px_rgba(58,30,30,0.04)] hover:shadow-[0_15px_40px_rgba(185,122,134,0.15)] transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[10px] font-medium uppercase tracking-widest text-[#B97A86]">
                  Loyalty Points
                </span>
                <h3 className="font-serif uppercase tracking-wider text-2xl text-[#3A1E1E] font-medium mt-2 mb-3">
                  EVERY VISIT COUNTS
                </h3>
                <p className="text-xs sm:text-sm text-[#3A1E1E]/80 leading-relaxed font-light">
                  Earn 1 point for every AED 1 spent, 10 points when you book online and 25 points when you leave a review. Complete 10 appointments and receive 1,000 bonus points. Every 100 points gives you AED 1 towards your next visit.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F3E4DB] flex items-center justify-between text-[11px] text-[#7B2E3A] font-medium">
                <span>100 Points = AED 1</span>
                <span>Bonus Milestones</span>
              </div>
            </div>

          </div>
        </div>

        {/* 3. Bespoke Referral Pass Generator */}
        <section id="pass-generator" className="max-w-2xl mx-auto mb-20 scroll-mt-28">
          <div className="bg-gradient-to-b from-white to-[#FDFBF7] rounded-[32px] p-8 sm:p-12 border border-[#B97A86]/35 shadow-2xl relative overflow-hidden">
            
            {/* Top decorative badge */}
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] bg-[#D8B1B7]/25 text-[#7B2E3A] font-medium mb-2">
                Personal Invitation Pass
              </span>
              <h2 className="font-serif italic text-3xl sm:text-4xl text-[#3A1E1E] font-normal">
                Generate Your Maja Pass
              </h2>
              <p className="text-xs sm:text-sm text-[#8C7474] mt-2 font-light">
                Enter your full name to personalise your WhatsApp booking invitation for your friends.
              </p>
            </div>

            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label 
                  htmlFor="referrerName"
                  className="block text-xs font-medium uppercase tracking-wider text-[#3A1E1E] mb-2"
                >
                  Your Full Name *
                </label>
                <div className="relative">
                  <input
                    ref={inputRef}
                    id="referrerName"
                    type="text"
                    placeholder="Enter your full name"
                    value={referrerName}
                    onChange={(e) => {
                      setReferrerName(e.target.value);
                      if (inputError) setInputError(false);
                    }}
                    className={`w-full px-4 py-3.5 rounded-xl bg-white border transition-all text-sm text-[#3A1E1E] placeholder:text-[#8C7474] focus:outline-none ${
                      inputError 
                        ? 'border-red-500 ring-2 ring-red-200' 
                        : 'border-[#B97A86]/40 focus:border-[#7B2E3A] focus:ring-2 focus:ring-[#D8B1B7]/30'
                    }`}
                  />
                </div>
                {inputError && (
                  <p className="text-xs text-red-500 mt-1.5 font-medium">
                    Please enter your full name to create your pass.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn-maja-wine w-full py-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] transition-all"
              >
                <span>Create Invitation Pass</span>
                <ArrowRight className="w-4 h-4 text-[#F7CEC2]" />
              </button>
            </form>

            {/* Generated Pass & Direct Action Hub */}
            {hasGenerated && (
              <div 
                ref={resultRef}
                className="mt-8 pt-8 border-t border-[#B97A86]/25 space-y-6 transition-all duration-300"
              >
                {/* Visual Pass Card */}
                <div className="bg-gradient-to-br from-[#3A1E1E] via-[#2A1414] to-[#231012] rounded-2xl p-6 text-white border border-[#D8B1B7]/40 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#D8B1B7]/15 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#F7CEC2] font-medium">
                      Maja Girls Club Pass
                    </span>
                    <span className="text-[11px] text-[#D8B1B7] font-medium">
                      AED 50 Welcome Gift
                    </span>
                  </div>

                  <h3 className="font-serif italic text-2xl sm:text-3xl text-white font-normal leading-tight mb-1">
                    Special Invitation from {currentName}
                  </h3>
                  <p className="text-xs text-[#F3E4DB]/80 font-light leading-relaxed mb-4">
                    Valid for AED 50 off your first appointment at Maja Beauty Bar Dubai across hair, nails, lash, wax, or massage rituals with a minimum spend of AED 200.
                  </p>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-[#F3E4DB]/60">
                    <span>M1M Building, Al Meydan Road</span>
                    <span>Minimum spend AED 200</span>
                  </div>
                </div>

                {/* Direct Action 1: Direct 1-on-1 WhatsApp Chat with Maja */}
                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-[#3A1E1E] mb-2">
                    Action 1: Chat Directly with Maja on WhatsApp
                  </label>
                  <a
                    href={directWhatsAppChatUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-xl text-xs font-medium uppercase tracking-wider bg-[#7B2E3A] hover:bg-[#8C3745] text-white flex items-center justify-center gap-2.5 shadow-lg transition-all border border-[#D8B1B7]/30 group"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
                    </div>
                    <span>Open Direct WhatsApp Chat with Maja</span>
                  </a>
                  <p className="text-[11px] text-[#8C7474] mt-2 text-center">
                    This connects straight to Maja (+971 50 996 4626) with your referral note pre-filled.
                  </p>
                </div>

                {/* Direct Action 2: Share with Friends & Copy */}
                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-[#3A1E1E] mb-2">
                    Action 2: Share with Your Friends
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={shareWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl text-xs font-medium uppercase tracking-wider bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopy}
                      className={`py-3 px-4 rounded-xl text-xs font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                        copied 
                          ? 'bg-[#3A1E1E] text-white' 
                          : 'bg-white hover:bg-[#F3E4DB] text-[#3A1E1E] border border-[#B97A86]/40'
                      }`}
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#25D366]" />
                          <span>Link Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#7B2E3A]" />
                          <span>Copy Invitation Link</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Readonly link preview */}
                <div className="bg-[#F3E4DB]/40 rounded-xl p-3 border border-[#B97A86]/30">
                  <input
                    ref={linkInputRef}
                    type="text"
                    readOnly
                    value={directWhatsAppChatUrl}
                    onClick={(e) => e.target.select()}
                    className="w-full bg-transparent text-[11px] text-[#3A1E1E]/80 font-mono select-all focus:outline-none truncate"
                  />
                </div>

              </div>
            )}

          </div>
        </section>

        {/* 4. Terms and Conditions */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-[#B97A86]/25 shadow-sm mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#7B2E3A] font-medium mb-3">
            <ShieldCheck className="w-4 h-4 text-[#B97A86]" />
            <span>Maja Girls Club · Terms &amp; Conditions</span>
          </div>
          <ul className="space-y-2.5 text-xs text-[#3A1E1E]/80 leading-relaxed font-light">
            <li>• Only one loyalty reward or discount may be used per visit. Benefits cannot be combined with other offers, promotions or discount cards.</li>
            <li>• Loyalty rewards and discounts cannot be redeemed during Eid, UAE public holidays, New Year’s Eve or New Year’s Day.</li>
            <li>• Referral rewards are issued after the new client completes her first appointment. The referred guest receives AED 50 OFF her first visit (minimum spend of AED 200), and the referrer receives AED 50 OFF on her next visit. Referral credits do not expire and remain valid permanently.</li>
            <li>• Rewards cannot be combined with seasonal promotional packages, discount cards like Fazaa or Essad cards nor redeemed during Eid or UAE Public Holidays.</li>
            <li>• The birthday offer provides 20% OFF one visit during the client’s birthday week. A valid Emirates ID must be presented to redeem the offer.</li>
            <li>• Advance booking is required via WhatsApp or online. All service prices are inclusive of 5% UAE VAT.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
