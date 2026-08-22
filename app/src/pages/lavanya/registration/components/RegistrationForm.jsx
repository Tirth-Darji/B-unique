import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormField from './FormField';
import { api } from '../../../../services/api';

const RegistrationForm = ({ onRegister }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    country: 'United States',
    additionalInfo: '',
    password: '',
    confirmPassword: ''
  });
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      await api.register(formData);
      if (onRegister) onRegister();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="gt-registration-form" onSubmit={handleSubmit}>
      
      {error && (
        <div style={{ color: '#ef4444', marginBottom: '16px', fontSize: '14px', background: 'rgba(239, 68, 68, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
          {error}
        </div>
      )}

      <div className="gt-form-row">
        <FormField label="First Name" id="firstName" type="text" placeholder="Jane" value={formData.firstName} onChange={handleChange} />
        <FormField label="Last Name" id="lastName" type="text" placeholder="Doe" value={formData.lastName} onChange={handleChange} />
      </div>

      <div className="gt-form-row">
        <FormField label="Email" id="email" type="email" placeholder="jane@example.com" value={formData.email} onChange={handleChange} />
        <FormField label="Phone" id="phone" type="tel" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleChange} />
      </div>

      <div className="gt-form-row">
        <FormField label="Password" id="password" type="password" placeholder="••••••••" value={formData.password} onChange={handleChange} />
        <FormField label="Confirm Password" id="confirmPassword" type="password" placeholder="••••••••" value={formData.confirmPassword} onChange={handleChange} />
      </div>

      <div className="gt-form-row">
        <FormField label="City" id="city" type="text" placeholder="New York" value={formData.city} onChange={handleChange} />
        <div className="gt-form-field">
          <label htmlFor="country" className="gt-label">Country</label>
          <div className="gt-select-wrapper">
            <select id="country" className="gt-input gt-select" value={formData.country} onChange={handleChange}>
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
          value={formData.additionalInfo}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="gt-form-actions" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button type="submit" className="gt-submit-btn" disabled={loading}>
          {loading ? 'Creating Account...' : 'Register User'}
          <svg className="gt-btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
        <div style={{ fontSize: '0.9rem', color: '#6b8893' }}>
          Already registered?{' '}
          <span 
            onClick={() => navigate('/login')} 
            style={{ color: '#0077b6', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Login
          </span>
        </div>
      </div>

    </form>
  );
};

export default RegistrationForm;
