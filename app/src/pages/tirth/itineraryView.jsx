import React, { useState } from 'react';
import './itineraryView.css';
import { ROME_ITINERARY_DATA } from './data/itineraryViewData';
import {
  AddActivityModal,
  BookingDetailsModal,
  TaxiBookingModal
} from './components/ItineraryModals';
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  Plus,
  Download,
  Share2,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Car,
  Navigation,
  CheckCircle2,
  Compass,
  User,
  Bell,
  Sparkles,
  Check,
  Bike,
  Bus
} from 'lucide-react';

export default function ItineraryView({ onBackToHome, onNavigateToJourneys, onNavigateToProfile }) {
  const [tripData, setTripData] = useState(ROME_ITINERARY_DATA);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedActId, setSelectedActId] = useState(ROME_ITINERARY_DATA.days[0].activities[0].id);
  const [travelMode, setTravelMode] = useState('Car');
  
  // Modals state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [activeBookingAct, setActiveBookingAct] = useState(null);
  const [isTaxiModalOpen, setIsTaxiModalOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const currentDay = tripData.days[selectedDayIndex] || tripData.days[0];
  const activities = currentDay.activities;

  const selectedActivity =
    activities.find((a) => a.id === selectedActId) || activities[0];

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const handlePrevDay = () => {
    if (selectedDayIndex > 0) {
      const nextIdx = selectedDayIndex - 1;
      setSelectedDayIndex(nextIdx);
      setSelectedActId(tripData.days[nextIdx].activities[0]?.id);
    }
  };

  const handleNextDay = () => {
    if (selectedDayIndex < tripData.days.length - 1) {
      const nextIdx = selectedDayIndex + 1;
      setSelectedDayIndex(nextIdx);
      setSelectedActId(tripData.days[nextIdx].activities[0]?.id);
    }
  };

  const handleAddActivitySubmit = (newAct) => {
    setTripData((prev) => {
      const updatedDays = prev.days.map((day, idx) => {
        if (idx === selectedDayIndex) {
          const nextActivities = [
            ...day.activities,
            { ...newAct, stopNumber: day.activities.length + 1 }
          ];
          return { ...day, activities: nextActivities };
        }
        return day;
      });
      return { ...prev, days: updatedDays };
    });
    setSelectedActId(newAct.id);
    showToast(`Added "${newAct.title}" to Day ${currentDay.dayNumber}`);
  };

  const handleDownloadPdf = () => {
    showToast('Downloading Rome Getaway PDF Itinerary...');
    window.print();
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Itinerary share link copied to clipboard!');
    } else {
      showToast('Itinerary share link: https://globetrotter.app/rome-5-day');
    }
  };

  // Generate SVG path for route line connecting coordinates
  const svgPathD = activities.reduce((acc, act, idx) => {
    const point = `${act.coords.x * 6.5},${act.coords.y * 4.5}`;
    return idx === 0 ? `M ${point}` : `${acc} L ${point}`;
  }, '');

  return (
    <div className="tirth-itinerary-view">
      {/* 1. Header Navigation */}
      <header className="tirth-itin-nav">
        <div className="tirth-itin-brand" onClick={onBackToHome}>
          <div className="tirth-itin-logo">G</div>
          <span className="tirth-home-brand-name">GlobeTrotter</span>
        </div>

        <nav className="tirth-itin-nav-links">
          <button type="button" className="tirth-itin-nav-link" onClick={onBackToHome}>
            Home
          </button>
          <button type="button" className="tirth-itin-nav-link" onClick={onBackToHome}>
            Explore
          </button>
          <button type="button" className="tirth-itin-nav-link active">
            Itinerary Detail
          </button>
          <button type="button" className="tirth-itin-nav-link" onClick={onNavigateToJourneys}>
            My Journeys
          </button>
        </nav>

        <div className="tirth-itin-user">
          <button
            type="button"
            className="tirth-home-circle-btn"
            aria-label="Notifications"
            onClick={() => showToast('No new notifications for Rome Getaway.')}
          >
            <Bell size={16} />
          </button>
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
            alt="Kartavi Patel avatar"
            className="tirth-itin-avatar"
            onClick={onNavigateToProfile}
            title="View User Profile"
          />
        </div>
      </header>

      {/* 2. Main Split-Screen Layout (Reference Image 1) */}
      <div className="tirth-itin-split-container">
        {/* LEFT PANEL: TIMELINE & TRIP DETAILS */}
        <div className="tirth-itin-left-panel">
          {/* Back Control */}
          <div>
            <button type="button" className="tirth-itin-back-btn" onClick={onBackToHome}>
              <ArrowLeft size={16} /> Itinerary Detail
            </button>
          </div>

          {/* Trip Summary Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="tirth-itin-header-row">
              <div>
                <h1 className="tirth-itin-title">{tripData.title}</h1>
                <p className="tirth-itin-desc">{tripData.subtitle}</p>
              </div>

              {/* Action Buttons */}
              <div className="tirth-itin-actions" style={{ position: 'relative' }}>
                <button
                  type="button"
                  className="tirth-itin-icon-action"
                  title="Add Activity"
                  onClick={() => setIsAddModalOpen(true)}
                >
                  <Plus size={18} />
                </button>

                <button
                  type="button"
                  className="tirth-itin-icon-action"
                  title="Download PDF"
                  onClick={handleDownloadPdf}
                >
                  <Download size={16} />
                </button>

                <button
                  type="button"
                  className="tirth-itin-icon-action"
                  title="Share Itinerary"
                  onClick={handleShare}
                >
                  <Share2 size={16} />
                </button>

                <button
                  type="button"
                  className="tirth-itin-icon-action"
                  title="More Options"
                  onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                >
                  <MoreHorizontal size={18} />
                </button>

                {/* More Options Dropdown */}
                {isMoreMenuOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 44,
                      right: 0,
                      zIndex: 80,
                      background: 'var(--tirth-navy-850)',
                      border: '1px solid var(--tirth-border-strong)',
                      borderRadius: 12,
                      padding: 8,
                      width: 180,
                      boxShadow: 'var(--tirth-shadow-large)'
                    }}
                  >
                    <button
                      type="button"
                      style={{ width: '100%', textAlign: 'left', padding: '8px 12px', fontSize: '0.8rem', color: 'var(--tirth-white)' }}
                      onClick={() => {
                        setIsMoreMenuOpen(false);
                        showToast('Trip duplicated into your personal drafts.');
                      }}
                    >
                      Duplicate Itinerary
                    </button>
                    <button
                      type="button"
                      style={{ width: '100%', textAlign: 'left', padding: '8px 12px', fontSize: '0.8rem', color: 'var(--tirth-white)' }}
                      onClick={() => {
                        setIsMoreMenuOpen(false);
                        showToast('Budget updated successfully.');
                      }}
                    >
                      Recalculate Budget
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Metadata Bar */}
            <div className="tirth-itin-meta-bar">
              <div className="tirth-itin-meta-item">
                <MapPin size={14} style={{ color: 'var(--tirth-teal-500)' }} />
                <span>{tripData.country}</span>
              </div>
              <span>·</span>
              <div className="tirth-itin-meta-item">
                <Calendar size={14} style={{ color: 'var(--tirth-blue-400)' }} />
                <span>{tripData.dateRange}</span>
              </div>
              <span>·</span>
              <div className="tirth-itin-meta-item">
                <Users size={14} />
                <span>{tripData.travelers}</span>
              </div>
              <span>·</span>
              <div className="tirth-itin-meta-item" style={{ color: 'var(--tirth-teal-400)', fontWeight: 600 }}>
                <span>{tripData.estimatedBudget}</span>
              </div>
            </div>
          </div>

          {/* Day Selector */}
          <div className="tirth-itin-days-bar">
            <button
              type="button"
              className="tirth-itin-icon-action"
              onClick={handlePrevDay}
              disabled={selectedDayIndex === 0}
              style={{ opacity: selectedDayIndex === 0 ? 0.4 : 1 }}
            >
              <ChevronLeft size={16} />
            </button>

            <div className="tirth-itin-day-tabs">
              {tripData.days.map((d, idx) => (
                <button
                  key={d.dayNumber}
                  type="button"
                  className={`tirth-itin-day-tab ${idx === selectedDayIndex ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedDayIndex(idx);
                    setSelectedActId(d.activities[0]?.id);
                  }}
                >
                  Day {d.dayNumber}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="tirth-itin-icon-action"
              onClick={handleNextDay}
              disabled={selectedDayIndex === tripData.days.length - 1}
              style={{ opacity: selectedDayIndex === tripData.days.length - 1 ? 0.4 : 1 }}
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Day Title */}
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px', color: 'var(--tirth-teal-500)', textTransform: 'uppercase' }}>
              DAY {currentDay.dayNumber} · {currentDay.date}
            </span>
            <h2 style={{ fontFamily: 'var(--tirth-display-font)', fontSize: '1.4rem', marginTop: 2 }}>
              {currentDay.title}
            </h2>
          </div>

          {/* Vertical Timeline Items (Reference Image 1) */}
          <div className="tirth-itin-timeline">
            {activities.map((act, index) => {
              const isSelected = act.id === selectedActivity?.id;
              const isLast = index === activities.length - 1;

              return (
                <div
                  key={act.id}
                  className={`tirth-itin-timeline-item ${isSelected ? 'active' : ''}`}
                  onClick={() => setSelectedActId(act.id)}
                >
                  {/* Left Marker Column */}
                  <div className="tirth-itin-marker-col">
                    <div className="tirth-itin-stop-num">{act.stopNumber}</div>
                    {!isLast && <div className="tirth-itin-timeline-line" />}
                  </div>

                  {/* Activity Card Content */}
                  <div className="tirth-itin-activity-card">
                    <img src={act.image} alt={act.title} className="tirth-itin-act-img" />

                    <div className="tirth-itin-act-info">
                      <span className="tirth-itin-act-time">{act.time}</span>
                      <h3 className="tirth-itin-act-title">{act.title}</h3>
                      <p className="tirth-itin-act-loc">
                        <MapPin size={12} /> {act.location}
                      </p>
                      <span className="tirth-itin-act-tag">{act.priceLabel}</span>
                    </div>

                    <button
                      type="button"
                      className="tirth-itin-act-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveBookingAct(act);
                      }}
                    >
                      {act.actionLabel}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT PANEL: ROUTE MAP INTERFACE (Reference Image 1) */}
        <div className="tirth-itin-right-panel">
          {/* Map Grid Canvas Background */}
          <div className="tirth-map-canvas" />

          {/* Mode Selector Controls */}
          <div className="tirth-map-controls-group">
            {[
              { id: 'Car', icon: Car },
              { id: 'Walking', icon: Navigation },
              { id: 'Cycling', icon: Bike },
              { id: 'Transport', icon: Bus },
            ].map((m) => {
              const IconComp = m.icon;
              return (
                <button
                  key={m.id}
                  type="button"
                  className={`tirth-map-mode-btn ${travelMode === m.id ? 'active' : ''}`}
                  onClick={() => {
                    setTravelMode(m.id);
                    showToast(`Updated map routing mode to ${m.id}`);
                  }}
                >
                  <IconComp size={13} />
                  {m.id}
                </button>
              );
            })}
          </div>

          {/* Floating Selected Location Preview Card (Top Right) */}
          {selectedActivity && (
            <div className="tirth-map-preview-card">
              <img
                src={selectedActivity.image}
                alt={selectedActivity.title}
                className="tirth-map-preview-img"
              />
              <div>
                <span style={{ fontSize: '0.7rem', color: 'var(--tirth-teal-500)', fontWeight: 700, letterSpacing: '1px' }}>
                  STOP {selectedActivity.stopNumber} · {selectedActivity.time}
                </span>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--tirth-white)', marginTop: 2, lineHeight: 1.2 }}>
                  {selectedActivity.title}
                </h4>
              </div>
            </div>
          )}

          {/* SVG Route Line & Numbered Map Markers */}
          <svg className="tirth-map-svg" viewBox="0 0 500 400" preserveAspectRatio="none">
            <path d={svgPathD} className="tirth-map-route-line" />
          </svg>

          {/* Interactive Map Markers */}
          {activities.map((act) => {
            const isSelected = act.id === selectedActivity?.id;
            return (
              <div
                key={act.id}
                className={`tirth-map-marker-group ${isSelected ? 'active' : ''}`}
                style={{ left: `${act.coords.x}%`, top: `${act.coords.y}%` }}
                onClick={() => setSelectedActId(act.id)}
              >
                <div className="tirth-map-marker-pin">{act.stopNumber}</div>
              </div>
            );
          })}

          {/* Floating Travel-Time Card Over Map (Reference Image 1) */}
          <div className="tirth-map-travel-card">
            <div className="tirth-map-travel-time">
              <Car size={20} style={{ color: 'var(--tirth-blue-400)' }} />
              <span>{travelMode} Route · {currentDay.estimatedTravelTime}</span>
            </div>
            <p className="tirth-map-travel-sub">
              {currentDay.trafficStatus}
            </p>
            <button
              type="button"
              className="tirth-map-taxi-btn"
              onClick={() => setIsTaxiModalOpen(true)}
            >
              <Car size={16} /> Book a Taxi
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Modals */}
      <AddActivityModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddActivity={handleAddActivitySubmit}
        currentDayNumber={currentDay.dayNumber}
      />

      <BookingDetailsModal
        isOpen={!!activeBookingAct}
        onClose={() => setActiveBookingAct(null)}
        activity={activeBookingAct}
      />

      <TaxiBookingModal
        isOpen={isTaxiModalOpen}
        onClose={() => setIsTaxiModalOpen(false)}
        dayInfo={currentDay}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="tirth-toast">
          <CheckCircle2 size={16} style={{ color: 'var(--tirth-teal-500)' }} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
