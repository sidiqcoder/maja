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
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      
      {/* Background layered ambient textures (non-solid) */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#D8B1B7]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F7CEC2]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#7B2E3A] font-medium">
            Why Maja
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3A1E1E] mt-2 leading-tight font-normal">
            Beauty, Elevated to Its Highest Standard
          </h2>
          <div className="w-14 h-0.5 bg-[#B97A86] mx-auto mt-3" />
        </div>

        {/* 3 Cards with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group bg-luxury-card rounded-3xl overflow-hidden border border-[#D8B1B7]/40 shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-1"
            >
              {/* Photo Top with Scrim & Badge */}
              <div className="relative h-44 sm:h-48 lg:h-52 w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A1E1E]/75 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider bg-black/40 backdrop-blur-md text-white border border-white/20">
                    {card.badge}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#3A1E1E] mb-1.5 leading-snug font-normal">
                    {card.title}
                  </h3>
                  
                  <p className="text-xs sm:text-[13px] text-[#3A1E1E]/80 leading-relaxed line-clamp-3 font-normal">
                    {card.description}
                  </p>

                  {card.brandsList && (
                    <div className="mt-2.5 p-2 rounded-xl bg-[#F3E4DB]/60 border border-[#D8B1B7]/40">
                      <span className="text-[10.5px] font-medium tracking-wide text-[#7B2E3A] block truncate">
                        {card.brandsList}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Bottom Tag */}
                <div className="mt-3 pt-2.5 border-t border-[#D8B1B7]/30 flex items-center justify-between text-[10.5px] text-[#8C7474]">
                  <span>{card.footerTag}</span>
                  <span className="font-medium text-[#B97A86]">Maja Standard</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

