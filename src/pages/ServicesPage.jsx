import React from 'react';
import { ArrowRight, CheckCircle2, XCircle, Phone, Sparkles } from 'lucide-react';
import { coreServices, whatWeTake, whatWeCannotTake } from '../data/servicesData';
import { StampBadge } from '../components/TexasBadge';

export default function ServicesPage({ onOpenQuoteModal }) {
  return (
    <div className="bg-[#0b0e14] text-white min-h-screen">
      {/* Header Banner */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#141822] to-[#0b0e14] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#fdb813]/10 border border-[#fdb813]/30 text-[#fdb813] font-heading font-black text-xs uppercase tracking-widest mb-4">
              PROUDLY SERVING RESIDENTIAL & COMMERCIAL TEXAS
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-none">
              OUR <span className="text-[#fdb813]">SERVICES</span>
            </h1>
            <p className="text-zinc-300 text-lg sm:text-xl mt-4 leading-relaxed font-normal">
              Heavy equipment, prompt crews, and transparent pricing. We remove junk, clear construction debris, and deliver bulk aggregate materials across Southeast Texas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Breakdown List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        {coreServices.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-10 rounded-2xl bg-[#141822] border border-zinc-800/80 shadow-xl ${
                isEven ? '' : 'lg:grid-flow-dense'
              }`}
            >
              {/* Image Side */}
              <div className={`lg:col-span-6 ${isEven ? '' : 'lg:col-start-7'}`}>
                <div className="relative rounded-xl overflow-hidden border border-zinc-700 shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[320px] sm:h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-[#fdb813] uppercase border border-amber-400/30">
                    {service.subtitle}
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? '' : 'lg:col-start-1'}`}>
                <div>
                  <span className="font-heading font-black text-xs text-[#fdb813] tracking-widest uppercase">
                    SERVICE 0{index + 1}
                  </span>
                  <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight uppercase mt-1">
                    {service.title}
                  </h2>
                </div>

                <p className="text-zinc-300 text-base leading-relaxed">
                  {service.longDescription}
                </p>

                {/* Key Features List */}
                <div className="space-y-2.5 pt-1">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#fdb813] flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-300 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing / Booking Footer */}
                <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-zinc-400">
                    <span className="text-white font-bold block text-sm">Pricing Estimate:</span>
                    {service.pricingGuide}
                  </div>

                  <button
                    onClick={onOpenQuoteModal}
                    className="px-5 py-2.5 bg-[#fdb813] hover:bg-[#e5a40b] text-black font-heading font-black text-sm uppercase tracking-wider rounded shadow transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>BOOK THIS SERVICE</span>
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* What We Take vs What We Don't Take Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0e1118] border-t border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-white uppercase">
              MATERIALS WE <span className="text-[#fdb813]">ACCEPT</span>
            </h2>
            <p className="text-zinc-400 text-base mt-2">
              We handle nearly all non-hazardous residential and commercial materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What We Take */}
            <div className="p-8 rounded-2xl bg-zinc-900/60 border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h3 className="font-heading font-black text-2xl text-white uppercase">
                  WHAT WE TAKE
                </h3>
              </div>
              <ul className="space-y-3">
                {whatWeTake.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-zinc-300 text-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Cannot Take */}
            <div className="p-8 rounded-2xl bg-zinc-900/60 border border-red-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center">
                  <XCircle className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h3 className="font-heading font-black text-2xl text-white uppercase">
                  WHAT WE DO NOT TAKE
                </h3>
              </div>
              <ul className="space-y-3">
                {whatWeCannotTake.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-zinc-300 text-sm">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-500 via-[#fdb813] to-amber-600 rounded-2xl p-8 sm:p-12 text-black shadow-2xl">
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight">
            NEED A CUSTOM HAULING OR MATERIAL QUOTE?
          </h2>
          <p className="text-black/80 font-medium text-base sm:text-lg max-w-xl mx-auto mt-2">
            Call or text us with photos of your site for an immediate estimate!
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-3.5 bg-black hover:bg-zinc-900 text-white font-heading font-black text-lg uppercase tracking-wider rounded shadow-xl cursor-pointer"
            >
              REQUEST FREE QUOTE NOW
            </button>
            <a
              href="tel:4092184240"
              className="px-8 py-3.5 bg-white hover:bg-zinc-100 text-black font-heading font-black text-lg uppercase tracking-wider rounded shadow-xl flex items-center gap-2"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>409-218-4240</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
