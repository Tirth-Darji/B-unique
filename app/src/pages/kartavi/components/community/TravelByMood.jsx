import React from "react";
import { TRAVEL_MOODS } from "../../communityData";

/**
 * TravelByMood Component
 * Signature Feature rendering visual mood cards with circular photo badges.
 */
export function TravelByMood({ selectedMood, onSelectMood }) {
  return (
    <div className="space-y-6 my-12 sm:my-16">
      
      {/* SECTION HEADER */}
      <div className="space-y-2 max-w-2xl">
        <span className="text-xs font-mono font-bold text-[#7FB3A3] uppercase tracking-widest block">
          SIGNATURE EXPERIENCE
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
          TRAVEL BY MOOD
        </h2>
        <p className="text-sm sm:text-base font-serif italic text-slate-300 leading-relaxed">
          "You don't always know where you want to go. Sometimes you only know how you want the journey to feel."
        </p>
      </div>

      {/* MOOD CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        
        {/* ALL MOODS RESET PILL CARD */}
        <div
          onClick={() => onSelectMood("all")}
          className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex items-center justify-between shadow-lg ${
            selectedMood === "all"
              ? "bg-[#E9C98A] border-[#E9C98A] text-[#0B1620]"
              : "bg-[#0B1620]/80 border-white/10 hover:border-white/30 text-white"
          }`}
        >
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider block opacity-70">
              ✦ EXPLORE ALL
            </span>
            <span className="text-base font-serif font-bold block mt-1">
              All Travel Moods
            </span>
          </div>
          <span className="text-xl">🗺️</span>
        </div>

        {/* 7 SIGNATURE MOOD CARDS */}
        {TRAVEL_MOODS.map((mood) => {
          const isSelected = selectedMood === mood.category;

          return (
            <div
              key={mood.id}
              onClick={() => onSelectMood(mood.category)}
              className={`group relative cursor-pointer rounded-2xl p-5 border overflow-hidden transition-all duration-300 shadow-xl flex items-center justify-between ${
                isSelected
                  ? `bg-gradient-to-r ${mood.color} border-[#E9C98A] ring-2 ring-[#E9C98A]/50`
                  : `bg-[#0B1620]/80 ${mood.border} hover:border-[#E9C98A]/50 hover:bg-white/5`
              }`}
            >
              {/* CONTENT */}
              <div className="space-y-1 z-10 max-w-[65%]">
                <h3 className="text-sm font-serif font-bold text-white group-hover:text-[#E9C98A] transition-colors leading-tight">
                  {mood.title}
                </h3>
                <p className="text-[11px] font-mono text-slate-300 leading-snug">
                  {mood.subtitle}
                </p>
              </div>

              {/* CIRCULAR PHOTO BADGE (Connecting to Discovery Visual Language) */}
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-[#E9C98A] shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <img
                  src={mood.image}
                  alt={mood.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
