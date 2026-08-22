/**
 * TripCardBack Component
 * Renders the reverse face of the 3D flip card.
 * Features dark solid navy/charcoal background, destination details,
 * date range, 1-2 line summary, and a styled "Visit Trip" pill button.
 */
export function TripCardBack({ trip, onViewTrip, onFlipBack }) {
  return (
    <div className="absolute inset-0 w-full h-full bg-slate-900/95 border border-slate-700/60 rounded-3xl p-6 flex flex-col justify-between backdrop-blur-xl shadow-2xl text-slate-100 rotate-y-180 backface-hidden z-10">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <span className="text-xs uppercase font-semibold tracking-wider text-teal-400 block mb-1">
              {trip.country}
            </span>
            <h3 className="text-xl font-bold font-serif text-white leading-tight">
              {trip.destination}
            </h3>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onFlipBack();
            }}
            className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-sm"
            title="Flip to photo"
            aria-label="Flip back to front photo"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>

        {/* Date pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/50 text-xs text-slate-300 mb-4">
          <svg className="w-3.5 h-3.5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={2} />
            <line x1="16" y1="2" x2="16" y2="6" strokeWidth={2} />
            <line x1="8" y1="2" x2="8" y2="6" strokeWidth={2} />
            <line x1="3" y1="10" x2="21" y2="10" strokeWidth={2} />
          </svg>
          <span>{trip.startDate} – {trip.endDate}</span>
        </div>

        {/* Short Summary */}
        <p className="text-sm text-slate-300/90 line-clamp-3 leading-relaxed font-light mb-4">
          {trip.summary || trip.description}
        </p>
      </div>

      {/* Meta + Visit Trip Button */}
      <div className="space-y-4 pt-2 border-t border-slate-800">
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-slate-800/40 p-2.5 rounded-xl border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Duration</span>
            <span className="text-slate-100 font-medium">{trip.details?.duration || "7 Days"}</span>
          </div>
          <div className="bg-slate-800/40 p-2.5 rounded-xl border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Budget</span>
            <span className="text-teal-300 font-medium">{trip.details?.budget || "₹65,000"}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onViewTrip(trip);
          }}
          className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-teal-400 via-teal-500 to-emerald-500 hover:from-teal-300 hover:to-emerald-400 text-slate-950 font-semibold text-sm transition-all duration-300 shadow-lg shadow-teal-500/20 hover:shadow-teal-400/30 flex items-center justify-center gap-2 group/btn"
        >
          <span>Visit Trip</span>
          <svg
            className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
