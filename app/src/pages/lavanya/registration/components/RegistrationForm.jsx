import React from 'react';
import FormField from './FormField';
import ProfilePhoto from './ProfilePhoto';

const RegistrationForm = () => {
  return (
    <form className="gt-registration-form" onSubmit={(e) => e.preventDefault()}>
      
      <div className="gt-form-header">
        <ProfilePhoto />
      </div>
      
      <div className="gt-form-row">
        <FormField label="First Name" id="firstName" type="text" placeholder="Jane" />
        <FormField label="Last Name" id="lastName" type="text" placeholder="Doe" />
      </div>

      <div className="gt-form-row">
        <FormField label="Email" id="email" type="email" placeholder="jane@example.com" />
        <FormField label="Phone" id="phone" type="tel" placeholder="+1 (555) 000-0000" />
      </div>

      <div className="gt-form-row">
        <FormField label="City" id="city" type="text" placeholder="New York" />
        <FormField label="Country" id="country" type="text" placeholder="United States" />
      </div>

      <div className="gt-form-field">
        <label htmlFor="additionalInfo" className="gt-label">Additional Information</label>
        <textarea 
          id="additionalInfo" 
          className="gt-textarea" 
          rows="3" 
          placeholder="Tell us about your travel preferences..."
        ></textarea>
      </div>

      <button type="submit" className="gt-submit-btn">Register User</button>
      
    </form>
  );
};

export default RegistrationForm;
