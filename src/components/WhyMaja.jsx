import React from 'react';

export default function WhyMaja() {
  const cards = [
    {
      id: 'experience',
      image: '/images/why-maja/experience.jpg',
      badge: 'Client Satisfaction & Trust',
      title: '4.8 ★ Rated by 394+ Clients & 5 Years Beauty Expertise',
      description: 'Bringing 5 years of dedicated salon expertise in Dubai. Our passionate team of certified beauty artisans ensures every visit is memorable, relaxed, and finished to perfection.',
      footerTag: 'Top Rated in Meydan Dubai',
    },
    {
      id: 'products',
      image: '/images/why-maja/products.jpg',
      badge: 'Trusted Quality',
      title: 'Premium Products',
      description: 'We choose premium products from trusted beauty brands to give every treatment the quality and results it deserves.',
      brandsList: 'Schwarzkopf · Davines · Keune · The GelBottle · Luxio · Essie',
      footerTag: '100% Authentic Formulations',
    },
    {
      id: 'destination',
      image: '/images/why-maja/destination.jpg',
      badge: 'Complete Luxury Space',
      title: 'One Beauty Destination',
      description: 'Nails • Hair • Lashes • Brows • Wellness. Everything your beauty routine needs brought together under one chic, welcoming roof in Dubai.',
      footerTag: 'M1M Building, Al Meydan Road',
    },
  ];

  return (
    <section id="why-maja" className="py-20 lg:py-28 relative overflow-hidden">
      
      {/* Background layered ambient textures (non-solid) */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FAF0E4]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A6865A] font-semibold">
            Why Maja
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1C1816] mt-3 leading-tight">
            Beauty, Elevated to Its Highest Standard
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-4" />
        </div>

        {/* Highlights & Trust Metrics: 3 Separate Cards (Star & Experience Combined) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14 max-w-6xl mx-auto">
          
          {/* Card 1: Star & Experience Combined */}
          <div className="bg-luxury-card rounded-3xl p-7 sm:p-8 border border-[#C5A880]/30 shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1 flex flex-col justify-center items-center">
            <span className="font-serif text-3xl sm:text-4xl text-[#1C1816] font-medium mb-1">
              4.8 ★ · 5 Years
            </span>
            <span className="text-xs uppercase tracking-wider text-[#7A6F68] font-semibold mt-1">
              394+ Verified Clients
            </span>
            <span className="text-[12px] text-[#9E7D47] font-medium mt-1">
              Top-Rated & 5 Years Expertise in Dubai
            </span>
          </div>

          {/* Card 2: 5 Suites */}
          <div className="bg-luxury-card rounded-3xl p-7 sm:p-8 border border-[#C5A880]/30 shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1 flex flex-col justify-center items-center">
            <span className="font-serif text-3xl sm:text-4xl text-[#1C1816] font-medium mb-1">
              5 Suites
            </span>
            <span className="text-xs uppercase tracking-wider text-[#7A6F68] font-semibold mt-1">
              Complete Destination
            </span>
            <span className="text-[12px] text-[#9E7D47] font-medium mt-1">
              Hair · Nails · Brows · Waxing · Spa
            </span>
          </div>

          {/* Card 3: Dubai Location */}
          <div className="bg-luxury-card rounded-3xl p-7 sm:p-8 border border-[#C5A880]/30 shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1 flex flex-col justify-center items-center">
            <span className="font-serif text-3xl sm:text-4xl text-[#1C1816] font-medium mb-1">
              Dubai
            </span>
            <span className="text-xs uppercase tracking-wider text-[#7A6F68] font-semibold mt-1">
              Prime Location
            </span>
            <span className="text-[12px] text-[#9E7D47] font-medium mt-1">
              M1M Building, Nad Al Sheba 1
            </span>
          </div>

        </div>

        {/* 3 Cards with Photos as Requested */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
                className="group bg-luxury-card rounded-3xl overflow-hidden border border-[#C5A880]/30 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-2"
              >
                {/* Photo Top with Scrim & Badge */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1816]/75 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-black/40 backdrop-blur-md text-[#FFFDF9] border border-white/20">
                      {card.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1816] mb-3 leading-snug">
                      {card.title}
                    </h3>
                    
                    <p className="text-sm text-[#4A3E39] leading-relaxed">
                      {card.description}
                    </p>

                    {card.brandsList && (
                      <div className="mt-4 p-3 rounded-xl bg-[#C5A880]/10 border border-[#C5A880]/25">
                        <span className="text-xs font-semibold tracking-wide text-[#7E6032] block">
                          {card.brandsList}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom Tag */}
                  <div className="mt-6 pt-4 border-t border-[#C5A880]/20 flex items-center justify-between text-xs text-[#7A6F68]">
                    <span>{card.footerTag}</span>
                    <span className="text-[#C5A880] font-semibold">Maja Standard</span>
                  </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

