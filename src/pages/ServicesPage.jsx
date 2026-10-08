import React, { useState, useEffect } from 'react';
import { serviceCategories, pricelistCards } from '../data/servicesData';
import { 
  MessageCircle, 
  Calendar, 
  Search, 
  Info, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Scissors,
  Eye,
  Activity,
  Feather
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentCategoryInfo = serviceCategories.find((c) => c.id === activeCategory) || serviceCategories[0];
  const showcaseCategories = serviceCategories.filter((c) => c.id !== 'all');

  // Filter cards based on activeCategory and searchQuery for pricelist view
  const displayedCards = pricelistCards.filter((card) => {
    const matchesCategory = card.category === activeCategory;
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

  const getGeneralWhatsAppLink = (subject = 'Services') => {
    const text = `Hi Maja Beauty Bar, I'm interested in booking an appointment for ${subject}. Could you please share the next available times?`;
    return `https://wa.me/971509964626?text=${encodeURIComponent(text)}`;
  };

  const getCategoryIcon = (catId) => {
    switch (catId) {
      case 'nails':
        return <Sparkles className="w-4 h-4 text-[#B97A86]" />;
      case 'hair':
        return <Scissors className="w-4 h-4 text-[#B97A86]" />;
      case 'lashes-brows':
        return <Eye className="w-4 h-4 text-[#B97A86]" />;
      case 'waxing':
        return <Feather className="w-4 h-4 text-[#B97A86]" />;
      case 'massages':
        return <Activity className="w-4 h-4 text-[#B97A86]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#B97A86]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF5F2] text-[#3A1E1E]">

      {/* ========================================================================= */}
      {/* 1. VIEW A: ALL SERVICES HUB / OVERVIEW (Route: /services)                */}
      {/* ========================================================================= */}
      {activeCategory === 'all' ? (
        <div>
          {/* Hero Section with Salon Ambiance Photo (matching lovable /services) */}
          <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden text-white">
            <div className="absolute inset-0 z-0">
              <img
                src="/images/services/hero-salon.jpg"
                alt="Maja Beauty Bar Dubai Salon Ambiance"
                className="w-full h-full object-cover filter brightness-[0.52] contrast-[1.05] scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A1E1E] via-[#3A1E1E]/80 to-[#3A1E1E]/70" />
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#3A1E1E]/40 to-[#3A1E1E]/90" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-[0.25em] bg-[#D8B1B7]/20 text-[#F7CEC2] border border-[#D8B1B7]/35 mb-5">
                Our Services · More Than Beauty
              </span>

              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.12]">
                Beauty, <span className="italic text-[#F7CEC2]">Your Way</span>
              </h1>

              <p className="mt-5 text-base sm:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                From nails to hair, lashes, brows and body treatments, discover everything you need for your beauty routine under one roof in Dubai.
              </p>

              <p className="mt-3 text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
                Our services are designed to help you look polished, feel confident and enjoy a little time for yourself.
              </p>

              {/* Quick Navigation Category Pills */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto">
                {serviceCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                      activeCategory === cat.id
                        ? 'bg-[#7B2E3A] text-white shadow-lg font-medium scale-105 border border-[#D8B1B7]/40'
                        : 'bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/25'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* 5 Suite Showcase Sections (Alternating Luxury Layout) */}
          <section className="py-20 lg:py-28 relative">
            {/* Ambient luxury blobs */}
            <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-[#F7CEC2]/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-0 w-[550px] h-[550px] bg-[#D8B1B7]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 lg:space-y-28">
              {showcaseCategories.map((cat, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <div
                    key={cat.id}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                      isEven ? '' : 'lg:grid-flow-dense'
                    }`}
                  >
                    {/* Image Column */}
                    <div className={`lg:col-span-6 ${isEven ? '' : 'lg:col-start-7'}`}>
                      <div className="relative group overflow-hidden rounded-3xl shadow-2xl border border-[#D8B1B7]/40 bg-black aspect-[4/3] sm:aspect-[16/11]">
                        <img
                          src={cat.image}
                          alt={`Maja Beauty Bar ${cat.name}`}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.95]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3.5 py-1.5 rounded-full text-[11px] font-medium uppercase tracking-wider bg-[#3A1E1E]/85 text-[#F7CEC2] backdrop-blur-md border border-white/20">
                            Category 0{idx + 1}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-6 ${isEven ? '' : 'lg:col-start-1'}`}>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(cat.id)}
                          <span className="text-xs uppercase tracking-[0.25em] text-[#7B2E3A] font-medium">
                            Suite 0{idx + 1} · {cat.name}
                          </span>
                        </div>

                        <h2 className="font-serif text-3xl sm:text-5xl text-[#3A1E1E] tracking-tight leading-tight">
                          {cat.name}
                        </h2>

                        {cat.deckHeadline && (
                          <p className="font-serif italic text-lg sm:text-xl text-[#7B2E3A] leading-snug">
                            "{cat.deckHeadline}"
                          </p>
                        )}

                        <p className="text-sm sm:text-base text-[#3A1E1E]/80 leading-relaxed font-normal">
                          {cat.description}
                        </p>

                        {/* Highlight Pills */}
                        {cat.highlights && (
                          <div className="pt-2 pb-2 flex flex-wrap gap-2">
                            {cat.highlights.map((h, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-[#F3E4DB] text-[#7B2E3A] border border-[#D8B1B7]/40 font-normal"
                              >
                                <CheckCircle2 className="w-3 h-3 text-[#7B2E3A]" />
                                <span>{h}</span>
                              </span>
                            ))}
                          </div>
                        )}

                        {cat.brands && (
                          <p className="text-xs text-[#8C7474] font-medium">
                            <span className="text-[#7B2E3A]">Featured Brands:</span> {cat.brands}
                          </p>
                        )}

                        {/* Action Buttons */}
                        <div className="pt-4 flex flex-wrap items-center gap-3.5">
                          <button
                            onClick={() => handleCategoryChange(cat.id)}
                            className="btn-luminous px-6 py-3.5 rounded-full text-xs font-medium uppercase tracking-wider inline-flex items-center gap-2.5 shadow-md group text-white"
                          >
                            <span>{cat.ctaLabel || `Explore ${cat.name} Pricing`}</span>
                            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                          </button>

                          <a
                            href={getGeneralWhatsAppLink(cat.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-3.5 rounded-full text-xs font-medium tracking-wide bg-white hover:bg-[#F3E4DB] text-[#3A1E1E] border border-[#B97A86]/35 inline-flex items-center gap-2 transition-all shadow-sm"
                          >
                            <MessageCircle className="w-4 h-4 text-[#25D366]" />
                            <span>Inquire on WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bottom Banner */}
          <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-[#3A1E1E] via-[#2A1414] to-[#231012] text-white p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl border border-[#D8B1B7]/30">
              <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#F7CEC2] font-medium">
                  Appointments & Inquiries
                </span>
                <h3 className="font-serif italic text-3xl sm:text-5xl text-white font-normal leading-tight">
                  Ready for Your Maja Moment?
                </h3>
                <p className="text-xs sm:text-base text-white/80 max-w-lg mx-auto font-light leading-relaxed">
                  Discover the treatment that feels right for you and book your next visit with the Maja team.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={freshaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luminous w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg text-white"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>Book on Fresha</span>
                  </a>
                  <a
                    href="https://wa.me/971509964626"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-medium uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/30 flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>Message on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (

        /* ========================================================================= */
        /* 2. VIEW B: SPECIFIC CATEGORY PRICELIST (e.g. /nails, /hair, etc.)        */
        /* ========================================================================= */
        <div>
          {/* Category Hero with Drive Image & Dark Scrim */}
          <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 overflow-hidden text-white">
            <div className="absolute inset-0 z-0">
              <img
                src={currentCategoryInfo.image}
                alt={`Maja Beauty Bar ${currentCategoryInfo.name}`}
                className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.08] scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A1E1E] via-[#3A1E1E]/80 to-[#3A1E1E]/70" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-[0.25em] bg-[#D8B1B7]/20 text-[#F7CEC2] border border-[#D8B1B7]/35 mb-4">
                Price List · {currentCategoryInfo.name}
              </span>

              <h1 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-tight">
                {currentCategoryInfo.heroSubtitle}
              </h1>

              <p className="font-serif italic text-xl sm:text-2xl text-[#F7CEC2] mt-2 mb-3">
                {currentCategoryInfo.heroTitle}
              </p>

              <p className="mt-3 text-sm sm:text-base text-white/85 max-w-2xl mx-auto font-light leading-relaxed">
                {currentCategoryInfo.description}
              </p>

              {/* UAE VAT 5% Banner */}
              <div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#B97A86]/40 text-xs text-[#F7CEC2] font-medium shadow-md">
                <Info className="w-3.5 h-3.5 text-[#F7CEC2]" />
                <span>All prices are inclusive of 5% UAE VAT</span>
              </div>

              {currentCategoryInfo.brands && (
                <div className="mt-3 text-xs tracking-wider uppercase text-white/70 font-medium">
                  Featured Brands: {currentCategoryInfo.brands}
                </div>
              )}
            </div>
          </section>

          {/* Pricelist Content Area */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
            
            {/* Category Navigation Tabs */}
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-10 no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-[#3A1E1E] text-white shadow-lg scale-105'
                      : 'bg-white/90 text-[#3A1E1E]/80 hover:bg-[#F3E4DB] border border-[#B97A86]/30 hover:border-[#7B2E3A]'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Live Search Bar */}
            <div className="max-w-md mx-auto mb-12">
              <div className="relative">
                <Search className="w-4 h-4 text-[#8C7474] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={`Search ${currentCategoryInfo.name} treatments (e.g. BIAB, Cut, Tint)...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-10 py-3 rounded-full bg-white border border-[#B97A86]/40 focus:outline-none focus:border-[#7B2E3A] focus:ring-2 focus:ring-[#F7CEC2]/40 text-xs sm:text-sm placeholder:text-[#8C7474] shadow-sm transition-all font-normal text-[#3A1E1E]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-[#8C7474] hover:text-[#3A1E1E]"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Grouped Pricelist Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-8 lg:gap-10">
              {displayedCards.map((card) => {
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
                    className="bg-white/95 backdrop-blur-sm rounded-[28px] sm:rounded-3xl p-6 sm:p-8 border border-[#D8B1B7]/40 shadow-[0_10px_35px_rgba(58,30,30,0.04)] hover:shadow-[0_15px_45px_rgba(185,122,134,0.15)] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Title & Header */}
                      <div className="flex items-center justify-between gap-3 mb-2 pb-3 border-b border-[#D8B1B7]/30">
                        <h2 className="font-serif italic text-3xl sm:text-4xl text-[#7B2E3A] font-medium tracking-tight">
                          {card.title}
                        </h2>
                        {card.badge && (
                          <span className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-[#F3E4DB] text-[#7B2E3A] border border-[#D8B1B7]/40">
                            {card.badge}
                          </span>
                        )}
                      </div>

                      {card.description && (
                        <p className="text-xs text-[#8C7474] mb-5 leading-relaxed font-light">
                          {card.description}
                        </p>
                      )}

                      {/* List of Treatments with Dotted Leaders */}
                      <div className="space-y-3 sm:space-y-3.5 my-3">
                        {visibleItems.map((item, idx) => {
                          // Extract parenthesized variants (e.g. Med / Long / XL, Aloe Vera/Avocado/Coconut) to line-break cleanly
                          const parenMatch = item.name.match(/^(.*?)\s*(\([^)]+\))$/);
                          const displayName = parenMatch ? parenMatch[1].trim() : item.name;
                          const variantTag = parenMatch ? parenMatch[2].trim() : null;

                          return (
                            <div key={idx} className="group/item py-0.5">
                              <div className="flex items-baseline justify-between gap-2">
                                {/* Item Name */}
                                <span className="text-sm sm:text-base font-normal text-[#3A1E1E] group-hover/item:text-[#7B2E3A] transition-colors">
                                  {displayName}
                                </span>

                                {/* Dotted Leader Line */}
                                <span className="flex-1 mx-2 sm:mx-3 border-b border-dotted border-[#D8B1B7]/60 self-end mb-1" />

                                {/* Price Tag - Elegant font-normal / font-medium as specifically requested */}
                                <span className="font-serif font-normal text-sm sm:text-base text-[#3A1E1E] whitespace-nowrap tracking-wide shrink-0">
                                  {item.price}
                                </span>
                              </div>

                              {/* Variant placed on its own line ("di enter aja") - constrained to the left */}
                              {variantTag && (
                                <div className="text-[11px] sm:text-xs text-[#B97A86] font-normal tracking-wide mt-0.5 max-w-[calc(100%-5.5rem)] sm:max-w-[calc(100%-6.5rem)] pr-2">
                                  {variantTag}
                                </div>
                              )}

                              {/* Optional description or subtitle note - constrained so it never extends into or under the price column */}
                              {item.note && (
                                <div className="text-[10px] sm:text-[11px] text-[#8C7474] mt-0.5 leading-snug font-light max-w-[calc(100%-5.5rem)] sm:max-w-[calc(100%-6.5rem)] pr-2">
                                  {item.note}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Below the Card: Direct CTA to WhatsApp in Maja Luxury Brand Palette */}
                    <div className="pt-5 mt-6 border-t border-[#D8B1B7]/30">
                      <a
                        href={getCardWhatsAppLink(card)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-4 rounded-xl sm:rounded-2xl bg-[#7B2E3A] hover:bg-[#8C3745] text-white font-medium text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 border border-[#D8B1B7]/30 group"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                          <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
                        </div>
                        <span>Book {card.title} via WhatsApp</span>
                      </a>

                      <div className="mt-2.5 text-center text-[10px] text-[#8C7474]">
                        Instant WhatsApp Booking · Inclusive of 5% UAE VAT
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* If no cards matched search */}
            {displayedCards.length === 0 && (
              <div className="text-center py-16 bg-white/70 rounded-3xl border border-[#D8B1B7]/30 max-w-md mx-auto">
                <Sparkles className="w-8 h-8 text-[#B97A86] mx-auto mb-3" />
                <h3 className="font-serif text-2xl text-[#3A1E1E] font-normal">No Treatments Found</h3>
                <p className="text-xs text-[#8C7474] mt-1 mb-4">
                  Try searching with another keyword or reset the filter.
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-5 py-2.5 rounded-full text-xs font-medium bg-[#3A1E1E] text-white"
                >
                  Clear Search
                </button>
              </div>
            )}

            {/* Bottom Banner */}
            <div className="mt-16 sm:mt-24 rounded-3xl bg-gradient-to-br from-[#3A1E1E] via-[#2A1414] to-[#231012] text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl border border-[#D8B1B7]/30">
              <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                <span className="inline-block px-3.5 py-1 rounded-full text-[11px] uppercase tracking-[0.2em] bg-[#D8B1B7]/15 text-[#F7CEC2] border border-[#D8B1B7]/30 font-medium">
                  Appointments & Inquiries
                </span>
                <h2 className="font-serif italic text-3xl sm:text-5xl text-white font-normal leading-tight">
                  Treat yourself to something beautiful.
                </h2>
                <p className="text-xs sm:text-sm text-[#F3E4DB]/90 max-w-lg mx-auto font-light leading-relaxed">
                  Ready for your Maja moment? Book your appointment online via Fresha or directly on WhatsApp with our concierge team.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                  <a
                    href={freshaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FAF5F2] hover:bg-white text-[#3A1E1E] font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all hover:scale-105"
                  >
                    <Calendar className="w-4 h-4 text-[#7B2E3A]" />
                    <span>Book on Fresha</span>
                  </a>
                  <a
                    href="https://wa.me/971509964626?text=Hi%20Maja%20Beauty%20Bar%2C%20I'd%20like%20to%20book%20an%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-maja-wine w-full sm:w-auto px-7 py-3.5 rounded-full text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all text-white"
                  >
                    <div className="w-4 h-4 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                      <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
                    </div>
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                {/* Cancellation Policy & VAT notice */}
                <div className="pt-4 border-t border-white/10 mt-6 text-[11px] text-[#F3E4DB]/70 max-w-md mx-auto space-y-1">
                  <p>All prices are inclusive of 5% UAE VAT.</p>
                  <p className="text-[10.5px] text-[#F7CEC2]/80">
                    <strong>Cancellation Policy:</strong> Free cancellation or rescheduling up to 24 hours prior to appointment.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
