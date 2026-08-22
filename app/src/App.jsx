import { useState } from 'react'
import Login from './pages/lavanya/login/Login'
import GlobeTrotterHome from './pages/tirth/homepage.jsx'
import TripListing from './pages/kartavi/TripListing'
import UserProfile from './pages/kartavi/UserProfile'
import { INITIAL_TRIPS } from './pages/kartavi/tripData'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentView, setCurrentView] = useState('home')
  const [sharedTrips, setSharedTrips] = useState(INITIAL_TRIPS)

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />
  }

  return (
    <div className="min-h-screen bg-[#030A14] text-slate-100 font-sans">
      {currentView !== 'home' && (
        <nav className="sticky top-0 z-40 bg-[#030A14]/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 py-3 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setCurrentView('home')}
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-teal-400 to-emerald-400 text-slate-950 flex items-center justify-center font-black font-serif text-lg shadow-md">
              G
            </div>

            <span className="font-bold text-base tracking-tight font-sans text-white">
              GlobeTrotter
            </span>
          </div>

          <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 p-1 rounded-full text-xs font-semibold">
            <button
              type="button"
              onClick={() => setCurrentView('home')}
              className="px-4 py-1.5 rounded-full text-slate-400 hover:text-white transition-all"
            >
              Explore Home
            </button>

            <button
              type="button"
              onClick={() => setCurrentView('journeys')}
              className={`px-4 py-1.5 rounded-full transition-all ${
                currentView === 'journeys'
                  ? 'bg-teal-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              My Journeys
            </button>

            <button
              type="button"
              onClick={() => setCurrentView('profile')}
              className={`px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                currentView === 'profile'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>🛂</span>
              <span>User Profile</span>
            </button>
          </div>
        </nav>
      )}

      {currentView === 'home' && (
        <GlobeTrotterHome
          onNavigateToJourneys={() => setCurrentView('journeys')}
          onNavigateToProfile={() => setCurrentView('profile')}
        />
      )}

      {currentView === 'journeys' && (
        <TripListing
          onNavigateToProfile={() => setCurrentView('profile')}
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