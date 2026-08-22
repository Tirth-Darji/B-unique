import React, { useState } from 'react';
import { X, Plus, Calendar, Clock, MapPin, Tag, CheckCircle2, Car, Share2, Copy, AlertCircle } from 'lucide-react';

/* 1. Add Activity Modal */
export function AddActivityModal({ isOpen, onClose, onAddActivity, currentDayNumber }) {
  const [form, setForm] = useState({
    time: '03:00 PM',
    title: '',
    location: '',
    category: 'sightseeing',
    priceLabel: 'Included',
    actionLabel: 'View Details',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=400&q=80',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.location.trim()) return;

    onAddActivity({
      id: `act-custom-${Date.now()}`,
      stopNumber: 0, // will be re-indexed
      time: form.time,
      title: form.title,
      location: form.location,
      category: form.category,
      priceLabel: form.priceLabel,
      actionLabel: form.actionLabel,
      image: form.image,
      coords: {
        x: Math.floor(Math.random() * 40) + 30,
        y: Math.floor(Math.random() * 40) + 30,
      },
    });

    onClose();
  };

  return (
    <div className="tirth-modal-backdrop">
      <div className="tirth-modal-box">
        <div className="tirth-modal-header">
          <h3 style={{ fontFamily: 'var(--tirth-display-font)', fontSize: '1.4rem' }}>
            Add Activity to Day {currentDayNumber}
          </h3>
          <button type="button" className="tirth-modal-close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="tirth-modal-body">
          <div className="tirth-form-group">
            <label>Time</label>
            <input
              type="text"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              placeholder="e.g. 03:00 PM"
              className="tirth-modal-input"
              required
            />
          </div>

          <div className="tirth-form-group">
            <label>Activity Title</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="e.g. Guided Borghese Gallery Walk"
              className="tirth-modal-input"
              required
            />
          </div>

          <div className="tirth-form-group">
            <label>Location Name</label>
            <input
              type="text"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              placeholder="e.g. Piazzale Scipione Borghese, Rome"
              className="tirth-modal-input"
              required
            />
          </div>

          <div className="tirth-form-row">
            <div className="tirth-form-group">
              <label>Category</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="tirth-modal-input"
              >
                <option value="sightseeing">Sightseeing</option>
                <option value="dining">Dining</option>
                <option value="museum">Museum</option>
                <option value="flight">Flight/Transport</option>
                <option value="hotel">Hotel</option>
                <option value="activity">Activity</option>
              </select>
            </div>

            <div className="tirth-form-group">
              <label>Price Status Label</label>
              <input
                type="text"
                value={form.priceLabel}
                onChange={(e) => setForm({ ...form, priceLabel: e.target.value })}
                placeholder="e.g. €25 Ticket or Included"
                className="tirth-modal-input"
              />
            </div>
          </div>

          <div className="tirth-modal-actions">
            <button type="button" className="tirth-modal-btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="tirth-modal-btn-submit">
              <Plus size={16} /> Add to Timeline
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* 2. Booking Details / Vendor Modal */
export function BookingDetailsModal({ isOpen, onClose, activity }) {
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen || !activity) return null;

  return (
    <div className="tirth-modal-backdrop">
      <div className="tirth-modal-box">
        <div className="tirth-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div className="tirth-booking-icon-badge">
              <CheckCircle2 size={20} style={{ color: 'var(--tirth-teal-500)' }} />
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--tirth-display-font)', fontSize: '1.25rem' }}>
                {activity.title}
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--tirth-grey-400)' }}>
                Ref: GT-ROME-{activity.stopNumber}84902
              </p>
            </div>
          </div>
          <button type="button" className="tirth-modal-close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="tirth-modal-body">
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <img src={activity.image} alt={activity.title} className="tirth-modal-thumb" />
            <div>
              <span className="tirth-modal-tag">{activity.category.toUpperCase()}</span>
              <h4 style={{ fontSize: '1rem', marginTop: 4 }}>{activity.location}</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--tirth-grey-400)', marginTop: 2 }}>
                Time: {activity.time} · Status: Active
              </p>
            </div>
          </div>

          <div className="tirth-modal-detail-box">
            <div className="tirth-detail-row">
              <span>Price / Included Status</span>
              <strong>{activity.priceLabel}</strong>
            </div>
            <div className="tirth-detail-row">
              <span>Provider</span>
              <strong>GlobeTrotter Direct Partner</strong>
            </div>
            <div className="tirth-detail-row">
              <span>Cancellation Policy</span>
              <strong style={{ color: 'var(--tirth-teal-400)' }}>Free cancellation up to 24h prior</strong>
            </div>
          </div>

          {confirmed ? (
            <div className="tirth-success-banner">
              <CheckCircle2 size={16} /> Booking action confirmed successfully!
            </div>
          ) : (
            <div className="tirth-modal-actions">
              <button type="button" className="tirth-modal-btn-cancel" onClick={onClose}>
                Close
              </button>
              <button
                type="button"
                className="tirth-modal-btn-submit"
                onClick={() => setConfirmed(true)}
              >
                Confirm {activity.actionLabel}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* 3. Taxi Booking Transfer Modal */
export function TaxiBookingModal({ isOpen, onClose, dayInfo }) {
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="tirth-modal-backdrop">
      <div className="tirth-modal-box">
        <div className="tirth-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Car size={20} style={{ color: 'var(--tirth-blue-400)' }} />
            <div>
              <h3 style={{ fontFamily: 'var(--tirth-display-font)', fontSize: '1.25rem' }}>
                Book Airport & City Taxi Transfer
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--tirth-grey-400)' }}>
                Estimated Travel Time: {dayInfo?.estimatedTravelTime || '40-50 mins'}
              </p>
            </div>
          </div>
          <button type="button" className="tirth-modal-close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="tirth-modal-body">
          <p style={{ fontSize: '0.88rem', color: 'var(--tirth-grey-300)', lineHeight: 1.5 }}>
            {dayInfo?.trafficStatus || 'Moderate traffic — this is currently the most practical route.'}
          </p>

          <div className="tirth-modal-detail-box">
            <div className="tirth-detail-row">
              <span>Vehicle Class</span>
              <strong>Mercedes-Benz E-Class or Executive Van</strong>
            </div>
            <div className="tirth-detail-row">
              <span>Estimated Fare</span>
              <strong>₹3,200 (Fixed Rate)</strong>
            </div>
            <div className="tirth-detail-row">
              <span>Driver Meet & Greet</span>
              <strong style={{ color: 'var(--tirth-teal-400)' }}>Included with nameboard</strong>
            </div>
          </div>

          {booked ? (
            <div className="tirth-success-banner">
              <CheckCircle2 size={16} /> Taxi ride reserved! Driver dispatch details sent to your profile.
            </div>
          ) : (
            <div className="tirth-modal-actions">
              <button type="button" className="tirth-modal-btn-cancel" onClick={onClose}>
                Cancel
              </button>
              <button
                type="button"
                className="tirth-modal-btn-submit"
                onClick={() => setBooked(true)}
              >
                Confirm Taxi Dispatch
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* 4. Destination Card Detail Modal (for Homepage) */
export function DestinationDetailModal({ isOpen, onClose, destination, onPlanThisTrip }) {
  if (!isOpen || !destination) return null;

  return (
    <div className="tirth-modal-backdrop">
      <div className="tirth-modal-box" style={{ maxWidth: 540 }}>
        <div style={{ position: 'relative', height: 220, borderRadius: 16, overflow: 'hidden', marginBottom: 18 }}>
          <img src={destination.image} alt={destination.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <button
            type="button"
            className="tirth-modal-close"
            style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(3,8,23,0.7)', color: '#FFF' }}
            onClick={onClose}
          >
            <X size={18} />
          </button>
          <div style={{ position: 'absolute', bottom: 12, left: 16, background: 'rgba(3,8,23,0.8)', padding: '4px 12px', borderRadius: 999 }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--tirth-teal-500)', fontWeight: 700, letterSpacing: 1.5 }}>
              {destination.country}
            </span>
          </div>
        </div>

        <div className="tirth-modal-body">
          <h3 style={{ fontFamily: 'var(--tirth-display-font)', fontSize: '1.8rem', color: 'var(--tirth-white)' }}>
            {destination.name}
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--tirth-grey-300)', lineHeight: 1.6 }}>
            {destination.meta || 'A spectacular natural sanctuary curated for alpine exploration and quiet travel reflections.'}
          </p>

          <div className="tirth-modal-detail-box">
            <div className="tirth-detail-row">
              <span>Suggested Duration</span>
              <strong>5–7 Days</strong>
            </div>
            <div className="tirth-detail-row">
              <span>Best Season</span>
              <strong>May – September</strong>
            </div>
            <div className="tirth-detail-row">
              <span>Travel Style</span>
              <strong style={{ color: 'var(--tirth-teal-400)' }}>Nature, Photography & History</strong>
            </div>
          </div>

          <div className="tirth-modal-actions">
            <button type="button" className="tirth-modal-btn-cancel" onClick={onClose}>
              Close Preview
            </button>
            <button
              type="button"
              className="tirth-modal-btn-submit"
              onClick={() => {
                onClose();
                onPlanThisTrip?.(destination);
              }}
            >
              Start Planning This Trip →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
