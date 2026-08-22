import React from 'react';

const FormField = ({ label, id, type = 'text', placeholder, value, onChange, icon, onIconClick }) => {
  return (
    <div className="gt-login-form-field">
      <label htmlFor={id} className="gt-login-label">{label}</label>
      <div className="gt-login-input-wrapper">
        <input 
          type={type} 
          id={id} 
          className="gt-login-input" 
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {icon && (
          <button 
            type="button" 
            className="gt-login-input-icon" 
            onClick={onIconClick}
            aria-label="Toggle input visibility"
          >
            {icon}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormField;
