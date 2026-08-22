import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Calendar, BookOpen } from 'lucide-react';

const STEPS = [
  {
    step: "01",
    title: "Discover",
    description: "Find destinations that match your interests, pace, and travel style.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Shape Your Journey",
    description: "Choose your dates, travel companions, activities, and budget.",
    icon: Calendar,
  },
  {
    step: "03",
    title: "Begin the Adventure",
    description: "Keep your plan together and get ready to experience the journey.",
    icon: BookOpen,
  },
];

export function HowItWorks() {
  return (
    <section className="gt-works-section" id="how-it-works">
      <div className="gt-container">
        <div className="gt-works-header">
          <span className="gt-section-eyebrow">ONE IDEA. ONE JOURNEY.</span>
          <h2 className="gt-section-title">Planning your next story is simple</h2>
          <p className="gt-section-desc">
            We simplify complex itinerary planning so you can focus on the wonder of exploration.
          </p>
        </div>

        <div className="gt-works-grid">
          {STEPS.map((step, index) => {
            const IconComponent = step.icon;

            return (
              <motion.div
                key={step.step}
                className="gt-works-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="gt-works-num">{step.step}</div>
                <div className="gt-works-icon-box">
                  <IconComponent size={24} />
                </div>
                <h3 className="gt-works-title">{step.title}</h3>
                <p className="gt-works-desc">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
