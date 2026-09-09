import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ThumbsUp, Users, ShieldCheck } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import ServiceCard from '../components/ServiceCard';
import ProcessStep from '../components/ProcessStep';
import BeforeAfterCard from '../components/BeforeAfterCard';
import Testimonials from '../components/Testimonials';
import QuoteForm from '../components/QuoteForm';
import { StampBadge, TexasStateBadge } from '../components/TexasBadge';
import { coreServices } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { asset } from '../utils/assets';

export default function HomePage({ onOpenQuoteModal }) {
  const homeProjects = projectsData.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative bg-[#0a0c10] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-zinc-800">
        {/* Hero Background Elements */}
        <div className="absolute inset-0 z-0 opacity-25">
          <div className="absolute inset-0 bg-[radial-gradient(#fdb813_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Category Pill Tagline matching reference */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900/90 border border-zinc-700/80">
                <span className="font-heading font-bold text-xs sm:text-sm tracking-widest text-zinc-300 uppercase">
                  RESIDENTIAL • COMMERCIAL • TEXAS
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] drop-shadow-md">
                WE REMOVE <br />
                <span className="text-[#fdb813]">THE MESS!</span>
              </h1>

              {/* Subtitle & Slogan */}
              <div className="space-y-2">
                <p className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-slate-200 tracking-wide">
                  Debris & Junk Removal <span className="text-[#fdb813]">|</span> Construction Cleanup <br className="hidden sm:block" />
                  Dirt, Gravel & Material Delivery
                </p>
                <p className="text-sm sm:text-base text-zinc-400 font-medium italic">
                  A cleaner Texas. A stronger tomorrow.
                </p>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {/* GET A FREE QUOTE Button */}
                <button
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#fdb813] hover:bg-[#e5a40b] text-black font-heading font-black text-lg sm:text-xl tracking-wider uppercase rounded shadow-[0_6px_20px_rgba(253,184,19,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>GET A FREE QUOTE</span>
                  <ArrowRight className="w-5 h-5 stroke-[3]" />
                </button>

                {/* Direct Phone Button */}
                <a
                  href="tel:4092184240"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-black hover:bg-zinc-900 text-white font-heading font-black text-lg sm:text-xl tracking-wider uppercase rounded border border-zinc-700 shadow-md hover:border-[#fdb813]/60 transition-all"
                >
                  <Phone className="w-5 h-5 text-[#fdb813] fill-[#fdb813]" />
                  <span>409-218-4240</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Column: Commercial Dump Truck dumping debris */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-zinc-950">
                <img
                  src={asset('/images/hero-truck.jpg')}
                  alt="Baty Services Dump Truck clearing construction debris in Texas"
                  className="w-full h-[360px] sm:h-[440px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                {/* Texas State Badge overlay matching reference top right */}
                <div className="absolute top-4 right-4">
                  <TexasStateBadge />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRUST BADGES ROW */}
      {/* ========================================================================= */}
      <TrustBadges />

      {/* ========================================================================= */}
      {/* 3. OUR SERVICES SECTION (Light / Clean Background matching reference) */}
      {/* ========================================================================= */}
      <section className="bg-[#f8f9fb] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          {/* Section Header Row with Stamp Badge & View All Services */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-zinc-950 tracking-tight uppercase leading-none">
                OUR <span className="text-amber-500">SERVICES</span>
              </h2>
              <p className="text-zinc-600 text-base sm:text-lg mt-2 font-medium max-w-2xl">
                Full-service junk removal and site cleanup for homes, businesses, and construction projects.
              </p>
            </div>

            <div className="flex items-center gap-6">
              {/* Stamp Badge: "SAME MESS. A CLEANER TOMORROW." */}
              <StampBadge />

              {/* VIEW ALL SERVICES Button */}
              <Link
                to="/services"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#fdb813] hover:bg-[#e5a40b] text-black font-heading font-black text-sm uppercase tracking-wider rounded shadow transition-all transform hover:-translate-y-0.5"
              >
                <span>VIEW ALL SERVICES</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </Link>
            </div>
          </div>

          {/* 4 Core Services Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Mobile view button */}
          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#fdb813] text-black font-heading font-black text-base uppercase rounded shadow"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ABOUT BATY SERVICES SECTION (Dark Charcoal Theme matching reference) */}
      {/* ========================================================================= */}
      <section className="bg-[#0f1218] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="font-heading font-black text-sm sm:text-base text-[#fdb813] tracking-widest uppercase">
                  ABOUT BATY SERVICES
                </span>
                <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-none mt-1">
                  MORE THAN <br />
                  <span className="text-[#fdb813]">JUNK REMOVAL</span>
                </h2>
              </div>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                At Baty Services, we take pride in helping our community keep properties clean,
                safe and clutter-free. Whether it's a small residential pickup or a large
                commercial cleanup, our team shows up on time, works hard and gets the job done right.
              </p>

              {/* 3 Value Indicator Badges matching Reference */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                  <div className="w-8 h-8 rounded bg-amber-400/10 text-[#fdb813] flex items-center justify-center flex-shrink-0">
                    <ThumbsUp className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span className="font-heading font-black text-xs sm:text-sm text-white uppercase leading-tight">
                    Reliable & <br />Professional
                  </span>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                  <div className="w-8 h-8 rounded bg-amber-400/10 text-[#fdb813] flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span className="font-heading font-black text-xs sm:text-sm text-white uppercase leading-tight">
                    Locally Owned <br />& Operated
                  </span>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                  <div className="w-8 h-8 rounded bg-amber-400/10 text-[#fdb813] flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span className="font-heading font-black text-xs sm:text-sm text-white uppercase leading-tight">
                    Committed to <br />a Cleaner Texas
                  </span>
                </div>
              </div>

              {/* LEARN MORE ABOUT US CTA */}
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#fdb813] hover:bg-[#e5a40b] text-black font-heading font-black text-base uppercase tracking-wider rounded shadow-[0_4px_15px_rgba(253,184,19,0.3)] transition-all transform hover:-translate-y-0.5"
                >
                  <span>LEARN MORE ABOUT US</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </Link>
              </div>
            </div>

            {/* Right Image Column: Baty Services Dump Truck */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-zinc-800 shadow-2xl bg-zinc-950">
                <img
                  src={asset('/images/about-truck.jpg')}
                  alt="Baty Services Commercial Heavy Duty Equipment"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Baty Truck Branding Overlay Label */}
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-amber-400/40">
                  <div className="font-heading font-black text-lg text-white tracking-wider uppercase">
                    BATY SERVICES FLEET
                  </div>
                  <div className="text-[11px] text-[#fdb813] font-bold uppercase">
                    Heavy Hauling • Bobcats • Dump Trailers
                  </div>
                </div>

                {/* Texas Badge Overlay bottom right */}
                <div className="absolute bottom-4 right-4 hidden sm:block">
                  <div className="font-heading font-black text-xs text-black bg-[#fdb813] px-3 py-1.5 rounded uppercase tracking-wider shadow">
                    CLEANER TEXAS STRONGER TOMORROW.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OUR SIMPLE PROCESS SECTION (Light / Clean Background) */}
      {/* ========================================================================= */}
      <section className="bg-[#f8f9fb] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-zinc-950 tracking-tight uppercase leading-none">
                OUR SIMPLE <span className="text-amber-500">PROCESS</span>
              </h2>
              <p className="text-zinc-600 text-base sm:text-lg mt-2 font-medium">
                One call. One crew. One cleaner site.
              </p>
            </div>

            <div>
              <StampBadge />
            </div>
          </div>

          {/* 4 Step Process Component */}
          <ProcessStep />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. RECENT PROJECTS SECTION (Light / Clean Background) */}
      {/* ========================================================================= */}
      <section className="bg-[#f8f9fb] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-heading font-black text-4xl sm:text-5xl text-zinc-950 tracking-tight uppercase leading-none">
                RECENT <span className="text-amber-500">PROJECTS</span>
              </h2>
              <p className="font-heading font-bold text-base text-zinc-700 tracking-wider uppercase mt-1">
                REAL JOBS. REAL RESULTS.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-zinc-300 hover:border-amber-500 text-zinc-900 font-heading font-black text-sm uppercase tracking-wider rounded shadow-sm hover:shadow transition-all"
            >
              <span>VIEW MORE PROJECTS</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </Link>
          </div>

          {/* 3 Projects Grid with Before/After Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {homeProjects.map((project) => (
              <BeforeAfterCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. WHAT OUR CLIENTS SAY (Testimonials Carousel) */}
      {/* ========================================================================= */}
      <Testimonials />

      {/* ========================================================================= */}
      {/* 8. LET'S GET IT DONE / GET A FREE QUOTE FORM */}
      {/* ========================================================================= */}
      <QuoteForm />
    </div>
  );
}
