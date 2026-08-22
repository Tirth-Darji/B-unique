import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Calendar, Users, Compass, Sparkles, CheckCircle } from 'lucide-react';

export function QuickPlanner() {
  const [formData, setFormData] = useState({
    destination: '',
    startingPoint: '',
    travelDates: '',
    travelers: '2 Travelers',
    travelStyle: 'Nature',
  });

  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.destination.trim()) {
      setFeedbackMessage('Please enter a destination to begin your expedition draft.');
      return;
    }

    setIsSubmitted(true);
    setFeedbackMessage(
      `Your journey idea for "${formData.destination}" is ready to explore.`
    );
  };

  return (
    <section className="gt-planner-section" id="plan-trip">
      <div className="gt-container">
        <motion.div
          className="gt-planner-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="gt-planner-header">
            <span className="gt-section-eyebrow">BEGIN YOUR EXPEDITION</span>
            <h3 className="gt-section-title" style={{ fontSize: '1.8rem', marginBottom: 0 }}>
              Turn a destination into a journey
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="gt-planner-grid">
            {/* Field 1: Destination */}
            <div className="gt-planner-field">
              <label htmlFor="planner-dest" className="gt-planner-label">
                <MapPin size={14} />
                Where to?
              </label>
              <input
                id="planner-dest"
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="e.g. Lago di Braies, Kyoto, Reykjavik"
                className="gt-planner-input"
              />
            </div>

            {/* Field 2: Starting Location */}
            <div className="gt-planner-field">
              <label htmlFor="planner-start" className="gt-planner-label">
                <Navigation size={14} />
                Starting Point
              </label>
              <input
                id="planner-start"
                type="text"
                name="startingPoint"
                value={formData.startingPoint}
                onChange={handleChange}
                placeholder="e.g. Vadodara, London, NYC"
                className="gt-planner-input"
              />
            </div>

            {/* Field 3: Travel Dates */}
            <div className="gt-planner-field">
              <label htmlFor="planner-dates" className="gt-planner-label">
                <Calendar size={14} />
                Travel Dates
              </label>
              <input
                id="planner-dates"
                type="date"
                name="travelDates"
                value={formData.travelDates}
                onChange={handleChange}
                className="gt-planner-input"
              />
            </div>

            {/* Field 4: Travelers */}
            <div className="gt-planner-field">
              <label htmlFor="planner-travelers" className="gt-planner-label">
                <Users size={14} />
                Travelers
              </label>
              <select
                id="planner-travelers"
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
                className="gt-planner-input"
              >
                <option value="1 Solo Traveler">1 Solo Traveler</option>
                <option value="2 Travelers">2 Travelers</option>
                <option value="3-5 Travelers">3-5 Small Group</option>
                <option value="6+ Group">6+ Group</option>
              </select>
            </div>

            {/* Field 5: Travel Style */}
            <div className="gt-planner-field">
              <label htmlFor="planner-style" className="gt-planner-label">
                <Compass size={14} />
                Travel Style
              </label>
              <select
                id="planner-style"
                name="travelStyle"
                value={formData.travelStyle}
                onChange={handleChange}
                className="gt-planner-input"
              >
                <option value="Adventure">Adventure</option>
                <option value="Nature">Nature</option>
                <option value="Culture">Culture</option>
                <option value="Relaxation">Relaxation</option>
                <option value="Food">Food</option>
                <option value="Photography">Photography</option>
              </select>
            </div>

            {/* Submit Button */}
            <button type="submit" className="gt-planner-btn">
              <Sparkles size={16} />
              Start Planning
            </button>
          </form>

          {/* Validation / Success Feedback */}
          {feedbackMessage && (
            <motion.div
              className="gt-planner-feedback"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {isSubmitted ? <CheckCircle size={16} style={{ display: 'inline', marginRight: 8 }} /> : null}
              {feedbackMessage}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
