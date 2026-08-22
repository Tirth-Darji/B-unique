import { useRef, useState, useEffect, useCallback } from "react";
import { TripCard } from "./TripCard.jsx";

/**
 * TripCarousel Component
 * Horizontally scrollable card carousel with scroll snap.
 * Features semi-transparent circular arrow controls with smooth bounds checking.
 */
export function TripCarousel({ trips, onViewTrip, sectionTitle }) {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    checkScrollState();
    el.addEventListener("scroll", checkScrollState, { passive: true });
    window.addEventListener("resize", checkScrollState);

    return () => {
      el.removeEventListener("scroll", checkScrollState);
      window.removeEventListener("resize", checkScrollState);
    };
  }, [trips, checkScrollState]);

  const scroll = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const scrollAmount = direction === "left" ? -360 : 360;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full space-y-4">
      {/* Hint + Controls Row */}
      <div className="flex items-center justify-between px-2 text-xs text-slate-400">
        <span className="flex items-center gap-1.5 font-light">
          <svg className="w-3.5 h-3.5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth={2} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16v-4m0-4h.01" />
          </svg>
          Hover or tap any card to flip and view details
        </span>

        {/* Circular Arrow Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 disabled:opacity-30 border border-slate-700/60 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-md active:scale-95"
            aria-label={`Scroll ${sectionTitle} carousel left`}
            title="Previous trips"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 disabled:opacity-30 border border-slate-700/60 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-md active:scale-95"
            aria-label={`Scroll ${sectionTitle} carousel right`}
            title="Next trips"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-2"
        role="region"
        aria-label={`${sectionTitle} carousel`}
        tabIndex={0}
      >
        {trips.map((trip) => (
          <div key={trip.id} className="snap-start shrink-0">
            <TripCard trip={trip} onViewTrip={onViewTrip} />
          </div>
        ))}
      </div>
    </div>
  );
}
