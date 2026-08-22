import { useEffect } from "react";

/**
 * TripDetailModal Component
 * Accessible modal displaying comprehensive trip details when "View trip" is clicked.
 */
export function TripDetailModal({ trip, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!trip) return null;

  return (
    <div
      className="gt-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-trip-title"
    >
      <div className="gt-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="gt-modal-hero">
          <img
            src={trip.image}
            alt={`${trip.destination}, ${trip.country}`}
            className="gt-modal-img"
          />
          <button
            type="button"
            className="gt-modal-close-btn"
            onClick={onClose}
            aria-label="Close trip details modal"
            title="Close"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="gt-modal-content">
          <div className="gt-modal-header-row">
            <div>
              <h2 id="modal-trip-title" className="gt-modal-destination">
                {trip.destination}
              </h2>
              <div className="gt-modal-country">{trip.country}</div>
            </div>
            <span className="gt-modal-badge">{trip.status}</span>
          </div>

          <p className="gt-subtitle">{trip.description}</p>

          <div className="gt-card-meta-grid" style={{ marginBottom: 0 }}>
            <div className="gt-meta-item">
              <span className="gt-meta-label">Duration</span>
              <span className="gt-meta-value">{trip.duration}</span>
            </div>
            <div className="gt-meta-item">
              <span className="gt-meta-label">Estimated Budget</span>
              <span className="gt-meta-value">{trip.budget} EST.</span>
            </div>
            <div className="gt-meta-item">
              <span className="gt-meta-label">Dates</span>
              <span className="gt-meta-value">
                {trip.startDate} – {trip.endDate}
              </span>
            </div>
            <div className="gt-meta-item">
              <span className="gt-meta-label">Travelers & Weather</span>
              <span className="gt-meta-value">
                {trip.travelers || 2} Travelers • {trip.weather || "22°C Clear"}
              </span>
            </div>
          </div>

          {trip.highlights && trip.highlights.length > 0 && (
            <div>
              <span className="gt-meta-label" style={{ display: "block", marginBottom: "8px" }}>
                Trip Highlights
              </span>
              <div className="gt-modal-highlights">
                {trip.highlights.map((highlight, idx) => (
                  <span key={idx} className="gt-highlight-tag">
                    ✦ {highlight}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "12px" }}>
            <button type="button" className="gt-btn-secondary" onClick={onClose}>
              Close Preview
            </button>
            <button
              type="button"
              className="gt-btn-primary"
              onClick={() => {
                alert(`Opening full itinerary planner for ${trip.destination}...`);
                onClose();
              }}
            >
              Open Full Itinerary →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
