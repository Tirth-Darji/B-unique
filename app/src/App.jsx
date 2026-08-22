import React from 'react';
import Login from './pages/lavanya/login/Login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentView, setCurrentView] = useState('journeys')
  const [sharedTrips, setSharedTrips] = useState(INITIAL_TRIPS)

  // Keep the team's Login page as the entry point.
  // Once authentication/navigation is connected, the GlobeTrotter
  // application becomes available.
  if (!isLoggedIn) {
    return (
      <Login
        onLogin={() => setIsLoggedIn(true)}
      />
    )
  }

  return (
    <Login />
  );
}

export default App;
