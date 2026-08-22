import { useState } from "react";
import { TripCardBack } from "./TripCardBack.jsx";

/**
 * TripCard Component
 * Modern cinematic image-forward card with 3D CSS flip behavior.
 * Front face: High-res destination photo, gradient text overlay, smooth zoom & lift.
 * Back face: TripCardBack component revealing trip specs & "Visit Trip" action button.
 */
export function TripCard({ trip, onViewTrip }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);

  const handleToggleFlip = (e) => {
    // Prevent flip if clicking directly on action buttons
    if (e.target.closest("button") || e.target.closest("a")) return;
    setIsFlipped((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      if (e.target.closest("button")) return;
      e.preventDefault();
      setIsFlipped((prev) => !prev);
    }
  };

  return (
    <div
      className="group relative w-[300px] sm:w-[340px] h-[440px] perspective-1000 cursor-pointer select-none"
      onClick={handleToggleFlip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label={`Trip card for ${trip.destination}, ${trip.country}`}
    >
      <div
        className={`w-full h-full duration-700 transform-style-3d transition-transform ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-slate-800/80 bg-slate-900 shadow-xl transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:shadow-teal-950/40 group-hover:border-teal-500/40 backface-hidden">
          {/* Destination Image */}
          <img
            src={trip.image}
            alt={`${trip.destination}, ${trip.country}`}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
          />

          {/* Dark Gradient Overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 transition-opacity duration-300" />

          {/* Flip Info Badge Top-Right */}
          <div className="absolute top-4 right-4 backdrop-blur-md bg-slate-950/60 border border-white/10 px-3 py-1.5 rounded-full text-[11px] font-medium text-slate-200 flex items-center gap-1.5 shadow-lg group-hover:bg-teal-500/20 group-hover:border-teal-400/40 transition-colors">
            <svg
              className="w-3.5 h-3.5 text-teal-400"
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
            <span>Flip info</span>
          </div>

          {/* Status Badge Top-Left */}
          <div className="absolute top-4 left-4 backdrop-blur-md bg-slate-950/50 border border-slate-700/60 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider text-teal-300">
            {trip.status}
          </div>

          {/* Front Bottom Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
            <span className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-1 block">
              {trip.country}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight leading-tight group-hover:text-teal-100 transition-colors">
              {trip.destination}
            </h3>
            <p className="text-xs text-slate-300/80 mt-1 line-clamp-1">
              {trip.startDate} • {trip.details?.duration || "7 Days"}
            </p>
          </div>
        </div>

        {/* BACK SIDE */}
        <TripCardBack
          trip={trip}
          onViewTrip={onViewTrip}
          onFlipBack={() => setIsFlipped(false)}
        />
      </div>
    </div>
  );
}
