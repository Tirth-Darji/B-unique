/**
 * SectionHeader Component
 * Glassmorphic dark folder header for accordion sections (Ongoing, Upcoming, Past).
 * Semi-transparent dark navy background, subtle blur, border glow on hover,
 * and animated chevron state.
 */
export function SectionHeader({
  sectionId,
  title,
  subtitle,
  count,
  isExpanded,
  onToggle,
}) {
  return (
    <button
      type="button"
      onClick={() => onToggle(sectionId)}
      className="w-full text-left bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 hover:border-teal-500/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-xl group flex items-center justify-between gap-4 cursor-pointer"
      aria-expanded={isExpanded}
      aria-controls={`section-content-${sectionId}`}
      id={`section-header-${sectionId}`}
    >
      <div className="flex items-center gap-4">
        {/* Subtle Route Line Motif Accent */}
        <div className="hidden sm:flex flex-col items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
          <span className="w-2 h-2 rounded-full bg-teal-400 ring-4 ring-teal-500/20" />
          <span className="w-0.5 h-6 bg-gradient-to-b from-teal-400 to-slate-700" />
        </div>

        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-xl sm:text-2xl font-bold font-sans text-white tracking-tight group-hover:text-teal-300 transition-colors">
              {title}
            </h2>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/20">
              {count} {count === 1 ? "journey" : "journeys"}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 font-light mt-1">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Expand/Collapse Chevron Indicator */}
      <div
        className={`w-10 h-10 rounded-full bg-slate-800/50 group-hover:bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-300 transition-transform duration-300 shrink-0 ${
          isExpanded ? "rotate-180 text-teal-400 border-teal-500/40" : ""
        }`}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </button>
  );
}
