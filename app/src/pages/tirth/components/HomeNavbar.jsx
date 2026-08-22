import React, { useState, useEffect } from 'react';
import { Search, Bookmark, Menu, X, Compass, User } from 'lucide-react';

export function HomeNavbar({ onNavigateToJourneys, onNavigateToProfile }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`gt-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="gt-container gt-navbar-inner">
          {/* Logo & Brand Name */}
          <div className="gt-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="gt-logo-box">G</div>
            <span className="gt-brand-name">GlobeTrotter</span>
          </div>

          {/* Desktop Anchor Navigation Links */}
          <nav className="gt-nav-links" aria-label="Main Navigation">
            <a href="#home" className="gt-nav-link active">Home</a>
            <a href="#destinations" className="gt-nav-link">Explore</a>
            <a href="#how-it-works" className="gt-nav-link">How It Works</a>
            <a href="#plan-trip" className="gt-nav-link">Plan Trip</a>
          </nav>

          {/* Desktop Right Action Controls */}
          <div className="gt-nav-controls">
            <button type="button" className="gt-icon-btn" aria-label="Search destinations">
              <Search size={18} />
            </button>
            <button type="button" className="gt-icon-btn" aria-label="Saved places">
              <Bookmark size={18} />
            </button>
            <button
              type="button"
              className="gt-nav-btn gt-nav-btn-secondary"
              onClick={onNavigateToJourneys}
            >
              <Compass size={15} />
              My Journeys
            </button>
            <button
              type="button"
              className="gt-nav-btn gt-nav-btn-primary"
              onClick={onNavigateToProfile}
            >
              <User size={15} />
              User Profile
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              type="button"
              className="gt-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`gt-mobile-menu ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <a href="#home" className="gt-mobile-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
        <a href="#destinations" className="gt-mobile-link" onClick={() => setMobileMenuOpen(false)}>Explore</a>
        <a href="#how-it-works" className="gt-mobile-link" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
        <a href="#plan-trip" className="gt-mobile-link" onClick={() => setMobileMenuOpen(false)}>Plan Trip</a>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '280px', marginTop: '20px' }}>
          <button
            type="button"
            className="gt-nav-btn gt-nav-btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => { setMobileMenuOpen(false); onNavigateToJourneys(); }}
          >
            <Compass size={16} /> My Journeys
          </button>
          <button
            type="button"
            className="gt-nav-btn gt-nav-btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => { setMobileMenuOpen(false); onNavigateToProfile(); }}
          >
            <User size={16} /> User Profile
          </button>
        </div>
      </div>
    </>
  );
}
