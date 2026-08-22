import React from "react";

/**
 * FeaturedJourney Component
 * Premium magazine-cover style card showcasing the highlighted trip.
 */
export function FeaturedJourney({ journey, onExplore, onCopy, isSaved, onToggleSave }) {
  if (!journey) return null;

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-[#0B1620] border border-[#E9C98A]/30 shadow-2xl transition-all duration-300 my-8 sm:my-10 group">
      
      {/* BACKGROUND IMAGE DOMINANCE WITH DUSK OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img
          src={journey.heroImage || journey.image}
          alt={journey.title}
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Soft Dark Vignette & Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1620] via-[#0B1620]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1620]/90 via-[#0B1620]/50 to-transparent" />
      </div>

      {/* CONTENT LAYOUT */}
      <div className="relative z-10 p-6 sm:p-10 lg:p-12 min-h-[460px] sm:min-h-[520px] flex flex-col justify-between">
        
        {/* TOP METADATA & FEATURED BADGE */}
        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E9C98A] text-[#0B1620] text-xs font-mono font-bold uppercase tracking-wider shadow-lg">
            <span>✦</span>
            <span>FEATURED JOURNEY</span>
          </div>

          {/* Heart Save Button */}
          <button
            type="button"
            onClick={() => onToggleSave && onToggleSave(journey)}
            className={`p-3 rounded-full backdrop-blur-md border transition-all flex items-center gap-1.5 text-xs font-mono font-bold ${
              isSaved
                ? "bg-rose-500/20 border-rose-500 text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.3)]"
                : "bg-black/40 border-white/20 text-white hover:border-rose-400 hover:text-rose-400"
            }`}
          >
            <span className="text-sm">{isSaved ? "❤️" : "♡"}</span>
            <span>{journey.savesCount + (isSaved ? 1 : 0)}</span>
          </button>
        </div>

        {/* BOTTOM COVER STORY & ACTIONS */}
        <div className="space-y-6 max-w-2xl pt-12 sm:pt-16">
          
          {/* Creator Info */}
          <div className="flex items-center gap-3">
            <img
              src={journey.creator.avatar}
              alt={journey.creator.name}
              className="w-10 h-10 rounded-full border-2 border-[#E9C98A] object-cover shadow-md"
            />
            <div>
              <span className="text-xs font-mono text-[#E9C98A] uppercase tracking-wide block">
                Curated by
              </span>
              <span className="text-sm font-sans font-bold text-white drop-shadow">
                {journey.creator.name} <span className="text-[#7FB3A3] font-mono font-normal">({journey.creator.username})</span>
              </span>
            </div>
          </div>

          {/* Title & Route */}
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-none drop-shadow-xl">
              {journey.title}
            </h2>
            <p className="text-sm sm:text-base font-mono text-[#E9C98A] font-semibold tracking-wide">
              {journey.route}
            </p>
          </div>

          {/* Emotional Quote */}
          <blockquote className="text-sm sm:text-lg font-serif italic text-slate-200/95 leading-relaxed border-l-2 border-[#E9C98A] pl-4">
            "{journey.quote}"
          </blockquote>

          {/* Key Stats Pill Bar */}
          <div className="flex items-center gap-3 text-xs sm:text-sm font-mono text-slate-200 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
              ⏱ {journey.duration}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
              🏛 {journey.citiesCount} Cities
            </span>
            <span className="px-3 py-1 rounded-full bg-[#E9C98A]/20 border border-[#E9C98A]/40 text-[#E9C98A] font-bold backdrop-blur-md">
              💰 Est. {journey.budget}
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 sm:gap-4 pt-2 flex-wrap">
            <button
              type="button"
              onClick={() => onExplore && onExplore(journey)}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#E9C98A] to-[#D9A857] hover:from-[#f3d9a2] hover:to-[#e9ba6f] text-[#0B1620] font-sans font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              Explore Journey →
            </button>

            <button
              type="button"
              onClick={() => onCopy && onCopy(journey)}
              className="px-6 py-3 rounded-full bg-[#0B1620]/90 hover:bg-[#0B1620] border border-[#7FB3A3] text-[#7FB3A3] hover:text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>📋</span>
              <span>Copy Trip</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
