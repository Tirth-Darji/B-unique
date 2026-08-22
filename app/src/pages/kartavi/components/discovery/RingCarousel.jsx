import { RingItem } from "./RingItem.jsx";

/**
 * RingCarousel Component
 * Half-viewport rotating circular carousel.
 * LEFT carousel rotates CW; RIGHT carousel rotates CCW.
 * Pauses whole ring rotation on hover.
 */
export function RingCarousel({
  items = [],
  direction = "cw", // 'cw' (clockwise) | 'ccw' (counter-clockwise)
  side = "left", // 'left' | 'right'
  selectedItemId,
  onSelectItem,
}) {
  if (!items || items.length === 0) return null;

  // Fixed ring radius (px)
  const radiusPx = 290;
  // Outer container size (must fit ring radius 290 * 2 = 580px + card diameter ~160px = ~740px)
  const containerSize = 720;

  // Animation class for parent ring rotation:
  // CW: spin (0 -> 360 deg)
  // CCW: counter-spin (0 -> -360 deg)
  const ringAnimClass =
    direction === "cw" ? "animate-spin-normal" : "animate-counter-spin";

  // Positioning off-screen: center sits at x = 0 (left edge) / x = 100% (right edge)
  // Exactly 50% of the 720px circular orbit (360px) extends beyond the viewport edge
  const sidePositionClass =
    side === "left"
      ? "-left-[360px]"
      : "-right-[360px]";

  return (
    <div
      style={{
        width: `${containerSize}px`,
        height: `${containerSize}px`,
      }}
      className={`absolute top-1/2 -translate-y-1/2 ${sidePositionClass} z-20 pointer-events-none select-none group`}
    >
      {/* ROTATING RING CONTAINER (Pauses on hover) */}
      <div
        className={`relative w-full h-full rounded-full transition-transform duration-300 pointer-events-auto group-hover:[animation-play-state:paused] ${ringAnimClass}`}
      >
        {/* FAINT DASHED SVG RING GUIDE */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
          viewBox={`0 0 ${containerSize} ${containerSize}`}
        >
          <circle
            cx={containerSize / 2}
            cy={containerSize / 2}
            r={radiusPx}
            fill="none"
            stroke="url(#ringGuideGlow)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />
          <defs>
            <linearGradient id="ringGuideGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E9C98A" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#7FB3A3" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#E9C98A" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>

        {/* 6 RING ITEMS DISTRIBUTED 60 DEGREES APART */}
        {items.map((item, index) => {
          const angleDeg = index * (360 / items.length); // 0, 60, 120, 180, 240, 300

          return (
            <RingItem
              key={item.id}
              item={item}
              angleDeg={angleDeg}
              radiusPx={radiusPx}
              direction={direction}
              isSelected={selectedItemId === item.id}
              onSelect={onSelectItem}
            />
          );
        })}
      </div>
    </div>
  );
}
