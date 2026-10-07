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

  // Handle URL hash routing on initial load and back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'services', 'packages', 'about', 'refer'].includes(hash)) {
        setActivePage(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (['nails', 'hair', 'lashes-brows', 'waxing', 'massages'].includes(hash)) {
        setActivePage('services');
        setSelectedCategory(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page, category = null) => {
    setActivePage(page);
    if (category) {
      setSelectedCategory(category);
      window.location.hash = category;
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategoryFromHome = (category) => {
    setSelectedCategory(category);
    setActivePage('services');
    window.location.hash = category;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2D2622]">
      {/* Top Luxury Navbar */}
      <Navbar 
        activePage={activePage}
        setActivePage={(page) => navigateTo(page)}
        selectedCategory={selectedCategory}
        setSelectedCategory={(cat) => setSelectedCategory(cat)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage 
            onSelectCategory={handleSelectCategoryFromHome}
            onNavigateToServices={() => navigateTo('services', 'all')}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage 
            initialCategory={selectedCategory}
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

