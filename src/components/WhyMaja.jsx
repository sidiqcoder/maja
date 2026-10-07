import React from 'react';
import { Star, Award, Sparkles, Building2 } from 'lucide-react';

export default function WhyMaja() {
  const cards = [
    {
      id: 'experience',
      image: '/images/why-maja/experience.jpg',
      badge: 'Client Satisfaction & Trust',
      title: '4.8 ★ Rated by 394+ Clients & 5 Years Beauty Expertise',
      description: 'Bringing 5 years of dedicated salon expertise in Dubai. Our passionate team of certified beauty artisans ensures every visit is memorable, relaxed, and finished to perfection.',
      footerTag: 'Top Rated in Meydan Dubai',
      icon: Star,
    },
    {
      id: 'products',
      image: '/images/why-maja/products.jpg',
      badge: 'Trusted Quality',
      title: 'Premium Products',
      description: 'We choose premium products from trusted beauty brands to give every treatment the quality and results it deserves.',
      brandsList: 'Schwarzkopf · Davines · Keune · The GelBottle · Luxio · Essie',
      footerTag: '100% Authentic Formulations',
      icon: Sparkles,
    },
    {
      id: 'destination',
      image: '/images/why-maja/destination.jpg',
      badge: 'Complete Luxury Space',
      title: 'One Beauty Destination',
      description: 'Nails • Hair • Lashes • Brows • Wellness. Everything your beauty routine needs brought together under one chic, welcoming roof in Dubai.',
      footerTag: 'M1M Building, Al Meydan Road',
      icon: Building2,
    },
  ];

  return (
    <section id="why-maja" className="py-20 lg:py-28 relative overflow-hidden">
      
      {/* Background layered ambient textures (non-solid) */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FAF0E4]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A6865A] font-semibold">
            Why Maja
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1C1816] mt-3 leading-tight">
            Beauty, Elevated to Its Highest Standard
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-4" />
        </div>

        {/* 3 Cards with Photos as Requested */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
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

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-[#E5D2BA]">
                      <Icon className="w-5 h-5" />
                    </div>
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
            );
          })}
        </div>

      </div>
    </section>
  );
}

