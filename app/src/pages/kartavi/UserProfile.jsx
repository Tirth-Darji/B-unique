import { useState, useEffect } from "react";
import { INITIAL_TRIPS } from "./tripData.js";
import { ProfilePassport } from "./components/profile/ProfilePassport.jsx";
import { EditProfileModal } from "./components/profile/EditProfileModal.jsx";
import { EditTripModal } from "./components/profile/EditTripModal.jsx";
import { DeleteAccountModal } from "./components/profile/DeleteAccountModal.jsx";
import { api } from "../../services/api";

/**
 * UserProfile Page Component
 * Renders the GlobeTrotter user profile designed as an open physical passport spread on a desk.
 * Uses shared trip data from tripData.js.
 */
export default function UserProfile({ onNavigateToJourneys, sharedTrips, onUpdateTrips }) {
  // Use passed shared trips or initial trip dataset
  const [tripsData, setTripsData] = useState(sharedTrips || INITIAL_TRIPS);
  const [loading, setLoading] = useState(true);

  // User Profile State
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const dbUser = await api.getCurrentUser();
        setUserData({
          name: `${dbUser.first_name} ${dbUser.last_name}`,
          email: dbUser.email,
          username: `@${dbUser.first_name.toLowerCase()}`,
          nationality: dbUser.country || 'Unknown',
          passportNo: `GT-${dbUser.id}`,
          dob: "14 APR 1998",
          home: `${dbUser.city || ''}, ${dbUser.country || ''}`.replace(/^, | , $/g, ''),
          memberSince: new Date(dbUser.created_at).getFullYear().toString(),
          avatar: dbUser.profile_photo || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
          bio: dbUser.additional_information || "Curator of calm expeditions, alpine trails, and ancient teahouses.",
          tripsCount: 12,
          countriesVisited: 8,
          citiesVisited: 14,
        });
      } catch (error) {
        console.error("Failed to load user data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  // Passport Stamps Dataset
  const [stamps] = useState([
    {
      id: "stamp-1",
      city: "PARIS",
      country: "FRANCE",
      year: "2026",
      date: "FEB 2026",
      duration: "5 Days",
      shape: "circle",
      color: "text-amber-800 border-amber-800/80 bg-amber-900/10",
      rotation: "-rotate-6",
      tripId: "trip-completed-2",
    },
    {
      id: "stamp-2",
      city: "TOKYO",
      country: "JAPAN",
      year: "2026",
      date: "MAY 2026",
      duration: "8 Days",
      shape: "rect",
      color: "text-red-800 border-red-800/80 bg-red-900/10",
      rotation: "rotate-3",
      tripId: "trip-completed-5",
    },
    {
      id: "stamp-3",
      city: "ALPS",
      country: "SWITZERLAND",
      year: "2026",
      date: "JAN 2026",
      duration: "9 Days",
      shape: "octagon",
      color: "text-teal-800 border-teal-800/80 bg-teal-900/10",
      rotation: "-rotate-3",
      tripId: "trip-completed-1",
    },
    {
      id: "stamp-4",
      city: "CUSCO",
      country: "PERU",
      year: "2026",
      date: "MAR 2026",
      duration: "10 Days",
      shape: "oval",
      color: "text-amber-900 border-amber-900/80 bg-amber-950/10",
      rotation: "rotate-6",
      tripId: "trip-completed-3",
    },
    {
      id: "stamp-5",
      city: "REYKJAVIK",
      country: "ICELAND",
      year: "2026",
      date: "OCT 2026",
      duration: "8 Days",
      shape: "rect",
      color: "text-cyan-800 border-cyan-800/80 bg-cyan-950/10",
      rotation: "-rotate-12",
      tripId: "trip-upcoming-1",
    },
  ]);

  // Modal Visibility States
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isDeleteAccountOpen, setIsDeleteAccountOpen] = useState(false);
  const [editingTrip, setEditingTrip] = useState(null);
  const [isAccountDeleted, setIsAccountDeleted] = useState(false);

  // Handlers
  const handleSaveProfile = async (updatedProfile) => {
    try {
      const nameParts = updatedProfile.name.split(' ');
      const first_name = nameParts[0] || '';
      const last_name = nameParts.slice(1).join(' ') || '';
      const homeParts = updatedProfile.home.split(',');
      const city = homeParts[0]?.trim() || '';
      const country = homeParts[1]?.trim() || updatedProfile.nationality || '';

      await api.updateCurrentUser({
        first_name,
        last_name,
        city,
        country,
        additional_information: updatedProfile.bio,
      });

      setUserData((prev) => ({ ...prev, ...updatedProfile }));
      setIsEditProfileOpen(false);
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  const handleSaveTrip = (updatedTrip) => {
    setTripsData((prev) => {
      const nextTrips = prev.map((t) => (t.id === updatedTrip.id ? updatedTrip : t));
      if (onUpdateTrips) onUpdateTrips(nextTrips);
      return nextTrips;
    });
    setEditingTrip(null);
  };

  const handleConfirmDeleteAccount = () => {
    setIsDeleteAccountOpen(false);
    setIsAccountDeleted(true);
  };

  if (isAccountDeleted) {
    return (
      <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex items-center justify-center p-6">
        <div className="max-w-md bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center space-y-4 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mx-auto">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold font-serif text-white">Passport Revoked</h2>
          <p className="text-xs text-slate-400 leading-relaxed font-light">
            Your GlobeTrotter traveler account and passport history have been deleted.
          </p>
          <button
            type="button"
            onClick={() => setIsAccountDeleted(false)}
            className="px-6 py-2.5 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition-all shadow-lg shadow-teal-500/20"
          >
            Re-activate Passport Profile
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center">
        <div className="text-amber-500 text-xl font-serif">Loading Passport...</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* DESK BACKDROP TEXTURE & AMBIENT SHADOWS */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-90" />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-amber-600/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-teal-600/5 rounded-full filter blur-3xl" />
      </div>

      {/* PAGE CONTAINER - IMMERSIVE FULL SCREEN PASSPORT */}
      <div className="relative z-10 w-full max-w-[98vw] 2xl:max-w-[1920px] mx-auto px-1 sm:px-3 md:px-4 py-1 sm:py-2">
        <main className="w-full flex justify-center">
          <ProfilePassport
            user={userData}
            stamps={stamps}
            trips={tripsData}
            onEditProfile={() => setIsEditProfileOpen(true)}
            onDeleteAccount={() => setIsDeleteAccountOpen(true)}
            onEditTrip={(trip) => setEditingTrip(trip)}
          />
        </main>
      </div>

      {/* MODALS */}
      {isEditProfileOpen && (
        <EditProfileModal
          user={userData}
          onSave={handleSaveProfile}
          onClose={() => setIsEditProfileOpen(false)}
        />
      )}

      {editingTrip && (
        <EditTripModal
          trip={editingTrip}
          onSave={handleSaveTrip}
          onClose={() => setEditingTrip(null)}
        />
      )}

      {isDeleteAccountOpen && (
        <DeleteAccountModal
          onClose={() => setIsDeleteAccountOpen(false)}
          onConfirm={handleConfirmDeleteAccount}
        />
      )}
    </div>
  );
}
