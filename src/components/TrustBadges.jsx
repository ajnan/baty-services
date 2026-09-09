import React from 'react';
import { Zap, ShieldCheck, Users } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      title: 'Fast & Reliable Service',
      icon: (
        <div className="w-7 h-7 flex-shrink-0 text-[#fdb813]">
          <Zap className="w-full h-full fill-current" />
        </div>
      ),
    },
    {
      title: 'Affordable & Transparent Pricing',
      icon: (
        <div className="w-7 h-7 flex-shrink-0 text-[#fdb813]">
          <ShieldCheck className="w-full h-full stroke-[2.5]" />
        </div>
      ),
    },
    {
      title: 'Residential & Commercial',
      icon: (
        <div className="w-7 h-7 flex-shrink-0 text-[#fdb813]">
          <Users className="w-full h-full stroke-[2.5]" />
        </div>
      ),
    },
    {
      title: 'Proudly Serving Texas',
      icon: (
        <div className="w-7 h-7 flex-shrink-0 text-[#fdb813]">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
            <path d="M 18 10 L 42 10 L 42 28 L 72 28 L 68 46 L 82 52 L 90 70 L 86 82 L 74 92 L 52 90 L 44 82 L 36 86 L 26 78 L 18 52 L 26 42 L 18 36 Z" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div className="border-t border-b border-zinc-800/80 bg-[#0d0f14] py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
        {badges.map((badge, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3.5 px-3 py-2 rounded-lg bg-zinc-900/40 border border-zinc-800/50 hover:border-[#fdb813]/40 transition-colors"
          >
            {badge.icon}
            <span className="font-heading font-black text-base sm:text-lg text-white tracking-wide uppercase">
              {badge.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
