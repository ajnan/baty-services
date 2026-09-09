import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calculator, CheckCircle2, ArrowRight, Clock } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';

export default function ContactPage() {
  const [propertyType, setPropertyType] = useState('residential');
  const [serviceType, setServiceType] = useState('junk');
  const [volume, setVolume] = useState('half');

  // Interactive Estimate Calculation
  const calculateEstimate = () => {
    let baseMin = 150;
    let baseMax = 250;

    if (serviceType === 'junk') {
      if (volume === 'single') { baseMin = 95; baseMax = 150; }
      else if (volume === 'quarter') { baseMin = 180; baseMax = 260; }
      else if (volume === 'half') { baseMin = 295; baseMax = 395; }
      else if (volume === 'full') { baseMin = 495; baseMax = 650; }
      else if (volume === 'multi') { baseMin = 950; baseMax = 1800; }
    } else if (serviceType === 'construction') {
      if (volume === 'quarter') { baseMin = 250; baseMax = 350; }
      else if (volume === 'half') { baseMin = 390; baseMax = 520; }
      else if (volume === 'full') { baseMin = 595; baseMax = 790; }
      else if (volume === 'multi') { baseMin = 1200; baseMax = 2400; }
    } else if (serviceType === 'gravel') {
      if (volume === 'quarter') { baseMin = 220; baseMax = 300; }
      else if (volume === 'half') { baseMin = 350; baseMax = 480; }
      else if (volume === 'full') { baseMin = 550; baseMax = 750; }
      else if (volume === 'multi') { baseMin = 1100; baseMax = 2200; }
    }

    if (propertyType === 'commercial') {
      baseMin = Math.round(baseMin * 1.15);
      baseMax = Math.round(baseMax * 1.15);
    }

    return { min: baseMin, max: baseMax };
  };

  const estimate = calculateEstimate();

  const serviceCities = [
    'Beaumont', 'Houston', 'Nederland', 'Port Arthur', 'Lumberton',
    'Orange', 'Silsbee', 'Vidor', 'Port Neches', 'Groves',
    'Baytown', 'Bridge City', 'Mid County', 'Kountze'
  ];

  return (
    <div className="bg-[#0b0e14] text-white min-h-screen">
      {/* Banner */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#141822] to-[#0b0e14] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#fdb813]/10 border border-[#fdb813]/30 text-[#fdb813] font-heading font-black text-xs uppercase tracking-widest mb-4">
            DISPATCH & ESTIMATE CALCULATOR
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-none">
            CONTACT & <span className="text-[#fdb813]">FREE ESTIMATE</span>
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Ready to get started? Calculate an instant ballpark estimate below or contact our Texas dispatch team directly.
          </p>
        </div>
      </section>

      {/* Interactive Ballpark Estimate Calculator Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-[#141822] border-2 border-amber-400/40 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#fdb813] text-black flex items-center justify-center">
              <Calculator className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
                INTERACTIVE COST ESTIMATOR
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm">
                Instant pricing ballpark based on volume and property type.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-zinc-800">
            {/* Step 1: Property Type */}
            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                1. Property Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setPropertyType('residential')}
                  className={`py-2.5 px-3 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
                    propertyType === 'residential'
                      ? 'bg-[#fdb813] text-black shadow'
                      : 'bg-zinc-900 text-zinc-400 border border-zinc-700'
                  }`}
                >
                  Residential
                </button>
                <button
                  type="button"
                  onClick={() => setPropertyType('commercial')}
                  className={`py-2.5 px-3 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
                    propertyType === 'commercial'
                      ? 'bg-[#fdb813] text-black shadow'
                      : 'bg-zinc-900 text-zinc-400 border border-zinc-700'
                  }`}
                >
                  Commercial
                </button>
              </div>
            </div>

            {/* Step 2: Service Type */}
            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                2. Service Category
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full py-2.5 px-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white text-xs font-bold uppercase focus:border-[#fdb813]"
              >
                <option value="junk">Debris & Junk Removal</option>
                <option value="construction">Construction Cleanup</option>
                <option value="gravel">Dirt & Gravel Delivery</option>
              </select>
            </div>

            {/* Step 3: Estimated Volume */}
            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                3. Estimated Load Size
              </label>
              <select
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="w-full py-2.5 px-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white text-xs font-bold uppercase focus:border-[#fdb813]"
              >
                <option value="single">Single Item / Light Haul</option>
                <option value="quarter">1/4 Dump Truck (Approx. 3-4 yds)</option>
                <option value="half">1/2 Dump Truck (Approx. 7-8 yds)</option>
                <option value="full">Full Heavy Dump Load (15-16 yds)</option>
                <option value="multi">Multi-Load Commercial Fleet</option>
              </select>
            </div>
          </div>

          {/* Result Card */}
          <div className="mt-8 p-6 rounded-xl bg-black/60 border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs text-zinc-400 uppercase font-semibold">
                Estimated Ballpark Range
              </span>
              <div className="font-heading font-black text-4xl sm:text-5xl text-[#fdb813] mt-0.5">
                ${estimate.min} – ${estimate.max}
              </div>
              <span className="text-[11px] text-zinc-400 italic">
                *Final quote guaranteed after quick phone confirmation or photo review.
              </span>
            </div>

            <a
              href="#quote"
              className="px-6 py-3.5 bg-[#fdb813] hover:bg-[#e5a40b] text-black font-heading font-black text-base uppercase tracking-wider rounded-lg shadow-lg flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>LOCK IN THIS QUOTE</span>
              <ArrowRight className="w-5 h-5 stroke-[3]" />
            </a>
          </div>
        </div>
      </section>

      {/* Service Area Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-[#fdb813]" />
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
              TEXAS REGIONAL SERVICE COVERAGE
            </h3>
          </div>
          <p className="text-zinc-400 text-sm mb-6 max-w-2xl">
            We provide prompt residential cleanouts, contractor hauling, and aggregate delivery throughout Southeast Texas and surrounding counties:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {serviceCities.map((city, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-lg bg-black/50 border border-zinc-800 text-center font-heading font-black text-sm text-slate-200 uppercase tracking-wide hover:border-[#fdb813] transition-colors"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Working Lead Capture Form matching reference */}
      <QuoteForm />
    </div>
  );
}
