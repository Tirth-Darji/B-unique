import { useState } from "react";
import { PassportIdentityPage } from "./PassportIdentityPage.jsx";
import { TravelStamps } from "./TravelStamps.jsx";
import { PastTrips } from "./PastTrips.jsx";

/**
 * ProfilePassport Component
 * The visual centerpiece representing an open physical passport spread resting on a desk.
 * Left Page: User Profile & Official Passport Identity Details.
 * Right Page: Travel Stamps + Past Expedition History.
 * Mobile/Tablet: Responsive tab toggle / vertical stack with authentic open passport styling.
 */
export function ProfilePassport({
  user,
  stamps,
  trips,
  onEditProfile,
  onDeleteAccount,
  onEditTrip,
}) {
  const [activeTab, setActiveTab] = useState("all"); // 'all' for desktop 2-page spread, 'id' / 'history' for mobile tabs
  const [highlightedTripId, setHighlightedTripId] = useState(null);

  const handleSelectTripFromStamp = (tripId) => {
    setHighlightedTripId(tripId);
    setTimeout(() => {
      setHighlightedTripId(null);
    }, 3000);
  };

  return (
    <div className="relative w-full max-w-[99vw] mx-auto py-1 sm:py-2 px-0.5 sm:px-1">
      {/* MOBILE PAGE SELECTOR TABS (Visible on small screens) */}
      <div className="flex md:hidden items-center justify-center gap-2 mb-4">
        <button
          type="button"
          onClick={() => setActiveTab("id")}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
            activeTab === "id" || activeTab === "all"
              ? "bg-amber-900 text-amber-50 border-amber-800 shadow-md"
              : "bg-slate-900/60 text-slate-300 border-slate-800"
          }`}
        >
          Passport Identity Page
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("history")}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
            activeTab === "history"
              ? "bg-amber-900 text-amber-50 border-amber-800 shadow-md"
              : "bg-slate-900/60 text-slate-300 border-slate-800"
          }`}
        >
          Stamps & Travel History
        </button>
      </div>

      {/* OPEN PASSPORT PHYSICAL SPREAD CONTAINER */}
      <div className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] bg-[#0c1628] border-2 border-amber-500/30 p-2 sm:p-4 md:p-5 lg:p-6 shadow-[0_30px_90px_-15px_rgba(0,0,0,0.95)] text-slate-900 transition-all duration-500">
        {/* GOLD EMBOSSED INNER BORDER LINE */}
        <div className="relative w-full rounded-[1.5rem] sm:rounded-[2rem] bg-[#faf7f0] border border-amber-900/20 shadow-inner overflow-hidden flex flex-col md:flex-row min-h-[640px] md:min-h-[calc(100vh-100px)]">
          
          {/* LEFT PASSPORT PAGE (Identity Page) */}
          <div
            className={`w-full md:w-1/2 min-h-[580px] md:min-h-[calc(100vh-100px)] bg-[#faf7f0] border-b md:border-b-0 md:border-r border-amber-900/20 shadow-[inset_-15px_0_20px_-15px_rgba(0,0,0,0.08)] relative z-10 transition-all duration-300 ${
              activeTab === "history" ? "hidden md:block" : "block"
            }`}
          >
            <PassportIdentityPage
              user={user}
              onEditProfile={onEditProfile}
              onDeleteAccount={onDeleteAccount}
            />
          </div>

          {/* CENTRAL SPINE / FOLD GUTTER BETWEEN PAGES */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 md:w-10 pointer-events-none z-20 bg-gradient-to-r from-black/10 via-black/25 to-black/10 shadow-[inset_0_0_15px_rgba(0,0,0,0.15)]" />

          {/* RIGHT PASSPORT PAGE (Stamps & Travel History) */}
          <div
            className={`w-full md:w-1/2 min-h-[580px] md:min-h-[calc(100vh-100px)] bg-[#faf7f0] p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between space-y-6 lg:space-y-8 xl:space-y-10 shadow-[inset_15px_0_20px_-15px_rgba(0,0,0,0.08)] relative z-10 transition-all duration-300 ${
              activeTab === "id" ? "hidden md:flex" : "flex"
            }`}
          >
            {/* Header watermark */}
            <div className="flex items-center justify-between border-b border-amber-900/30 pb-3 lg:pb-4">
              <div>
                <span className="text-[9px] lg:text-[11px] xl:text-xs uppercase tracking-[0.25em] font-extrabold text-amber-900/70 block">
                  OFFICIAL TRAVEL RECORD
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold font-serif text-slate-950 tracking-tight">
                  VISAS & EXPEDITIONS
                </h2>
              </div>
              <span className="text-xs lg:text-sm xl:text-base font-mono font-bold text-amber-950">PAGE 02 / 03</span>
            </div>

            {/* TOP SECTION: TRAVEL STAMPS */}
            <TravelStamps stamps={stamps} onSelectTrip={handleSelectTripFromStamp} />

            {/* BOTTOM SECTION: PAST TRIPS ARCHIVE */}
            <PastTrips
              trips={trips}
              onEditTrip={onEditTrip}
              highlightedTripId={highlightedTripId}
            />

            {/* Page Footer watermark */}
            <div className="pt-2 lg:pt-4 text-center text-[9px] lg:text-[11px] xl:text-xs font-mono tracking-widest text-amber-900/40 border-t border-amber-900/10">
              GLOBETROTTER OFFICIAL TRAVEL PASSPORT • NON-TRANSFERABLE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
