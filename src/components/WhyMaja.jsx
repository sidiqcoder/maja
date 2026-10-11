import React from 'react';

export default function WhyMaja() {
  const cards = [
    {
      id: 'experience',
      image: '/images/why-maja/experience.jpg',
      badge: 'Client Satisfaction & Trust',
      title: '4.8 ★ & 5 Years Experience',
      description: '5 years of salon excellence in Dubai. Our certified team ensures every visit is relaxed and finished to perfection.',
    },
    {
      id: 'products',
      image: '/images/why-maja/products.jpg',
      badge: 'Trusted Quality',
      title: 'Premium Products',
      description: 'We choose trusted global brands for exceptional, long-lasting beauty results.',
      brandsList: 'Schwarzkopf · Davines · Keune · The Gel Bottle · Essie',
    },
    {
      id: 'destination',
      image: '/images/why-maja/destination.jpg',
      badge: 'Complete Luxury Space',
      title: 'One Beauty Destination',
      description: 'Nails, hair, lashes, brows, and spa — all under one chic roof in Nad Al Sheba.',
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
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#3A1E1E] mb-2 leading-snug font-normal">
                    {card.title}
                  </h3>
                  
                  <p className="text-xs sm:text-[13px] text-[#3A1E1E]/80 leading-relaxed font-normal">
                    {card.description}
                  </p>

                  {card.brandsList && (
                    <div className="mt-3 p-2.5 rounded-xl bg-[#F3E4DB]/60 border border-[#D8B1B7]/40">
                      <span className="text-[11px] font-medium tracking-wide text-[#7B2E3A] block">
                        {card.brandsList}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

