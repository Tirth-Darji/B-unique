import React from 'react';

const FormField = ({ label, id, type = 'text', placeholder }) => {
  return (
    <div className="gt-form-field">
      <label htmlFor={id} className="gt-label">{label}</label>
      <input 
        type={type} 
        id={id} 
        name={id} 
        className="gt-input" 
        placeholder={placeholder} 
        required 
      />
    </div>
  );
};

export default FormField;
