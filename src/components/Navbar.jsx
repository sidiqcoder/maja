import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Sparkles, 
  Calendar, 
  Menu as MenuIcon, 
  X, 
  Instagram,
  Scissors,
  Eye,
  Activity,
  Feather,
  Users,
  Briefcase
} from 'lucide-react';

export default function Navbar({ activePage, setActivePage, selectedCategory, setSelectedCategory, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page, category = null) => {
    if (onNavigate) {
      onNavigate(page, category);
    } else {
      if (setActivePage) setActivePage(page);
      if (category && setSelectedCategory) {
        setSelectedCategory(category);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const freshaUrl = "https://www.fresha.com/a/maja-beauty-bar-dubai-m1m-building-al-meydan-d8xwkzcg?utm_source=ig&utm_medium=social&utm_content=link_in_bio";
  const igUrl = "https://www.instagram.com/majabeautybar";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-nav py-3 shadow-md' : 'bg-[#FAF7F2]/95 backdrop-blur-md py-4 border-b border-[#C5A880]/20'
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
                  ? 'text-[#1C1816] bg-[#C5A880]/20 shadow-sm' 
                  : 'text-[#4A3E39] hover:text-[#1C1816] hover:bg-[#FAF7F2]'
              }`}
            >
              Home
            </button>

            {/* Services Dropdown (Pure CSS Hover - closes automatically on leave) */}
            <div className="relative group">
              <button
                onClick={() => handleNavClick('services', 'all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                  activePage === 'services' 
                    ? 'text-[#1C1816] bg-[#C5A880]/20 shadow-sm' 
                    : 'text-[#4A3E39] hover:text-[#1C1816] hover:bg-[#FAF7F2]'
                }`}
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* Services Dropdown Menu (100% Solid Opaque, High Contrast) */}
              <div className="absolute top-full left-0 pt-2 w-72 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50">
                <div 
                  className="rounded-2xl border-2 border-[#C5A880]/50 shadow-[0_20px_50px_rgba(0,0,0,0.35)] p-2.5 space-y-1"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <button
                    onClick={() => handleNavClick('services', 'nails')}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm hover:bg-[#F6EFE6] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#C5A880]/20 flex items-center justify-center text-[#8C6D3B] group-hover/item:bg-[#C5A880] group-hover/item:text-white transition-colors shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-xs tracking-wider text-[#1C1816] group-hover/item:text-[#8C6D3B]">NAILS</div>
                      <div className="text-[11px] text-[#5C5048]">BIAB, Manicure, Pedicure & Art</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('services', 'hair')}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm hover:bg-[#F6EFE6] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#C5A880]/20 flex items-center justify-center text-[#8C6D3B] group-hover/item:bg-[#C5A880] group-hover/item:text-white transition-colors shrink-0">
                      <Scissors className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-xs tracking-wider text-[#1C1816] group-hover/item:text-[#8C6D3B]">HAIR</div>
                      <div className="text-[11px] text-[#5C5048]">Cut, Blow-dry, Balayage & Care</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('services', 'lashes-brows')}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm hover:bg-[#F6EFE6] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#C5A880]/20 flex items-center justify-center text-[#8C6D3B] group-hover/item:bg-[#C5A880] group-hover/item:text-white transition-colors shrink-0">
                      <Eye className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-xs tracking-wider text-[#1C1816] group-hover/item:text-[#8C6D3B]">LASHES & BROWS</div>
                      <div className="text-[11px] text-[#5C5048]">Extensions, YUMI Lift & Tint</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('services', 'waxing')}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm hover:bg-[#F6EFE6] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#C5A880]/20 flex items-center justify-center text-[#8C6D3B] group-hover/item:bg-[#C5A880] group-hover/item:text-white transition-colors shrink-0">
                      <Feather className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-xs tracking-wider text-[#1C1816] group-hover/item:text-[#8C6D3B]">WAXING</div>
                      <div className="text-[11px] text-[#5C5048]">Gentle Full Body & Brazilian</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('services', 'massages')}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm hover:bg-[#F6EFE6] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#C5A880]/20 flex items-center justify-center text-[#8C6D3B] group-hover/item:bg-[#C5A880] group-hover/item:text-white transition-colors shrink-0">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-xs tracking-wider text-[#1C1816] group-hover/item:text-[#8C6D3B]">MASSAGES</div>
                      <div className="text-[11px] text-[#5C5048]">Lymphatic Drainage & Sculpt</div>
                    </div>
                  </button>

                  <div className="pt-2 border-t border-[#C5A880]/25">
                    <button
                      onClick={() => handleNavClick('services', 'all')}
                      className="w-full text-center py-2.5 px-3 rounded-xl bg-[#FAF6F0] hover:bg-[#C5A880] text-xs font-medium uppercase tracking-wider text-[#8C6D3B] hover:text-[#1C1816] transition-colors"
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
                  ? 'text-[#1C1816] bg-[#C5A880]/20 shadow-sm' 
                  : 'text-[#4A3E39] hover:text-[#1C1816] hover:bg-[#FAF7F2]'
              }`}
            >
              Packages
            </button>

            {/* About Us Dropdown (Pure CSS Hover) */}
            <div className="relative group">
              <button
                onClick={() => handleNavClick('about')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                  activePage === 'about' 
                    ? 'text-[#1C1816] bg-[#C5A880]/20 shadow-sm' 
                    : 'text-[#4A3E39] hover:text-[#1C1816] hover:bg-[#FAF7F2]'
                }`}
              >
                About Us
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-0 pt-2 w-64 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50">
                <div 
                  className="rounded-2xl border-2 border-[#C5A880]/50 shadow-[0_20px_50px_rgba(0,0,0,0.35)] p-2.5 space-y-1"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm hover:bg-[#F6EFE6] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#C5A880]/20 flex items-center justify-center text-[#8C6D3B] group-hover/item:bg-[#C5A880] group-hover/item:text-white transition-colors shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-xs tracking-wider text-[#1C1816] group-hover/item:text-[#8C6D3B]">ABOUT & TEAM</div>
                      <div className="text-[11px] text-[#5C5048]">Meet Our Beauty Experts</div>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      handleNavClick('about');
                      setTimeout(() => {
                        document.getElementById('career-section')?.scrollIntoView({ behavior: 'smooth' });
                      }, 200);
                    }}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm hover:bg-[#F6EFE6] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#C5A880]/20 flex items-center justify-center text-[#8C6D3B] group-hover/item:bg-[#C5A880] group-hover/item:text-white transition-colors shrink-0">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-xs tracking-wider text-[#1C1816] group-hover/item:text-[#8C6D3B]">CAREERS</div>
                      <div className="text-[11px] text-[#5C5048]">Join the Maja Team</div>
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
                  ? 'text-[#1C1816] bg-[#C5A880]/20 shadow-sm' 
                  : 'text-[#4A3E39] hover:text-[#1C1816] hover:bg-[#FAF7F2]'
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
              className="w-10 h-10 rounded-full border border-[#C5A880]/40 flex items-center justify-center text-[#4A3E39] hover:text-[#E1306C] hover:border-[#E1306C]/50 hover:bg-white/80 transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Book Now (Fresha) */}
            <a
              href={freshaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luminous px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-[#1A1614]" />
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
              className="w-9 h-9 rounded-full border border-[#C5A880]/40 flex items-center justify-center text-[#4A3E39]"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#3E342F] hover:bg-[#C5A880]/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2]/98 backdrop-blur-2xl border-b border-[#C5A880]/20 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left py-2.5 px-4 rounded-xl text-base font-medium ${
                activePage === 'home' ? 'bg-[#C5A880]/20 text-[#1C1816]' : 'text-[#4A3E39]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('services', 'all')}
              className={`text-left py-2.5 px-4 rounded-xl text-base font-medium ${
                activePage === 'services' ? 'bg-[#C5A880]/20 text-[#1C1816]' : 'text-[#4A3E39]'
              }`}
            >
              Our Services
            </button>
            <div className="pl-6 space-y-1.5 pb-2">
              <button 
                onClick={() => handleNavClick('services', 'nails')}
                className="block text-sm text-[#7A6F68] hover:text-[#1C1816] py-1 font-normal"
              >
                • Nails & BIAB
              </button>
              <button 
                onClick={() => handleNavClick('services', 'hair')}
                className="block text-sm text-[#7A6F68] hover:text-[#1C1816] py-1 font-normal"
              >
                • Hair & Colour
              </button>
              <button 
                onClick={() => handleNavClick('services', 'lashes-brows')}
                className="block text-sm text-[#7A6F68] hover:text-[#1C1816] py-1 font-normal"
              >
                • Lashes & Brows
              </button>
              <button 
                onClick={() => handleNavClick('services', 'waxing')}
                className="block text-sm text-[#7A6F68] hover:text-[#1C1816] py-1 font-normal"
              >
                • Waxing Treatments
              </button>
              <button 
                onClick={() => handleNavClick('services', 'massages')}
                className="block text-sm text-[#7A6F68] hover:text-[#1C1816] py-1 font-normal"
              >
                • Lymphatic Drainage & Massages
              </button>
            </div>
            <button
              onClick={() => handleNavClick('packages')}
              className={`text-left py-2.5 px-4 rounded-xl text-base font-medium ${
                activePage === 'packages' ? 'bg-[#C5A880]/20 text-[#1C1816]' : 'text-[#4A3E39]'
              }`}
            >
              Packages & Offers
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`text-left py-2.5 px-4 rounded-xl text-base font-medium ${
                activePage === 'about' ? 'bg-[#C5A880]/20 text-[#1C1816]' : 'text-[#4A3E39]'
              }`}
            >
              About Us & Meet the Team
            </button>
            <button
              onClick={() => {
                handleNavClick('about');
                setTimeout(() => {
                  document.getElementById('career-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 200);
              }}
              className="text-left py-2.5 px-4 rounded-xl text-base font-medium text-[#4A3E39]"
            >
              Careers / Join Our Team
            </button>
            <button
              onClick={() => handleNavClick('refer')}
              className={`text-left py-2.5 px-4 rounded-xl text-base font-medium ${
                activePage === 'refer' ? 'bg-[#C5A880]/20 text-[#1C1816]' : 'text-[#4A3E39]'
              }`}
            >
              Refer a Friend (Maja Girls Club)
            </button>
          </div>

          <div className="pt-4 border-t border-[#C5A880]/20 flex flex-col gap-3">
            <a
              href={freshaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luminous w-full py-3 rounded-full text-center text-sm font-medium uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#1A1614]" />
              <span>Book on Fresha</span>
            </a>
            <a
              href="https://wa.me/971509964626"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full text-center text-sm font-medium bg-[#25D366] text-white flex items-center justify-center gap-2"
            >
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

