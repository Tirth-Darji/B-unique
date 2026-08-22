import { TravelStamp } from "./TravelStamp.jsx";

/**
 * TravelStamps Component
 * Renders decorative, overlapping passport stamps on the travel history page.
 */
export function TravelStamps({ stamps, onSelectTrip }) {
  return (
    <div className="space-y-3 lg:space-y-4">
      {/* Title Banner */}
      <div className="flex items-center justify-between border-b border-amber-900/20 pb-2 lg:pb-3">
        <h3 className="text-xs lg:text-sm xl:text-base font-bold uppercase tracking-widest text-amber-900/80 font-mono">
          ✦ TRAVEL STAMPS / VISAS
        </h3>
        <span className="text-[10px] lg:text-xs font-mono text-amber-900/60">PAGE 03</span>
      </div>

      {/* STAMPS CANVAS GRID */}
      <div className="relative p-4 lg:p-6 xl:p-8 rounded-2xl bg-amber-900/[0.03] border border-amber-900/10 min-h-[160px] lg:min-h-[220px] xl:min-h-[260px] flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10 overflow-visible">
        {stamps.map((stamp) => (
          <TravelStamp key={stamp.id} stamp={stamp} onSelectTrip={onSelectTrip} />
        ))}
      </div>
    </div>
  );
}
