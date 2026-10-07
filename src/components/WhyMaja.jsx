import React from 'react';

export default function WhyMaja() {
  const cards = [
    {
      id: 'experience',
      image: '/images/why-maja/experience.jpg',
      badge: 'Client Satisfaction & Trust',
      title: '4.8 ★ & 5 Years Experience',
      description: 'Bringing 5 years of salon expertise in Dubai. Our passionate team of certified artisans ensures every visit is memorable, relaxed, and finished to perfection.',
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
    <section 
      id="why-maja" 
      className="relative min-h-screen lg:h-screen lg:max-h-[1080px] flex items-center justify-center overflow-hidden pt-20 pb-8"
    >
      
      {/* Background layered ambient textures (non-solid) */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FAF0E4]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-5 lg:mb-6">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#A6865A] font-semibold">
            Why Maja
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1816] mt-1.5 leading-tight">
            Beauty, Elevated to Its Highest Standard
          </h2>
          <div className="w-14 h-0.5 bg-[#C5A880] mx-auto mt-2" />
        </div>

        {/* Highlights & Trust Metrics: 3 Separate Cards (Compact Row) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5 mb-4 lg:mb-5 max-w-5xl mx-auto">
          
          {/* Card 1: Star & Experience Combined */}
          <div className="bg-luxury-card rounded-2xl py-3 px-5 border border-[#C5A880]/30 shadow-md hover:shadow-lg transition-all text-center flex flex-col justify-center items-center">
            <span className="font-serif text-2xl sm:text-3xl text-[#1C1816] font-medium leading-none">
              4.8 ★ · 5 Years
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#7A6F68] font-semibold mt-1">
              394+ Verified Clients
            </span>
            <span className="text-[11px] text-[#9E7D47] font-medium mt-0.5">
              Top-Rated &amp; 5 Years Expertise in Dubai
            </span>
          </div>

          {/* Card 2: 5 Suites */}
          <div className="bg-luxury-card rounded-2xl py-3 px-5 border border-[#C5A880]/30 shadow-md hover:shadow-lg transition-all text-center flex flex-col justify-center items-center">
            <span className="font-serif text-2xl sm:text-3xl text-[#1C1816] font-medium leading-none">
              5 Suites
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#7A6F68] font-semibold mt-1">
              Complete Destination
            </span>
            <span className="text-[11px] text-[#9E7D47] font-medium mt-0.5">
              Hair · Nails · Brows · Waxing · Spa
            </span>
          </div>

          {/* Card 3: Dubai Location */}
          <div className="bg-luxury-card rounded-2xl py-3 px-5 border border-[#C5A880]/30 shadow-md hover:shadow-lg transition-all text-center flex flex-col justify-center items-center">
            <span className="font-serif text-2xl sm:text-3xl text-[#1C1816] font-medium leading-none">
              Dubai
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#7A6F68] font-semibold mt-1">
              Prime Location
            </span>
            <span className="text-[11px] text-[#9E7D47] font-medium mt-0.5">
              M1M Building, Nad Al Sheba 1
            </span>
          </div>

        </div>

        {/* 3 Cards with Photos as Requested (Fitted Proportionately) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group bg-luxury-card rounded-3xl overflow-hidden border border-[#C5A880]/30 shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-1"
            >
              {/* Photo Top with Scrim & Badge */}
              <div className="relative h-36 sm:h-40 lg:h-44 w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1816]/75 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/40 backdrop-blur-md text-[#FFFDF9] border border-white/20">
                    {card.badge}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#1C1816] mb-1.5 leading-snug">
                    {card.title}
                  </h3>
                  
                  <p className="text-xs sm:text-[13px] text-[#4A3E39] leading-relaxed line-clamp-3">
                    {card.description}
                  </p>

                  {card.brandsList && (
                    <div className="mt-2.5 p-2 rounded-xl bg-[#C5A880]/10 border border-[#C5A880]/25">
                      <span className="text-[10.5px] font-semibold tracking-wide text-[#7E6032] block truncate">
                        {card.brandsList}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Bottom Tag */}
                <div className="mt-3 pt-2.5 border-t border-[#C5A880]/20 flex items-center justify-between text-[10.5px] text-[#7A6F68]">
                  <span>{card.footerTag}</span>
                  <span className="font-semibold text-[#8C6D3B]">Maja Standard</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

