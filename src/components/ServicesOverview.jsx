import React from 'react';
import { ArrowRight, Sparkles, Scissors, Eye, Feather, Activity, ExternalLink } from 'lucide-react';

export default function ServicesOverview({ onSelectCategory, onNavigateToServices }) {
  
  // Large visual cards modeled after thecoloristhairsalon.com
  // No body text on the cards, just full-bleed editorial imagery, luxury title, and CTA
  const serviceCards = [
    {
      id: 'nails',
      title: 'Nails',
      tag: 'BIAB & Nail Art',
      image: '/images/services/nails.jpg',
      cta: 'Explore Nails',
    },
    {
      id: 'hair',
      title: 'Hair',
      tag: 'Cut, Balayage & Care',
      image: '/images/services/hair.jpg',
      cta: 'Explore Hair',
    },
    {
      id: 'lashes-brows',
      title: 'Lashes & Brows',
      tag: 'YUMI Lift & Extensions',
      image: '/images/services/lashes.jpg',
      cta: 'Explore Lashes & Brows',
    },
    {
      id: 'waxing',
      title: 'Waxing',
      tag: 'Comfort & Smooth Finish',
      image: '/images/services/waxing.jpg',
      cta: 'Explore Waxing',
    },
    {
      id: 'massages',
      title: 'Massages',
      tag: 'Lymphatic & Body Sculpt',
      image: '/images/services/massage.jpg',
      cta: 'Explore Massages',
    },
  ];

  // Specific updated text requested for "needs" section
  const needsCopy = [
    {
      id: 'nails',
      title: 'Nails',
      icon: Sparkles,
      copy: 'Manicures, pedicures, BIAB and nail art, finished with premium professional brands including Luxio, Nano, Erra Gel, Essie, Orly, Brunson, Mal Beauty and The GelBottle for a polished, long lasting finish.',
      brands: 'Luxio · The GelBottle · Essie · Orly',
    },
    {
      id: 'hair',
      title: 'Hair',
      icon: Scissors,
      copy: 'Cuts, blow dries, colour, highlights and nourishing treatments using trusted professional brands like Schwarzkopf, Keune and Davines, selected to keep your hair looking and feeling its best.',
      brands: 'Davines · Keune · Schwarzkopf',
    },
    {
      id: 'lashes-brows',
      title: 'Lashes & Brows',
      icon: Eye,
      copy: 'Lash extensions, tinting, lamination and threading to define and frame your features, with YUMI used for our lash treatments for a refined, natural looking finish.',
      brands: 'YUMI Lashes · Professional Tint',
    },
    {
      id: 'waxing',
      title: 'Waxing',
      icon: Feather,
      copy: 'Professional waxing treatments focused on smooth results and skin comfort, with careful techniques for a clean finish while keeping your skin feeling comfortable and cared for.',
      brands: 'Sensitive Strip-less Hot Wax',
    },
    {
      id: 'massages',
      title: 'Massages',
      icon: Activity,
      copy: 'A range of relaxing and lymphatic treatments designed to help you unwind, release tension and leave feeling refreshed, lighter and well cared for.',
      brands: 'Manual Lymphatic Drainage · Red Light',
    },
  ];

  return (
    <section id="services-section" className="py-20 lg:py-28 relative overflow-hidden">
      
      {/* Subtle organic warm background blobs (ensuring non-solid background) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E8DAC7]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#E2CEB5]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A6865A] font-semibold">
            Our Services
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1C1816] mt-3 leading-tight">
            Everything Your Beauty Routine Needs
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-5" />
        </div>

        {/* 1. Large Visual Service Cards (Colorist style: Large photos, no text clutter, pure imagery & CTA) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 mb-20">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              onClick={() => onSelectCategory(card.id)}
              className="group relative h-[380px] sm:h-[440px] lg:h-[480px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#C5A880]/20"
            >
              {/* Full Bleed Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1816]/90 via-[#1C1816]/20 to-transparent transition-opacity duration-300" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/30">
                  {card.tag}
                </span>
              </div>

              {/* Bottom Card Title & CTA */}
              <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end text-white">
                <h3 className="font-serif text-3xl sm:text-4xl text-[#FFFDF9] mb-3 tracking-wide">
                  {card.title}
                </h3>
                
                {/* Visual CTA Button with Shimmer */}
                <div className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-xs font-semibold uppercase tracking-wider text-white transition-all group-hover:bg-[#C5A880] group-hover:text-[#1C1816] group-hover:border-[#C5A880]">
                  <span>{card.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Needs Detail Grid (Detailed updated copy requested in landing page.txt lines 27-38) */}
        <div className="bg-warm-canvas rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#C5A880]/25 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif text-2xl sm:text-4xl text-[#1C1816]">
              Carefully Selected Brands & Tailored Techniques
            </h3>
            <p className="text-sm text-[#7A6F68] mt-2">
              Every formula and technique at Maja is hand-picked to deliver lasting, polished results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {needsCopy.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#C5A880]/20 hover:border-[#C5A880]/60 transition-all duration-300 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[#C5A880]/15 flex items-center justify-center text-[#9E7D47]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif text-xl sm:text-2xl text-[#1C1816] font-medium">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
                      {item.copy}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#C5A880]/15 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-[#9E7D47]">
                      {item.brands}
                    </span>
                    <button
                      onClick={() => onSelectCategory(item.id)}
                      className="text-xs font-semibold text-[#1C1816] hover:text-[#C5A880] inline-flex items-center gap-1"
                    >
                      <span>Menu</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Final Highlight Card */}
            <div className="bg-gradient-to-br from-[#2D2622] to-[#1C1816] text-white rounded-2xl p-6 flex flex-col justify-between border border-[#C5A880]/30 shadow-lg md:col-span-2 lg:col-span-1">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#E5D2BA] font-semibold">
                  Full Experience
                </span>
                <h4 className="font-serif text-2xl text-[#FFFDF9] mt-2 mb-3">
                  Ready to explore all pricing?
                </h4>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  Discover our comprehensive price menu including BIAB sets, Davines hair colours, YUMI lamination, and Cecilia’s lymphatic drainage.
                </p>
              </div>

              <div className="mt-6">
                <button
                  onClick={onNavigateToServices}
                  className="btn-luminous w-full py-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>Explore Complete Menu</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

