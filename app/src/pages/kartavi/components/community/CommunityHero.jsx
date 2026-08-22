import React from "react";

/**
 * CommunityHero Component
 * Editorial Hero Section communicating "THE WORLD, AS TOLD BY TRAVELERS".
 */
export function CommunityHero() {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-[#0B1620] border border-white/10 shadow-2xl my-4 sm:my-6">
      {/* BACKGROUND IMAGE WITH DUSK OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1476514525535-ce74f45814e3?auto=format&fit=crop&w=2000&q=85"
          alt="World Traveler Landscape"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
        />
        {/* Editorial Dark Gradient & Radial Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1620]/95 via-[#0B1620]/75 to-[#0B1620]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1620] via-transparent to-[#0B1620]/40" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-4xl px-6 sm:px-12 py-16 sm:py-20 lg:py-24 space-y-6">
        
        {/* Atlas Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1620]/80 border border-[#E9C98A]/30 text-[#E9C98A] text-xs font-mono font-semibold uppercase tracking-widest backdrop-blur-md shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#E9C98A] animate-ping" />
          <span>GlobeTrotter Community · The Travel Atlas</span>
        </div>

        {/* Main Heading */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-2xl">
            THE WORLD, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E9C98A] via-[#FCD34D] to-[#7FB3A3]">
              AS TOLD BY TRAVELERS
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-200/90 font-serif italic max-w-xl leading-relaxed drop-shadow">
            Discover journeys worth taking — handpicked itineraries, quiet corners, and personal travel stories shared by fellow explorers.
          </p>
        </div>

        {/* Philosophy Pill Quote */}
        <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-300/80">
          <span className="px-3 py-1 rounded-md bg-white/10 border border-white/15 backdrop-blur-md">
            📖 "Someone else's journey could become the beginning of yours."
          </span>
        </div>
      </div>
    </div>
  );
}
