import React, { useId } from 'react';

const TEXAS_PATH =
  "M80 6h72v52h76l-4 34-10 32-22 26-28 20-28 14-24 6-24-14-32-22-28-28-18-30-2-24 16-12 28-2H80z";

/**
 * Authentic Texas Silhouette with Leopard Rosette Pattern
 */
export function TexasMark({
  className = "w-14 h-12",
  variant = "leopard",
}) {
  const uid = useId().replace(/:/g, "");
  const patternId = `leopard-${uid}`;

  return (
    <svg
      viewBox="0 0 236 196"
      className={`overflow-visible select-none drop-shadow-[0_2px_8px_rgba(245,197,24,0.3)] ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      {variant === "leopard" ? (
        <defs>
          <pattern
            id={patternId}
            patternUnits="userSpaceOnUse"
            width="26"
            height="26"
          >
            <rect width="26" height="26" fill="#d2ae6e" />
            <ellipse cx="7" cy="8" rx="5" ry="3.8" fill="#2b1c0e" />
            <ellipse cx="7" cy="8" rx="2" ry="1.4" fill="#d2ae6e" />
            <ellipse cx="19" cy="5" rx="4.2" ry="3.2" fill="#2b1c0e" />
            <ellipse cx="19" cy="5" rx="1.6" ry="1.1" fill="#d2ae6e" />
            <ellipse cx="17" cy="18" rx="4.8" ry="3.6" fill="#2b1c0e" />
            <ellipse cx="17" cy="18" rx="1.9" ry="1.3" fill="#d2ae6e" />
            <ellipse cx="4" cy="20" rx="3.4" ry="2.6" fill="#2b1c0e" />
            <ellipse cx="11" cy="1.5" rx="2.2" ry="1.6" fill="#2b1c0e" />
          </pattern>
        </defs>
      ) : null}
      <path
        d={TEXAS_PATH}
        fill={
          variant === "leopard"
            ? `url(#${patternId})`
            : variant === "gold"
              ? "#f5c518"
              : "currentColor"
        }
        stroke="#f5c518"
        strokeWidth={variant === "leopard" ? "3" : "0"}
      />
    </svg>
  );
}

/**
 * Organic Brush Sticker: "Same mess. A cleaner tomorrow."
 */
export function ScriptSticker({
  className = "",
  lines = ["Same mess.", "A cleaner", "tomorrow."],
  tone = "gold",
}) {
  return (
    <div
      className={`relative inline-flex -rotate-6 sm:-rotate-8 items-center justify-center px-6 py-4 select-none hover:rotate-0 transition-transform duration-300 ${className}`}
    >
      <svg
        viewBox="0 0 280 140"
        className="absolute inset-0 h-full w-full drop-shadow-md"
        aria-hidden="true"
      >
        <path
          d="M24 78 C18 40 62 12 118 22 C168 8 236 18 258 48 C274 72 248 112 186 122 C128 136 52 124 28 96 C18 88 22 82 24 78Z"
          fill={tone === "gold" ? "#f5c518" : "#ffffff"}
        />
      </svg>
      <div
        className="script relative z-10 text-center text-2xl sm:text-3xl font-bold leading-[0.92] text-black tracking-wide"
      >
        {lines.map((line, idx) => (
          <span key={idx} className="block">
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}

// Aliases for compatibility
export const StampBadge = ScriptSticker;

export function TexasStateBadge({ className = "" }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <div className="relative flex items-center gap-3 bg-black/70 backdrop-blur-md border border-[#f5c518]/40 rounded-xl p-3 shadow-2xl">
        <TexasMark variant="leopard" className="w-16 h-14 shrink-0" />
        <div className="script text-right text-lg sm:text-xl leading-[1.05] text-white pr-1">
          Cleaner Texas
          <br />
          Stronger
          <br />
          Tomorrow.
        </div>
      </div>
    </div>
  );
}
