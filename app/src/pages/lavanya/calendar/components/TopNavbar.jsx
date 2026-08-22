import React from 'react';

const TopNavbar = () => {
  return (
    <nav className="gt-cal-navbar">
      <div className="gt-cal-nav-left">
        <svg className="gt-cal-brand-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        <span className="gt-cal-brand">GlobeTrotter</span>
      </div>

      <div className="gt-cal-nav-center">
        <a href="#" className="gt-cal-nav-link">Dashboard</a>
        <a href="#" className="gt-cal-nav-link">Trips</a>
        <a href="#" className="gt-cal-nav-link active">Calendar</a>
        <a href="#" className="gt-cal-nav-link">Destinations</a>
        <a href="#" className="gt-cal-nav-link">Itinerary</a>
        <a href="#" className="gt-cal-nav-link">Budget</a>
      </div>

      <div className="gt-cal-nav-right">
        <button className="gt-cal-icon-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </button>
        
        <div className="gt-cal-user-profile">
          <div className="gt-cal-avatar">L</div>
          <span className="gt-cal-user-name">Lavanya</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
