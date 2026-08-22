import React from 'react';
import TripCard from './TripCard';

const TripSidebar = () => {
  const trips = [
    {
      title: "Cruise of Love",
      dates: "Feb 9 – Feb 13, 2025",
      colorClass: "gt-cal-status-purple",
      icon: "🛳️"
    },
    {
      title: "Cancún Trip",
      dates: "Feb 16 – Feb 19, 2025",
      colorClass: "gt-cal-status-mint",
      icon: "✨"
    },
    {
      title: "Punta Cana Escape",
      dates: "Feb 20 – Feb 22, 2025",
      colorClass: "gt-cal-status-peach",
      icon: "🌴"
    },
    {
      title: "Bahamas Cruise",
      dates: "Feb 20 – Feb 24, 2025",
      colorClass: "gt-cal-status-lightblue",
      icon: "🛳️"
    }
  ];

  return (
    <div className="gt-cal-sidebar-card">
      <div className="gt-cal-sidebar-header">
        <h3 className="gt-cal-sidebar-title">Your Trips</h3>
        <button className="gt-cal-view-all-btn">View All</button>
      </div>
      
      <div className="gt-cal-trip-list">
        {trips.map((trip, index) => (
          <TripCard key={index} {...trip} />
        ))}
      </div>
    </div>
  );
};

export default TripSidebar;
