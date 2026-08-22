import React from 'react';

const CalendarHeader = () => {
  return (
    <div className="gt-cal-header">
      <div className="gt-cal-header-left">
        <button className="gt-cal-icon-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className="gt-cal-icon-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        <h2 className="gt-cal-month-title">February 2025</h2>
        <svg className="gt-cal-dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      <div className="gt-cal-header-right">
        <div className="gt-cal-view-switcher">
          <button className="gt-cal-view-btn active">Month</button>
          <button className="gt-cal-view-btn">Week</button>
          <button className="gt-cal-view-btn">List</button>
        </div>
        <button className="gt-cal-add-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add Event
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
