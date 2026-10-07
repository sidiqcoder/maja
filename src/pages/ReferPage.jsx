import React, { useState, useRef } from 'react';
import { 
  Heart, 
  Gift, 
  Copy, 
  Check, 
  AlertCircle,
  ArrowRight,
  MessageCircle
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

  // Official Maja Beauty Bar WhatsApp number
  const WA_NUMBER = '971509964626';

  // Build the booking link that the friend will click (opens Maja WhatsApp with pre-filled referral credit claim)
  const currentName = generatedName || referrerName.trim() || 'a friend';
  const bookingMsg = `Hi Maja Beauty Bar, I was referred by ${currentName}. I'd like to book an appointment and claim my AED 50 referral discount on my first visit!`;
  const bookingLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(bookingMsg)}`;

  // Build the share message that the referrer sends to their friends via WhatsApp
  const shareMsg = `Hey! I love Maja Beauty Bar in Dubai (Meydan) — my go-to luxury beauty routine. Use my referral link and get AED 50 OFF your first visit!\n\nBook here: ${bookingLink}`;
  const shareWhatsAppUrl = `https://wa.me/?text=${encodeURIComponent(shareMsg)}`;

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

    // Smooth scroll down to result container (like Blush N Curls)
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
      navigator.clipboard.writeText(bookingLink)
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
    const el = document.getElementById('generate-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (inputRef.current) inputRef.current.focus();
    }
  };

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-[#E8DAC7]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#E2CEB5]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Header (Mirrored from Blush N Curls) */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/30 text-xs font-semibold uppercase tracking-wider text-[#9E7D47] mb-4">
            <span>Share the Love</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1816] leading-tight">
            Refer a Friend
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#5C5048] max-w-2xl mx-auto font-light leading-relaxed">
            Love your experience at Maja Beauty Bar? Share it with a friend and you both get rewarded with AED 50 off your treatments.
          </p>
        </div>

        {/* 2. 3-Step "How It Works" (Mirrored from Blush N Curls) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20 max-w-5xl mx-auto">
          
          {/* Step 1 */}
          <div className="bg-luxury-card rounded-3xl p-8 border border-[#C5A880]/30 shadow-lg text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-[#C5A880]/20 flex items-center justify-center text-[#8C6D3B] font-serif text-2xl font-bold mb-5">
              1
            </div>
            <h3 className="font-serif text-2xl text-[#1C1816] mb-3">
              Generate Your Link
            </h3>
            <p className="text-xs sm:text-sm text-[#5C5048] leading-relaxed">
              Enter your name below to create a personalised WhatsApp referral booking link.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-luxury-card rounded-3xl p-8 border border-[#C5A880]/30 shadow-lg text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-[#C5A880]/20 flex items-center justify-center text-[#8C6D3B] font-serif text-2xl font-bold mb-5">
              2
            </div>
            <h3 className="font-serif text-2xl text-[#1C1816] mb-3">
              Share with Friends
            </h3>
            <p className="text-xs sm:text-sm text-[#5C5048] leading-relaxed">
              Send the link to friends via WhatsApp. They book directly through your referral.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-luxury-card rounded-3xl p-8 border border-[#C5A880]/30 shadow-lg text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-[#C5A880]/20 flex items-center justify-center text-[#8C6D3B] font-serif text-2xl font-bold mb-5">
              3
            </div>
            <h3 className="font-serif text-2xl text-[#1C1816] mb-3">
              Both Get Rewarded
            </h3>
            <p className="text-xs sm:text-sm text-[#5C5048] leading-relaxed">
              Your friend gets <strong className="text-[#1C1816]">AED 50 off their first visit</strong> and you earn <strong className="text-[#1C1816]">AED 50 credit</strong>.
            </p>
          </div>

        </div>

        {/* 3. Referral Link Generator (Exact Blush N Curls Form & Output) */}
        <section id="generate-section" className="max-w-xl mx-auto mb-20 scroll-mt-28">
          <div className="bg-warm-canvas rounded-3xl p-8 sm:p-12 border border-[#C5A880]/35 shadow-2xl">
            
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-bold">
                Your Referral Link
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1816] mt-2">
                Generate &amp; Share
              </h2>
              <p className="text-xs sm:text-sm text-[#7A6F68] mt-3 leading-relaxed">
                Enter your name and we will create a personalised WhatsApp booking link you can share with friends.
              </p>
            </div>

            <form onSubmit={handleGenerate} className="space-y-5">
              {/* Name Input */}
              <div>
                <label 
                  htmlFor="referrerName"
                  className="block text-xs font-bold uppercase tracking-wider text-[#1C1816] mb-2"
                >
                  Your Name *
                </label>
                <input
                  ref={inputRef}
                  id="referrerName"
                  type="text"
                  placeholder="e.g. Sarah"
                  value={referrerName}
                  onChange={(e) => {
                    setReferrerName(e.target.value);
                    if (inputError) setInputError(false);
                  }}
                  className={`w-full px-4 py-3.5 rounded-xl bg-white border transition-all text-sm text-[#1C1816] placeholder:text-[#9E948B] focus:outline-none ${
                    inputError 
                      ? 'border-red-500 ring-2 ring-red-200' 
                      : 'border-[#C5A880]/40 focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20'
                  }`}
                />
                {inputError && (
                  <p className="text-xs text-red-500 mt-1.5 font-medium">
                    Please enter your name to generate your link.
                  </p>
                )}
              </div>

              {/* Generate Button */}
              <button
                type="submit"
                className="btn-luminous w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Generate My Referral Link</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Result (Hidden initially, exact structure of Blush N Curls) */}
            {hasGenerated && (
              <div 
                ref={resultRef}
                className="mt-8 pt-8 border-t border-[#C5A880]/25 space-y-5 transition-all duration-300"
              >
                {/* 1. Referral Link Display Box */}
                <div className="bg-[#FFFDF9] rounded-2xl p-5 border border-[#C5A880]/40 shadow-sm">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1C1816] mb-2">
                    Booking Link for Your Friend
                  </label>
                  <div className="flex gap-2 items-stretch">
                    <input
                      ref={linkInputRef}
                      type="text"
                      readOnly
                      value={bookingLink}
                      onClick={(e) => e.target.select()}
                      className="flex-1 min-w-0 px-3.5 py-2.5 rounded-xl bg-white border border-[#C5A880]/30 text-xs text-[#5C5048] font-mono select-all focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleCopy}
                      className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shrink-0 ${
                        copied 
                          ? 'bg-[#25D366] text-white shadow-md' 
                          : 'bg-[#1C1816] hover:bg-[#3E342F] text-white'
                      }`}
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="mt-2.5 text-[11px] text-[#7A6F68] leading-relaxed">
                    When your friend clicks this link, WhatsApp opens with a pre-filled message mentioning your name.
                  </p>
                </div>

                {/* 2. Direct Share on WhatsApp Button (Blush N Curls style) */}
                <div>
                  <a
                    href={shareWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center gap-2.5 shadow-lg hover:shadow-xl transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>Share on WhatsApp</span>
                  </a>
                  <p className="text-center text-xs text-[#7A6F68] mt-2.5">
                    This will open WhatsApp with a pre-filled message you can send to your friends.
                  </p>
                </div>

              </div>
            )}

          </div>
        </section>

        {/* 4. What You Both Get (Rewards section from Blush N Curls) */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-bold">
              Rewards
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1816] mt-2">
              What You Both Get
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Friend Gets */}
            <div className="bg-luxury-card rounded-3xl p-8 sm:p-10 border-t-4 border-[#C5A880] border border-[#C5A880]/30 shadow-lg text-center flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#C5A880]/15 flex items-center justify-center text-[#8C6D3B] mx-auto mb-4">
                  <Gift className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#1C1816] mb-2">
                  Your Friend Gets
                </h3>
                <div className="font-serif text-4xl text-[#8C6D3B] font-bold my-3">
                  AED 50 OFF
                </div>
                <p className="text-xs sm:text-sm text-[#5C5048] leading-relaxed">
                  Applied to their very first visit at Maja Beauty Bar on any salon or spa treatment (minimum spend AED 200).
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#C5A880]/20 text-[11px] font-semibold text-[#8C6D3B]">
                First Visit Privilege
              </div>
            </div>

            {/* Referrer Earns */}
            <div className="bg-luxury-card rounded-3xl p-8 sm:p-10 border-t-4 border-[#8C6D3B] border border-[#C5A880]/30 shadow-lg text-center flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#C5A880]/15 flex items-center justify-center text-[#8C6D3B] mx-auto mb-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#1C1816] mb-2">
                  You Earn
                </h3>
                <div className="font-serif text-4xl text-[#8C6D3B] font-bold my-3">
                  AED 50 Credit
                </div>
                <p className="text-xs sm:text-sm text-[#5C5048] leading-relaxed">
                  Automatically added to your client account after your friend completes her first appointment.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#C5A880]/20 text-[11px] font-semibold text-[#8C6D3B]">
                Unlimited Referrals
              </div>
            </div>

          </div>
        </div>

        {/* 5. Frequently Asked Questions (Blush N Curls FAQ style) */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-bold">
              Good to Know
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1816] mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-[#C5A880]/30 shadow-md divide-y divide-[#C5A880]/20">
            
            <div className="py-4 first:pt-0">
              <h4 className="font-semibold text-sm sm:text-base text-[#1C1816] mb-1.5">
                How many friends can I refer?
              </h4>
              <p className="text-xs sm:text-sm text-[#5C5048] leading-relaxed">
                There is no limit! Refer as many besties as you like and earn AED 50 salon credit for every friend who completes her first visit.
              </p>
            </div>

            <div className="py-4">
              <h4 className="font-semibold text-sm sm:text-base text-[#1C1816] mb-1.5">
                When do I get my AED 50 credit?
              </h4>
              <p className="text-xs sm:text-sm text-[#5C5048] leading-relaxed">
                Your AED 50 credit is recorded on your Maja client profile immediately once your friend finishes her first appointment with us.
              </p>
            </div>

            <div className="py-4">
              <h4 className="font-semibold text-sm sm:text-base text-[#1C1816] mb-1.5">
                What treatments qualify for the referral offer?
              </h4>
              <p className="text-xs sm:text-sm text-[#5C5048] leading-relaxed">
                All services across our suites — Nails, Hair, Lashes, Brows, Waxing, and Massages qualify, with a minimum spend of AED 200.
              </p>
            </div>

            <div className="py-4 last:pb-0">
              <h4 className="font-semibold text-sm sm:text-base text-[#1C1816] mb-1.5">
                How does my friend claim the AED 50 discount?
              </h4>
              <p className="text-xs sm:text-sm text-[#5C5048] leading-relaxed">
                They simply click your WhatsApp referral link to start booking, which automatically includes your name in their WhatsApp booking inquiry.
              </p>
            </div>

          </div>
        </div>

        {/* 6. Terms and Conditions (Deck page 30 & Menu page 5) */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white/60 border border-[#C5A880]/25 shadow-sm mb-16">
          <h4 className="text-xs uppercase tracking-widest text-[#9E7D47] font-bold mb-3 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            <span>Terms &amp; Conditions — Maja Girls Club Referral</span>
          </h4>
          <ul className="space-y-2 text-xs text-[#5C5048] leading-relaxed">
            <li>• Only one loyalty reward or discount may be used per visit. Benefits cannot be combined with other offers, seasonal packages, or promotions.</li>
            <li>• Referral rewards cannot be redeemed during Eid, UAE public holidays, New Year’s Eve, or New Year’s Day.</li>
            <li>• Referral discounts are valid for new clients only, with a minimum spend of AED 200 on their first appointment.</li>
          </ul>
        </div>

        {/* 7. Bottom CTA (Blush N Curls style) */}
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-[#2D2622] to-[#1C1816] rounded-3xl p-8 sm:p-12 text-white border border-[#C5A880]/30 shadow-2xl">
          <h3 className="font-serif text-3xl sm:text-4xl text-[#FFFDF9] mb-3">
            Start Sharing Today
          </h3>
          <p className="text-xs sm:text-sm text-white/80 max-w-lg mx-auto mb-6 leading-relaxed">
            The more friends you invite, the more beauty credits you earn. Generate your link in seconds and treat yourself and your friends.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToGenerate}
              className="btn-luminous py-3.5 px-8 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              Generate My Link
            </button>
            <a
              href="https://wa.me/971509964626"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-8 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/30 transition-colors"
            >
              Contact Maja on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

