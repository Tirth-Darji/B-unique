import { useState } from "react";

/**
 * TravelStamp Component
 * Renders an authentic passport ink stamp with imperfect rotations, custom shapes,
 * hover elevation, and an interactive popover tooltip.
 */
export function TravelStamp({ stamp, onSelectTrip }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const shapeStyles = {
    circle: "rounded-full border-2 border-dashed p-3 lg:p-4 xl:p-5 text-center aspect-square flex flex-col items-center justify-center min-w-[90px] lg:min-w-[115px] xl:min-w-[130px]",
    rect: "rounded-xl border-2 p-3 lg:p-4 xl:p-5 text-center flex flex-col items-center justify-center min-w-[100px] lg:min-w-[130px] xl:min-w-[150px]",
    oval: "rounded-[50%] border-2 p-3 lg:p-4 xl:p-5 text-center flex flex-col items-center justify-center min-w-[110px] lg:min-w-[140px] xl:min-w-[160px]",
    octagon: "rounded-2xl border-2 border-double p-3 lg:p-4 xl:p-5 text-center flex flex-col items-center justify-center min-w-[105px] lg:min-w-[135px] xl:min-w-[155px]",
  };

  return (
    <div
      className={`relative group/stamp cursor-pointer transition-all duration-300 transform ${stamp.rotation} hover:rotate-0 hover:scale-110 hover:z-30`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={() => stamp.tripId && onSelectTrip && onSelectTrip(stamp.tripId)}
    >
      {/* STAMP EMBLEMATIC CONTAINER */}
      <div
        className={`${shapeStyles[stamp.shape] || shapeStyles.rect} ${stamp.color} shadow-sm backdrop-blur-[0.5px] select-none transition-colors`}
      >
        <span className="text-[8px] lg:text-[10px] xl:text-[11px] font-extrabold uppercase tracking-widest block opacity-70">
          PASSPORT ENTRY
        </span>
        <span className="text-xs sm:text-sm lg:text-base xl:text-lg font-black font-serif uppercase tracking-tight leading-none my-0.5 lg:my-1">
          {stamp.city}
        </span>
        <span className="text-[9px] lg:text-[11px] xl:text-xs font-mono font-bold tracking-wider uppercase block">
          {stamp.country}
        </span>
        <span className="text-[8px] lg:text-[10px] xl:text-[11px] font-mono font-semibold opacity-80 mt-1 lg:mt-1.5 border-t border-current pt-0.5 lg:pt-1">
          ★ {stamp.date} ★
        </span>
      </div>

      {/* INTERACTIVE POPOVER TOOLTIP ON HOVER */}
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-slate-900 text-slate-100 text-xs rounded-2xl p-3 shadow-2xl border border-amber-500/30 z-40 animate-in fade-in zoom-in-95 pointer-events-none">
          <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-1.5">
            <span className="font-bold font-serif text-amber-300">{stamp.city}</span>
            <span className="text-[10px] font-mono text-slate-400">{stamp.country}</span>
          </div>
          <div className="space-y-1 text-[11px] text-slate-300">
            <p><span className="text-slate-500">Visited:</span> {stamp.date}</p>
            <p><span className="text-slate-500">Duration:</span> {stamp.duration}</p>
          </div>
          <div className="mt-2 text-[10px] text-teal-400 font-semibold flex items-center justify-end gap-1">
            <span>View Trip Details</span>
            <span>→</span>
          </div>
        </div>
      )}
    </div>
  );
}
