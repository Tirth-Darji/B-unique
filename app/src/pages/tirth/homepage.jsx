import React, { useState } from 'react';
import './homepage.css';

import { TirthNavbar } from './components/TirthNavbar';
import { TirthHeroWander } from './components/TirthHeroWander';
import { DestinationDiscoverySection } from './components/DestinationCard';
import { TirthFooter } from './components/TirthFooter';
import { DestinationDetailModal } from './components/ItineraryModals';
import ItineraryView from './itineraryView';

export default function GlobeTrotterHome({ onNavigateToJourneys, onNavigateToProfile }) {
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home' | 'itinerary-view'
  const [selectedModalDest, setSelectedModalDest] = useState(null);

  if (currentScreen === 'itinerary-view') {
    return (
      <ItineraryView
        onBackToHome={() => setCurrentScreen('home')}
        onNavigateToJourneys={onNavigateToJourneys}
        onNavigateToProfile={onNavigateToProfile}
      />
    );
  }

  return (
    <div className="tirth-homepage">
      {/* 1. Header Navigation */}
      <TirthNavbar
        onNavigateToJourneys={onNavigateToJourneys}
        onNavigateToProfile={onNavigateToProfile}
        onNavigateToItineraryView={() => setCurrentScreen('itinerary-view')}
      />

      <main id="main-content">
        {/* 2. Mountain Hero with Giant WANDER word & Floating Search Bar (Reference Image 2) */}
        <TirthHeroWander
          onStartPlanning={() => setCurrentScreen('itinerary-view')}
          onNavigateToItineraryView={() => setCurrentScreen('itinerary-view')}
        />

        {/* 3. Cream Destination Discovery Section with 3 Tall Portrait Cards */}
        <DestinationDiscoverySection
          onSelectCard={(dest) => setSelectedModalDest(dest)}
        />

        {/* 4. Final CTA & Compact Footer */}
        <TirthFooter
          onNavigateToItineraryView={() => setCurrentScreen('itinerary-view')}
          onNavigateToJourneys={onNavigateToJourneys}
          onNavigateToProfile={onNavigateToProfile}
        />
      </main>

      {/* Interactive Destination Preview Modal */}
      <DestinationDetailModal
        isOpen={!!selectedModalDest}
        onClose={() => setSelectedModalDest(null)}
        destination={selectedModalDest}
        onPlanThisTrip={() => setCurrentScreen('itinerary-view')}
      />
    </div>
  );
}
