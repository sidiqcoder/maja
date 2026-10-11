import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PackagesPage from './pages/PackagesPage';
import AboutPage from './pages/AboutPage';
import ReferPage from './pages/ReferPage';
import FirstVisitModal from './components/FirstVisitModal';

// SEO Metadata mapping for SPA client-side routing
const SEO_CONFIG = {
  home: {
    title: 'Maja Beauty Bar | Luxury Beauty Salon in Meydan, Dubai',
    description: 'Discover Maja Beauty Bar in Meydan, Dubai. Premium nail salon (BIAB & Russian Manicure), hair styling, lash extensions, brow treatments, waxing, and lymphatic drainage massage.',
    canonical: 'https://majabeautybar.com/'
  },
  services: {
    all: {
      title: 'Luxury Beauty Services | Nails, Hair, Lashes & Massage | Maja Dubai',
      description: 'Explore full salon services at Maja Beauty Bar Meydan: BIAB nails, Russian manicure, hair blowdry & treatments, lash extensions, and lymphatic massage.',
      canonical: 'https://majabeautybar.com/services'
    },
    nails: {
      title: 'BIAB Nails, Gel & Russian Manicure in Meydan | Maja Beauty Bar Dubai',
      description: 'Experience premium nail care in Dubai: Builder in a Bottle (BIAB), Russian manicure, hard gel extensions, luxury pedicures, and bespoke nail art at Maja.',
      canonical: 'https://majabeautybar.com/nails'
    },
    hair: {
      title: 'Hair Salon & Luxury Blowdry in Meydan | Maja Beauty Bar Dubai',
      description: 'Signature blowdrys, restorative hair treatments, and chic styling at Maja Beauty Bar Meydan, Dubai. Because every woman deserves her Maja moment.',
      canonical: 'https://majabeautybar.com/hair'
    },
    'lashes-brows': {
      title: 'Lash Extensions & Brow Lamination Dubai | Maja Beauty Bar Meydan',
      description: 'Custom lash extensions, lash lifts, brow shaping, tinting, and brow lamination in Meydan, Dubai. Effortless beauty definition by Maja experts.',
      canonical: 'https://majabeautybar.com/lashes-brows'
    },
    massages: {
      title: 'Lymphatic Drainage Massage & Sculpting Dubai | Maja Beauty Bar',
      description: 'Detoxifying lymphatic drainage massage, body sculpting, and relaxing wellness treatments in Nad Al Sheba / Meydan, Dubai.',
      canonical: 'https://majabeautybar.com/massages'
    },
    waxing: {
      title: 'Gentle Facial & Body Waxing Dubai | Maja Beauty Bar Meydan',
      description: 'Smooth, hygienic, and precise waxing treatments for full body and face at Maja Beauty Bar, Meydan, Dubai.',
      canonical: 'https://majabeautybar.com/waxing'
    }
  },
  packages: {
    title: 'Curated Luxury Beauty Packages in Dubai | Maja Beauty Bar Meydan',
    description: 'Save on all-in-one beauty packages: signature combos for nails, hair, lashes, and lymphatic massage at Maja Beauty Bar Meydan, Dubai.',
    canonical: 'https://majabeautybar.com/packages'
  },
  about: {
    about: {
      title: 'About Maja Beauty Bar | Our Luxury Philosophy & Story | Dubai',
      description: 'Learn about Maja Beauty Bar in Meydan, Dubai. An elevated sanctuary for modern women seeking seamless beauty rituals with zero compromise.',
      canonical: 'https://majabeautybar.com/about'
    },
    careers: {
      title: 'Beauty Careers & Salon Jobs in Dubai | Maja Beauty Bar Meydan',
      description: 'Join the team at Maja Beauty Bar Dubai. We are hiring passionate nail technicians, hair stylists, and beauty therapists in Meydan.',
      canonical: 'https://majabeautybar.com/careers'
    }
  },
  refer: {
    title: 'Refer a Friend & Get 20% OFF | Maja Beauty Bar Dubai',
    description: 'Share your Maja moment! Refer your best friends to Maja Beauty Bar Meydan and both receive 20% off your next salon visit.',
    canonical: 'https://majabeautybar.com/refer'
  }
};

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [aboutTab, setAboutTab] = useState('about');

  // Dynamically update document title, description, OG tags, and canonical link
  useEffect(() => {
    let config = SEO_CONFIG.home;
    if (activePage === 'services') {
      config = SEO_CONFIG.services[selectedCategory] || SEO_CONFIG.services.all;
    } else if (activePage === 'about') {
      config = SEO_CONFIG.about[aboutTab] || SEO_CONFIG.about.about;
    } else if (SEO_CONFIG[activePage]) {
      config = SEO_CONFIG[activePage];
    }

    if (config) {
      document.title = config.title;

      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', config.description);

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', config.title);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', config.description);

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', config.canonical);

      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) canonicalLink.setAttribute('href', config.canonical);
    }
  }, [activePage, selectedCategory, aboutTab]);

  // Handle URL pathname and hash routing on initial load and back/forward navigation
  useEffect(() => {
    const handleUrlRouting = () => {
      // Check both pathname and hash
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const target = hash || path;

      const categoryMap = {
        'nails': 'nails',
        'hair': 'hair',
        'lashes-brows': 'lashes-brows',
        'lashes': 'lashes-brows',
        'brows': 'lashes-brows',
        'waxing': 'waxing',
        'massages': 'massages',
        'massage': 'massages',
      };

      if (categoryMap[target]) {
        setActivePage('services');
        setSelectedCategory(categoryMap[target]);
      } else if (target === 'services') {
        setActivePage('services');
        setSelectedCategory('all');
      } else if (['packages', 'refer'].includes(target)) {
        setActivePage(target);
      } else if (target === 'about' || target === 'about-us') {
        setActivePage('about');
        setAboutTab('about');
      } else if (target === 'careers' || target === 'career') {
        setActivePage('about');
        setAboutTab('careers');
      } else if (target === 'contact' || target === 'visit-us' || target === 'visitus') {
        setActivePage('home');
        setTimeout(() => {
          document.getElementById('visit-us')?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        setActivePage('home');
      }
    };

    handleUrlRouting();
    window.addEventListener('popstate', handleUrlRouting);
    window.addEventListener('hashchange', handleUrlRouting);
    return () => {
      window.removeEventListener('popstate', handleUrlRouting);
      window.removeEventListener('hashchange', handleUrlRouting);
    };
  }, []);

  const navigateTo = (page, subOption = null) => {
    setActivePage(page);
    let newPath = '/';

    if (page === 'services') {
      const cat = subOption || 'all';
      setSelectedCategory(cat);
      newPath = cat === 'all' ? '/services' : `/${cat}`;
    } else if (page === 'about') {
      const tab = subOption === 'careers' ? 'careers' : 'about';
      setAboutTab(tab);
      newPath = tab === 'careers' ? '/careers' : '/about';
    } else if (page === 'home') {
      newPath = '/';
    } else {
      newPath = `/${page}`;
    }

    // Update browser URL smoothly without reloading
    if (window.location.pathname !== newPath) {
      window.history.pushState({ page, subOption }, '', newPath);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF5F2] text-[#3A1E1E]">
      {/* Top Luxury Navbar */}
      <Navbar 
        activePage={activePage}
        selectedCategory={selectedCategory}
        aboutTab={aboutTab}
        onNavigate={navigateTo}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage 
            onSelectCategory={(cat) => navigateTo('services', cat)}
            onNavigateToServices={() => navigateTo('services', 'all')}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage 
            initialCategory={selectedCategory}
            onSelectCategory={(cat) => navigateTo('services', cat)}
          />
        )}

        {activePage === 'packages' && (
          <PackagesPage />
        )}

        {activePage === 'about' && (
          <AboutPage 
            initialTab={aboutTab}
            onTabChange={(tab) => navigateTo('about', tab)}
          />
        )}

        {activePage === 'refer' && (
          <ReferPage />
        )}
      </main>

      {/* Floating Action Buttons (Animated WhatsApp & Instagram) */}
      <FloatingActions />

      {/* First Visit 20% OFF Website Pop-up */}
      <FirstVisitModal />

      {/* Bottom Footer */}
      <Footer 
        onNavigate={(page, category = null) => navigateTo(page, category)}
      />
    </div>
  );
}
