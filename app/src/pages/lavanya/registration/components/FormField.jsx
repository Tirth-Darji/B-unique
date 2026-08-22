import React from 'react';

const FormField = ({ label, id, type = 'text', placeholder, value, onChange }) => {
  return (
    <div className="gt-form-field">
      <label htmlFor={id} className="gt-label">{label}</label>
      <input 
        type={type} 
        id={id} 
        name={id} 
        className="gt-input" 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        required 
      />
    </div>
  );
};

export default FormField;
