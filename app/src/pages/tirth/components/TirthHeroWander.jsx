import React, { useState } from 'react';
import { Compass, Calendar, Users, ArrowRight, Sparkles, MapPin, Search } from 'lucide-react';

export function TirthHeroWander({ onStartPlanning, onNavigateToItineraryView }) {
  const [formData, setFormData] = useState({
    destination: 'Lago di Braies, Italy',
    dates: '',
    travelers: '2 Travellers',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onNavigateToItineraryView) {
      onNavigateToItineraryView();
    } else if (onStartPlanning) {
      onStartPlanning();
    }
  };

  return (
    <section className="tirth-home-hero" id="home">
      {/* Background Mountain Photo */}
      <div className="tirth-home-hero-bg">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=85"
          alt="Majestic cinematic mountain peak with blue atmospheric sky"
          className="tirth-home-hero-img"
        />
      </div>

      {/* Blue Atmospheric Overlay */}
      <div className="tirth-home-hero-overlay" />

      {/* Giant WANDER Text Layer */}
      <div className="tirth-home-giant-word-wrap">
        <span className="tirth-home-giant-word">WANDER</span>
      </div>

      {/* Lower Hero Content & Floating White Search Bar */}
      <div className="tirth-homepage-container tirth-home-hero-content">
        <div className="tirth-home-hero-lower-grid">
          {/* Left Text Block */}
          <div className="tirth-home-hero-headline-box">
            <span className="tirth-home-eyebrow">CURATED TRAVEL EXPERIENCES</span>
            <h1 className="tirth-home-hero-headline">Uncover the world’s natural wonders.</h1>
            <p className="tirth-home-hero-subtext">
              Discover remarkable places, thoughtful journeys, and unforgettable experiences shaped around the way you want to travel.
            </p>
          </div>

          {/* Right Stat Badge */}
          <div className="tirth-home-hero-badges">
            <div className="tirth-home-stat-badge">
              <div className="tirth-home-stat-num">300+</div>
              <div className="tirth-home-stat-lbl">Remarkable Places</div>
            </div>
          </div>
        </div>

        {/* Floating White Search Bar (Reference Image 2) */}
        <form onSubmit={handleSubmit} className="tirth-home-search-panel">
          {/* Field 1: Destination */}
          <div className="tirth-home-search-field">
            <label className="tirth-home-search-label">
              <MapPin size={13} style={{ color: 'var(--tirth-blue-500)' }} /> Destination
            </label>
            <input
              type="text"
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              placeholder="e.g. Lago di Braies, Italy"
              className="tirth-home-search-input"
            />
          </div>

          {/* Field 2: Date */}
          <div className="tirth-home-search-field">
            <label className="tirth-home-search-label">
              <Calendar size={13} style={{ color: 'var(--tirth-blue-500)' }} /> Travel Date
            </label>
            <input
              type="date"
              value={formData.dates}
              onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
              className="tirth-home-search-input"
            />
          </div>

          {/* Field 3: Travellers */}
          <div className="tirth-home-search-field">
            <label className="tirth-home-search-label">
              <Users size={13} style={{ color: 'var(--tirth-blue-500)' }} /> Travellers
            </label>
            <select
              value={formData.travelers}
              onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
              className="tirth-home-search-input"
            >
              <option value="1 Solo Traveller">1 Solo Traveller</option>
              <option value="2 Travellers">2 Travellers</option>
              <option value="3-5 Group">3-5 Group</option>
            </select>
          </div>

          {/* Search Button */}
          <button type="submit" className="tirth-home-search-btn">
            <Search size={16} /> Plan Journey
          </button>
        </form>
      </div>
    </section>
  );
}
