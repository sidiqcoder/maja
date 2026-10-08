import React, { useState } from 'react';
import { packagesData } from '../data/packagesData';
import { 
  CheckCircle2, 
  Clock, 
  Calendar, 
  MessageCircle, 
  AlertCircle,
  Scissors,
  Activity,
  Heart,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState('hair');

  const { hairPackages, beautyReset, lymphaticDrainage } = packagesData;

  const getWaLink = (pkgName, price) => {
    const text = `Hi Maja Beauty Bar, I'm interested in booking the "${pkgName}" package (${price}). Could you please share the next available dates?`;
    return `https://wa.me/971509964626?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="pt-28 pb-24 relative overflow-hidden bg-[#FAF7F2]">
      
      {/* Background ambient mesh in Maja brand colors */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#F7CEC2]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#D8B1B7]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B97A86] font-medium">
            Curated Bundles & Exclusive Privileges
          </span>
          <h1 className="font-serif italic text-4xl sm:text-6xl text-[#3A1E1E] mt-3 leading-tight font-normal">
            More of Your Maja Favourites, Beautifully Bundled
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#5C5048] max-w-2xl mx-auto leading-relaxed font-light">
            Thoughtfully curated packages designed to keep your hair luminous, your nails pristine, and your body contoured throughout the month.
          </p>
          <div className="mt-3 text-xs text-[#7B2E3A] font-medium">
            All prices are inclusive of 5% UAE VAT
          </div>
        </div>

        {/* Tab Selection (Dedicated Sections for Hair, Beauty Reset, Lymphatic Drainage, and Sculpt Your Way) */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-14 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTab('hair')}
            className={`px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'hair'
                ? 'bg-[#3A1E1E] text-[#FFFDF9] shadow-xl scale-105'
                : 'bg-white/80 text-[#5C5048] hover:bg-[#F3E4DB] border border-[#B97A86]/25'
            }`}
          >
            <Scissors className="w-4 h-4 text-[#B97A86]" />
            <span>Hair Packages</span>
          </button>

          <button
            onClick={() => setActiveTab('reset')}
            className={`px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all whitespace-nowrap ${
              activeTab === 'reset'
                ? 'bg-[#3A1E1E] text-[#FFFDF9] shadow-xl scale-105'
                : 'bg-white/80 text-[#5C5048] hover:bg-[#F3E4DB] border border-[#B97A86]/25'
            }`}
          >
            <span>The Beauty Reset (Mon &amp; Tue)</span>
          </button>

          <button
            onClick={() => setActiveTab('lymphatic')}
            className={`px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'lymphatic'
                ? 'bg-[#3A1E1E] text-[#FFFDF9] shadow-xl scale-105'
                : 'bg-white/80 text-[#5C5048] hover:bg-[#F3E4DB] border border-[#B97A86]/25'
            }`}
          >
            <Activity className="w-4 h-4 text-[#B97A86]" />
            <span>Lymphatic Drainage</span>
          </button>

          <button
            onClick={() => setActiveTab('sculpt')}
            className={`px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'sculpt'
                ? 'bg-[#3A1E1E] text-[#FFFDF9] shadow-xl scale-105'
                : 'bg-white/80 text-[#5C5048] hover:bg-[#F3E4DB] border border-[#B97A86]/25'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#B97A86]" />
            <span>Sculpt Your Way</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: HAIR PACKAGES (DEDICATED SECTION)                                 */}
        {/* ========================================================================= */}
        {activeTab === 'hair' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            
            {/* Visual Hero Card for Hair Packages */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#3A1E1E] via-[#2A1414] to-[#1C1816] text-white p-8 sm:p-12 lg:p-16 border border-[#D8B1B7]/30 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <span className="px-3.5 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-[#D8B1B7]/20 text-[#F7CEC2] border border-[#D8B1B7]/30">
                    Signature Hair Bundles
                  </span>
                  <h2 className="font-serif italic text-3xl sm:text-5xl text-[#FFFDF9] mt-4 mb-3 font-normal">
                    {hairPackages.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#F3E4DB]/90 max-w-xl leading-relaxed font-light">
                    {hairPackages.subtitle}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[#F7CEC2]">
                    <span>✓ Davines Scalp Rituals</span>
                    <span>✓ Precision Trims</span>
                    <span>✓ Gloss &amp; Styling Included</span>
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
                  className="bg-white/95 rounded-3xl p-7 border border-[#B97A86]/25 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:border-[#7B2E3A]"
                >
                  <div>
                    {pkg.badge && (
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-[#F7CEC2] text-[#3A1E1E] mb-3">
                        {pkg.badge}
                      </span>
                    )}
                    <h3 className="font-serif italic text-2xl text-[#3A1E1E] mb-2 font-normal">
                      {pkg.title}
                    </h3>
                    <div className="font-serif text-3xl text-[#7B2E3A] font-normal mb-6">
                      {pkg.price}
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#4A3E39] font-light">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B97A86] shrink-0 mt-0.5" />
                          <span className={feat.startsWith('*') ? 'text-xs text-[#8A7769] italic' : ''}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#F3E4DB]">
                    <a
                      href={getWaLink(pkg.title, pkg.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-maja-wine w-full py-3 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                    >
                      <div className="w-4 h-4 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                        <MessageCircle className="w-3 h-3 fill-[#25D366]" />
                      </div>
                      <span>Book on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Terms and Conditions Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/70 border border-[#B97A86]/30 shadow-sm">
              <h4 className="text-xs uppercase tracking-widest text-[#7B2E3A] font-medium mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B97A86]" />
                <span>Terms &amp; Conditions — Hair Packages</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#5C5048] font-light">
                {hairPackages.terms.map((t, idx) => (
                  <li key={idx}>• {t}</li>
                ))}
                <li>• All prices are inclusive of 5% UAE VAT.</li>
              </ul>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: THE BEAUTY RESET (MONDAYS & TUESDAYS ONLY)                       */}
        {/* ========================================================================= */}
        {activeTab === 'reset' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            
            {/* Visual Hero Card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#3A1E1E] via-[#2A1414] to-[#1C1816] text-white p-8 sm:p-12 lg:p-16 border border-[#D8B1B7]/30 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <span className="px-3.5 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-[#F7CEC2] text-[#3A1E1E] font-semibold">
                    Mondays &amp; Tuesdays Only
                  </span>
                  <h2 className="font-serif italic text-3xl sm:text-5xl text-[#FFFDF9] mt-4 mb-3 font-normal">
                    {beautyReset.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#F3E4DB]/90 max-w-xl leading-relaxed font-light">
                    {beautyReset.subtitle}
                  </p>
                  <p className="mt-3 text-xs text-[#F7CEC2]">
                    Special weekly client privileges across massage, waxing, lashes, brows and hair styling every Monday and Tuesday.
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
                  className="bg-white/95 rounded-3xl p-6 border border-[#B97A86]/25 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="pb-3 border-b border-[#F3E4DB] mb-4">
                      <h3 className="font-serif italic text-2xl text-[#3A1E1E] font-normal">
                        {cat.name}
                      </h3>
                      <span className="text-[10px] uppercase tracking-wider text-[#B97A86] font-medium">
                        Mon &amp; Tue Privilege
                      </span>
                    </div>

                    <div className="space-y-3">
                      {cat.items.map((item, i) => (
                        <div key={i} className="flex items-center justify-between gap-2 text-xs sm:text-sm">
                          <span className="text-[#3E342F] leading-snug font-light">{item.name}</span>
                          <span className="font-serif font-normal text-[#7B2E3A] shrink-0 text-sm">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F3E4DB]">
                    <a
                      href={getWaLink(`Beauty Reset (${cat.name})`, 'Mon-Tue Offer')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-maja-wine w-full py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                    >
                      <div className="w-4 h-4 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                        <MessageCircle className="w-3 h-3 fill-[#25D366]" />
                      </div>
                      <span>Book on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Terms and Conditions Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/70 border border-[#B97A86]/30 shadow-sm">
              <h4 className="text-xs uppercase tracking-widest text-[#7B2E3A] font-medium mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B97A86]" />
                <span>Terms &amp; Conditions — The Beauty Reset</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#5C5048] font-light">
                {beautyReset.terms.map((t, idx) => (
                  <li key={idx}>• {t}</li>
                ))}
                <li>• All prices are inclusive of 5% UAE VAT.</li>
              </ul>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: LYMPHATIC DRAINAGE (DEDICATED SECTION)                            */}
        {/* ========================================================================= */}
        {activeTab === 'lymphatic' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            
            {/* Visual Hero Card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#3A1E1E] via-[#2A1414] to-[#1C1816] text-white p-8 sm:p-12 lg:p-16 border border-[#D8B1B7]/30 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <span className="px-3.5 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-[#D8B1B7]/20 text-[#F7CEC2] border border-[#D8B1B7]/30">
                    Signature Detox &amp; Contouring
                  </span>
                  <h2 className="font-serif italic text-3xl sm:text-5xl text-[#FFFDF9] mt-4 mb-3 font-normal">
                    {lymphaticDrainage.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#F3E4DB]/90 max-w-xl leading-relaxed font-light">
                    {lymphaticDrainage.subtitle}
                  </p>
                  <p className="mt-3 text-xs text-[#F7CEC2]">
                    Delivered by our specialist massage therapists using Brazilian manual techniques, wood therapy, and red light contouring.
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
              <div className="bg-white/95 rounded-3xl p-6 sm:p-8 border border-[#B97A86]/25 shadow-lg">
                <div className="flex items-center justify-between pb-4 border-b border-[#F3E4DB] mb-5">
                  <div>
                    <h3 className="font-serif italic text-2xl text-[#3A1E1E] font-normal">60 Mins Packages</h3>
                    <span className="text-xs text-[#8C7D73]">Multi-session savings</span>
                  </div>
                  <div className="flex items-center gap-6 text-xs font-medium uppercase text-[#7B2E3A]">
                    <span>5 Sessions</span>
                    <span>10 Sessions</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {lymphaticDrainage.sessions60.map((row, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs sm:text-sm border-b border-[#F3E4DB]/60 pb-3">
                      <span className="text-[#2D2622] font-normal">{row.treatment}</span>
                      <div className="flex items-center gap-8 font-serif font-normal text-[#7B2E3A]">
                        <span>{row.sessions5}</span>
                        <span>{row.sessions10}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-[#F3E4DB]">
                  <a
                    href={getWaLink('60 Mins Lymphatic Drainage Package', '5 or 10 Sessions')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-maja-wine w-full py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <div className="w-4 h-4 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                      <MessageCircle className="w-3 h-3 fill-[#25D366]" />
                    </div>
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* 90 Mins Packages Table */}
              <div className="bg-white/95 rounded-3xl p-6 sm:p-8 border border-[#B97A86]/25 shadow-lg">
                <div className="flex items-center justify-between pb-4 border-b border-[#F3E4DB] mb-5">
                  <div>
                    <h3 className="font-serif italic text-2xl text-[#3A1E1E] font-normal">90 Mins Packages</h3>
                    <span className="text-xs text-[#8C7D73]">Deep intensive contouring</span>
                  </div>
                  <div className="flex items-center gap-6 text-xs font-medium uppercase text-[#7B2E3A]">
                    <span>5 Sessions</span>
                    <span>10 Sessions</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {lymphaticDrainage.sessions90.map((row, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs sm:text-sm border-b border-[#F3E4DB]/60 pb-3">
                      <span className="text-[#2D2622] font-normal">{row.treatment}</span>
                      <div className="flex items-center gap-8 font-serif font-normal text-[#7B2E3A]">
                        <span>{row.sessions5}</span>
                        <span>{row.sessions10}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-[#F3E4DB]">
                  <a
                    href={getWaLink('90 Mins Lymphatic Drainage Package', '5 or 10 Sessions')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-maja-wine w-full py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <div className="w-4 h-4 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                      <MessageCircle className="w-3 h-3 fill-[#25D366]" />
                    </div>
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Terms & Conditions Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/70 border border-[#B97A86]/30 shadow-sm">
              <h4 className="text-xs uppercase tracking-widest text-[#7B2E3A] font-medium mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B97A86]" />
                <span>Terms &amp; Conditions — Lymphatic Drainage</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#5C5048] font-light">
                {lymphaticDrainage.terms.map((t, idx) => (
                  <li key={idx}>• {t}</li>
                ))}
                <li>• All prices are inclusive of 5% UAE VAT.</li>
              </ul>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: SCULPT YOUR WAY (DEDICATED SECTION)                              */}
        {/* ========================================================================= */}
        {activeTab === 'sculpt' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            
            {/* Visual Hero Card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#3A1E1E] via-[#2A1414] to-[#1C1816] text-white p-8 sm:p-12 lg:p-16 border border-[#D8B1B7]/30 shadow-2xl">
              <div className="max-w-3xl">
                <span className="px-3.5 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-[#F7CEC2] text-[#3A1E1E] font-semibold">
                  Bespoke Combination Bundles
                </span>
                <h2 className="font-serif italic text-3xl sm:text-5xl text-[#FFFDF9] mt-4 mb-3 font-normal">
                  Sculpt Your Way
                </h2>
                <p className="text-sm sm:text-base text-[#F3E4DB]/90 max-w-xl leading-relaxed font-light">
                  A personalized mix of full body contouring, red light therapy, ice madero, and targeted facial lymphatic treatments tailored to your body's journey.
                </p>
                <div className="mt-4 text-xs text-[#F7CEC2]">
                  Valid for 3 to 6 months · Complete protocol versatility
                </div>
              </div>
            </div>

            {/* Sculpt Your Way Packages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {lymphaticDrainage.sculptYourWay.map((sculpt, idx) => (
                <div
                  key={idx}
                  className="bg-white/95 rounded-3xl p-8 border border-[#B97A86]/35 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-[#F7CEC2] text-[#3A1E1E]">
                      Bespoke Experience
                    </span>
                    <h3 className="font-serif italic text-3xl text-[#3A1E1E] mt-3 mb-2 font-normal">
                      {sculpt.title}
                    </h3>
                    <div className="flex items-center gap-6 text-lg font-serif font-normal text-[#7B2E3A] mb-6">
                      <span>5 Sessions: {sculpt.sessions5}</span>
                      <span>10 Sessions: {sculpt.sessions10}</span>
                    </div>

                    <div className="space-y-2 mb-6 text-xs sm:text-sm text-[#4A3E39]">
                      <span className="font-medium text-xs uppercase tracking-wider text-[#3A1E1E] block">
                        Included Treatments:
                      </span>
                      {sculpt.includes.map((inc, i) => (
                        <div key={i} className="flex items-start gap-2 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B97A86] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={getWaLink(sculpt.title, `5 Sessions ${sculpt.sessions5} / 10 Sessions ${sculpt.sessions10}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-maja-wine w-full py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <div className="w-4 h-4 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                      <MessageCircle className="w-3 h-3 fill-[#25D366]" />
                    </div>
                    <span>Book on WhatsApp</span>
                  </a>
                </div>
              ))}
            </div>

            {/* Terms & Conditions Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/70 border border-[#B97A86]/30 shadow-sm">
              <h4 className="text-xs uppercase tracking-widest text-[#7B2E3A] font-medium mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B97A86]" />
                <span>Terms &amp; Conditions — Sculpt Your Way</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#5C5048] font-light">
                {lymphaticDrainage.terms.map((t, idx) => (
                  <li key={idx}>• {t}</li>
                ))}
                <li>• All prices are inclusive of 5% UAE VAT.</li>
              </ul>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
