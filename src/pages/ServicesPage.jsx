import React, { useState } from 'react';
import { serviceCategories, servicesData } from '../data/servicesData';
import { 
  Sparkles, 
  MessageCircle, 
  Calendar, 
  Search, 
  Info,
  Clock, 
  ArrowRight, 
  Check
} from 'lucide-react';

export default function ServicesPage({ initialCategory = 'all' }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  const freshaUrl = "https://www.fresha.com/a/maja-beauty-bar-dubai-m1m-building-al-meydan-d8xwkzcg?utm_source=ig&utm_medium=social&utm_content=link_in_bio";

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.subCategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getWhatsAppBookLink = (service) => {
    const text = `Hi Maja Beauty Bar, I would like to book the "${service.title}" (${service.price}). Could you please advise on availability?`;
    return `https://wa.me/971509964626?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8DAC7]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#E2CEB5]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A6865A] font-semibold">
            Treatment Menu & Pricing
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1816] mt-3 leading-tight">
            Beauty, Tailored to You
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#5C5048] max-w-2xl mx-auto leading-relaxed">
            From BIAB nail overlays and Davines colour rituals to YUMI lash lifts and sculpting lymphatic massages.
          </p>
          
          {/* Inclusive of 5% VAT Banner (Explicitly required in deck & landing page.txt line 53) */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/30 text-xs text-[#5C4524] font-medium">
            <Info className="w-3.5 h-3.5 text-[#9E7D47]" />
            <span>All prices are inclusive of 5% UAE VAT</span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <Search className="w-4 h-4 text-[#7A6F68] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search treatments (e.g. BIAB, Balayage, Lymphatic, YUMI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white/90 border border-[#C5A880]/30 focus:outline-none focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 text-sm placeholder:text-[#9B8F86] shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#7A6F68] hover:text-[#1C1816]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#1C1816] text-[#FFFDF9] shadow-lg scale-105'
                  : 'bg-white/80 text-[#5C5048] hover:bg-[#F3ECE1] border border-[#C5A880]/25'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid with Photos from Drive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-luxury-card rounded-3xl overflow-hidden border border-[#C5A880]/25 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:border-[#C5A880]/60 transform hover:-translate-y-1.5"
            >
              <div>
                {/* Photo Top with Scrim & Badge */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1816]/75 via-[#1C1816]/15 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-md text-[#FFFDF9] border border-white/20">
                      {service.subCategory}
                    </span>
                    {service.badge && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C5A880] text-[#1C1816] shadow-sm">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Price Tag in Photo */}
                  <div className="absolute bottom-3.5 right-3.5">
                    <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-[#FAF7F2] text-[#1C1816] shadow-lg border border-[#C5A880]/30 font-serif">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif text-2xl text-[#1C1816] group-hover:text-[#9E7D47] transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  {service.duration && (
                    <div className="inline-flex items-center gap-1.5 text-xs text-[#8A7769] font-medium mb-2.5">
                      <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{service.duration}</span>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Book via WhatsApp button as explicitly requested in line 53 */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-[#C5A880]/15 flex items-center gap-2.5">
                  
                  {/* WhatsApp Booking CTA */}
                  <a
                    href={getWhatsAppBookLink(service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center gap-2 shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                    <span>Book via WhatsApp</span>
                  </a>

                  {/* Fresha quick link */}
                  <a
                    href={freshaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Book on Fresha"
                    className="py-3 px-3 rounded-xl text-xs font-semibold bg-[#FAF7F2] hover:bg-[#F3EBE0] border border-[#C5A880]/30 text-[#4A3E39] flex items-center justify-center transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#9E7D47]" />
                  </a>

                </div>

                <div className="mt-2 text-center text-[10px] text-[#8C7D73]">
                  Inclusive of 5% VAT
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-white/60 rounded-3xl border border-[#C5A880]/20 max-w-md mx-auto">
            <Sparkles className="w-8 h-8 text-[#C5A880] mx-auto mb-3" />
            <h3 className="font-serif text-2xl text-[#1C1816]">No Treatments Found</h3>
            <p className="text-xs text-[#7A6F68] mt-1 mb-4">
              Try searching with different terms or reset the filters.
            </p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="px-5 py-2 rounded-full text-xs font-semibold bg-[#1C1816] text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

