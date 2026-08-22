import React from 'react';

const ProfilePhoto = () => {
  return (
    <div className="gt-profile-photo-container">
      <div className="gt-profile-photo-upload">
        <div className="gt-photo-placeholder" aria-hidden="true">
          {/* Camera Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </div>
        <input 
          type="file" 
          id="profilePhoto" 
          className="gt-photo-input" 
          accept="image/*" 
          aria-label="Upload profile photo" 
        />
      </div>
      <div className="gt-photo-text">
        <label htmlFor="profilePhoto" className="gt-photo-label">Upload your profile photo</label>
        <span className="gt-photo-hint">JPG, PNG up to 5MB</span>
      </div>
    </div>
  );
};

export default ProfilePhoto;
