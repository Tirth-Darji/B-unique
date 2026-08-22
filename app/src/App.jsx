import { useState } from 'react'
import Login from './pages/lavanya/login/Login'
import TripListing from './pages/kartavi/TripListing'
import UserProfile from './pages/kartavi/UserProfile'
import TravelDiscovery from './pages/kartavi/TravelDiscovery'
import TravelCommunity from './pages/kartavi/TravelCommunity'
import { INITIAL_TRIPS } from './pages/kartavi/tripData'
import './App.css'

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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <nav className="sticky top-0 z-40 bg-[#0B1620]/85 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setCurrentView('journeys')}
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#E9C98A] to-[#7FB3A3] text-[#0B1620] flex items-center justify-center font-black font-serif text-lg shadow-md">
            G
          </div>

          <span className="font-bold text-base tracking-tight font-sans text-white">
            GlobeTrotter
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 bg-[#0B1620]/90 border border-white/10 p-1 rounded-full text-xs font-mono font-semibold overflow-x-auto scrollbar-none">
          <button
            type="button"
            onClick={() => setCurrentView('journeys')}
            className={`px-3 sm:px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 shrink-0 ${
              currentView === 'journeys'
                ? 'bg-gradient-to-r from-[#E9C98A] to-[#D9A857] text-[#0B1620] font-bold shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <span>🗺️</span>
            <span>My Journeys</span>
          </button>

          <button
            type="button"
            onClick={() => setCurrentView('discovery')}
            className={`px-3 sm:px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 shrink-0 ${
              currentView === 'discovery'
                ? 'bg-gradient-to-r from-[#E9C98A] to-[#D9A857] text-[#0B1620] font-bold shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <span>🧭</span>
            <span>Discovery</span>
          </button>

          <button
            type="button"
            onClick={() => setCurrentView('community')}
            className={`px-3 sm:px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 shrink-0 ${
              currentView === 'community'
                ? 'bg-gradient-to-r from-[#E9C98A] to-[#D9A857] text-[#0B1620] font-bold shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <span>📖</span>
            <span>Community</span>
          </button>

          <button
            type="button"
            onClick={() => setCurrentView('profile')}
            className={`px-3 sm:px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 shrink-0 ${
              currentView === 'profile'
                ? 'bg-gradient-to-r from-[#E9C98A] to-[#D9A857] text-[#0B1620] font-bold shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <span>👤</span>
            <span>Passport</span>
          </button>
        </div>
      </nav>

      {currentView === 'journeys' && (
        <TripListing
          onNavigateToProfile={() => setCurrentView('profile')}
          sharedTrips={sharedTrips}
          onUpdateTrips={setSharedTrips}
        />
      )}

      {currentView === 'discovery' && (
        <TravelDiscovery
          onNavigateToJourneys={() => setCurrentView('journeys')}
          onNavigateToProfile={() => setCurrentView('profile')}
        />
      )}

      {currentView === 'community' && (
        <TravelCommunity
          onNavigateToJourneys={() => setCurrentView('journeys')}
          sharedTrips={sharedTrips}
          onUpdateTrips={setSharedTrips}
        />
      )}

      {currentView === 'profile' && (
        <UserProfile
          onNavigateToJourneys={() => setCurrentView('journeys')}
          sharedTrips={sharedTrips}
          onUpdateTrips={setSharedTrips}
        />
      )}
    </div>
  )
}

export default App