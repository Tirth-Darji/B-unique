import { CircleImage } from "./CircleImage.jsx";

/**
 * RingItem Component
 * Restructured into exactly three nested layers to eliminate hover-spin bugs:
 * Layer 1 (Angle Wrapper): Static positioning on ring (No animation, no hover)
 * Layer 2 (Counter-spin Wrapper): ONLY carries counter-rotation animation & pause-on-hover
 * Layer 3 (Visual Card): NO transforms/scale on hover; applies soft gold halo box-shadow glow & border highlight only
 */
export function RingItem({
  item,
  angleDeg,
  radiusPx,
  direction = "cw", // 'cw' (clockwise) | 'ccw' (counter-clockwise)
  isSelected,
  onSelect,
}) {
  // Layer 1 Trigonometric Position calculation
  const angleRad = (angleDeg * Math.PI) / 180;
  const x = radiusPx * Math.cos(angleRad);
  const y = radiusPx * Math.sin(angleRad);

  // Counter-rotation animation class matching ring direction:
  // CW ring -> CCW counter-spin
  // CCW ring -> CW spin-normal
  const counterAnimClass =
    direction === "cw" ? "animate-counter-spin" : "animate-spin-normal";

  return (
    /* LAYER 1: STATIC ANGLE WRAPPER (No animation, no hover styles, no scale) */
    <div
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 select-none"
      onClick={() => onSelect && onSelect(item)}
    >
      {/* LAYER 2: COUNTER-SPIN WRAPPER (ONLY counter-rotation & pause-on-hover; NO hover transforms) */}
      <div
        className={`group-hover:[animation-play-state:paused] ${counterAnimClass}`}
      >
        {/* LAYER 3: VISUAL CARD (150px x 150px perfect circle, NO transform/scale on hover) */}
        <div
          className={`relative w-[150px] h-[150px] aspect-square rounded-full overflow-hidden border transition-all duration-300 ${
            isSelected
              ? "border-[#D9A857] shadow-[0_0_30px_8px_rgba(217,168,87,0.45)]"
              : "border-white/20 hover:border-[#E9C98A] hover:shadow-[0_0_30px_8px_rgba(233,201,138,0.35)]"
          }`}
        >
          {/* REAL IMAGE ELEMENT FILLING CIRCLE ENTIRELY */}
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            loading="eager"
          />

          {/* GRADIENT OVERLAY FOR TEXT LEGIBILITY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90" />

          {/* UPRIGHT HORIZONTAL TEXT — ITEM NAME */}
          <div className="absolute inset-x-2 bottom-3 text-center">
            <span className="text-xs sm:text-sm font-serif font-bold text-white tracking-wide leading-none block drop-shadow-md line-clamp-1">
              {item.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
