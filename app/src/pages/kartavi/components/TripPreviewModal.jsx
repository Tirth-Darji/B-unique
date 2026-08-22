import { useEffect } from "react";

/**
 * TripPreviewModal Component
 * Full detailed preview modal / mobile bottom sheet for a selected trip.
 * Includes destination hero image, status badge, key metrics grid,
 * day-by-day itinerary timeline, and action buttons.
 */
export function TripPreviewModal({ trip, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    // Lock background scroll while modal is open
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!trip) return null;

  const statusColors = {
    ongoing: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    upcoming: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    completed: "bg-slate-500/20 text-slate-300 border-slate-500/30",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-trip-title"
    >
      <div
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-slate-100 transform transition-all duration-300 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HERO IMAGE BANNER */}
        <div className="relative h-64 sm:h-80 w-full shrink-0 overflow-hidden bg-slate-950">
          <img
            src={trip.image}
            alt={`${trip.destination}, ${trip.country}`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Close X Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-slate-900 border border-white/20 text-slate-200 hover:text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg z-10"
            aria-label="Close trip preview modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Destination Header Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-md ${
                  statusColors[trip.status] || statusColors.upcoming
                }`}
              >
                {trip.status}
              </span>
              <span className="text-xs text-slate-300 bg-slate-950/60 border border-slate-700/60 px-3 py-1 rounded-full backdrop-blur-md">
                {trip.startDate} – {trip.endDate}
              </span>
            </div>
            <h2 id="modal-trip-title" className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
              {trip.destination}
            </h2>
            <p className="text-teal-400 font-medium text-sm sm:text-base uppercase tracking-wider mt-0.5">
              {trip.country}
            </p>
          </div>
        </div>

        {/* MODAL BODY CONTENT */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 scrollbar-none">
          {/* Full Summary / Description */}
          <div>
            <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
              Expedition Overview
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {trip.description}
            </p>
          </div>

          {/* KEY DETAILS GRID */}
          <div>
            <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">
              Key Trip Specs
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {/* Duration */}
              <div className="bg-slate-800/50 border border-slate-700/60 p-3.5 rounded-2xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth={2} />
                    <polyline points="12 6 12 12 16 14" strokeWidth={2} />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">Duration</span>
                  <span className="text-sm font-semibold text-slate-100">{trip.details?.duration || "7 Days"}</span>
                </div>
              </div>

              {/* Travelers */}
              <div className="bg-slate-800/50 border border-slate-700/60 p-3.5 rounded-2xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">Travelers</span>
                  <span className="text-sm font-semibold text-slate-100">{trip.details?.travelers || "2 Guests"}</span>
                </div>
              </div>

              {/* Budget */}
              <div className="bg-slate-800/50 border border-slate-700/60 p-3.5 rounded-2xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">Budget</span>
                  <span className="text-sm font-semibold text-teal-300">{trip.details?.budget || "₹75,000"}</span>
                </div>
              </div>

              {/* Accommodation */}
              <div className="bg-slate-800/50 border border-slate-700/60 p-3.5 rounded-2xl flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="truncate">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">Accommodation</span>
                  <span className="text-xs font-semibold text-slate-100 truncate block">{trip.details?.accommodation || "Boutique Resort"}</span>
                </div>
              </div>

              {/* Transport */}
              <div className="bg-slate-800/50 border border-slate-700/60 p-3.5 rounded-2xl flex items-center gap-3 col-span-2 sm:col-span-2">
                <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">Transport Mode</span>
                  <span className="text-xs font-semibold text-slate-100">{trip.details?.transport || "Flight + Private Vehicle"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* DAY-BY-DAY ITINERARY TIMELINE LIST */}
          {trip.itinerary && trip.itinerary.length > 0 && (
            <div>
              <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">
                Itinerary Highlights Timeline
              </h4>
              <div className="space-y-3 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-800">
                {trip.itinerary.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-4 pl-8 group">
                    <div className="absolute left-2.5 top-1.5 w-2.5 h-2.5 rounded-full bg-teal-400 ring-4 ring-slate-900 group-hover:bg-teal-300 transition-colors" />
                    <div className="bg-slate-800/40 border border-slate-800 p-3.5 rounded-2xl w-full hover:border-slate-700 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-teal-400 uppercase">{step.day}</span>
                        <span className="text-[11px] font-medium text-slate-200">{step.title}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* MODAL FOOTER ACTIONS */}
        <div className="p-4 sm:p-6 bg-slate-950/80 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
          >
            Close
          </button>
          
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => alert(`Editing itinerary draft for ${trip.destination}...`)}
              className="px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold transition-colors"
            >
              Edit Trip
            </button>
            <button
              type="button"
              onClick={() => {
                alert(`Opening full planner module for ${trip.destination}...`);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-slate-950 text-xs font-bold shadow-lg shadow-teal-500/20 transition-all"
            >
              View Full Itinerary →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
