import React from 'react';

export default function Logo({ className = "h-12", showTagline = true }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Texas Shape Icon with custom industrial camo/textured pattern and yellow border */}
      <div className="relative flex-shrink-0 w-11 h-11 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(253,184,19,0.35)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="texasPattern" patternUnits="userSpaceOnUse" width="16" height="16">
              <rect width="16" height="16" fill="#78350f" />
              <path d="M0 0h8v8H0z" fill="#92400e" />
              <circle cx="4" cy="4" r="2.5" fill="#f59e0b" />
              <circle cx="12" cy="12" r="3" fill="#d97706" />
              <path d="M8 8l4-4 4 4-4 4z" fill="#b45309" />
              <circle cx="12" cy="4" r="1.5" fill="#fef08a" />
            </pattern>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#fdb813" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* Texas State Silhouette */}
          <path
            d="M 18 10 
               L 42 10 
               L 42 28 
               L 72 28 
               L 68 46 
               L 82 52 
               L 90 70 
               L 86 82 
               L 74 92 
               L 52 90 
               L 44 82 
               L 36 86 
               L 26 78 
               L 18 52 
               L 26 42 
               L 18 36 
               Z"
            fill="url(#texasPattern)"
            stroke="#fdb813"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Star in the heart of Texas */}
          <polygon
            points="50,46 52.5,53.5 60,53.5 54,58 56.5,65.5 50,61 43.5,65.5 46,58 40,53.5 47.5,53.5"
            fill="#fdb813"
            stroke="#ffffff"
            strokeWidth="0.8"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col justify-center text-left leading-none">
        <div className="flex items-baseline tracking-tighter">
          <span className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
            BATY
          </span>
          <span className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight ml-1.5">
            SERVICES
          </span>
        </div>
        {showTagline && (
          <span className="font-heading font-bold text-[10px] sm:text-[11px] text-[#fdb813] tracking-wider uppercase mt-0.5">
            WE REMOVE THE MESS!
          </span>
        )}
      </div>
    </div>
  );
}
