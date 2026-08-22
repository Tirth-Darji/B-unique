import React from 'react';

const ProfilePhoto = () => {
  return (
    <div className="gt-profile-photo-container">
      <div className="gt-profile-photo-upload">
        <div className="gt-photo-placeholder" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
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
      <label htmlFor="profilePhoto" className="gt-photo-label">
        Upload Photo
      </label>
    </div>
  );
};

export default ProfilePhoto;
