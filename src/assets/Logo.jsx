import React from 'react';
import { TexasMark } from '../components/TexasBadge';

export default function Logo({ className = "h-12", showTagline = true, compact = false }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Texas Mark with Leopard Pattern */}
      <TexasMark variant="leopard" className={compact ? "h-10 w-11 shrink-0" : "h-12 w-14 shrink-0"} />

      {/* Brand Typography matching reference */}
      <div className="flex flex-col leading-none text-left">
        <span className="display text-2xl sm:text-3xl tracking-[0.03em] text-white">
          BATY SERVICES
        </span>
        {showTagline && (
          <span className="mt-0.5 text-[10px] sm:text-[11px] font-extrabold tracking-[0.16em] text-[#f5c518] uppercase">
            WE REMOVE THE MESS!
          </span>
        )}
      </div>
    </div>
  );
}
