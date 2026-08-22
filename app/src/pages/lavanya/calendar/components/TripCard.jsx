import React from 'react';

const TripCard = ({ title, dates, colorClass, icon }) => {
  return (
    <div className="gt-cal-trip-card">
      <div className="gt-cal-trip-icon-wrapper">
        <span className="gt-cal-trip-icon">{icon}</span>
      </div>
      <div className="gt-cal-trip-details">
        <h4 className="gt-cal-trip-title">{title}</h4>
        <p className="gt-cal-trip-dates">{dates}</p>
      </div>
      <div className={`gt-cal-trip-status ${colorClass}`}></div>
    </div>
  );
};

export default TripCard;
