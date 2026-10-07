import React from 'react';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import PolicySection from '../components/PolicySection';
import WhyMaja from '../components/WhyMaja';
import VisitUs from '../components/VisitUs';

export default function HomePage({ onSelectCategory, onNavigateToServices }) {
  return (
    <div className="relative">
      {/* 1. Landing Page Section (Hero) */}
      <Hero onExploreServices={onNavigateToServices} />

      {/* 2. Our Services */}
      <ServicesOverview 
        onSelectCategory={onSelectCategory}
        onNavigateToServices={onNavigateToServices}
      />

      {/* 3. Cancellation Policy */}
      <PolicySection />

      {/* 4. Why Maja */}
      <WhyMaja />

      {/* 5. Visit Us */}
      <VisitUs />
    </div>
  );
}


