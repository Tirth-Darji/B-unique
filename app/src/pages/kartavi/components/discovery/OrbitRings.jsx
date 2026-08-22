/**
 * OrbitRings Component
 * Renders faint concentric dashed SVG orbit guide rings behind the orbital nodes.
 */
export function OrbitRings({ rings = [240, 360, 480] }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E9C98A" stopOpacity="0.12" />
          <stop offset="50%" stopColor="#7FB3A3" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#E9C98A" stopOpacity="0.12" />
        </linearGradient>
      </defs>

      {rings.map((r, i) => (
        <circle
          key={i}
          cx="500"
          cy="500"
          r={r}
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="1"
          strokeDasharray="6 8"
          className="opacity-70"
        />
      ))}
    </svg>
  );
}
