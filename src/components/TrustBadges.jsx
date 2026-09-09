import React from 'react';
import { Leaf, Shield, Users } from 'lucide-react';
import { TexasMark } from './TexasBadge';

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
      icon: <TexasMark variant="gold" className="w-5 h-5 text-black" />,
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
