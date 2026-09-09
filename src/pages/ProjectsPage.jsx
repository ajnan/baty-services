import React, { useState } from 'react';
import { ArrowRight, MapPin, Clock, Weight, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import BeforeAfterCard from '../components/BeforeAfterCard';

export default function ProjectsPage({ onOpenQuoteModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Debris Removal',
    'Property Cleanup',
    'Material Delivery',
    'Construction Cleanup',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#0b0e14] text-white min-h-screen">
      {/* Banner */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#141822] to-[#0b0e14] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#fdb813]/10 border border-[#fdb813]/30 text-[#fdb813] font-heading font-black text-xs uppercase tracking-widest mb-4">
              PROVEN RESULTS ACROSS TEXAS
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-none">
              RECENT <span className="text-[#fdb813]">PROJECTS</span>
            </h1>
            <p className="font-heading font-bold text-lg sm:text-xl text-zinc-400 uppercase tracking-wider mt-2">
              REAL JOBS. REAL RESULTS.
            </p>
            <p className="text-zinc-300 text-base sm:text-lg mt-4 leading-relaxed font-normal">
              Take a look at how Baty Services transforms neglected yards, cluttered construction sites, and raw terrain into clean, safe, and functional properties.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Buttons */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-b border-zinc-800 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-heading font-black text-sm uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#fdb813] text-black shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Showcase Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#141822] border border-zinc-800 rounded-2xl overflow-hidden p-4 flex flex-col space-y-4 shadow-xl"
            >
              <BeforeAfterCard project={project} />

              <div className="px-2 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                    <span className="flex items-center gap-1 text-[#fdb813]">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-zinc-500" />
                      {project.duration}
                    </span>
                  </div>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="p-3 bg-zinc-900/90 rounded-lg border border-zinc-800/80 text-xs space-y-1">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#fdb813]" />
                    <span>Project Result:</span>
                  </div>
                  <p className="text-zinc-400 pl-6">
                    {project.results}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto bg-zinc-900 border border-amber-400/30 rounded-2xl p-8 sm:p-12">
          <h3 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase">
            HAVE A PROPERTY IN NEED OF TRANSFORMATION?
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto mt-2">
            Send us pictures of your job site or property for a fast, free estimate.
          </p>
          <div className="mt-6">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-3.5 bg-[#fdb813] hover:bg-[#e5a40b] text-black font-heading font-black text-base uppercase tracking-wider rounded-lg shadow-lg cursor-pointer inline-flex items-center gap-2"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowRight className="w-5 h-5 stroke-[3]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
