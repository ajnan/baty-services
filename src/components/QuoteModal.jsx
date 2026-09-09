import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, Phone } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    serviceNeeded: 'Debris & Junk Removal',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#141822] border border-amber-400/40 rounded-2xl shadow-2xl p-6 sm:p-8 text-left">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-amber-400/20 text-[#fdb813] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="font-heading font-black text-2xl text-white uppercase">
              QUOTE REQUEST SUBMITTED!
            </h3>
            <p className="text-zinc-300 text-sm">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. A Baty Services dispatcher will review your request and call or text you shortly at{' '}
              <strong className="text-[#fdb813]">{formData.phoneNumber}</strong>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-[#fdb813] text-black font-heading font-black text-sm uppercase rounded tracking-wider"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="font-heading font-black text-xs text-[#fdb813] tracking-widest uppercase">
                FAST & ACCURATE ESTIMATE
              </span>
              <h3 className="font-heading font-black text-3xl text-white uppercase mt-0.5">
                GET A <span className="text-[#fdb813]">FREE QUOTE</span>
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                Tell us about your project or call{' '}
                <a href="tel:4092184240" className="text-[#fdb813] underline font-bold">
                  409-218-4240
                </a>{' '}
                for immediate assistance.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-white text-sm focus:outline-none focus:border-[#fdb813]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(409) 218-4240"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-white text-sm focus:outline-none focus:border-[#fdb813]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="email@domain.com"
                    value={formData.emailAddress}
                    onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-white text-sm focus:outline-none focus:border-[#fdb813]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Service Needed
                </label>
                <select
                  value={formData.serviceNeeded}
                  onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-white text-sm focus:outline-none focus:border-[#fdb813]"
                >
                  <option value="Debris & Junk Removal">Debris & Junk Removal</option>
                  <option value="Construction & Property Cleanup">Construction & Property Cleanup</option>
                  <option value="Dirt, Gravel & Material Delivery">Dirt, Gravel & Material Delivery</option>
                  <option value="Residential Cleanout">Residential Cleanout</option>
                  <option value="Commercial Site Clearing">Commercial Site Clearing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Project Details
                </label>
                <textarea
                  rows={2}
                  placeholder="Estimated load size, location in Texas, or preferred timeline..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-white text-sm focus:outline-none focus:border-[#fdb813] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#fdb813] hover:bg-[#e5a40b] text-black font-heading font-black text-base uppercase tracking-wider rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>REQUEST FREE QUOTE NOW</span>
                <ArrowRight className="w-5 h-5 stroke-[3]" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
