import React from 'react';

const CalendarEvent = ({ title, colorClass, icon, width, top, left, className }) => {
  return (
    <div 
      className={`gt-cal-event ${colorClass} ${className || ''}`}
      style={{ width: width || '100%', top: top, left: left }}
    >
      {icon && <span className="gt-cal-event-icon">{icon}</span>}
      <span className="gt-cal-event-title">{title}</span>
    </div>
  );
};

export default CalendarEvent;
