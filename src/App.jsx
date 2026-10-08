import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PackagesPage from './pages/PackagesPage';
import AboutPage from './pages/AboutPage';
import ReferPage from './pages/ReferPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      } else if (['packages', 'about', 'refer'].includes(target)) {
        setActivePage(target);
      } else if (target === 'careers' || target === 'career') {
        setActivePage('about');
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

  const navigateTo = (page, category = null) => {
    setActivePage(page);
    let newPath = '/';

    if (page === 'services') {
      const cat = category || 'all';
      setSelectedCategory(cat);
      newPath = cat === 'all' ? '/services' : `/${cat}`;
    } else if (page === 'home') {
      newPath = '/';
    } else {
      newPath = `/${page}`;
    }

    // Update browser URL smoothly without reloading
    if (window.location.pathname !== newPath) {
      window.history.pushState({ page, category }, '', newPath);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2D2622]">
      {/* Top Luxury Navbar */}
      <Navbar 
        activePage={activePage}
        selectedCategory={selectedCategory}
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
          <AboutPage />
        )}

        {activePage === 'refer' && (
          <ReferPage />
        )}
      </main>

      {/* Floating Action Buttons (Animated WhatsApp & Instagram) */}
      <FloatingActions />

      {/* Bottom Footer */}
      <Footer 
        onNavigate={(page, category = null) => navigateTo(page, category)}
      />
    </div>
  );
}
