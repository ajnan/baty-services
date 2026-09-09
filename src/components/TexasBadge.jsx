import React from 'react';

/**
 * StampBadge: "SAME MESS. A CLEANER TOMORROW."
 * Renders the angled, energetic contractor stamp badge seen in the reference image.
 */
export function StampBadge({ className = "", text1 = "SAME MESS.", text2 = "A CLEANER", text3 = "TOMORROW." }) {
  return (
    <div
      className={`inline-block select-none transform -rotate-6 transition-transform hover:rotate-0 duration-300 ${className}`}
    >
      <div className="relative border-4 border-amber-500/80 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 px-4 py-2 rounded-md shadow-[0_4px_15px_rgba(245,158,11,0.4)] text-center leading-none">
        {/* Subtle grunge overlay */}
        <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:6px_6px] pointer-events-none rounded" />
        
        <div className="font-heading font-black tracking-tighter text-black text-xs sm:text-sm uppercase drop-shadow-sm">
          {text1}
        </div>
        <div className="font-stamp text-black text-sm sm:text-base font-extrabold tracking-wide uppercase mt-0.5">
          {text2}
        </div>
        <div className="font-heading font-black tracking-tight text-black text-xs sm:text-sm uppercase">
          {text3}
        </div>
      </div>
    </div>
  );
}

/**
 * TexasStateBadge: Texas silhouette with leopard/industrial camo and gold ring + "CLEANER TEXAS STRONGER TOMORROW."
 */
export function TexasStateBadge({ className = "", size = 120 }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <div className="relative flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-amber-400/40 rounded-xl p-2.5 shadow-2xl">
        {/* Texas Outline graphic */}
        <div className="w-14 h-14 relative flex-shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_2px_10px_rgba(245,158,11,0.5)]">
            <defs>
              <pattern id="texasBadgePattern" patternUnits="userSpaceOnUse" width="16" height="16">
                <rect width="16" height="16" fill="#78350f" />
                <path d="M0 0h8v8H0z" fill="#92400e" />
                <circle cx="4" cy="4" r="2.5" fill="#f59e0b" />
                <circle cx="12" cy="12" r="3" fill="#d97706" />
                <path d="M8 8l4-4 4 4-4 4z" fill="#b45309" />
                <circle cx="12" cy="4" r="1.5" fill="#fef08a" />
              </pattern>
            </defs>
            <path
              d="M 18 10 L 42 10 L 42 28 L 72 28 L 68 46 L 82 52 L 90 70 L 86 82 L 74 92 L 52 90 L 44 82 L 36 86 L 26 78 L 18 52 L 26 42 L 18 36 Z"
              fill="url(#texasBadgePattern)"
              stroke="#fdb813"
              strokeWidth="4"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Badge Text */}
        <div className="flex flex-col text-left leading-tight pr-1">
          <span className="font-heading font-black text-xs text-[#fdb813] tracking-wider uppercase">
            CLEANER TEXAS
          </span>
          <span className="font-heading font-black text-xs text-white tracking-wider uppercase">
            STRONGER
          </span>
          <span className="font-heading font-black text-xs text-white tracking-wider uppercase">
            TOMORROW.
          </span>
        </div>
      </div>
    </div>
  );
}
