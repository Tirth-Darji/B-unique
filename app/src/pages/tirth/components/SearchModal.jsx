import React, { useState } from 'react';
import { Search, X, MapPin, Compass, ArrowRight } from 'lucide-react';
import { HOMEPAGE_DESTINATIONS } from './DestinationCard';

export function SearchModal({ isOpen, onClose, onSelectDestination }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = [
    { name: 'Lago di Braies', country: 'Italy', duration: '4–6 Days', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80' },
    { name: 'Santorini Caldera', country: 'Greece', duration: '5–7 Days', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=300&q=80' },
    { name: 'Sahara Dunes', country: 'Morocco', duration: '6–8 Days', image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=300&q=80' },
    { name: 'Kyoto Teahouses', country: 'Japan', duration: '6–10 Days', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=300&q=80' },
    { name: 'Reykjavik Aurora', country: 'Iceland', duration: '7–10 Days', image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=300&q=80' },
  ].filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.country.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="tirth-modal-backdrop">
      <div className="tirth-modal-box" style={{ maxWidth: 520 }}>
        <div className="tirth-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%' }}>
            <Search size={18} style={{ color: 'var(--tirth-teal-500)' }} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search destinations, countries, or regions..."
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                color: 'var(--tirth-white)',
                fontSize: '1rem',
                outline: 'none'
              }}
              autoFocus
            />
          </div>
          <button type="button" className="tirth-modal-close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="tirth-modal-body" style={{ maxHeight: 380, overflowY: 'auto' }}>
          {filtered.length === 0 ? (
            <p style={{ fontSize: '0.88rem', color: 'var(--tirth-grey-400)', textAlign: 'center', padding: 24 }}>
              No matching destinations found for "{query}".
            </p>
          ) : (
            filtered.map((item) => (
              <div
                key={item.name}
                onClick={() => {
                  onClose();
                  onSelectDestination?.(item);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: 10,
                  borderRadius: 12,
                  background: 'var(--tirth-navy-900)',
                  border: '1px solid var(--tirth-border)',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s ease'
                }}
              >
                <img src={item.image} alt={item.name} style={{ width: 50, height: 50, borderRadius: 10, objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--tirth-white)' }}>{item.name}</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--tirth-grey-400)' }}>
                    <MapPin size={11} style={{ display: 'inline', marginRight: 4 }} />
                    {item.country} · {item.duration}
                  </p>
                </div>
                <ArrowRight size={16} style={{ color: 'var(--tirth-teal-500)' }} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
