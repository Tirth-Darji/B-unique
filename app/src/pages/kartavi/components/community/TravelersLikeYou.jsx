import React from "react";
import { TRAVELERS } from "../../communityData";

/**
 * TravelersLikeYou Component
 * Connects Community with Passport by presenting creator passport cards.
 */
export function TravelersLikeYou({ onSelectTraveler }) {
  return (
    <div className="space-y-6 my-12 sm:my-16">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-[#E9C98A] uppercase tracking-widest block">
            PASSPORT COMMUNITY
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            TRAVELERS LIKE YOU
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-serif italic text-slate-300">
          Discover inspired trip creators, travel writers, and passport holders.
        </p>
      </div>

      {/* TRAVELERS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {TRAVELERS.map((traveler) => (
          <div
            key={traveler.id}
            onClick={() => onSelectTraveler && onSelectTraveler(traveler)}
            className="group relative cursor-pointer rounded-2xl bg-[#0B1620]/90 border border-white/10 hover:border-[#E9C98A]/50 p-5 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* PASSPORT MOTIF ACCENT PATTERN BACKGROUND */}
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none font-serif text-6xl text-[#E9C98A]">
              🛂
            </div>

            {/* TOP CREATOR PROFILE */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={traveler.avatar}
                    alt={traveler.name}
                    className="w-14 h-14 rounded-full border-2 border-[#E9C98A] object-cover shadow-md group-hover:scale-105 transition-transform"
                  />
                  {traveler.isVerified && (
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#7FB3A3] text-[#0B1620] font-bold text-[10px] flex items-center justify-center border border-[#0B1620]" title="Verified Explorer">
                      ✓
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-base font-serif font-bold text-white group-hover:text-[#E9C98A] transition-colors leading-tight">
                    {traveler.name}
                  </h3>
                  <span className="text-xs font-mono text-[#E9C98A] block">
                    {traveler.username}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 block">
                    📍 {traveler.homeCity}
                  </span>
                </div>
              </div>

              {/* Style Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono font-bold text-slate-300 tracking-wider">
                {traveler.style}
              </div>

              {/* Bio snippet */}
              <p className="text-xs font-serif italic text-slate-300/90 line-clamp-2 leading-relaxed">
                "{traveler.bio}"
              </p>
            </div>

            {/* PASSPORT STAMPS BAR & STATS */}
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <span>📖 <strong className="text-white">{traveler.journeysCount}</strong> Journeys</span>
                <span>·</span>
                <span>🌍 <strong className="text-[#E9C98A]">{traveler.countriesCount}</strong> Countries</span>
              </div>

              <span className="text-xs font-mono text-[#E9C98A] group-hover:translate-x-1 transition-transform">
                Passport →
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
