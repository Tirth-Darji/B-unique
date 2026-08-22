import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/lavanya/login/Login';
import Registration from './pages/lavanya/registration/Registration';
import Calendar from './pages/lavanya/calendar/Calendar';
import GlobeTrotterHome from './pages/tirth/homepage.jsx';
import ItineraryView from './pages/tirth/itineraryView.jsx';
import TripListing from './pages/kartavi/TripListing';
import UserProfile from './pages/kartavi/UserProfile';
import TravelCommunity from './pages/kartavi/TravelCommunity';
import TravelDiscovery from './pages/kartavi/TravelDiscovery';
import { INITIAL_TRIPS } from './pages/kartavi/tripData';
import { Navbar } from './components/Navbar';
import './App.css';

// Protected Route Wrapper
function ProtectedRoute({ children, isLoggedIn }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function AppRoutes({ isLoggedIn, setIsLoggedIn, sharedTrips, setSharedTrips }) {
  const navigate = useNavigate();

  // Navigation handlers to bridge existing component props with react-router-dom
  const onNavigateToJourneys = () => navigate('/trips');
  const onNavigateToProfile = () => navigate('/profile');
  const onBackToHome = () => navigate('/home');

  return (
    <>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/login"} replace />} />
        
        {/* Public Routes */}
        <Route path="/login" element={
          isLoggedIn ? <Navigate to="/home" replace /> : <Login onLogin={() => setIsLoggedIn(true)} />
        } />
        
        <Route path="/registration" element={
          isLoggedIn ? <Navigate to="/home" replace /> : <Registration onRegister={() => navigate('/login')} />
        } />

      {/* Protected Routes */}
      <Route path="/home" element={
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <GlobeTrotterHome 
            onNavigateToJourneys={onNavigateToJourneys} 
            onNavigateToProfile={onNavigateToProfile} 
          />
        </ProtectedRoute>
      } />

      <Route path="/profile" element={
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <UserProfile 
            onNavigateToJourneys={onNavigateToJourneys} 
            sharedTrips={sharedTrips} 
            onUpdateTrips={setSharedTrips} 
          />
        </ProtectedRoute>
      } />

      <Route path="/calendar" element={
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Calendar />
        </ProtectedRoute>
      } />

      <Route path="/trips" element={
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <TripListing 
            onNavigateToProfile={onNavigateToProfile} 
            sharedTrips={sharedTrips} 
            onUpdateTrips={setSharedTrips} 
          />
        </ProtectedRoute>
      } />

      <Route path="/itinerary/:id" element={
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <ItineraryView 
            onBackToHome={onBackToHome}
            onNavigateToJourneys={onNavigateToJourneys}
            onNavigateToProfile={onNavigateToProfile}
          />
        </ProtectedRoute>
      } />

      <Route path="/community" element={
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <TravelCommunity 
            onNavigateToJourneys={onNavigateToJourneys}
            sharedTrips={sharedTrips}
            onUpdateTrips={setSharedTrips}
          />
        </ProtectedRoute>
      } />

      <Route path="/discovery" element={
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <TravelDiscovery 
            onNavigateToJourneys={onNavigateToJourneys}
            onNavigateToProfile={onNavigateToProfile}
          />
        </ProtectedRoute>
      } />
      
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sharedTrips, setSharedTrips] = useState(INITIAL_TRIPS);
  const [isLoading, setIsLoading] = useState(true);

  // Check for JWT token on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null; // Or a loading spinner
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#030A14] text-slate-100 font-sans">
        <AppRoutes 
          isLoggedIn={isLoggedIn} 
          setIsLoggedIn={setIsLoggedIn}
          sharedTrips={sharedTrips}
          setSharedTrips={setSharedTrips}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;