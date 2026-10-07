import React, { useState } from 'react';
import { packagesData } from '../data/packagesData';
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  MessageCircle, 
  AlertCircle,
  Scissors,
  Activity,
  Heart
} from 'lucide-react';

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState('hair');

  const { hairPackages, beautyReset, lymphaticDrainage } = packagesData;

  const getWaLink = (pkgName, price) => {
    const text = `Hi Maja Beauty Bar, I'm interested in booking the "${pkgName}" package (${price}). Could you please share the next available dates?`;
    return `https://wa.me/971509964626?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      
      {/* Background ambient mesh */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#E8DAC7]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#E2CEB5]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A6865A] font-semibold">
            Curated Bundles & Exclusive Offers
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1816] mt-3 leading-tight">
            More of Your Maja Favourites, Beautifully Bundled
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#5C5048] max-w-2xl mx-auto leading-relaxed">
            Thoughtfully curated packages designed to keep your hair luminous, your nails pristine, and your body contoured throughout the month.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center justify-center gap-3 mb-14 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTab('hair')}
            className={`px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'hair'
                ? 'bg-[#1C1816] text-[#FFFDF9] shadow-xl scale-105'
                : 'bg-white/80 text-[#5C5048] hover:bg-[#F3ECE1] border border-[#C5A880]/25'
            }`}
          >
            <Scissors className="w-4 h-4 text-[#C5A880]" />
            <span>Hair Packages</span>
          </button>

          <button
            onClick={() => setActiveTab('reset')}
            className={`px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'reset'
                ? 'bg-[#1C1816] text-[#FFFDF9] shadow-xl scale-105'
                : 'bg-white/80 text-[#5C5048] hover:bg-[#F3ECE1] border border-[#C5A880]/25'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#C5A880]" />
            <span>The Beauty Reset (Mon & Tue)</span>
          </button>

          <button
            onClick={() => setActiveTab('lymphatic')}
            className={`px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'lymphatic'
                ? 'bg-[#1C1816] text-[#FFFDF9] shadow-xl scale-105'
                : 'bg-white/80 text-[#5C5048] hover:bg-[#F3ECE1] border border-[#C5A880]/25'
            }`}
          >
            <Activity className="w-4 h-4 text-[#C5A880]" />
            <span>Lymphatic Drainage & Sculpt</span>
          </button>
        </div>

        {/* TAB 1: HAIR PACKAGES */}
        {activeTab === 'hair' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            
            {/* Visual Hero Card for Hair Packages */}
            <div className="relative rounded-3xl overflow-hidden bg-dark-mesh text-white p-8 sm:p-12 lg:p-16 border border-[#C5A880]/30 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C5A880]/20 text-[#E5D2BA] border border-[#C5A880]/30">
                    Signature Hair Bundles
                  </span>
                  <h2 className="font-serif text-3xl sm:text-5xl text-[#FFFDF9] mt-4 mb-3">
                    {hairPackages.title}
                  </h2>
                  <p className="text-sm sm:text-base text-white/80 max-w-xl leading-relaxed">
                    {hairPackages.subtitle}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[#E5D2BA]">
                    <span>✓ Davines Treatments</span>
                    <span>✓ Precision Trims</span>
                    <span>✓ Gloss & Styling Included</span>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <img
                    src={hairPackages.image}
                    alt="Maja Hair Packages"
                    className="w-full h-72 sm:h-80 object-cover rounded-2xl shadow-xl border border-white/20"
                  />
                </div>
              </div>
            </div>

            {/* Hair Packages Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hairPackages.items.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-luxury-card rounded-3xl p-7 border border-[#C5A880]/30 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:border-[#C5A880]"
                >
                  <div>
                    {pkg.badge && (
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C5A880] text-[#1C1816] mb-3">
                        {pkg.badge}
                      </span>
                    )}
                    <h3 className="font-serif text-2xl text-[#1C1816] mb-2">
                      {pkg.title}
                    </h3>
                    <div className="font-serif text-3xl text-[#9E7D47] font-semibold mb-6">
                      {pkg.price}
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#4A3E39]">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D47] shrink-0 mt-0.5" />
                          <span className={feat.startsWith('*') ? 'text-xs text-[#8A7769] italic' : ''}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#C5A880]/15">
                    <a
                      href={getWaLink(pkg.title, pkg.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center gap-2 shadow-sm transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                      <span>Book on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Terms and Conditions Box as Requested */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/70 border border-[#C5A880]/30 shadow-sm">
              <h4 className="text-xs uppercase tracking-widest text-[#9E7D47] font-bold mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                <span>Terms & Conditions — Hair Packages</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#5C5048]">
                {hairPackages.terms.map((t, idx) => (
                  <li key={idx}>• {t}</li>
                ))}
              </ul>
            </div>

          </div>
        )}

        {/* TAB 2: THE BEAUTY RESET (MONDAYS & TUESDAYS) */}
        {activeTab === 'reset' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            
            {/* Visual Hero Card */}
            <div className="relative rounded-3xl overflow-hidden bg-dark-mesh text-white p-8 sm:p-12 lg:p-16 border border-[#C5A880]/30 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C5A880] text-[#1C1816]">
                    {beautyReset.badge}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-5xl text-[#FFFDF9] mt-4 mb-3">
                    {beautyReset.title}
                  </h2>
                  <p className="text-sm sm:text-base text-white/80 max-w-xl leading-relaxed">
                    {beautyReset.subtitle}
                  </p>
                  <p className="mt-3 text-xs text-[#E5D2BA]">
                    Special weekly client privileges across massage, waxing, lashes, brows and hair styling.
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <img
                    src={beautyReset.image}
                    alt="The Beauty Reset Maja"
                    className="w-full h-72 sm:h-80 object-cover rounded-2xl shadow-xl border border-white/20"
                  />
                </div>
              </div>
            </div>

            {/* 4 Category Pricing Tables for Beauty Reset */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {beautyReset.categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-luxury-card rounded-3xl p-6 border border-[#C5A880]/30 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="pb-3 border-b border-[#C5A880]/20 mb-4">
                      <h3 className="font-serif text-2xl text-[#1C1816]">
                        {cat.name}
                      </h3>
                      <span className="text-[10px] uppercase tracking-wider text-[#9E7D47] font-semibold">
                        Mon & Tue Privilege
                      </span>
                    </div>

                    <div className="space-y-3">
                      {cat.items.map((item, i) => (
                        <div key={i} className="flex items-center justify-between gap-2 text-xs sm:text-sm">
                          <span className="text-[#3E342F] leading-snug">{item.name}</span>
                          <span className="font-serif font-bold text-[#9E7D47] shrink-0 text-sm">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#C5A880]/15">
                    <a
                      href={getWaLink(`Beauty Reset (${cat.name})`, 'Mon-Tue Offer')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center gap-1.5 transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                      <span>Book on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Terms and Conditions Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/70 border border-[#C5A880]/30 shadow-sm">
              <h4 className="text-xs uppercase tracking-widest text-[#9E7D47] font-bold mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                <span>Terms & Conditions — The Beauty Reset</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#5C5048]">
                {beautyReset.terms.map((t, idx) => (
                  <li key={idx}>• {t}</li>
                ))}
              </ul>
            </div>

          </div>
        )}

        {/* TAB 3: LYMPHATIC DRAINAGE & BODY SCULPTING */}
        {activeTab === 'lymphatic' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            
            {/* Visual Hero Card */}
            <div className="relative rounded-3xl overflow-hidden bg-dark-mesh text-white p-8 sm:p-12 lg:p-16 border border-[#C5A880]/30 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C5A880]/20 text-[#E5D2BA] border border-[#C5A880]/30">
                    Signature Detox & Contouring
                  </span>
                  <h2 className="font-serif text-3xl sm:text-5xl text-[#FFFDF9] mt-4 mb-3">
                    {lymphaticDrainage.title}
                  </h2>
                  <p className="text-sm sm:text-base text-white/80 max-w-xl leading-relaxed">
                    {lymphaticDrainage.subtitle}
                  </p>
                  <p className="mt-3 text-xs text-[#E5D2BA]">
                    Delivered by our specialist massage therapists Cecilia & Gilda using wood therapy, honey, and cold steel.
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <img
                    src={lymphaticDrainage.image}
                    alt="Lymphatic Drainage Maja"
                    className="w-full h-72 sm:h-80 object-cover rounded-2xl shadow-xl border border-white/20"
                  />
                </div>
              </div>
            </div>

            {/* 60 Mins & 90 Mins Multi-session Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* 60 Mins Packages Table */}
              <div className="bg-luxury-card rounded-3xl p-6 sm:p-8 border border-[#C5A880]/30 shadow-lg">
                <div className="flex items-center justify-between pb-4 border-b border-[#C5A880]/20 mb-5">
                  <div>
                    <h3 className="font-serif text-2xl text-[#1C1816]">60 Mins Packages</h3>
                    <span className="text-xs text-[#7A6F68]">Multi-session savings</span>
                  </div>
                  <div className="flex items-center gap-6 text-xs font-bold uppercase text-[#9E7D47]">
                    <span>5 Sessions</span>
                    <span>10 Sessions</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {lymphaticDrainage.sessions60.map((row, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs sm:text-sm border-b border-[#C5A880]/10 pb-3">
                      <span className="text-[#2D2622] font-medium">{row.treatment}</span>
                      <div className="flex items-center gap-8 font-serif font-bold text-[#9E7D47]">
                        <span>{row.sessions5}</span>
                        <span>{row.sessions10}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-[#C5A880]/15">
                  <a
                    href={getWaLink('60 Mins Lymphatic Drainage Package', '5 or 10 Sessions')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* 90 Mins Packages Table */}
              <div className="bg-luxury-card rounded-3xl p-6 sm:p-8 border border-[#C5A880]/30 shadow-lg">
                <div className="flex items-center justify-between pb-4 border-b border-[#C5A880]/20 mb-5">
                  <div>
                    <h3 className="font-serif text-2xl text-[#1C1816]">90 Mins Packages</h3>
                    <span className="text-xs text-[#7A6F68]">Deep intensive contouring</span>
                  </div>
                  <div className="flex items-center gap-6 text-xs font-bold uppercase text-[#9E7D47]">
                    <span>5 Sessions</span>
                    <span>10 Sessions</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {lymphaticDrainage.sessions90.map((row, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs sm:text-sm border-b border-[#C5A880]/10 pb-3">
                      <span className="text-[#2D2622] font-medium">{row.treatment}</span>
                      <div className="flex items-center gap-8 font-serif font-bold text-[#9E7D47]">
                        <span>{row.sessions5}</span>
                        <span>{row.sessions10}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-[#C5A880]/15">
                  <a
                    href={getWaLink('90 Mins Lymphatic Drainage Package', '5 or 10 Sessions')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Sculpt Your Way Packages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {lymphaticDrainage.sculptYourWay.map((sculpt, idx) => (
                <div
                  key={idx}
                  className="bg-warm-canvas rounded-3xl p-8 border border-[#C5A880]/40 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C5A880] text-[#1C1816]">
                      Bespoke Experience
                    </span>
                    <h3 className="font-serif text-3xl text-[#1C1816] mt-3 mb-2">
                      {sculpt.title}
                    </h3>
                    <div className="flex items-center gap-6 text-lg font-serif font-bold text-[#9E7D47] mb-6">
                      <span>5 Sessions: {sculpt.sessions5}</span>
                      <span>10 Sessions: {sculpt.sessions10}</span>
                    </div>

                    <div className="space-y-2 mb-6 text-xs sm:text-sm text-[#4A3E39]">
                      <span className="font-bold text-xs uppercase tracking-wider text-[#1C1816] block">
                        Included Treatments:
                      </span>
                      {sculpt.includes.map((inc, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D47] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={getWaLink(sculpt.title, `5 Sessions ${sculpt.sessions5} / 10 Sessions ${sculpt.sessions10}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                    <span>Book on WhatsApp</span>
                  </a>
                </div>
              ))}
            </div>

            {/* Terms & Conditions Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/70 border border-[#C5A880]/30 shadow-sm">
              <h4 className="text-xs uppercase tracking-widest text-[#9E7D47] font-bold mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                <span>Terms & Conditions — Lymphatic Drainage</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#5C5048]">
                {lymphaticDrainage.terms.map((t, idx) => (
                  <li key={idx}>• {t}</li>
                ))}
              </ul>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
