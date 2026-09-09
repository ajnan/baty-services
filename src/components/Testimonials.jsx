import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - itemsPerPage : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= testimonialsData.length - itemsPerPage ? 0 : prev + 1
    );
  };

  // Visible slice (or looped slice)
  const visibleTestimonials = testimonialsData.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="bg-[#0c0e14] py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
              WHAT OUR <span className="text-[#fdb813]">CLIENTS SAY</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-1">
              Trusted by homeowners, contractors and businesses across Texas.
            </p>
          </div>

          {/* Carousel Arrow Controls matching reference */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white hover:text-[#fdb813] hover:border-[#fdb813]/60 transition-colors cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white hover:text-[#fdb813] hover:border-[#fdb813]/60 transition-colors cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#141822] border border-zinc-800/80 p-6 sm:p-7 rounded-xl flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-zinc-700 transition-colors"
            >
              <div>
                {/* 5 Yellow Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#fdb813] text-[#fdb813]"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Role */}
              <div className="border-t border-zinc-800/60 pt-4">
                <div className="font-heading font-black text-base text-white uppercase tracking-wide">
                  {t.name}
                </div>
                <div className="text-xs text-[#fdb813] font-semibold mt-0.5">
                  {t.role} {t.location ? `• ${t.location}` : ''}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
