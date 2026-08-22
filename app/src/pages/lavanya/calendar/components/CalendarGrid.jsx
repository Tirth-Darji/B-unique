import React from 'react';
import CalendarEvent from './CalendarEvent';

const CalendarGrid = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  // Feb 2025 starts on a Saturday.
  // Previous month (Jan 2025) has 31 days.
  // 5 days of Jan (Mon 27 - Fri 31)
  const prevDays = [27, 28, 29, 30, 31];
  
  // Feb 2025 has 28 days
  const currentDays = Array.from({ length: 28 }, (_, i) => i + 1);
  
  // Next month (March) to fill out the grid. 5 + 28 = 33 days. 
  // 35 days total for 5 rows. We need 2 days from March.
  const nextDays = [1, 2];

  return (
    <div className="gt-cal-grid-container">
      {/* Weekday Headers */}
      <div className="gt-cal-grid-header">
        {daysOfWeek.map(day => (
          <div key={day} className="gt-cal-weekday">{day}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="gt-cal-grid-body">
        
        {/* Render Grid Cells */}
        <div className="gt-cal-cells">
          {prevDays.map(day => (
            <div key={`prev-${day}`} className="gt-cal-cell gt-cal-cell-muted">
              <span className="gt-cal-date">{day}</span>
            </div>
          ))}
          {currentDays.map(day => (
            <div key={`cur-${day}`} className={`gt-cal-cell ${day === 9 ? 'today' : ''}`}>
              <span className="gt-cal-date">{day}</span>
            </div>
          ))}
          {nextDays.map(day => (
            <div key={`next-${day}`} className="gt-cal-cell gt-cal-cell-muted">
              <span className="gt-cal-date">{day}</span>
            </div>
          ))}
        </div>

        {/* Absolute positioned Events Container layer over the grid */}
        <div className="gt-cal-events-layer">
          {/* Cruise of Love: Feb 9 - Feb 13 (Sun - Thu, Row 2) */}
          <CalendarEvent 
            title="Cruise of Love" 
            colorClass="gt-cal-event-purple"
            icon="🛳️"
            top="120px" /* Approximation based on row 2 */
            left="calc((100% / 7) * 6)" /* Starts Sunday */
            width="calc((100% / 7) * 5)" /* Spans 5 days */
            className="gt-cal-event-spanning"
          />

          {/* Cancún Trip: Feb 16 - Feb 19 (Sun - Wed, Row 3/4) */}
          <CalendarEvent 
            title="Cancún Trip" 
            colorClass="gt-cal-event-mint"
            icon="✨"
            top="240px"
            left="calc((100% / 7) * 6)" 
            width="calc((100% / 7) * 4)" 
            className="gt-cal-event-spanning"
          />

          {/* Punta Cana Escape: Feb 20 - Feb 22 (Thu - Sat, Row 4) */}
          <CalendarEvent 
            title="Punta Cana Escape" 
            colorClass="gt-cal-event-peach"
            icon="🌴"
            top="310px" /* Slightly offset inside row 4 */
            left="calc((100% / 7) * 3)" 
            width="calc((100% / 7) * 3)" 
            className="gt-cal-event-spanning"
          />

          {/* Bahamas Cruise: Feb 20 - Feb 24 (Thu - Mon, Row 4/5) */}
          <CalendarEvent 
            title="Bahamas Cruise" 
            colorClass="gt-cal-event-lightblue"
            icon="🛳️"
            top="340px" /* Below Punta Cana */
            left="calc((100% / 7) * 3)" 
            width="calc((100% / 7) * 5)" 
            className="gt-cal-event-spanning"
          />
        </div>

      </div>
    </div>
  );
};

export default CalendarGrid;
