import React, { useState } from 'react';
import { 
  Heart, 
  Gift, 
  Sparkles, 
  Award, 
  MessageCircle, 
  Copy, 
  Check, 
  Share2, 
  AlertCircle,
  Crown,
  Calendar
} from 'lucide-react';

export default function ReferPage() {
  const [yourName, setYourName] = useState('');
  const [friendName, setFriendName] = useState('');
  const [friendPhone, setFriendPhone] = useState('');
  const [copied, setCopied] = useState(false);

  const defaultMessage = `Hey ${friendName.trim() || 'babe'}, you have to try Maja Beauty Bar in Dubai! I'm sharing AED 50 OFF your first appointment so we can both treat ourselves. Book here: https://majabeautybar.ae (Mention ${yourName.trim() || 'me'} when booking!) ✨`;

  const getWhatsAppShareUrl = () => {
    const encoded = encodeURIComponent(defaultMessage);
    if (friendPhone.trim()) {
      const cleanPhone = friendPhone.replace(/[^0-9]/g, '');
      return `https://wa.me/${cleanPhone}?text=${encoded}`;
    }
    return `https://wa.me/?text=${encoded}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(defaultMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-[#E8DAC7]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#E2CEB5]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/30 text-xs font-semibold uppercase tracking-wider text-[#9E7D47] mb-4">
            <Heart className="w-3.5 h-3.5 text-[#C5A880] fill-[#C5A880]/20" />
            <span>Maja Girls Club</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1816] leading-tight">
            Beauty That Gives Back.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#5C5048] max-w-2xl mx-auto font-light leading-relaxed">
            Enjoy more from every visit with birthday privileges, loyalty points, and referral rewards for you and your best friends.
          </p>
        </div>

        {/* 4 Pillars of Maja Girls Club (From menu & deck page 29-30 & 5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* 1. Better Together (Referral) */}
          <div className="bg-luxury-card rounded-3xl p-7 border border-[#C5A880]/35 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#C5A880]/15 flex items-center justify-center text-[#9E7D47] mb-5">
                <Gift className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase tracking-wider text-[#A6865A] font-bold block">
                Give AED 50 · Get AED 50
              </span>
              <h3 className="font-serif text-2xl text-[#1C1816] mt-1 mb-2">
                BETTER TOGETHER
              </h3>
              <p className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
                Refer a new friend and, once she completes her first appointment, you’ll both receive <strong className="text-[#1C1816]">AED 50 OFF</strong> your next visit (min spend AED 200).
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#C5A880]/20 text-[11px] text-[#9E7D47] font-semibold">
              Instant Referral Benefit
            </div>
          </div>

          {/* 2. Birthday Privilege */}
          <div className="bg-luxury-card rounded-3xl p-7 border border-[#C5A880]/35 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#C5A880]/15 flex items-center justify-center text-[#9E7D47] mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase tracking-wider text-[#A6865A] font-bold block">
                Birthday Celebration
              </span>
              <h3 className="font-serif text-2xl text-[#1C1816] mt-1 mb-2">
                IT’S YOUR WEEK
              </h3>
              <p className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
                Enjoy <strong className="text-[#1C1816]">20% OFF</strong> one visit during your birthday week. Valid Emirates ID must be presented upon arrival.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#C5A880]/20 text-[11px] text-[#9E7D47] font-semibold">
              Birthday Privilege
            </div>
          </div>

          {/* 3. Loyalty Points */}
          <div className="bg-luxury-card rounded-3xl p-7 border border-[#C5A880]/35 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#C5A880]/15 flex items-center justify-center text-[#9E7D47] mb-5">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase tracking-wider text-[#A6865A] font-bold block">
                Points on Every Dirham
              </span>
              <h3 className="font-serif text-2xl text-[#1C1816] mt-1 mb-2">
                EVERY VISIT COUNTS
              </h3>
              <p className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
                Earn 1 pt per AED 1 spent, 10 pts for booking online, 25 pts for reviews. Complete 10 visits for 1,000 bonus pts. Every 100 pts = AED 1 off!
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#C5A880]/20 text-[11px] text-[#9E7D47] font-semibold">
              Loyalty Rewards Program
            </div>
          </div>

          {/* 4. Tier System */}
          <div className="bg-luxury-card rounded-3xl p-7 border border-[#C5A880]/35 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#C5A880]/15 flex items-center justify-center text-[#9E7D47] mb-5">
                <Crown className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase tracking-wider text-[#A6865A] font-bold block">
                VIP Tier Status
              </span>
              <h3 className="font-serif text-2xl text-[#1C1816] mt-1 mb-2">
                LOYALTY LOOKS GOOD ON YOU
              </h3>
              <p className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
                Start at Silver. Unlock Gold when you spend AED 5,000 for <strong className="text-[#1C1816]">15% OFF</strong>. Reach Platinum at AED 15,000 for <strong className="text-[#1C1816]">20% OFF</strong>.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#C5A880]/20 text-[11px] text-[#9E7D47] font-semibold">
              Silver · Gold · Platinum
            </div>
          </div>

        </div>

        {/* INTERACTIVE WHATSAPP REFERRAL GENERATOR (Inspired by Blush N Curls) */}
        <div className="max-w-3xl mx-auto bg-warm-canvas rounded-3xl p-8 sm:p-12 border border-[#C5A880]/35 shadow-2xl mb-16">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-bold">
              Instant Referral Tool
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1816] mt-1">
              Send Your WhatsApp Invite
            </h2>
            <p className="text-xs sm:text-sm text-[#7A6F68] mt-2">
              Fill in your details to create an automatic WhatsApp invite message with your AED 50 referral discount.
            </p>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E39] mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sarah"
                  value={yourName}
                  onChange={(e) => setYourName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#C5A880]/30 focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E39] mb-1.5">
                  Friend's Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Maya"
                  value={friendName}
                  onChange={(e) => setFriendName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#C5A880]/30 focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E39] mb-1.5">
                Friend's WhatsApp Number (Optional)
              </label>
              <input
                type="tel"
                placeholder="+971 50 000 0000 (or leave empty to pick contact in WhatsApp)"
                value={friendPhone}
                onChange={(e) => setFriendPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#C5A880]/30 focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 text-sm"
              />
            </div>

            {/* Live Message Preview */}
            <div className="pt-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E39] mb-1.5">
                Auto-Generated WhatsApp Message Preview:
              </label>
              <div className="p-4 rounded-2xl bg-white/90 border border-[#C5A880]/30 text-xs sm:text-sm text-[#2D2622] leading-relaxed shadow-inner">
                {defaultMessage}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={getWhatsAppShareUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Send WhatsApp Invite</span>
              </a>

              <button
                onClick={handleCopy}
                className="py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider bg-white hover:bg-[#FAF7F2] border border-[#C5A880]/40 text-[#1C1816] flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-green-700">Message Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#9E7D47]" />
                    <span>Copy Message</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Terms and Conditions (Exact from deck page 30 & menu page 5) */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white/70 border border-[#C5A880]/30 shadow-sm">
          <h4 className="text-xs uppercase tracking-widest text-[#9E7D47] font-bold mb-3 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            <span>Terms & Conditions — Maja Girls Club</span>
          </h4>
          <ul className="space-y-2 text-xs text-[#5C5048] leading-relaxed">
            <li>• Only one loyalty reward or discount may be used per visit. Benefits cannot be combined with other offers, promotions or discount cards.</li>
            <li>• Loyalty rewards and discounts cannot be redeemed during Eid, UAE public holidays, New Year’s Eve or New Year’s Day.</li>
            <li>• Referral rewards are issued after the new client completes her first appointment. Both clients receive AED 50 off their next visit, with a minimum spend of AED 200.</li>
            <li>• The birthday offer provides 20% off one visit during the client’s birthday week. A valid Emirates ID must be presented to redeem the offer.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
