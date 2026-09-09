import React from 'react';
import { MessageSquare, FileText, Truck, CheckCircle2, ChevronRight } from 'lucide-react';

export default function ProcessStep() {
  const steps = [
    {
      number: '1',
      title: 'TELL US WHAT YOU NEED',
      description: 'Share your project details with us.',
      icon: <MessageSquare className="w-5 h-5 text-zinc-700" />,
    },
    {
      number: '2',
      title: 'GET YOUR QUOTE',
      description: "We'll provide a clear and fair quote.",
      icon: <FileText className="w-5 h-5 text-zinc-700" />,
    },
    {
      number: '3',
      title: 'WE HANDLE THE MESS',
      description: 'Our crew gets to work and takes care of everything.',
      icon: <Truck className="w-5 h-5 text-zinc-700" />,
    },
    {
      number: '4',
      title: 'ENJOY A CLEAN SITE',
      description: "A cleaner, safer space for what's next.",
      icon: <CheckCircle2 className="w-5 h-5 text-zinc-700" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
      {steps.map((step, idx) => (
        <div key={idx} className="relative flex flex-col items-start bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow group">
          {/* Header Row: Yellow Number Badge + Icon + Arrow */}
          <div className="w-full flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {/* Yellow circular number pill */}
              <div className="w-9 h-9 rounded-full bg-[#fdb813] text-black font-heading font-black text-lg flex items-center justify-center shadow">
                {step.number}
              </div>
              <div className="p-1.5 bg-slate-100 rounded-lg">
                {step.icon}
              </div>
            </div>

            {/* Connecting arrow if not last step */}
            {idx < steps.length - 1 && (
              <div className="hidden lg:block text-zinc-400 group-hover:text-amber-500 transition-colors">
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </div>
            )}
          </div>

          {/* Title */}
          <h4 className="font-heading font-black text-lg text-zinc-900 uppercase tracking-wide mb-1.5 group-hover:text-amber-600 transition-colors">
            {step.title}
          </h4>

          {/* Description */}
          <p className="text-zinc-600 text-sm leading-relaxed">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
