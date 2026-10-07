import React from 'react';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import PolicySection from '../components/PolicySection';
import WhyMaja from '../components/WhyMaja';
import VisitUs from '../components/VisitUs';
import CtaSection from '../components/CtaSection';

export default function HomePage({ onSelectCategory, onNavigateToServices }) {
  return (
    <div className="relative">
      {/* 1. Hero */}
      <Hero onExploreServices={onNavigateToServices} />

      {/* 2. Our Service */}
      <ServicesOverview 
        onSelectCategory={onSelectCategory}
        onNavigateToServices={onNavigateToServices}
      />

      {/* 3. Policy */}
      <PolicySection />

      {/* 4. Why Maja */}
      <WhyMaja />

      {/* 5. Visit Us */}
      <VisitUs />

      {/* 6. Ready for your Maja moment CTA */}
      <CtaSection />
    </div>
  );
}
