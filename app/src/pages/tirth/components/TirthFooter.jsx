import React from 'react';
import { ArrowUpRight, Compass, Heart } from 'lucide-react';

export function TirthFooter({ onNavigateToItineraryView, onNavigateToJourneys, onNavigateToProfile }) {
  const handleScrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Small Final CTA Section */}
      <section className="tirth-home-cta-section">
        <div className="tirth-homepage-container" style={{ maxWidth: 680 }}>
          <span className="tirth-home-eyebrow" style={{ textAlign: 'center' }}>YOUR NEXT CHAPTER</span>
          <h2 className="tirth-home-hero-headline" style={{ fontSize: '2.4rem', marginBottom: 16 }}>
            Ready to turn a destination into a journey?
          </h2>
          <p className="tirth-home-hero-subtext" style={{ marginBottom: 32 }}>
            Build your itinerary around the places, dates, and experiences that matter to you.
          </p>

          <button
            type="button"
            className="tirth-home-btn-primary"
            onClick={onNavigateToItineraryView || handleScrollToHome}
            style={{ padding: '14px 32px', fontSize: '0.9rem', margin: '0 auto' }}
          >
            Start Planning
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>

      {/* Compact Footer */}
      <footer className="tirth-home-footer">
        <div className="tirth-homepage-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div className="tirth-home-brand" onClick={handleScrollToHome}>
            <div className="tirth-home-logo" style={{ width: 32, height: 32, fontSize: '1rem' }}>G</div>
            <span className="tirth-home-brand-name" style={{ fontSize: '1.1rem' }}>GlobeTrotter</span>
          </div>

          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#home" className="tirth-home-nav-link" style={{ fontSize: '0.78rem' }}>Home</a>
            <a href="#destinations" className="tirth-home-nav-link" style={{ fontSize: '0.78rem' }}>Destinations</a>
            {onNavigateToJourneys && (
              <button type="button" className="tirth-home-nav-link" onClick={onNavigateToJourneys} style={{ fontSize: '0.78rem' }}>
                My Journeys
              </button>
            )}
            {onNavigateToProfile && (
              <button type="button" className="tirth-home-nav-link" onClick={onNavigateToProfile} style={{ fontSize: '0.78rem' }}>
                User Profile
              </button>
            )}
          </div>

          <div>© 2026 GlobeTrotter. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
