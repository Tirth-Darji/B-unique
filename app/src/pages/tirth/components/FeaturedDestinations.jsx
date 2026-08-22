import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bookmark, MapPin, Clock, ArrowRight } from 'lucide-react';
import { FEATURED_CARDS } from '../homeDestinations';

export function FeaturedDestinations({ onSelectDestination }) {
  const [savedIds, setSavedIds] = useState(['reykjavik', 'santorini']);

  const toggleSave = (e, id) => {
    e.stopPropagation();
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="gt-destinations-section" id="destinations">
      <div className="gt-container">
        <div className="gt-destinations-header">
          <span className="gt-section-eyebrow">CURATED ESCAPES</span>
          <h2 className="gt-section-title">Journeys worth writing home about</h2>
          <p className="gt-section-desc">
            Explore destinations chosen for their landscapes, culture, character, and unforgettable stories.
          </p>
        </div>

        <div className="gt-destinations-grid">
          {FEATURED_CARDS.map((card, index) => {
            const isSaved = savedIds.includes(card.id);

            return (
              <motion.article
                key={card.id}
                className="gt-dest-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => onSelectDestination?.(card)}
              >
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="gt-dest-card-img"
                  loading="lazy"
                />

                <div className="gt-dest-card-overlay">
                  <div className="gt-dest-card-top">
                    <span className="gt-dest-card-tag">{card.travelStyle}</span>
                    <button
                      type="button"
                      className={`gt-bookmark-btn ${isSaved ? 'active' : ''}`}
                      onClick={(e) => toggleSave(e, card.id)}
                      aria-label={isSaved ? 'Remove from saved' : 'Save destination'}
                      aria-pressed={isSaved}
                    >
                      <Bookmark size={16} fill={isSaved ? 'currentColor' : 'none'} />
                    </button>
                  </div>

                  <div className="gt-dest-card-bottom">
                    <span className="gt-dest-card-country">{card.country}</span>
                    <h3 className="gt-dest-card-title">{card.title}</h3>

                    <div className="gt-dest-card-meta">
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={13} /> {card.location}
                      </span>
                      <span>·</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={13} /> {card.duration}
                      </span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                      <span style={{ fontSize: '0.78rem', color: 'var(--gt-turquoise)', fontWeight: '600' }}>
                        Best: {card.bestSeason}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: 'var(--gt-text-secondary)' }}>
                        Explore Journey <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
