import React from 'react';
import './Registration.css';
import RegistrationForm from './components/RegistrationForm';

const Registration = () => {
  return (
    <div className="gt-registration-page">
      <div className="gt-registration-layout">
        
        {/* Left: Travel Visual */}
        <div className="gt-travel-visual">
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop" 
            alt="Overhead view of a clear blue tropical ocean with a kayak" 
            className="gt-visual-img" 
          />
        </div>
        
        {/* Right: Registration Panel */}
        <div className="gt-registration-panel-wrapper">
          <div className="gt-glass-panel">
            <h1 className="gt-heading">Create your GlobeTrotter account</h1>
            <p className="gt-subtitle">Join us to explore the world's most breathtaking destinations.</p>
            <RegistrationForm />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Registration;
