import { useState, useEffect, useRef } from "react";

/**
 * OrbitalCarousel Component
 * Renders an interactive 3D circular orbital loop of items anchored to the screen edges.
 * Left Side (Activities): Movement flows TOP → BOTTOM (direction = 'down').
 * Right Side (Cities): Movement flows BOTTOM → TOP (direction = 'up').
 */
export function OrbitalCarousel({
  items = [],
  direction = "down", // 'down' (Top → Bottom) | 'up' (Bottom → Top)
  onHoverItem,
  onSelectItem,
  side = "left", // 'left' | 'right'
}) {
  const [angleOffset, setAngleOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animFrameIdRef = useRef(null);

  useEffect(() => {
    let lastTime = performance.now();

    const animate = (currentTime) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (!isPaused) {
        // Slow, elegant floating speed (~0.12 rad/sec)
        const speed = 0.12;
        setAngleOffset((prev) => {
          if (direction === "down") {
            // Top -> Bottom motion along the inner arc
            return (prev + speed * delta) % (Math.PI * 2);
          } else {
            // Bottom -> Top motion along the inner arc
            return (prev - speed * delta + Math.PI * 2) % (Math.PI * 2);
          }
        });
      }

      animFrameIdRef.current = requestAnimationFrame(animate);
    };

    animFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [isPaused, direction]);

  if (!items || items.length === 0) {
    return null;
  }

  // ELLIPSE RADII
  const rx = 240; // horizontal radius (px)
  const ry = 340; // vertical radius (px)

  return (
    <div
      className="relative w-[480px] h-[720px] flex items-center justify-center select-none pointer-events-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* SUBTLE ORBITAL PATH LINE */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        viewBox="0 0 480 720"
      >
        <ellipse
          cx="240"
          cy="360"
          rx={rx}
          ry={ry}
          fill="none"
          stroke="url(#editorialOrbitGlow)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        <defs>
          <linearGradient id="editorialOrbitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#cbd5e1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* RENDER ORBITAL CARDS */}
      {items.map((item, index) => {
        const angleStep = (Math.PI * 2) / items.length;
        const angle = angleOffset + index * angleStep;

        // Elliptical coordinates
        const x = Math.cos(angle) * rx;
        const y = Math.sin(angle) * ry;

        // Depth perspective
        const depth = (Math.sin(angle) + 1) / 2; // 0..1
        const scale = 0.8 + depth * 0.35; // 0.8..1.15
        const opacity = 0.6 + depth * 0.4; // 0.6..1.0
        const zIndex = Math.round(depth * 100);

        return (
          <div
            key={item.id}
            onClick={() => onSelectItem && onSelectItem(item)}
            onMouseEnter={() => onHoverItem && onHoverItem(item)}
            style={{
              transform: `translate(${x}px, ${y}px) scale(${scale})`,
              opacity,
              zIndex,
            }}
            className="absolute cursor-pointer transition-transform duration-150 ease-linear group"
          >
            {/* PERFECTLY CIRCULAR CARD WITH EDITORIAL STYLING */}
            <div className="relative w-32 h-32 lg:w-36 lg:h-36 aspect-square rounded-full overflow-hidden border border-amber-200/40 group-hover:border-amber-300 shadow-xl backdrop-blur-xs bg-slate-900/30 group-hover:shadow-2xl group-hover:shadow-amber-500/20 transition-all duration-300 transform group-hover:scale-105">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* GRADIENT SHADOW FOR TEXT LEGIBILITY */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* CARD TITLE LABEL */}
              <div className="absolute bottom-3.5 left-2 right-2 text-center px-1">
                <span className="text-xs lg:text-sm font-serif font-bold text-slate-100 tracking-wide leading-tight block drop-shadow-md group-hover:text-amber-200 transition-colors">
                  {item.name}
                </span>
                {item.country && (
                  <span className="text-[9px] font-mono text-amber-200/80 block uppercase tracking-wider mt-0.5">
                    {item.country}
                  </span>
                )}
                {item.type && (
                  <span className="text-[9px] font-mono text-teal-200/90 block uppercase tracking-wider mt-0.5">
                    {item.type}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
