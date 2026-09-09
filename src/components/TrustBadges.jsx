import React from 'react';
import { Leaf, Shield, Users } from 'lucide-react';

// Inline Texas silhouette SVG — avoids Vite minification bug with named imports used in JSX arrays
function TexasIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 236 196" className={className} aria-hidden="true" focusable="false">
      <path
        d="M80 6h72v52h76l-4 34-10 32-22 26-28 20-28 14-24 6-24-14-32-22-28-28-18-30-2-24 16-12 28-2H80z"
        fill="#000000"
        stroke="none"
      />
    </svg>
  );
}

export default function TrustBadges() {
  const badges = [
    {
      label: 'Fast & Reliable',
      sub: 'Service',
      icon: <Leaf className="w-5 h-5 text-black stroke-[2.2]" />,
    },
    {
      label: 'Affordable &',
      sub: 'Transparent Pricing',
      icon: <Shield className="w-5 h-5 text-black stroke-[2.2]" />,
    },
    {
      label: 'Residential &',
      sub: 'Commercial',
      icon: <Users className="w-5 h-5 text-black stroke-[2.2]" />,
    },
    {
      label: 'Proudly Serving',
      sub: 'Texas',
      icon: <TexasIcon className="w-5 h-5" />,
    },
  ];


  return (
    <div className="border-t border-b border-zinc-800/80 bg-[#0e0e0e] py-5 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {badges.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3.5">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#f5c518] shadow-md">
              {item.icon}
            </span>
            <span className="text-xs sm:text-sm font-bold text-white leading-tight">
              {item.label}
              <br />
              <span className="text-zinc-400 font-normal">{item.sub}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
