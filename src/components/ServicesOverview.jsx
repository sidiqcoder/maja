import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServicesOverview({ onSelectCategory, onNavigateToServices }) {
  
  // Large visual cards modeled after thecoloristhairsalon.com (landing page.txt line 69)
  // Clean full-bleed editorial imagery, luxury title, and glowing CTA
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

  return (
    <section 
      id="services-section" 
      className="relative min-h-screen lg:h-screen lg:max-h-[1080px] flex items-center justify-center overflow-hidden pt-20 pb-8"
    >
      
      {/* Subtle organic warm background blobs (ensuring non-solid background) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F7CEC2]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#D8B1B7]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#7B2E3A] font-medium">
            Our Services
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3A1E1E] mt-1.5 leading-tight font-normal">
            Everything Your Beauty Routine Needs
          </h2>
          <div className="w-14 h-0.5 bg-[#B97A86] mx-auto mt-2.5" />
        </div>

        {/* Large Visual Service Cards (Colorist style: Large photos, no text clutter, pure imagery & CTA) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 lg:gap-4 xl:gap-5">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              onClick={() => onSelectCategory(card.id)}
              className="group relative h-[340px] sm:h-[380px] lg:h-[400px] xl:h-[440px] max-h-[55vh] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#D8B1B7]/40"
            >
              {/* Full Bleed Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A1E1E]/90 via-[#3A1E1E]/25 to-transparent transition-opacity duration-300" />

              {/* Top Tag */}
              <div className="absolute top-3.5 left-3.5">
                <span className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/30">
                  {card.tag}
                </span>
              </div>

              {/* Bottom Card Title & CTA */}
              <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col justify-end text-white">
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white mb-3 tracking-wide font-normal">
                  {card.title}
                </h3>
                
                {/* Visual CTA Button with Shimmer */}
                <div className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-[11px] font-medium uppercase tracking-wider text-white transition-all group-hover:bg-[#7B2E3A] group-hover:text-white group-hover:border-[#7B2E3A]">
                  <span>{card.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

