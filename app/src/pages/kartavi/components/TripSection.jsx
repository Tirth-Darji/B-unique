import { SectionHeader } from "./SectionHeader.jsx";
import { TripCarousel } from "./TripCarousel.jsx";

/**
 * TripSection Component
 * Represents one glassmorphic accordion section (Ongoing, Upcoming, or Completed).
 * Expands smoothly into active carousel or presents a dark empty state card.
 */
export function TripSection({
  meta,
  trips,
  isExpanded,
  onToggle,
  onViewTrip,
  onEmptyAction,
}) {
  const hasTrips = trips && trips.length > 0;

  return (
    <section className="w-full transition-all duration-300" aria-labelledby={`section-header-${meta.id}`}>
      <SectionHeader
        sectionId={meta.id}
        title={meta.title}
        subtitle={meta.subtitle}
        count={trips.length}
        isExpanded={isExpanded}
        onToggle={onToggle}
      />

      {/* Accordion Body with Smooth Expand Physics */}
      <div
        id={`section-content-${meta.id}`}
        className={`grid transition-all duration-500 ease-in-out ${
          isExpanded ? "grid-rows-[1fr] opacity-100 mt-4 mb-8" : "grid-rows-[0fr] opacity-0 overflow-hidden"
        }`}
        role="region"
        aria-hidden={!isExpanded}
      >
        <div className="overflow-hidden">
          {hasTrips ? (
            <TripCarousel
              trips={trips}
              onViewTrip={onViewTrip}
              sectionTitle={meta.title}
            />
          ) : (
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center justify-center space-y-4 backdrop-blur-xl">
              <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3" />
                </svg>
              </div>
              <div className="max-w-md">
                <h3 className="text-lg font-semibold text-white mb-1 font-sans">
                  {meta.emptyTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                  {meta.emptySubtext}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onEmptyAction && onEmptyAction(meta.id)}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-950 text-xs font-bold shadow-lg shadow-teal-500/20 hover:from-teal-300 hover:to-emerald-300 transition-all flex items-center gap-2"
              >
                <span>{meta.emptyAction}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
