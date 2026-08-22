import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Clock, Compass, ArrowUpRight, Play, Pause } from 'lucide-react';
import { HERO_DESTINATIONS } from '../homeDestinations';

export function HeroCarousel({ onPlanJourney }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(null);

  const current = HERO_DESTINATIONS[activeIndex];
  const count = HERO_DESTINATIONS.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % count);
  }, [count]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  // Autoplay Effect (7 seconds)
  useEffect(() => {
    if (!isPlaying || isHovered) return undefined;
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [isPlaying, isHovered, nextSlide]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();

    touchStartX.current = null;
  };

  return (
    <section
      id="home"
      className="gt-hero"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      aria-label="Featured Destinations Hero Carousel"
    >
      {/* Background Image Carousel with Smooth Crossfade */}
      <div className="gt-hero-bg">
        {HERO_DESTINATIONS.map((dest, i) => (
          <div
            key={dest.id}
            className={`gt-hero-img-wrap ${i === activeIndex ? 'active' : ''}`}
            aria-hidden={i !== activeIndex}
          >
            <img
              src={dest.image}
              alt={dest.imageAlt}
              className="gt-hero-img"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* Atmospheric Dark Overlays */}
      <div className="gt-hero-overlay-gradient" />
      <div className="gt-hero-overlay-side" />
      <div className="gt-hero-overlay-vignette" />
      <div className="gt-hero-tint" />

      {/* Main Hero Content Overlay */}
      <div className="gt-container gt-hero-content-wrap">
        <div className="gt-hero-grid">
          {/* Left Hero Box: Greeting & Slide Tracker */}
          <div className="gt-hero-left">
            <div className="gt-hero-greeting-box">
              <span className="gt-hero-welcome-eyebrow">FEATURED EXPEDITION</span>
              <h2 className="gt-hero-greeting">Welcome back, traveller.</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--gt-text-secondary)', marginTop: 4 }}>
                Where will your next story begin?
              </p>
            </div>

            <div className="gt-hero-slide-num">
              <span className="active-num">{current.slideNumber}</span>
              <span>/ 0{count}</span>
            </div>
          </div>

          {/* Right Hero Box: Animated Destination Details */}
          <div className="gt-hero-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
              >
                <div className="gt-hero-location-tag">
                  <MapPin size={15} />
                  <span>{current.country} · {current.region}</span>
                </div>

                <h1 className="gt-hero-title">{current.title}</h1>

                <p className="gt-hero-desc">{current.description}</p>

                <div className="gt-hero-facts">
                  <div className="gt-hero-fact-item">
                    <Clock size={14} />
                    <span>{current.duration}</span>
                  </div>
                  <div className="gt-hero-fact-item">
                    <Calendar size={14} />
                    <span>Best: {current.bestSeason}</span>
                  </div>
                  <div className="gt-hero-fact-item">
                    <Compass size={14} />
                    <span>{current.travelStyle}</span>
                  </div>
                </div>

                {/* Primary & Secondary Action Buttons */}
                <div className="gt-hero-cta-group">
                  <button
                    type="button"
                    className="gt-btn-plan"
                    onClick={() => onPlanJourney?.(current)}
                  >
                    Plan This Journey
                    <ArrowUpRight size={16} />
                  </button>

                  <a href="#destinations" className="gt-btn-explore">
                    <Compass size={15} />
                    Explore Destination
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Hero Controls Bottom Bar */}
      <div className="gt-hero-controls-bar">
        <div className="gt-container gt-hero-controls-inner">
          {/* Arrow Buttons */}
          <div className="gt-hero-arrows">
            <button
              type="button"
              className="gt-hero-arrow-btn"
              onClick={prevSlide}
              aria-label="Previous destination"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="gt-hero-arrow-btn"
              onClick={nextSlide}
              aria-label="Next destination"
            >
              <ChevronRight size={20} />
            </button>
            <button
              type="button"
              className="gt-hero-arrow-btn"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              style={{ marginLeft: '4px' }}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div>

          {/* Center Scroll Indicator */}
          <div className="gt-hero-scroll-indicator">
            <span className="gt-scroll-dot" />
            <span>Scroll To Discover</span>
          </div>

          {/* Right Slide Dots */}
          <div className="gt-hero-dots-col" role="tablist" aria-label="Destination slides">
            {HERO_DESTINATIONS.map((dest, index) => (
              <button
                key={dest.id}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Go to ${dest.title}`}
                className={`gt-hero-dot-btn ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="gt-hero-dot-core" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
