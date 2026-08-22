import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export const HOMEPAGE_DESTINATIONS = [
  {
    id: "lago-di-braies",
    country: "ITALY",
    name: "Lago di Braies",
    meta: "4–6 Days · Dolomites Peak Trail",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "santorini",
    country: "GREECE",
    name: "Santorini Caldera",
    meta: "5–7 Days · Aegean Sunset Retreat",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "sahara-desert",
    country: "MOROCCO",
    name: "Sahara Dunes",
    meta: "6–8 Days · Desert Oasis Expedition",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=85",
  },
];

export function DestinationDiscoverySection({ onSelectCard }) {
  return (
    <section className="tirth-home-dest-section" id="destinations">
      <div className="tirth-homepage-container">
        {/* Header Row */}
        <div className="tirth-home-dest-header">
          <div>
            <span className="tirth-home-eyebrow" style={{ color: 'var(--tirth-blue-600)' }}>
              OUR DESTINATIONS
            </span>
            <h2 className="tirth-home-dest-title">
              Your journey to the perfect destination begins here.
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--tirth-text-dark)' }}>
              See All Destinations
            </span>
            <div className="tirth-home-circle-btn" style={{ background: 'var(--tirth-navy-950)', color: '#FFF' }}>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>

        {/* 3 Tall Portrait Cards (Reference Image 2) */}
        <div className="tirth-home-dest-cards-grid">
          {HOMEPAGE_DESTINATIONS.map((dest) => (
            <article
              key={dest.id}
              className="tirth-home-dest-card"
              onClick={() => onSelectCard?.(dest)}
            >
              <img src={dest.image} alt={dest.name} className="tirth-home-dest-card-img" />

              <div className="tirth-home-dest-card-overlay">
                <div className="tirth-home-dest-card-top">
                  <div className="tirth-home-card-arrow">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="tirth-home-dest-card-bottom">
                  <span className="tirth-home-dest-card-country">{dest.country}</span>
                  <h3 className="tirth-home-dest-card-name">{dest.name}</h3>
                  <div className="tirth-home-dest-card-meta">
                    <span>{dest.meta}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
