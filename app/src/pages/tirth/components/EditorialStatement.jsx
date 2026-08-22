import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles } from 'lucide-react';

export function EditorialStatement() {
  const handleScrollToDestinations = () => {
    const el = document.getElementById('destinations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="gt-editorial-section" id="editorial">
      <div className="gt-container">
        <motion.div
          className="gt-editorial-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Left Side: Large Cinematic Travel Photograph */}
          <div className="gt-editorial-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85"
              alt="Cinematic alpine reflection on Lake Braies"
              className="gt-editorial-img"
              loading="lazy"
            />
          </div>

          {/* Right Side: Cream Background Editorial Statement */}
          <div className="gt-editorial-text-panel">
            {/* Passport Stamp Detail */}
            <div className="gt-editorial-stamp">
              <Sparkles size={16} />
              <span>PASSPORT SEAL</span>
            </div>

            <span className="gt-editorial-eyebrow">TRAVEL WITH INTENTION</span>

            <blockquote className="gt-editorial-quote">
              “The best journeys do more than change your location. They change the way you see the world.”
            </blockquote>

            <p className="gt-editorial-para">
              GlobeTrotter helps turn scattered ideas into thoughtful journeys built around the places, people, and experiences that matter to you.
            </p>

            <button
              type="button"
              className="gt-editorial-btn"
              onClick={handleScrollToDestinations}
            >
              <Compass size={16} />
              Discover Your Next Place
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
