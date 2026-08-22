import { useState } from 'react'
import TripListing from './pages/kartavi/TripListing'
import UserProfile from './pages/kartavi/UserProfile'
import { INITIAL_TRIPS } from './pages/kartavi/tripData'

function App() {
  const [currentView, setCurrentView] = useState('journeys') // 'journeys' | 'profile'
  const [sharedTrips, setSharedTrips] = useState(INITIAL_TRIPS)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* GLOBAL APPLICATION NAVIGATION BAR */}
      <nav className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentView('journeys')}>
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-teal-400 to-emerald-400 text-slate-950 flex items-center justify-center font-black font-serif text-lg shadow-md">
            G
          </div>
          <span className="font-bold text-base tracking-tight font-sans text-white">
            GlobeTrotter
          </span>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 p-1 rounded-full text-xs font-semibold">
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

      {/* RENDER ACTIVE PAGE */}
      {currentView === 'journeys' ? (
        <TripListing
          onNavigateToProfile={() => setCurrentView('profile')}
          sharedTrips={sharedTrips}
          onUpdateTrips={setSharedTrips}
        />
      ) : (
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
