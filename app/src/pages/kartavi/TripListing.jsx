import { useState, useEffect } from "react";
import {
  INITIAL_TRIPS,
  SECTION_METADATA,
  getTripsByStatus,
} from "./tripData.js";
import { TripSection } from "./components/TripSection.jsx";
import { TripPreviewModal } from "./components/TripPreviewModal.jsx";

/**
 * GlobeTrotter - "My Journeys" Page Component
 * Wisata dark, moody, cinematic travel-app aesthetic.
 * Features full-bleed hero banner, glassmorphic dark accordion sections,
 * 3D interactive flip cards, horizontal scroll-snap carousels,
 * and a full-detail preview modal drawer.
 */
export default function TripListing({ onNavigateToProfile, sharedTrips, onUpdateTrips }) {
  // Default expanded section is "upcoming" as per design spec
  const [activeSection, setActiveSection] = useState("upcoming");
  const [tripsData, setTripsData] = useState(sharedTrips || INITIAL_TRIPS);
  const [selectedTrip, setSelectedTrip] = useState(null);

  // Sync state if sharedTrips prop updates
  useEffect(() => {
    if (sharedTrips) {
      setTripsData(sharedTrips);
    }
  }, [sharedTrips]);

  // Toggle single expanded folder section
  const handleToggleSection = (sectionId) => {
    setActiveSection((prev) => (prev === sectionId ? null : sectionId));
  };

  // View Trip Action (opens modal)
  const handleViewTrip = (trip) => {
    setSelectedTrip(trip);
  };

  // Close Modal
  const handleCloseModal = () => {
    setSelectedTrip(null);
  };

  // Empty state button action
  const handleEmptyAction = (sectionId) => {
    alert(`Launching GlobeTrotter Destination Explorer for "${sectionId}"...`);
  };

  // Quick demo helper controls (Test empty state vs reset sample data)
  const handleResetData = () => {
    const reset = INITIAL_TRIPS;
    setTripsData(reset);
    if (onUpdateTrips) onUpdateTrips(reset);
  };

  const handleSimulateEmptyUpcoming = () => {
    const filtered = tripsData.filter((t) => t.status !== "upcoming");
    setTripsData(filtered);
    if (onUpdateTrips) onUpdateTrips(filtered);
  };

  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950">
      {/* BACKGROUND CINEMATIC HERO TEXTURE & GRADIENT */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=85"
          alt="Dark Moody Oceanic Backdrop"
          className="w-full h-[650px] object-cover object-center opacity-30 mix-blend-luminosity filter blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/90 to-slate-950" />
        {/* Glow ambient spots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none" />
      </div>

      {/* MAIN CONTAINER CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        {/* TOP HEADER SECTION */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800/80">
          <div className="space-y-3">
            {/* Top Brand Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              GlobeTrotter Archive
            </div>
            
            {/* Main Title & Subtitle */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-sans text-white tracking-tight leading-none">
              My Journeys
            </h1>
            <p className="text-slate-300 font-light text-base sm:text-lg max-w-2xl leading-relaxed">
              A cinematic archive of your active expeditions, upcoming adventures, and past travel memories.
            </p>
          </div>

          {/* Action Header Button Controls */}
          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            {onNavigateToProfile && (
              <button
                type="button"
                onClick={onNavigateToProfile}
                className="px-5 py-2.5 rounded-full bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-200 text-xs font-semibold backdrop-blur-md transition-all flex items-center gap-2 shadow-lg shadow-amber-500/10"
              >
                <span>🛂 Passport Profile</span>
              </button>
            )}

            {tripsData.filter((t) => t.status === "upcoming").length === 0 ? (
              <button
                type="button"
                onClick={handleResetData}
                className="px-5 py-2.5 rounded-full bg-teal-500/20 hover:bg-teal-500/30 border border-teal-500/30 text-teal-200 text-xs font-semibold backdrop-blur-md transition-all flex items-center gap-2 shadow-lg shadow-teal-500/10"
                title="Restore initial trip dataset"
              >
                <svg className="w-4 h-4 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Restore Sample Trips
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSimulateEmptyUpcoming}
                className="px-5 py-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold backdrop-blur-md transition-all shadow-md"
                title="Test empty state view for Upcoming section"
              >
                Test Empty State
              </button>
            )}
          </div>
        </header>

        {/* ACCORDION SECTIONS: ONGOING, UPCOMING, COMPLETED */}
        <main className="space-y-6" id="main-content">
          {/* 1. ONGOING JOURNEYS */}
          <TripSection
            meta={SECTION_METADATA.ongoing}
            trips={getTripsByStatus(tripsData, "ongoing")}
            isExpanded={activeSection === "ongoing"}
            onToggle={handleToggleSection}
            onViewTrip={handleViewTrip}
            onEmptyAction={handleEmptyAction}
          />

          {/* 2. UPCOMING ADVENTURES (Default expanded) */}
          <TripSection
            meta={SECTION_METADATA.upcoming}
            trips={getTripsByStatus(tripsData, "upcoming")}
            isExpanded={activeSection === "upcoming"}
            onToggle={handleToggleSection}
            onViewTrip={handleViewTrip}
            onEmptyAction={handleEmptyAction}
          />

          {/* 3. COMPLETED JOURNEYS */}
          <TripSection
            meta={SECTION_METADATA.completed}
            trips={getTripsByStatus(tripsData, "completed")}
            isExpanded={activeSection === "completed"}
            onToggle={handleToggleSection}
            onViewTrip={handleViewTrip}
            onEmptyAction={handleEmptyAction}
          />
        </main>
      </div>

      {/* SELECTED TRIP PREVIEW MODAL */}
      {selectedTrip && (
        <TripPreviewModal trip={selectedTrip} onClose={handleCloseModal} />
      )}
    </div>
  );
}
