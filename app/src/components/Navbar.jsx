import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, Compass, User, ArrowUpRight, LogOut, CalendarDays, Menu, X } from 'lucide-react';
import { SearchModal } from '../pages/tirth/components/SearchModal';
import { api } from '../services/api';
import './Navbar.css';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  
  const location = useLocation();
  const navigate = useNavigate();
  
  // Use transparent glassmorphism only on the home page when at the very top.
  const isHomePage = location.pathname === '/home';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await api.getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error("Failed to load user for navbar", error);
      }
    };
    fetchUser();
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const navLinks = [
    { name: 'HOME', path: '/home' },
    { name: 'DISCOVERY', path: '/discovery' },
    { name: 'CALENDAR', path: '/calendar' },
    { name: 'MY JOURNEYS', path: '/trips' },
    { name: 'COMMUNITY', path: '/community' },
  ];

  return (
    <>
      <header className={`gt-global-navbar ${scrolled || !isHomePage ? 'scrolled' : ''}`}>
        <div className="gt-navbar-inner">
          {/* Brand */}
          <div className="gt-navbar-brand" onClick={() => navigate('/home')}>
            <div className="gt-navbar-logo">G</div>
            <span className="gt-navbar-brand-name">GlobeTrotter</span>
          </div>

          {/* Centre Navigation Links */}
          <nav className="gt-navbar-links" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <button 
                key={link.name}
                type="button" 
                className={`gt-navbar-link ${location.pathname.startsWith(link.path) ? 'active' : ''}`}
                onClick={() => navigate(link.path)}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="gt-navbar-actions">
            <button
              type="button"
              className="gt-navbar-circle-btn"
              aria-label="Search destinations"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={18} />
            </button>

            {/* Profile Pill */}
            <button
              type="button"
              className="gt-navbar-profile"
              onClick={() => navigate('/profile')}
              aria-label="User Profile"
            >
              <div className="gt-profile-avatar">
                {user?.profile_photo ? (
                  <img src={user.profile_photo} alt="Profile" className="gt-profile-avatar" />
                ) : (
                  user?.first_name ? user.first_name.charAt(0).toUpperCase() : <User size={16} />
                )}
              </div>
              <span className="gt-profile-name">
                {user?.first_name ? user.first_name : 'PROFILE'}
              </span>
            </button>

            {/* Logout Icon */}
            <button
              type="button"
              className="gt-navbar-circle-btn"
              onClick={handleLogout}
              title="Logout"
            >
              <LogOut size={18} />
            </button>

            {/* Primary Action */}
            <button
              type="button"
              className="gt-navbar-btn-primary"
              onClick={() => navigate('/itinerary/new')}
            >
              Plan a Journey
              <span className="icon-wrap">
                <ArrowUpRight size={14} />
              </span>
            </button>
            
            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="gt-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`gt-mobile-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
      <div className={`gt-mobile-menu ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        {navLinks.map((link) => (
          <button 
            key={link.name}
            type="button" 
            className={`gt-mobile-link ${location.pathname.startsWith(link.path) ? 'active' : ''}`}
            onClick={() => navigate(link.path)}
          >
            {link.name}
          </button>
        ))}
        
        <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button
            type="button"
            className="gt-navbar-profile"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => navigate('/profile')}
          >
             {user?.first_name ? `${user.first_name}'s Profile` : 'User Profile'}
          </button>
          <button
             type="button"
             className="gt-mobile-link"
             style={{ justifyContent: 'center', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}
             onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Interactive Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectDestination={() => {
          setIsSearchOpen(false);
          navigate('/itinerary/new');
        }}
      />
    </>
  );
}
