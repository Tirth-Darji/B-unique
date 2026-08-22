import { useState } from "react";

/**
 * CityPreviewModal Component
 * Chic editorial travel postcard preview displaying city details, places to visit, foods to try, cultural notes, and Add City to Trip button.
 */
export function CityPreviewModal({ city, onClose, onAddCityToTrip, isAdded }) {
  const [added, setAdded] = useState(isAdded);

  if (!city) return null;

  const handleAdd = () => {
    setAdded(true);
    if (onAddCityToTrip) onAddCityToTrip(city);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* EDITORIAL SCRAPBOOK POSTCARD CONTAINER */}
      <div
        className="relative w-full max-w-md bg-[#faf7f0] border-2 border-amber-900/20 rounded-3xl overflow-hidden shadow-2xl text-slate-900 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-950/60 hover:bg-slate-950 text-slate-200 hover:text-white flex items-center justify-center transition-all shadow-md"
        >
          ✕
        </button>

        {/* HERO IMAGE */}
        <div className="relative h-48 w-full overflow-hidden border-b border-amber-900/20">
          <img
            src={city.image}
            alt={city.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-3 left-5 right-5 flex items-end justify-between">
            <div>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-[10px] font-bold font-mono uppercase tracking-widest backdrop-blur-md">
                ✦ {city.country} • {city.region}
              </span>
              <h2 className="text-2xl font-serif font-bold text-white mt-1 leading-tight drop-shadow-md">
                {city.name}
              </h2>
            </div>
            
            <div className="text-right">
              <span className="text-[9px] text-amber-200/70 font-mono uppercase block">Cost Index</span>
              <span className="text-base font-black text-amber-300 font-serif">{city.costIndex}</span>
            </div>
          </div>
        </div>

        {/* POSTCARD BODY */}
        <div className="p-5 space-y-3.5 max-h-[calc(80vh-12rem)] overflow-y-auto scrollbar-none font-sans">
          <p className="text-xs text-slate-700 leading-relaxed font-light italic">
            "{city.description}"
          </p>

          {/* PLACES TO VISIT */}
          <div className="space-y-1 pt-1">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1 border-b border-amber-900/15 pb-1">
              <span>📍</span>
              <span>Must-Visit Places</span>
            </h4>
            <div className="flex flex-wrap gap-1 pt-1">
              {city.placesToVisit.map((place, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded-md bg-amber-900/10 text-amber-950 text-[11px] font-medium border border-amber-900/10">
                  ✦ {place}
                </span>
              ))}
            </div>
          </div>

          {/* FOODS TO TRY */}
          <div className="space-y-1 pt-1">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1 border-b border-amber-900/15 pb-1">
              <span>🍜</span>
              <span>Foods to Try</span>
            </h4>
            <div className="flex flex-wrap gap-1 pt-1">
              {city.foodsToTry.map((food, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded-md bg-amber-900/10 text-amber-950 text-[11px] font-medium border border-amber-900/10">
                  🍴 {food}
                </span>
              ))}
            </div>
          </div>

          {/* CULTURAL NOTES & ETIQUETTE */}
          <div className="space-y-1 pt-1">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1 border-b border-amber-900/15 pb-1">
              <span>💡</span>
              <span>Cultural Notes & Local Etiquette</span>
            </h4>
            <ul className="space-y-1 text-xs text-slate-700 font-light pt-1">
              {city.culturalTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-800 shrink-0">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ACTION FOOTER */}
        <div className="p-4 px-5 border-t border-amber-900/20 bg-[#f4efe4] flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-full border border-amber-900/30 hover:bg-amber-900/10 text-amber-950 text-xs font-medium transition-all"
          >
            Close
          </button>
          
          <button
            type="button"
            onClick={handleAdd}
            disabled={added}
            className={`flex-1 py-2 px-5 rounded-full text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5 ${
              added
                ? "bg-emerald-600 text-white shadow-emerald-600/20 cursor-default"
                : "bg-amber-900 hover:bg-amber-950 text-amber-50 shadow-amber-900/20"
            }`}
          >
            {added ? (
              <>
                <span>✓</span>
                <span>Added to Trip</span>
              </>
            ) : (
              <>
                <span>+</span>
                <span>Add City to Trip</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
