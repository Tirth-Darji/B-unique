import React from "react";

/**
 * CommunitySearchFilters Component
 * Glassmorphic search input and elegant filter pills for community itineraries.
 */
export function CommunitySearchFilters({
  searchTerm,
  onSearchChange,
  destinationFilter,
  onDestinationChange,
  budgetFilter,
  onBudgetChange,
  styleFilter,
  onStyleChange,
  sortBy,
  onSortChange,
  totalResults
}) {
  const destinations = ["All", "Japan", "Indonesia", "India", "Turkey", "Switzerland", "Italy", "Iceland", "Morocco", "Greece"];
  const budgetCategories = ["All", "budget", "mid", "luxury"];
  const travelStyles = ["All", "FOOD", "CULTURE", "BEACH", "ADVENTURE", "NATURE", "SLOW TRAVEL"];

  return (
    <div className="space-y-4 my-8 p-5 rounded-2xl bg-[#0B1620]/80 border border-white/10 backdrop-blur-md shadow-xl">
      
      {/* TOP SEARCH INPUT & SORT ROW */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Search Box */}
        <div className="relative w-full sm:max-w-md">
          <div className="relative flex items-center bg-white/[0.08] hover:bg-white/[0.12] border border-white/20 focus-within:border-[#E9C98A] rounded-full p-1.5 pl-4 transition-all shadow-inner">
            <svg
              className="w-4 h-4 text-[#E9C98A] shrink-0 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search journeys, cities, moods..."
              className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none font-sans"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="px-2.5 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Sort & Count */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end text-xs font-mono">
          <span className="text-slate-400">
            Found <strong className="text-[#E9C98A]">{totalResults}</strong> journeys
          </span>

          <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
            <span className="text-slate-400">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-transparent text-[#E9C98A] font-bold focus:outline-none cursor-pointer"
            >
              <option value="popular" className="bg-[#0B1620] text-white">Popularity (Most Saved)</option>
              <option value="recent" className="bg-[#0B1620] text-white">Recent Journeys</option>
              <option value="duration" className="bg-[#0B1620] text-white">Duration</option>
            </select>
          </div>
        </div>

      </div>

      {/* FILTER PILLS ROWS */}
      <div className="space-y-3 pt-3 border-t border-white/10 text-xs font-mono">
        
        {/* Destination Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[10px] text-[#E9C98A] uppercase shrink-0 font-bold">Destination:</span>
          {destinations.map((dest) => (
            <button
              key={dest}
              type="button"
              onClick={() => onDestinationChange(dest)}
              className={`px-3 py-1 rounded-full text-[11px] shrink-0 transition-all ${
                destinationFilter === dest
                  ? "bg-[#E9C98A] text-[#0B1620] font-bold shadow-md"
                  : "bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {dest}
            </button>
          ))}
        </div>

        {/* Travel Style Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[10px] text-[#7FB3A3] uppercase shrink-0 font-bold">Style:</span>
          {travelStyles.map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => onStyleChange(st)}
              className={`px-3 py-1 rounded-full text-[11px] shrink-0 transition-all ${
                styleFilter === st
                  ? "bg-[#7FB3A3] text-[#0B1620] font-bold shadow-md"
                  : "bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Budget Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[10px] text-amber-300 uppercase shrink-0 font-bold">Budget:</span>
          {budgetCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onBudgetChange(cat)}
              className={`px-3 py-1 rounded-full text-[11px] uppercase shrink-0 transition-all ${
                budgetFilter === cat
                  ? "bg-amber-400 text-[#0B1620] font-bold shadow-md"
                  : "bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

    </div>
  );
}
