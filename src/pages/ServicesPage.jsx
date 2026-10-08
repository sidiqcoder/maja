import React, { useState, useEffect } from 'react';
import { serviceCategories, pricelistCards } from '../data/servicesData';
import { 
  MessageCircle, 
  Calendar, 
  Search, 
  Info, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function ServicesPage({ initialCategory = 'all', onSelectCategory }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  const freshaUrl = "https://www.fresha.com/a/maja-beauty-bar-dubai-m1m-building-al-meydan-d8xwkzcg?utm_source=ig&utm_medium=social&utm_content=link_in_bio";

  // Keep state synchronized with prop updates from navbar or URL changes
  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    // Scroll smoothly to top of menu
    const menuEl = document.getElementById('pricelist-menu-start');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentCategoryInfo = serviceCategories.find((c) => c.id === activeCategory) || serviceCategories[0];

  // Filter cards based on activeCategory and searchQuery
  const displayedCards = pricelistCards.filter((card) => {
    const matchesCategory = activeCategory === 'all' || card.category === activeCategory;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    const matchesCardTitle = card.title.toLowerCase().includes(query);
    const matchesDescription = card.description?.toLowerCase().includes(query);
    const matchesAnyItem = card.items.some(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        (item.note && item.note.toLowerCase().includes(query))
    );

    return matchesCardTitle || matchesDescription || matchesAnyItem;
  });

  const getCardWhatsAppLink = (card) => {
    const catName = serviceCategories.find((c) => c.id === card.category)?.name || 'Services';
    const text = `Hi Maja Beauty Bar, I would like to book an appointment for "${card.title}" (${catName}). Could you please advise on availability?`;
    return `https://wa.me/971509964626?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="pt-24 sm:pt-28 pb-24 relative overflow-hidden bg-[#FAF7F2] min-h-screen">
      
      {/* Decorative luxury gradient blobs */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#E8DAC7]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#E2CEB5]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header & Hero Area */}
        <div id="pricelist-menu-start" className="text-center max-w-3xl mx-auto mb-10 pt-4">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#8C6D3B] font-medium">
            PRICE LIST
          </span>

          <h1 className="font-serif italic text-4xl sm:text-6xl text-[#4A2525] mt-2 mb-3 leading-tight font-normal">
            {currentCategoryInfo.heroTitle || 'Our Treatment Menu'}
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-[#8C6D3B] tracking-wide mb-3">
            {currentCategoryInfo.heroSubtitle || 'Beauty, Tailored to You'}
          </p>

          <p className="text-xs sm:text-sm text-[#5C5048] max-w-2xl mx-auto leading-relaxed">
            {currentCategoryInfo.description}
          </p>
          
          {/* Inclusive of 5% UAE VAT Banner (landing page.txt line 53) */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/30 text-xs text-[#5C4524] font-medium shadow-sm">
            <Info className="w-3.5 h-3.5 text-[#8C6D3B]" />
            <span>All prices are inclusive of 5% UAE VAT</span>
          </div>

          {currentCategoryInfo.brands && (
            <div className="mt-3 text-[11px] tracking-wider uppercase text-[#8C6D3B]/90 font-medium">
              Featured Brands: {currentCategoryInfo.brands}
            </div>
          )}
        </div>

        {/* Categories Tab Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#4A2525] text-[#FFFDF9] shadow-lg scale-105'
                  : 'bg-white/90 text-[#5C5048] hover:bg-[#F3ECE1] border border-[#C5A880]/30 hover:border-[#C5A880]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search Bar for treatments */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="w-4 h-4 text-[#7A6F68] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search treatments (e.g. BIAB, Gelish, Balayage, YUMI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-full bg-white border border-[#C5A880]/40 focus:outline-none focus:border-[#4A2525] focus:ring-2 focus:ring-[#C5A880]/20 text-xs sm:text-sm placeholder:text-[#9B8F86] shadow-sm transition-all font-normal"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-[#7A6F68] hover:text-[#1C1816]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Grouped Pricelist Cards Grid (Matching https://maja-beauty-dubai.lovable.app/nails) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-8 lg:gap-10">
          {displayedCards.map((card) => {
            // If search is active, highlight or filter items within card
            const visibleItems = searchQuery.trim()
              ? card.items.filter(
                  (item) =>
                    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (item.note && item.note.toLowerCase().includes(searchQuery.toLowerCase()))
                )
              : card.items;

            if (visibleItems.length === 0) return null;

            return (
              <div
                key={card.id}
                className="bg-white/95 backdrop-blur-sm rounded-[28px] sm:rounded-3xl p-6 sm:p-8 border border-[#C5A880]/35 shadow-[0_10px_35px_rgba(28,24,22,0.04)] hover:shadow-[0_15px_45px_rgba(197,168,128,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Title & Header (Cursive/Italic Serif styling like Lovable) */}
                  <div className="flex items-center justify-between gap-3 mb-2 pb-3 border-b border-[#C5A880]/20">
                    <h2 className="font-serif italic text-3xl sm:text-4xl text-[#5C2424] font-medium tracking-tight">
                      {card.title}
                    </h2>
                    {card.badge && (
                      <span className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-[#C5A880]/20 text-[#8C6D3B] border border-[#C5A880]/40">
                        {card.badge}
                      </span>
                    )}
                  </div>

                  {card.description && (
                    <p className="text-xs text-[#7A6F68] mb-5 leading-relaxed">
                      {card.description}
                    </p>
                  )}

                  {/* List of Treatments with Dotted Leaders */}
                  <div className="space-y-3.5 sm:space-y-4 my-3">
                    {visibleItems.map((item, idx) => (
                      <div key={idx} className="group/item">
                        <div className="flex items-baseline justify-between gap-2">
                          {/* Item Name */}
                          <span className="text-sm sm:text-base font-normal text-[#1C1816] group-hover/item:text-[#8C6D3B] transition-colors">
                            {item.name}
                          </span>

                          {/* Dotted Leader Line */}
                          <span className="flex-1 mx-2 sm:mx-3 border-b-2 border-dotted border-[#D4C3B3]/80 self-end mb-1" />

                          {/* Price Tag */}
                          <span className="font-serif font-bold text-sm sm:text-base text-[#1C1816] whitespace-nowrap tracking-wide">
                            {item.price}
                          </span>
                        </div>

                        {/* Optional description or subtitle note */}
                        {item.note && (
                          <div className="text-[11px] sm:text-xs text-[#7A6F68] mt-0.5 leading-snug font-normal">
                            {item.note}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Below the Card: Direct CTA to WhatsApp (as requested by user & landing page.txt line 53) */}
                <div className="pt-5 mt-6 border-t border-[#C5A880]/20">
                  <a
                    href={getCardWhatsAppLink(card)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl sm:rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20 group-hover:scale-110 transition-transform" />
                    <span>Book {card.title} via WhatsApp</span>
                  </a>

                  <div className="mt-2 text-center text-[10px] text-[#8C7D73]">
                    Instant WhatsApp Booking · Inclusive of 5% UAE VAT
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* If no cards matched search */}
        {displayedCards.length === 0 && (
          <div className="text-center py-16 bg-white/70 rounded-3xl border border-[#C5A880]/25 max-w-md mx-auto">
            <Sparkles className="w-8 h-8 text-[#C5A880] mx-auto mb-3" />
            <h3 className="font-serif text-2xl text-[#1C1816] font-normal">No Treatments Found</h3>
            <p className="text-xs text-[#7A6F68] mt-1 mb-4">
              Try searching with another keyword or reset the filter.
            </p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="px-5 py-2.5 rounded-full text-xs font-medium bg-[#1C1816] text-white"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

        {/* Bottom Banner Section (Lovable inspired bottom section) */}
        <div className="mt-16 sm:mt-24 rounded-3xl bg-[#4A2525] text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl border border-[#C5A880]/30">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="font-serif italic text-3xl sm:text-5xl text-[#FAF7F2] font-normal leading-tight">
              Treat yourself to something beautiful.
            </h2>
            <p className="text-xs sm:text-sm text-[#E8DAC7] max-w-lg mx-auto font-light">
              Ready for your Maja moment? Book your appointment online via Fresha or directly on WhatsApp with our team.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={freshaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FAF7F2] hover:bg-white text-[#1C1816] font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Calendar className="w-4 h-4 text-[#8C6D3B]" />
                <span>Book on Fresha</span>
              </a>
              <a
                href="https://wa.me/971509964626"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
