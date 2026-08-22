import React from "react";
import { COMMUNITY_JOURNEYS } from "../../communityData";

/**
 * TravelerPassportModal Component
 * Public Passport profile preview modal for community creators.
 */
export function TravelerPassportModal({ traveler, onClose, onExploreJourney }) {
  if (!traveler) return null;

  // Get public journeys created by this traveler
  const travelerJourneys = COMMUNITY_JOURNEYS.filter(
    (j) => j.creator.username === traveler.username
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0B1620] border border-[#E9C98A]/40 rounded-3xl shadow-2xl overflow-hidden my-auto p-6 sm:p-8 space-y-6">
        
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold transition-all"
        >
          ✕
        </button>

        {/* PASSPORT HEADER */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 border-b border-white/10 pb-6 text-center sm:text-left">
          <img
            src={traveler.avatar}
            alt={traveler.name}
            className="w-20 h-20 rounded-full border-2 border-[#E9C98A] object-cover shadow-xl shrink-0"
          />

          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#E9C98A]/20 border border-[#E9C98A] text-[#E9C98A] text-[11px] font-mono font-bold uppercase">
              <span>🛂 GLOBETROTTER PASSPORT</span>
            </div>

            <h2 className="text-2xl font-serif font-bold text-white">
              {traveler.name}
            </h2>

            <div className="text-xs font-mono text-[#E9C98A]">
              {traveler.username} · 📍 {traveler.homeCity}
            </div>

            <p className="text-xs font-serif italic text-slate-300 max-w-md pt-1">
              "{traveler.bio}"
            </p>
          </div>
        </div>

        {/* STATS & STAMPS ROW */}
        <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-center font-mono">
          <div>
            <span className="text-[10px] text-slate-400 block uppercase">Public Journeys</span>
            <span className="text-lg font-bold text-white">{traveler.journeysCount}</span>
          </div>
          <div>
            <span className="text-[10px] text-[#E9C98A] block uppercase">Countries Explored</span>
            <span className="text-lg font-bold text-[#E9C98A]">{traveler.countriesCount}</span>
          </div>
        </div>

        {/* PASSPORT STAMPS */}
        <div className="space-y-2">
          <span className="text-xs font-mono text-[#7FB3A3] font-bold uppercase tracking-wider block">
            Passport Stamps & Visas:
          </span>
          <div className="flex flex-wrap gap-2">
            {traveler.stamps.map((stamp, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs font-mono text-white shadow-sm"
              >
                {stamp}
              </span>
            ))}
          </div>
        </div>

        {/* CREATOR'S PUBLIC JOURNEYS LIST */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-mono text-[#E9C98A] font-bold uppercase tracking-wider block">
            Published Journeys ({travelerJourneys.length}):
          </span>

          <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
            {travelerJourneys.map((j) => (
              <div
                key={j.id}
                onClick={() => {
                  onClose();
                  onExploreJourney(j);
                }}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#E9C98A]/50 transition-all cursor-pointer flex items-center justify-between"
              >
                <div>
                  <h4 className="text-sm font-serif font-bold text-white">
                    {j.title}
                  </h4>
                  <span className="text-[11px] font-mono text-[#E9C98A]">
                    {j.duration} · {j.citiesCount} Cities · {j.budget}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-300">Explore →</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
