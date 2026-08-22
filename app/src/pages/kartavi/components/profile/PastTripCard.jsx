/**
 * PastTripCard Component
 * Displays a completed past expedition inside the passport travel history section.
 * Includes trip photo, details, highlights, and an Edit action button.
 */
export function PastTripCard({ trip, onEditTrip, isHighlighted }) {
  return (
    <div
      className={`group relative bg-white/80 hover:bg-white border rounded-2xl p-3.5 sm:p-4 lg:p-5 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 items-start sm:items-center ${
        isHighlighted
          ? "border-amber-600 ring-2 ring-amber-500/30 bg-amber-50/80"
          : "border-amber-900/20 hover:border-amber-900/40"
      }`}
    >
      {/* Trip Photo */}
      <div className="w-full sm:w-24 lg:w-32 xl:w-36 h-24 sm:h-20 lg:h-24 xl:h-28 rounded-xl overflow-hidden shrink-0 border border-amber-900/20 bg-slate-200">
        <img
          src={trip.image}
          alt={trip.destination}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Trip Info */}
      <div className="flex-1 space-y-1 lg:space-y-1.5 w-full text-xs lg:text-sm font-sans">
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-[9px] lg:text-[11px] uppercase font-bold text-amber-800 tracking-wider block">
              {trip.country}
            </span>
            <h4 className="text-sm lg:text-base xl:text-lg font-bold font-serif text-slate-900 leading-tight">
              {trip.destination || trip.name}
            </h4>
          </div>
          <button
            type="button"
            onClick={() => onEditTrip(trip)}
            className="px-3 py-1 lg:px-3.5 lg:py-1.5 rounded-full bg-amber-900/10 hover:bg-amber-900/20 text-amber-950 font-semibold text-[11px] lg:text-xs transition-colors flex items-center gap-1 shrink-0"
            title="Edit trip details"
          >
            <svg className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Edit
          </button>
        </div>

        <div className="flex items-center gap-2 text-[11px] lg:text-xs text-slate-600 flex-wrap">
          <span>{trip.startDate} – {trip.endDate}</span>
          <span>•</span>
          <span className="font-medium text-slate-900">{trip.details?.duration || trip.duration || "7 Days"}</span>
          <span>•</span>
          <span className="font-semibold text-amber-900">{trip.details?.budget || trip.budget || "₹65,000"}</span>
        </div>

        <p className="text-[11px] lg:text-xs text-slate-600 line-clamp-1 font-light leading-relaxed">
          {trip.description}
        </p>

        {/* Highlights tags */}
        {trip.highlights && trip.highlights.length > 0 && (
          <div className="flex items-center gap-1 pt-1 flex-wrap">
            {trip.highlights.slice(0, 3).map((h, i) => (
              <span key={i} className="text-[9px] lg:text-[10px] px-2 py-0.5 lg:px-2.5 lg:py-1 rounded-full bg-amber-900/5 text-amber-900 font-medium">
                ✦ {h}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
