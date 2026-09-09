import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { asset } from '../utils/assets';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    serviceNeeded: '',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const servicesList = [
    'Debris & Junk Removal',
    'Construction & Property Cleanup',
    'Dirt, Gravel & Material Delivery',
    'Residential Property Cleanout',
    'Commercial Site Debris Clearing',
    'Storm & Hurricane Disaster Cleanup',
    'Other / Custom Hauling',
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^[0-9+()-\s]{7,20}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }
    if (!formData.serviceNeeded) newErrors.serviceNeeded = 'Please select a service';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="quote" className="relative bg-[#0b0e14] py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Texas Flag subtle overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-15 overflow-hidden">
        <img
          src={asset('/images/texas-flag.jpg')}
          alt="Texas Flag Texture"
          className="w-full h-full object-cover mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e14] via-[#0b0e14]/90 to-[#0b0e14]/95" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Contact Points */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="font-heading font-black text-sm sm:text-base text-[#fdb813] tracking-widest uppercase">
                LET'S GET IT DONE
              </span>
              <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-none mt-1">
                GET A <span className="text-[#fdb813]">FREE QUOTE</span>
              </h2>
              <p className="text-zinc-300 text-base sm:text-lg mt-3">
                Fill out the form and we'll get back to you quickly.
              </p>
            </div>

            {/* Direct Contact Cards matching Reference Image */}
            <div className="space-y-4 pt-2">
              {/* Phone Card */}
              <a
                href="tel:4092184240"
                className="flex items-center gap-4 p-3.5 bg-[#141822]/80 backdrop-blur-sm border border-zinc-800 rounded-xl hover:border-[#fdb813]/60 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#fdb813] text-black flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="font-heading font-black text-xl text-white group-hover:text-[#fdb813] transition-colors leading-none tracking-tight">
                    409-218-4240
                  </div>
                  <div className="text-xs text-zinc-400 font-semibold mt-1">
                    Call or Text
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:batyservices@gmail.com"
                className="flex items-center gap-4 p-3.5 bg-[#141822]/80 backdrop-blur-sm border border-zinc-800 rounded-xl hover:border-[#fdb813]/60 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#fdb813] text-black flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <div className="font-heading font-black text-xl text-white group-hover:text-[#fdb813] transition-colors leading-none tracking-tight">
                    batyservices@gmail.com
                  </div>
                  <div className="text-xs text-zinc-400 font-semibold mt-1">
                    Email Us
                  </div>
                </div>
              </a>

              {/* Service Area Card */}
              <div className="flex items-center gap-4 p-3.5 bg-[#141822]/80 backdrop-blur-sm border border-zinc-800 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-[#fdb813] text-black flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <div className="font-heading font-black text-xl text-white leading-none tracking-tight">
                    Serving Texas
                  </div>
                  <div className="text-xs text-zinc-400 font-semibold mt-1">
                    Residential & Commercial
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean White Quote Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-zinc-100">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-zinc-900 uppercase">
                    QUOTE REQUEST RECEIVED!
                  </h3>
                  <p className="text-zinc-600 text-sm sm:text-base max-w-md mx-auto">
                    Thank you, <strong className="text-zinc-900">{formData.fullName}</strong>. Our dispatch team will review your project details and call or text you shortly at{' '}
                    <strong className="text-zinc-900">{formData.phoneNumber}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phoneNumber: '',
                        emailAddress: '',
                        serviceNeeded: '',
                        projectDetails: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white font-heading font-black text-sm uppercase rounded tracking-wider cursor-pointer"
                  >
                    SUBMIT ANOTHER REQUEST
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Top Two Column Inputs: Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 bg-zinc-50 border rounded-lg text-zinc-900 text-sm placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all ${
                          errors.fullName ? 'border-red-500' : 'border-zinc-300'
                        }`}
                      />
                      {errors.fullName && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.fullName}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="(409) 000-0000"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData({ ...formData, phoneNumber: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 bg-zinc-50 border rounded-lg text-zinc-900 text-sm placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all ${
                          errors.phoneNumber ? 'border-red-500' : 'border-zinc-300'
                        }`}
                      />
                      {errors.phoneNumber && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.phoneNumber}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Email & Service Needed */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.emailAddress}
                        onChange={(e) =>
                          setFormData({ ...formData, emailAddress: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-300 rounded-lg text-zinc-900 text-sm placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        Service Needed <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) =>
                          setFormData({ ...formData, serviceNeeded: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 bg-zinc-50 border rounded-lg text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all ${
                          errors.serviceNeeded ? 'border-red-500' : 'border-zinc-300'
                        }`}
                      >
                        <option value="">Select a service...</option>
                        {servicesList.map((srv, idx) => (
                          <option key={idx} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                      {errors.serviceNeeded && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.serviceNeeded}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Project Details <span className="text-zinc-400 font-normal">(optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe the items, location, or materials needed..."
                      value={formData.projectDetails}
                      onChange={(e) =>
                        setFormData({ ...formData, projectDetails: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-300 rounded-lg text-zinc-900 text-sm placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button matching Reference */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#fdb813] hover:bg-[#e5a40b] text-black font-heading font-black text-lg tracking-wider uppercase rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <span>REQUEST YOUR FREE QUOTE</span>
                    <ArrowRight className="w-5 h-5 stroke-[3]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
