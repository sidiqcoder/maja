import React, { useState, useEffect } from 'react';
import { 
  Menu as MenuIcon, 
  X, 
  ChevronDown, 
  Calendar, 
  Instagram, 
  Sparkles,
  Scissors,
  Eye,
  Feather,
  Activity,
  Users,
  Briefcase
} from 'lucide-react';

export default function Navbar({ activePage, setActivePage, selectedCategory, setSelectedCategory, aboutTab = 'about', onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page, subOption = null) => {
    if (onNavigate) {
      onNavigate(page, subOption);
    } else {
      if (setActivePage) setActivePage(page);
      if (subOption && setSelectedCategory) {
        setSelectedCategory(subOption);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const freshaUrl = "https://www.fresha.com/a/maja-beauty-bar-dubai-m1m-building-al-meydan-d8xwkzcg?utm_source=ig&utm_medium=social&utm_content=link_in_bio";
  const igUrl = "https://www.instagram.com/majabeauty.ae";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-nav py-3 shadow-md' : 'bg-[#FAF5F2]/95 backdrop-blur-md py-4 border-b border-[#B97A86]/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center focus:outline-none group text-left"
          >
            <img 
              src="/images/logo-dark.png" 
              alt="Maja Beauty Bar Dubai" 
              className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activePage === 'home' 
                  ? 'text-[#3A1E1E] bg-[#D8B1B7]/35 shadow-sm' 
                  : 'text-[#3A1E1E] hover:text-[#7B2E3A] hover:bg-[#F3E4DB]/60'
              }`}
            >
              Home
            </button>

            {/* Services Dropdown (Pure CSS Hover) */}
            <div className="relative group">
              <button
                onClick={() => handleNavClick('services', 'all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                  activePage === 'services' 
                    ? 'text-[#3A1E1E] bg-[#D8B1B7]/35 shadow-sm' 
                    : 'text-[#3A1E1E] hover:text-[#7B2E3A] hover:bg-[#F3E4DB]/60'
                }`}
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-[#B97A86]" />
              </button>

              {/* Services Dropdown Menu in Maja Luxury Palette */}
              <div className="absolute top-full left-0 pt-2 w-72 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50">
                <div 
                  className="rounded-2xl border border-[#B97A86]/35 shadow-[0_20px_50px_rgba(58,30,30,0.15)] p-2.5 space-y-1"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <button
                    onClick={() => handleNavClick('services', 'nails')}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm hover:bg-[#F3E4DB]/60 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#D8B1B7]/25 flex items-center justify-center text-[#7B2E3A] group-hover/item:bg-[#7B2E3A] group-hover/item:text-white transition-colors shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-xs tracking-wider text-[#3A1E1E] group-hover/item:text-[#7B2E3A]">NAILS</div>
                      <div className="text-[11px] text-[#8C7474]">BIAB, Manicure, Pedicure & Art</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('services', 'hair')}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm hover:bg-[#F3E4DB]/60 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#D8B1B7]/25 flex items-center justify-center text-[#7B2E3A] group-hover/item:bg-[#7B2E3A] group-hover/item:text-white transition-colors shrink-0">
                      <Scissors className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-xs tracking-wider text-[#3A1E1E] group-hover/item:text-[#7B2E3A]">HAIR</div>
                      <div className="text-[11px] text-[#8C7474]">Cut, Blow-dry, Balayage & Care</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('services', 'lashes-brows')}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm hover:bg-[#F3E4DB]/60 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#D8B1B7]/25 flex items-center justify-center text-[#7B2E3A] group-hover/item:bg-[#7B2E3A] group-hover/item:text-white transition-colors shrink-0">
                      <Eye className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-xs tracking-wider text-[#3A1E1E] group-hover/item:text-[#7B2E3A]">LASHES & BROWS</div>
                      <div className="text-[11px] text-[#8C7474]">Extensions, YUMI Lift & Tint</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('services', 'waxing')}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm hover:bg-[#F3E4DB]/60 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#D8B1B7]/25 flex items-center justify-center text-[#7B2E3A] group-hover/item:bg-[#7B2E3A] group-hover/item:text-white transition-colors shrink-0">
                      <Feather className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-xs tracking-wider text-[#3A1E1E] group-hover/item:text-[#7B2E3A]">WAXING</div>
                      <div className="text-[11px] text-[#8C7474]">Gentle Full Body & Brazilian</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('services', 'massages')}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm hover:bg-[#F3E4DB]/60 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#D8B1B7]/25 flex items-center justify-center text-[#7B2E3A] group-hover/item:bg-[#7B2E3A] group-hover/item:text-white transition-colors shrink-0">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-xs tracking-wider text-[#3A1E1E] group-hover/item:text-[#7B2E3A]">MASSAGES</div>
                      <div className="text-[11px] text-[#8C7474]">Lymphatic Drainage & Sculpt</div>
                    </div>
                  </button>

                  <div className="pt-2 border-t border-[#F3E4DB]">
                    <button
                      onClick={() => handleNavClick('services', 'all')}
                      className="w-full text-center py-2.5 px-3 rounded-xl bg-[#FAF5F2] hover:bg-[#7B2E3A] text-xs font-medium uppercase tracking-wider text-[#7B2E3A] hover:text-white transition-colors"
                    >
                      View All Services & Pricing →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Packages */}
            <button
              onClick={() => handleNavClick('packages')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activePage === 'packages' 
                  ? 'text-[#3A1E1E] bg-[#D8B1B7]/35 shadow-sm' 
                  : 'text-[#3A1E1E] hover:text-[#7B2E3A] hover:bg-[#F3E4DB]/60'
              }`}
            >
              Packages
            </button>

            {/* About Us Dropdown (Pure CSS Hover) */}
            <div className="relative group">
              <button
                onClick={() => handleNavClick('about', 'about')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                  activePage === 'about' 
                    ? 'text-[#3A1E1E] bg-[#D8B1B7]/35 shadow-sm' 
                    : 'text-[#3A1E1E] hover:text-[#7B2E3A] hover:bg-[#F3E4DB]/60'
                }`}
              >
                About Us
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-[#B97A86]" />
              </button>

              <div className="absolute top-full left-0 pt-2 w-64 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50">
                <div 
                  className="rounded-2xl border border-[#B97A86]/35 shadow-[0_20px_50px_rgba(58,30,30,0.15)] p-2.5 space-y-1"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <button
                    onClick={() => handleNavClick('about', 'about')}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm hover:bg-[#F3E4DB]/60 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#D8B1B7]/25 flex items-center justify-center text-[#7B2E3A] group-hover/item:bg-[#7B2E3A] group-hover/item:text-white transition-colors shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-xs tracking-wider text-[#3A1E1E] group-hover/item:text-[#7B2E3A]">ABOUT & TEAM</div>
                      <div className="text-[11px] text-[#8C7474]">Meet Our Beauty Experts</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('about', 'careers')}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm hover:bg-[#F3E4DB]/60 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#D8B1B7]/25 flex items-center justify-center text-[#7B2E3A] group-hover/item:bg-[#7B2E3A] group-hover/item:text-white transition-colors shrink-0">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-xs tracking-wider text-[#3A1E1E] group-hover/item:text-[#7B2E3A]">CAREERS</div>
                      <div className="text-[11px] text-[#8C7474]">Join the Maja Team</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Refer a Friend */}
            <button
              onClick={() => handleNavClick('refer')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activePage === 'refer' 
                  ? 'text-[#3A1E1E] bg-[#D8B1B7]/35 shadow-sm' 
                  : 'text-[#3A1E1E] hover:text-[#7B2E3A] hover:bg-[#F3E4DB]/60'
              }`}
            >
              Refer a Friend
            </button>
          </nav>

          {/* Right Header CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Instagram Link */}
            <a
              href={igUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Maja Beauty Bar"
              className="w-10 h-10 rounded-full border border-[#B97A86]/40 flex items-center justify-center text-[#3A1E1E] hover:text-[#E1306C] hover:border-[#E1306C]/50 hover:bg-white/80 transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Book Now (Fresha) in Signature Maja Wine */}
            <a
              href={freshaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luminous px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider flex items-center gap-2 shadow-md hover:scale-105 transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-[#F7CEC2]" />
              <span>Book Online</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={igUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Maja Beauty Bar"
              className="w-9 h-9 rounded-full border border-[#B97A86]/40 flex items-center justify-center text-[#3A1E1E]"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#3A1E1E] hover:bg-[#D8B1B7]/20 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF5F2]/98 backdrop-blur-2xl border-b border-[#B97A86]/20 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left py-2.5 px-4 rounded-xl text-base font-medium ${
                activePage === 'home' ? 'bg-[#D8B1B7]/35 text-[#3A1E1E]' : 'text-[#3A1E1E]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('services', 'all')}
              className={`text-left py-2.5 px-4 rounded-xl text-base font-medium ${
                activePage === 'services' ? 'bg-[#D8B1B7]/35 text-[#3A1E1E]' : 'text-[#3A1E1E]'
              }`}
            >
              Our Services
            </button>
            <div className="pl-6 space-y-1.5 pb-2">
              <button 
                onClick={() => handleNavClick('services', 'nails')}
                className="block text-sm text-[#8C7474] hover:text-[#7B2E3A] py-1 font-normal"
              >
                • Nails &amp; BIAB
              </button>
              <button 
                onClick={() => handleNavClick('services', 'hair')}
                className="block text-sm text-[#8C7474] hover:text-[#7B2E3A] py-1 font-normal"
              >
                • Hair &amp; Colour
              </button>
              <button 
                onClick={() => handleNavClick('services', 'lashes-brows')}
                className="block text-sm text-[#8C7474] hover:text-[#7B2E3A] py-1 font-normal"
              >
                • Lashes &amp; Brows
              </button>
              <button 
                onClick={() => handleNavClick('services', 'waxing')}
                className="block text-sm text-[#8C7474] hover:text-[#7B2E3A] py-1 font-normal"
              >
                • Waxing Treatments
              </button>
              <button 
                onClick={() => handleNavClick('services', 'massages')}
                className="block text-sm text-[#8C7474] hover:text-[#7B2E3A] py-1 font-normal"
              >
                • Lymphatic Drainage &amp; Massages
              </button>
            </div>
            <button
              onClick={() => handleNavClick('packages')}
              className={`text-left py-2.5 px-4 rounded-xl text-base font-medium ${
                activePage === 'packages' ? 'bg-[#D8B1B7]/35 text-[#3A1E1E]' : 'text-[#3A1E1E]'
              }`}
            >
              Packages &amp; Offers
            </button>
            <button
              onClick={() => handleNavClick('about', 'about')}
              className={`text-left py-2.5 px-4 rounded-xl text-base font-medium ${
                activePage === 'about' ? 'bg-[#D8B1B7]/35 text-[#3A1E1E]' : 'text-[#3A1E1E]'
              }`}
            >
              About Us &amp; Meet the Team
            </button>
            <button
              onClick={() => handleNavClick('about', 'careers')}
              className="text-left py-2.5 px-4 rounded-xl text-base font-medium text-[#3A1E1E]"
            >
              Careers / Join Our Team
            </button>
            <button
              onClick={() => handleNavClick('refer')}
              className={`text-left py-2.5 px-4 rounded-xl text-base font-medium ${
                activePage === 'refer' ? 'bg-[#D8B1B7]/35 text-[#3A1E1E]' : 'text-[#3A1E1E]'
              }`}
            >
              Refer a Friend (Maja Girls Club)
            </button>
          </div>

          <div className="pt-4 border-t border-[#B97A86]/20 flex flex-col gap-3">
            <a
              href={freshaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luminous w-full py-3 rounded-full text-center text-sm font-medium uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#F7CEC2]" />
              <span>Book on Fresha</span>
            </a>
            <a
              href="https://wa.me/971509964626"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-maja-mocha w-full py-3 rounded-full text-center text-sm font-medium uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
