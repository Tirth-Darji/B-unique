import React from "react";

/**
 * PublicItineraryModal Component
 * Full-screen read-only travel journal view for public community itineraries.
 */
export function PublicItineraryModal({ journey, onClose, onCopy, isSaved, onToggleSave, onShare }) {
  if (!journey) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      
      <div className="relative w-full max-w-4xl bg-[#0B1620] border border-[#E9C98A]/30 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* TOP BAR / CLOSE & ACTIONS */}
        <div className="sticky top-0 z-30 bg-[#0B1620]/95 border-b border-white/10 px-6 py-4 flex items-center justify-between backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#E9C98A]/20 border border-[#E9C98A] text-[#E9C98A] text-xs font-mono font-bold uppercase">
              READ-ONLY TRAVEL JOURNAL
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              /community/{journey.id}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onShare && onShare(journey)}
              className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-mono font-bold transition-all flex items-center gap-1.5"
            >
              <span>🔗</span>
              <span>Share</span>
            </button>

            <button
              type="button"
              onClick={() => onToggleSave && onToggleSave(journey)}
              className={`px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                isSaved
                  ? "bg-rose-500/20 border-rose-500 text-rose-300"
                  : "bg-white/10 border-white/20 text-white hover:border-rose-400"
              }`}
            >
              <span>{isSaved ? "❤️ Saved" : "♡ Save"}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold transition-all ml-2"
            >
              ✕
            </button>
          </div>
        </div>

        {/* SCROLLABLE JOURNAL BODY */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-10">
          
          {/* JOURNAL HERO HEADER */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0B1620] border border-white/10 min-h-[300px] sm:min-h-[360px] p-6 sm:p-10 flex flex-col justify-end">
            <img
              src={journey.heroImage || journey.image}
              alt={journey.title}
              className="absolute inset-0 w-full h-full object-cover filter brightness-85 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1620] via-[#0B1620]/60 to-transparent" />

            <div className="relative z-10 space-y-4">
              {/* Creator Info */}
              <div className="flex items-center gap-3">
                <img
                  src={journey.creator.avatar}
                  alt={journey.creator.name}
                  className="w-11 h-11 rounded-full border-2 border-[#E9C98A] object-cover shadow-lg"
                />
                <div>
                  <span className="text-xs font-mono text-[#E9C98A] block uppercase font-semibold">
                    Travel Log by {journey.creator.name}
                  </span>
                  <span className="text-sm font-sans font-bold text-white">
                    {journey.creator.username} · {journey.creator.homeCity}
                  </span>
                </div>
              </div>

              {/* Title & Route */}
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#E9C98A] uppercase tracking-wider block">
                  {journey.route}
                </span>
                <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
                  {journey.title}
                </h1>
              </div>

              {/* Metadata Pill Bar */}
              <div className="flex items-center gap-3 text-xs font-mono text-slate-200 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md">
                  ⏱ {journey.duration}
                </span>
                <span className="px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md">
                  🏛 {journey.citiesCount} Cities
                </span>
                <span className="px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[#E9C98A] font-bold">
                  💰 Est. {journey.budget}
                </span>
                <span className="px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[#7FB3A3]">
                  👥 {journey.groupType} · {journey.season}
                </span>
              </div>
            </div>
          </div>

          {/* EDITORIAL QUOTE & SUMMARY */}
          <div className="space-y-4 max-w-3xl">
            <blockquote className="text-lg sm:text-xl font-serif italic text-[#E9C98A] border-l-4 border-[#E9C98A] pl-4 leading-relaxed">
              "{journey.quote}"
            </blockquote>
            <p className="text-sm sm:text-base font-serif text-slate-300 leading-relaxed">
              {journey.description}
            </p>
          </div>

          {/* VERTICAL TRAVEL STORY TIMELINE */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white flex items-center gap-2">
                <span>🗓</span>
                <span>ITINERARY TIMELINE</span>
              </h2>
              <span className="text-xs font-mono text-[#7FB3A3]">
                {journey.timeline.length} Recorded Days
              </span>
            </div>

            <div className="relative border-l-2 border-[#E9C98A]/30 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10 py-2">
              {journey.timeline.map((dayItem, index) => (
                <div key={index} className="relative group">
                  
                  {/* Timeline Dot Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-[#0B1620] border-2 border-[#E9C98A] flex items-center justify-center text-[10px] font-mono font-bold text-[#E9C98A] shadow-lg">
                    {dayItem.day}
                  </div>

                  {/* Day Content Card */}
                  <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 sm:p-6 space-y-4 backdrop-blur-md">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-xs font-mono text-[#E9C98A] font-bold uppercase tracking-wider block">
                          DAY 0{dayItem.day} · {dayItem.location}
                        </span>
                        <h3 className="text-lg sm:text-xl font-serif font-bold text-white mt-0.5">
                          {dayItem.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                        <span>⏰ {dayItem.timing}</span>
                        {dayItem.cost && (
                          <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold">
                            {dayItem.cost}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Day Photo if available */}
                    {dayItem.image && (
                      <div className="w-full h-44 sm:h-52 rounded-xl overflow-hidden border border-white/10">
                        <img
                          src={dayItem.image}
                          alt={dayItem.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    {/* Activities Bullet Points */}
                    <div className="space-y-2">
                      <span className="text-xs font-mono text-[#7FB3A3] font-bold uppercase tracking-wide block">
                        Activities & Stops:
                      </span>
                      <ul className="space-y-1.5 text-xs sm:text-sm font-sans text-slate-200">
                        {dayItem.activities.map((act, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#E9C98A] font-bold">✦</span>
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Traveler's Personal Note */}
                    {dayItem.notes && (
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-serif italic text-slate-300">
                        💡 <strong>Traveler Note:</strong> "{dayItem.notes}"
                      </div>
                    )}

                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM FIXED CTA ACTION BAR */}
        <div className="sticky bottom-0 z-30 bg-[#0B1620]/95 border-t border-white/10 px-6 py-4 flex items-center justify-between backdrop-blur-md">
          <div>
            <span className="text-xs font-mono text-slate-400 block">
              Inspired by {journey.creator.username}'s journey?
            </span>
            <span className="text-sm font-serif font-bold text-white">
              Copy this itinerary into your planner to customize it.
            </span>
          </div>

          <button
            type="button"
            onClick={() => onCopy && onCopy(journey)}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#E9C98A] to-[#D9A857] hover:from-[#f3d9a2] hover:to-[#e9ba6f] text-[#0B1620] font-sans font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span>📋</span>
            <span>COPY THIS TRIP</span>
          </button>
        </div>

      </div>

    </div>
  );
}
