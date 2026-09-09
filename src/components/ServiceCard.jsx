import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Hammer, Mountain, Home, ArrowRight } from 'lucide-react';

export default function ServiceCard({ service, onSelect }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'trash':
        return <Trash2 className="w-5 h-5 text-black stroke-[2.5]" />;
      case 'hammer':
        return <Hammer className="w-5 h-5 text-black stroke-[2.5]" />;
      case 'gravel':
        return <Mountain className="w-5 h-5 text-black stroke-[2.5]" />;
      case 'building':
      default:
        return <Home className="w-5 h-5 text-black stroke-[2.5]" />;
    }
  };

  return (
    <div className="group flex flex-col bg-[#141820] rounded-xl overflow-hidden border border-zinc-800/80 hover:border-[#fdb813]/60 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_35px_rgba(253,184,19,0.15)] hover:-translate-y-1">
      {/* Image container with subtle zoom effect on hover */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-900">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141820] via-transparent to-black/20" />
      </div>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Yellow Icon Box matching Reference Image */}
        <div className="w-10 h-10 -mt-11 mb-4 rounded bg-[#fdb813] flex items-center justify-center shadow-lg relative z-10">
          {getIcon(service.icon)}
        </div>

        {/* Card Title */}
        <h3 className="font-heading font-black text-xl sm:text-2xl text-white tracking-wide uppercase mb-2 group-hover:text-[#fdb813] transition-colors">
          {service.title}
        </h3>

        {/* Card Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
          {service.description}
        </p>

        {/* LEARN MORE Link */}
        <Link
          to={service.link || '/services'}
          onClick={onSelect}
          className="inline-flex items-center gap-2 font-heading font-black text-sm tracking-wider uppercase text-[#fdb813] group-hover:text-amber-300 transition-colors mt-auto pt-2"
        >
          <span>LEARN MORE</span>
          <ArrowRight className="w-4 h-4 stroke-[3] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
