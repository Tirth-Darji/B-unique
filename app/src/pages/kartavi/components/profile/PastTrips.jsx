import { PastTripCard } from "./PastTripCard.jsx";

/**
 * PastTrips Component
 * Renders the section of completed trips on the Right Passport page.
 */
export function PastTrips({ trips, onEditTrip, highlightedTripId }) {
  const completedTrips = trips.filter((t) => t.status === "completed");

  return (
    <div className="space-y-3 lg:space-y-4 pt-2 lg:pt-3">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-amber-900/20 pb-2 lg:pb-3">
        <h3 className="text-xs lg:text-sm xl:text-base font-bold uppercase tracking-widest text-amber-900/80 font-mono">
          ✦ PAST EXPEDITIONS ARCHIVE
        </h3>
        <span className="text-[10px] lg:text-xs font-mono text-amber-900/60">
          {completedTrips.length} RECORDED
        </span>
      </div>

      {/* TRIP CARDS LIST */}
      <div className="space-y-3 lg:space-y-4 max-h-[340px] md:max-h-[420px] lg:max-h-[500px] xl:max-h-[560px] overflow-y-auto pr-1 scrollbar-none">
        {completedTrips.length > 0 ? (
          completedTrips.map((trip) => (
            <PastTripCard
              key={trip.id}
              trip={trip}
              onEditTrip={onEditTrip}
              isHighlighted={highlightedTripId === trip.id}
            />
          ))
        ) : (
          <div className="p-6 text-center text-slate-500 font-light text-xs bg-amber-900/5 rounded-2xl border border-amber-900/10">
            No past expeditions logged yet in your passport history.
          </div>
        )}
      </div>
    </div>
  );
}
