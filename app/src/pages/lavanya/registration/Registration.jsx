import React from 'react';
import './Registration.css';
import RegistrationForm from './components/RegistrationForm';
import ProfilePhoto from './components/ProfilePhoto';
import bgImage from './assets/registration-bg.jpg';

const Registration = () => {
  return (
    <div className="gt-registration-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="gt-glass-card">

        <div className="gt-card-left">
          <h1 className="gt-heading">Create your<br />GlobeTrotter account</h1>
          <p className="gt-subtitle">Join us to explore the world's most<br />breathtaking destinations.</p>
          <ProfilePhoto />
        </div>

        <div className="gt-card-right">
          <RegistrationForm />
        </div>

      </div>
    </div>
  );
};

export default Registration;
