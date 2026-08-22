import React from 'react';
import './Calendar.css';
import TopNavbar from './components/TopNavbar';
import CalendarHeader from './components/CalendarHeader';
import CalendarGrid from './components/CalendarGrid';
import TripSidebar from './components/TripSidebar';

const Calendar = () => {
  return (
    <div className="gt-cal-page">
      <TopNavbar />
      
      <div className="gt-cal-content">
        <main className="gt-cal-main-column">
          <CalendarHeader />
          <CalendarGrid />
        </main>
        
        <aside className="gt-cal-sidebar">
          <TripSidebar />
        </aside>
      </div>
    </div>
  );
};

export default Calendar;
