import React, { useState, useEffect } from 'react';
import { Search, Compass, User, ArrowUpRight } from 'lucide-react';
import { SearchModal } from './SearchModal';

export function TirthNavbar({ onNavigateToJourneys, onNavigateToProfile, onNavigateToItineraryView }) {
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`tirth-home-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="tirth-homepage-container tirth-home-nav-inner">
          {/* Brand */}
          <div className="tirth-home-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="tirth-home-logo">G</div>
            <span className="tirth-home-brand-name">GlobeTrotter</span>
          </div>

          {/* Centre Navigation Links */}
          <nav className="tirth-home-nav-links" aria-label="Homepage Navigation">
            <a href="#home" className="tirth-home-nav-link">Home</a>
            <a href="#destinations" className="tirth-home-nav-link">Destinations</a>
            <a href="#how-it-works" className="tirth-home-nav-link">How It Works</a>
            <button type="button" className="tirth-home-nav-link" onClick={onNavigateToItineraryView}>
              Itinerary Detail
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="tirth-home-nav-actions">
            <button
              type="button"
              className="tirth-home-circle-btn"
              aria-label="Search destinations"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={18} />
            </button>

            {onNavigateToJourneys && (
              <button
                type="button"
                className="tirth-home-nav-link"
                onClick={onNavigateToJourneys}
                style={{ fontSize: '0.8rem' }}
              >
                My Journeys
              </button>
            )}

            {onNavigateToProfile && (
              <button
                type="button"
                className="tirth-home-nav-link"
                onClick={onNavigateToProfile}
                style={{ fontSize: '0.8rem' }}
              >
                User Profile
              </button>
            )}

            <button
              type="button"
              className="tirth-home-btn-primary"
              onClick={onNavigateToItineraryView}
            >
              Plan a Journey
              <span className="tirth-home-circle-btn" style={{ width: 24, height: 24, background: 'rgba(3,8,23,0.15)' }}>
                <ArrowUpRight size={14} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Interactive Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectDestination={onNavigateToItineraryView}
      />
    </>
  );
}
