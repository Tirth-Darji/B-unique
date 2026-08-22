import React from 'react';
import './Login.css';
import LoginForm from './components/LoginForm';
import bgImage from './assets/login-bg.png';

const Login = () => {
  return (
    <div className="gt-login-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="gt-login-glass-card">
        <h2 className="gt-login-brand">GlobeTrotter</h2>
        <h1 className="gt-login-heading">Welcome back!</h1>
        <p className="gt-login-subtitle">Login to continue your adventures.</p>
        
        <LoginForm />
        
        <div className="gt-login-footer">
          Don't have an account? <a href="#" className="gt-login-link">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
