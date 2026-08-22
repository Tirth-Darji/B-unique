import { useState, useEffect } from "react";
import { CATEGORY_COLORS } from "../../discoveryData.js";
import { CircleImage } from "./CircleImage.jsx";

/**
 * PreviewPanel Component
 * Glassmorphic right drawer sliding in from the right edge when an orbital circle is clicked.
 */
export function PreviewPanel({ item, onClose, onAddToTrip, isAdded }) {
  const [added, setAdded] = useState(isAdded);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose && onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const catStyle = CATEGORY_COLORS[item.category] || CATEGORY_COLORS.nature;

  const handleAdd = () => {
    setAdded(true);
    if (onAddToTrip) onAddToTrip(item);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end pointer-events-auto">
      {/* SEMI-TRANSPARENT BACKDROP (Dims background slightly while keeping orbits visible) */}
      <div
        className="fixed inset-0 bg-[#0B1620]/60 backdrop-blur-[2px] transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
      />

      {/* RIGHT SLIDE-IN PANEL */}
      <div className="relative w-full sm:w-[420px] h-full bg-[#0B1620]/95 border-l border-[#E9C98A]/20 shadow-2xl backdrop-blur-xl flex flex-col justify-between overflow-y-auto text-slate-100 z-10 transition-transform duration-300 ease-out animate-in slide-in-from-right">
        
        {/* TOP HERO PHOTO WITH CLOSE BUTTON */}
        <div className="relative h-60 sm:h-64 w-full shrink-0 overflow-hidden border-b border-white/10">
          <CircleImage
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1620] via-[#0B1620]/30 to-transparent" />
          
          {/* CLOSE (X) BUTTON */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#0B1620]/80 hover:bg-[#0B1620] border border-white/20 text-white flex items-center justify-center transition-all shadow-lg"
          >
            ✕
          </button>

          {/* HERO TITLE BLOCK */}
          <div className="absolute bottom-4 left-6 right-6 space-y-1">
            <span
              className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest border backdrop-blur-md ${catStyle.badge}`}
            >
              ✦ {item.category}
            </span>
            <h2 className="text-3xl font-serif font-bold text-white leading-tight">
              {item.name}
            </h2>
            <p className="text-xs font-mono text-[#E9C98A] uppercase tracking-wider">
              {item.country || item.region}
            </p>
          </div>
        </div>

        {/* PANEL BODY CONTENT */}
        <div className="p-6 space-y-5 flex-1 font-sans">
          
          {/* SHORT BLURB */}
          <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-light">
            {item.description}
          </p>

          {/* 2-COLUMN QUICK FACTS GRID */}
          <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-mono">
            <div className="space-y-1">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block flex items-center gap-1">
                <span>🗓️</span>
                <span>Best Time</span>
              </span>
              <span className="font-semibold text-white">{item.bestTime || "Year-round"}</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block flex items-center gap-1">
                <span>⏱️</span>
                <span>Typical Length</span>
              </span>
              <span className="font-semibold font-sans text-[#E9C98A]">{item.typicalLength}</span>
            </div>
          </div>

          {/* STAR RATING ROW */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
            <div className="flex items-center gap-1 text-amber-400">
              {"★".repeat(5)}
              <span className="font-bold text-white ml-1.5">{item.rating || 4.9}</span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              {item.reviewsCount || "1,850 reviews"}
            </span>
          </div>

          {/* EXTRA DETAILS LIST FOR ACTIVITIES / PLACES */}
          {item.placesToVisit && (
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono font-bold text-[#E9C98A] uppercase tracking-wider block">
                ✦ Highlights & Landmarks
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.placesToVisit.map((place, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-200"
                  >
                    📍 {place}
                  </span>
                ))}
              </div>
            </div>
          )}

          {item.thingsToKeepInMind && (
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono font-bold text-[#E9C98A] uppercase tracking-wider block">
                ⚠️ Practical Tips
              </span>
              <ul className="space-y-1 text-xs text-slate-300/80 font-light">
                {item.thingsToKeepInMind.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#7FB3A3] shrink-0">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* STACKED CTA BUTTONS FOOTER */}
        <div className="p-6 border-t border-white/10 bg-[#0B1620]/90 space-y-2.5 shrink-0">
          <button
            type="button"
            onClick={handleAdd}
            disabled={added}
            className={`w-full py-3 px-6 rounded-full text-xs font-bold font-mono transition-all shadow-lg flex items-center justify-center gap-2 ${
              added
                ? "bg-emerald-500 text-[#0B1620] shadow-emerald-500/20 cursor-default"
                : "bg-gradient-to-r from-[#E9C98A] to-[#D9A857] hover:from-[#f0d499] hover:to-[#e2b262] text-[#0B1620] shadow-[#D9A857]/20"
            }`}
          >
            {added ? (
              <>
                <span>✓</span>
                <span>ADDED TO TRIP</span>
              </>
            ) : (
              <>
                <span>+</span>
                <span>ADD TO TRIP</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 px-6 rounded-full border border-white/20 hover:border-white/40 text-slate-200 hover:text-white text-xs font-semibold font-mono transition-all flex items-center justify-center gap-1.5"
          >
            <span>VIEW FULL DETAILS</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
