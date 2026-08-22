import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';

export function FinalCTA() {
  const handleScrollToPlanner = () => {
    const el = document.getElementById('plan-trip');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToDestinations = () => {
    const el = document.getElementById('destinations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="gt-cta-section">
      <div className="gt-cta-overlay" />

      <div className="gt-container">
        <motion.div
          className="gt-cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="gt-section-eyebrow" style={{ justifyContent: 'center' }}>
            <Sparkles size={14} />
            YOUR NEXT CHAPTER
          </span>

          <h2 className="gt-section-title">
            Where will your next story begin?
          </h2>

          <p className="gt-section-desc" style={{ margin: '0 auto 36px' }}>
            Choose a place, set your pace, and begin building a journey that feels completely yours.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="gt-btn-plan"
              onClick={handleScrollToPlanner}
              style={{ fontSize: '0.95rem', padding: '14px 36px' }}
            >
              Plan My Journey
              <ArrowUpRight size={18} />
            </button>

            <button
              type="button"
              className="gt-btn-explore"
              onClick={handleScrollToDestinations}
              style={{ fontSize: '0.95rem', padding: '14px 28px' }}
            >
              <Compass size={16} />
              Explore Destinations
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
