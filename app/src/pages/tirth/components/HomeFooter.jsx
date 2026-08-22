import React, { useState } from 'react';
import { Globe, Heart, Send, Check, Share2, Compass, Mail } from 'lucide-react';

export function HomeFooter({ onNavigateToJourneys, onNavigateToProfile }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <footer className="gt-footer">
      <div className="gt-container">
        <div className="gt-footer-grid">
          {/* Brand area */}
          <div className="gt-footer-col">
            <div className="gt-brand" style={{ marginBottom: 16 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="gt-logo-box">G</div>
              <span className="gt-brand-name">GlobeTrotter</span>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--gt-text-secondary)' }}>
              Thoughtful journeys for curious travellers.
            </p>

            <div style={{ display: 'flex', gap: '14px', marginTop: '18px' }}>
              <a href="#home" className="gt-icon-btn" aria-label="Global Site">
                <Globe size={18} />
              </a>
              <a href="#home" className="gt-icon-btn" aria-label="Share Expedition">
                <Share2 size={18} />
              </a>
              <a href="#home" className="gt-icon-btn" aria-label="Expedition Trails">
                <Compass size={18} />
              </a>
            </div>
          </div>

          {/* Homepage Links */}
          <div className="gt-footer-col">
            <h5>Navigation</h5>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#plan-trip">Plan Trip</a></li>
            </ul>
          </div>

          {/* Product Links */}
          <div className="gt-footer-col">
            <h5>Expeditions</h5>
            <ul>
              <li><button type="button" onClick={onNavigateToJourneys} style={{ color: 'inherit', font: 'inherit', textAlign: 'left', cursor: 'pointer' }}>My Journeys</button></li>
              <li><button type="button" onClick={onNavigateToProfile} style={{ color: 'inherit', font: 'inherit', textAlign: 'left', cursor: 'pointer' }}>User Profile</button></li>
              <li><a href="#editorial">Editorial Statement</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="gt-footer-col">
            <h5>Legal</h5>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="gt-footer-col">
            <h5>Expedition Notes</h5>
            <p style={{ fontSize: '0.82rem', color: 'var(--gt-text-secondary)', marginBottom: 12 }}>
              Receive monthly quiet dispatches and new destination drops.
            </p>

            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--gt-turquoise-bright)', fontSize: '0.85rem' }}>
                <Check size={16} /> Subscribed to dispatches!
              </div>
            ) : (
              <form onSubmit={handleSubscribe}>
                <div className="gt-newsletter-input-group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="gt-newsletter-input"
                  />
                  <button type="submit" className="gt-newsletter-btn" aria-label="Subscribe">
                    <Send size={14} />
                  </button>
                </div>
                {error && <p style={{ fontSize: '0.75rem', color: 'var(--gt-orange)', marginTop: 4 }}>{error}</p>}
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="gt-footer-bottom">
          <div>© 2026 GlobeTrotter. All rights reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span>Made for global travellers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
