import React from 'react';
import FormField from './FormField';

const RegistrationForm = () => {
  return (
    <form className="gt-registration-form" onSubmit={(e) => e.preventDefault()}>

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
        <div className="gt-form-field">
          <label htmlFor="country" className="gt-label">Country</label>
          <div className="gt-select-wrapper">
            <select id="country" className="gt-input gt-select" defaultValue="United States">
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
            </select>
            <svg className="gt-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
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

      <div className="gt-form-actions">
        <button type="submit" className="gt-submit-btn">
          Register User
          <svg className="gt-btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>

    </form>
  );
};

export default RegistrationForm;
