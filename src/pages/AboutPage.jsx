import React from 'react';
import { ArrowRight, ShieldCheck, ThumbsUp, Users, Truck, HardHat, Award, Phone } from 'lucide-react';
import { TexasStateBadge, StampBadge } from '../components/TexasBadge';
import { asset } from '../utils/assets';

export default function AboutPage({ onOpenQuoteModal }) {
  const values = [
    {
      title: 'Punctual & Reliable',
      desc: 'We respect your schedule. When our dispatch gives you a time window, we show up ready to work with the right equipment.',
      icon: <ThumbsUp className="w-6 h-6 text-[#fdb813]" />,
    },
    {
      title: 'Locally Owned Texas Team',
      desc: 'Born and raised in Texas, we treat every neighborhood, residential property, and commercial job site like our own backyard.',
      icon: <Users className="w-6 h-6 text-[#fdb813]" />,
    },
    {
      title: 'Safety & Environmental Standards',
      desc: 'We follow strict eco-sorting standards, diverting metals, lumber, and clean aggregates from landfills whenever possible.',
      icon: <ShieldCheck className="w-6 h-6 text-[#fdb813]" />,
    },
    {
      title: 'Heavy Duty Fleet',
      desc: 'From tandem dump trucks to compact Bobcat loaders, our equipment is maintained to handle the most demanding jobs without delays.',
      icon: <Truck className="w-6 h-6 text-[#fdb813]" />,
    },
  ];

  return (
    <div className="bg-[#0b0e14] text-white min-h-screen">
      {/* Banner */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#141822] to-[#0b0e14] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#fdb813]/10 border border-[#fdb813]/30 text-[#fdb813] font-heading font-black text-xs uppercase tracking-widest mb-4">
              ABOUT BATY SERVICES
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-none">
              MORE THAN <br />
              <span className="text-[#fdb813]">JUNK REMOVAL</span>
            </h1>
            <p className="text-zinc-300 text-lg sm:text-xl mt-4 leading-relaxed font-normal">
              At Baty Services, we take pride in helping our community keep properties clean, safe and clutter-free. Whether it's a small residential pickup or a large commercial cleanup, our team shows up on time, works hard and gets the job done right.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Truck Photo */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase">
              A CLEANER TEXAS. <br />
              <span className="text-[#fdb813]">A STRONGER TOMORROW.</span>
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Baty Services was established with a singular mission: to provide homeowners, contractors, and business owners throughout Texas with honest, dependable, and heavy-duty property clearing and aggregate delivery.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Too often, property owners struggle with unreliable haulers who either don't show up, lack the machinery to handle heavy commercial debris, or hit clients with surprise disposal fees at the landfill scale. We do business the old-fashioned Texas way—upfront quotes, handshake integrity, and spotless results.
            </p>

            <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-4">
              <HardHat className="w-10 h-10 text-[#fdb813] flex-shrink-0" />
              <div>
                <h4 className="font-heading font-black text-lg text-white uppercase">
                  Fully Licensed & Insured
                </h4>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Complete commercial liability and property protection on every single residential and industrial dispatch.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-zinc-800 shadow-2xl bg-zinc-950">
              <img
                src={asset('/images/about-truck.jpg')}
                alt="Baty Services Fleet in Texas"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute top-4 right-4">
                <TexasStateBadge />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0e1118] border-t border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-black text-4xl text-white uppercase">
              WHY TEXAS TRUSTS <span className="text-[#fdb813]">BATY SERVICES</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2">
              Our core principles guide every haul, delivery, and property sweep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-[#fdb813]/40 transition-colors"
              >
                <div className="p-3 w-fit rounded-lg bg-amber-400/10 mb-4">
                  {v.icon}
                </div>
                <h3 className="font-heading font-black text-xl text-white uppercase mb-2">
                  {v.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <StampBadge />
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase mt-4">
            READY TO CLEAR YOUR PROPERTY?
          </h2>
          <p className="text-zinc-400 text-base max-w-lg mx-auto">
            Contact Baty Services today for your free estimate. One call does it all.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-3.5 bg-[#fdb813] hover:bg-[#e5a40b] text-black font-heading font-black text-base uppercase tracking-wider rounded shadow-lg cursor-pointer"
            >
              GET A FREE QUOTE
            </button>
            <a
              href="tel:4092184240"
              className="px-8 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white font-heading font-black text-base uppercase tracking-wider rounded border border-zinc-700 flex items-center gap-2"
            >
              <Phone className="w-5 h-5 text-[#fdb813] fill-[#fdb813]" />
              <span>409-218-4240</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
