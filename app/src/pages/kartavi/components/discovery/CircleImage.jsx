import { useState } from "react";

/**
 * CircleImage Component
 * Renders an <img> with an onError handler that catches broken or dead URLs
 * and gracefully falls back to a soft gradient background with a travel icon.
 */
export function CircleImage({ src, alt, className = "" }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`w-full h-full bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#0B1620] flex items-center justify-center border border-white/10 ${className}`}>
        <div className="text-center p-2">
          <span className="text-2xl block mb-1">🧭</span>
          <span className="text-[10px] font-mono text-[#E9C98A] uppercase tracking-wider block font-bold">
            {alt || "GlobeTrotter"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
