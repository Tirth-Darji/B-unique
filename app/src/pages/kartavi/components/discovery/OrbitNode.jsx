import { CATEGORY_COLORS } from "../../discoveryData.js";

/**
 * OrbitNode Component
 * Uniform circular photographic card positioned on trig-computed orbital coordinates.
 * Includes floating drift animation, bottom gradient overlay, category pill, and hover highlight.
 */
export function OrbitNode({
  item,
  x,
  y,
  delay = 0,
  isSelected,
  onSelect,
  onHover,
}) {
  const catStyle = CATEGORY_COLORS[item.category] || CATEGORY_COLORS.nature;

  return (
    <div
      style={{
        left: `${x}px`,
        top: `${y}px`,
        animationDelay: `${delay}s`,
      }}
      onClick={() => onSelect && onSelect(item)}
      onMouseEnter={() => onHover && onHover(item)}
      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 animate-orbit-drift group select-none"
    >
      {/* UNIFORM CIRCULAR NODE CONTAINER */}
      <div
        className={`relative w-[clamp(88px,9.5vmin,130px)] h-[clamp(88px,9.5vmin,130px)] aspect-square rounded-full overflow-hidden border-2 transition-all duration-300 transform group-hover:scale-108 group-hover:z-50 shadow-xl ${
          isSelected
            ? "border-[#D9A857] ring-4 ring-[#D9A857]/30 scale-108 shadow-2xl shadow-[#D9A857]/30"
            : "border-white/20 group-hover:border-[#D9A857] group-hover:shadow-2xl group-hover:shadow-[#D9A857]/25"
        }`}
      >
        {/* HIGH-RES PHOTOGRAPH */}
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* BOTTOM GRADIENT OVERLAY FOR READABILITY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1620]/90 via-[#0B1620]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

        {/* CARD OVERLAY LABELS */}
        <div className="absolute inset-x-1.5 bottom-2.5 text-center flex flex-col items-center justify-end">
          <span
            className={`px-1.5 py-0.5 rounded-full text-[8px] sm:text-[9px] font-mono uppercase font-bold tracking-wider mb-0.5 border backdrop-blur-md ${catStyle.pill}`}
          >
            {item.category}
          </span>
          <span className="text-[11px] sm:text-xs font-serif font-bold text-white tracking-tight leading-tight group-hover:text-[#E9C98A] transition-colors drop-shadow-md line-clamp-1">
            {item.name}
          </span>
        </div>
      </div>
    </div>
  );
}
