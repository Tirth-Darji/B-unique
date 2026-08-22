import React from "react";

/**
 * JourneyCard Component
 * Editorial card for public community itineraries.
 */
export function JourneyCard({ journey, onExplore, onCopy, isSaved, onToggleSave }) {
  if (!journey) return null;

  return (
    <div className="group relative rounded-2xl bg-[#0B1620]/90 border border-white/10 hover:border-[#E9C98A]/50 transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col justify-between">
      
      {/* CARD IMAGE CONTAINER */}
      <div 
        className="relative w-full h-52 sm:h-56 overflow-hidden cursor-pointer"
        onClick={() => onExplore && onExplore(journey)}
      >
        <img
          src={journey.image}
          alt={journey.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
        />
        {/* Soft Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1620] via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[10px] font-mono font-bold text-[#E9C98A]">
            {journey.destination}
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave && onToggleSave(journey);
            }}
            className={`pointer-events-auto px-2.5 py-1 rounded-full backdrop-blur-md border text-[11px] font-mono font-bold flex items-center gap-1 transition-all ${
              isSaved
                ? "bg-rose-500/30 border-rose-500 text-rose-300"
                : "bg-black/60 border-white/20 text-white hover:border-rose-400 hover:text-rose-400"
            }`}
          >
            <span>{isSaved ? "❤️" : "♡"}</span>
            <span>{journey.savesCount + (isSaved ? 1 : 0)}</span>
          </button>
        </div>

        {/* Creator Info Overlay */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <img
            src={journey.creator.avatar}
            alt={journey.creator.name}
            className="w-7 h-7 rounded-full border border-[#E9C98A] object-cover shadow-sm"
          />
          <span className="text-xs font-mono font-semibold text-white drop-shadow">
            by {journey.creator.username}
          </span>
        </div>
      </div>

      {/* CARD BODY CONTENT */}
      <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
        
        <div className="space-y-2">
          {/* Route */}
          <div className="text-[11px] font-mono text-[#E9C98A] font-bold tracking-wider uppercase">
            {journey.route}
          </div>

          {/* Title */}
          <h3
            onClick={() => onExplore && onExplore(journey)}
            className="text-lg font-serif font-bold text-white group-hover:text-[#E9C98A] transition-colors leading-snug cursor-pointer"
          >
            {journey.title}
          </h3>

          {/* Stats Line */}
          <div className="text-xs font-mono text-slate-300 flex items-center gap-2 pt-0.5">
            <span>⏱ {journey.duration}</span>
            <span>·</span>
            <span>🏛 {journey.citiesCount} Cities</span>
            <span>·</span>
            <span className="text-[#E9C98A] font-bold">{journey.budget}</span>
          </div>
        </div>

        {/* Style Badges & Copy Action */}
        <div className="space-y-4 pt-2 border-t border-white/10">
          <div className="flex flex-wrap gap-1.5">
            {journey.styles.map((style) => (
              <span
                key={style}
                className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300"
              >
                {style}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => onExplore && onExplore(journey)}
              className="flex-1 py-2 px-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-mono text-xs font-semibold transition-all text-center"
            >
              Explore →
            </button>
            <button
              type="button"
              onClick={() => onCopy && onCopy(journey)}
              className="py-2 px-4 rounded-full bg-[#7FB3A3]/20 hover:bg-[#7FB3A3]/30 border border-[#7FB3A3]/40 text-[#7FB3A3] hover:text-white font-mono text-xs font-bold transition-all flex items-center gap-1.5 shrink-0"
            >
              <span>📋</span>
              <span>Copy</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

/**
 * JourneyGrid Component
 * Section grid rendering 8–12 journeys with varied sizes.
 */
export function JourneyGrid({ journeys, onExplore, onCopy, savedIds, onToggleSave }) {
  return (
    <div className="space-y-6 my-10 sm:my-12">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-[#E9C98A] uppercase tracking-widest block">
            THE TRAVEL ATLAS
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            JOURNEYS WORTH TAKING
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-serif italic text-slate-300">
          Handcrafted travel stories and public itineraries curated by real explorers.
        </p>
      </div>

      {/* Grid Display */}
      {journeys.length === 0 ? (
        <div className="py-12 text-center text-slate-400 font-mono text-sm border border-dashed border-white/10 rounded-2xl bg-white/5">
          No journeys match your selected filter criteria.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {journeys.map((journey) => (
            <JourneyCard
              key={journey.id}
              journey={journey}
              onExplore={onExplore}
              onCopy={onCopy}
              isSaved={savedIds?.has(journey.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      )}
    </div>
  );
}
