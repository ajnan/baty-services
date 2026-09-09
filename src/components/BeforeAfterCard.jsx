import React, { useState } from 'react';

export default function BeforeAfterCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [interactiveMode, setInteractiveMode] = useState(false);
  const [sliderPos, setSliderPos] = useState(50);

  const handleMouseMove = (e) => {
    if (!interactiveMode) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  return (
    <div className="flex flex-col items-center bg-white rounded-xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Interactive toggle switch at top right */}
      <div className="w-full flex items-center justify-between px-3 py-2 bg-zinc-50 border-b border-zinc-200 text-xs">
        <span className="font-heading font-black text-zinc-900 tracking-wide uppercase text-sm">
          {project.title}
        </span>
        <button
          onClick={() => setInteractiveMode(!interactiveMode)}
          className={`px-2 py-0.5 rounded text-[11px] font-bold uppercase transition-colors cursor-pointer ${
            interactiveMode
              ? 'bg-[#fdb813] text-black shadow-sm'
              : 'bg-zinc-200 text-zinc-700 hover:bg-zinc-300'
          }`}
          title="Toggle interactive slider"
        >
          {interactiveMode ? 'Slider On' : 'Side-by-Side'}
        </button>
      </div>

      {/* Image Area */}
      <div className="w-full relative h-52 sm:h-56 bg-zinc-900 overflow-hidden select-none">
        {interactiveMode ? (
          /* Interactive Comparison Slider */
          <div
            className="w-full h-full relative cursor-ew-resize"
            onMouseMove={handleMouseMove}
            onTouchMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const touch = e.touches[0];
              const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
              setSliderPos((x / rect.width) * 100);
            }}
          >
            {/* After Image (Background) */}
            <img
              src={project.afterImage}
              alt={`${project.title} After`}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Before Image (Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={project.beforeImage}
                alt={`${project.title} Before`}
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%' }}
              />
            </div>

            {/* Slider Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#fdb813] shadow-[0_0_10px_rgba(253,184,19,0.8)] pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#fdb813] text-black font-black text-[10px] flex items-center justify-center shadow-lg border border-white">
                ↔
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/80 text-white font-heading font-black text-xs uppercase tracking-wider rounded border border-zinc-700">
              BEFORE
            </div>
            <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/80 text-[#fdb813] font-heading font-black text-xs uppercase tracking-wider rounded border border-zinc-700">
              AFTER
            </div>
          </div>
        ) : (
          /* Exact Side-by-Side Representation Matching Reference Image */
          <div className="w-full h-full grid grid-cols-2 gap-0.5 bg-zinc-900">
            {/* Before Side */}
            <div className="relative h-full overflow-hidden group/item">
              <img
                src={project.beforeImage}
                alt={`${project.title} Before`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-2 left-2 px-2.5 py-0.5 bg-black text-white font-heading font-black text-[11px] tracking-wider uppercase rounded shadow">
                BEFORE
              </div>
            </div>

            {/* After Side */}
            <div className="relative h-full overflow-hidden group/item">
              <img
                src={project.afterImage}
                alt={`${project.title} After`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-2 right-2 px-2.5 py-0.5 bg-black text-[#fdb813] font-heading font-black text-[11px] tracking-wider uppercase rounded shadow">
                AFTER
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Caption matching reference bottom label */}
      <div className="w-full py-2.5 px-4 text-center bg-white">
        <span className="font-heading font-black text-base text-zinc-900 uppercase tracking-wide">
          {project.title}
        </span>
      </div>
    </div>
  );
}
