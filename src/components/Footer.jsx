import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import Logo from '../assets/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-[#07080a] text-slate-400 border-t border-zinc-800/80 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row matching Reference */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-zinc-800/60">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="group">
              <Logo />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-semibold text-slate-300 hover:text-[#fdb813] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Phone Information */}
          <a
            href="tel:4092184240"
            className="flex items-center gap-3 group text-left transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-[#fdb813]/30 flex items-center justify-center text-[#fdb813] group-hover:bg-[#fdb813] group-hover:text-black transition-colors">
              <Phone className="w-5 h-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl text-white group-hover:text-[#fdb813] transition-colors leading-none tracking-tight">
                409-218-4240
              </span>
              <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold mt-0.5">
                RESIDENTIAL & COMMERCIAL
              </span>
            </div>
          </a>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} Baty Services. All Rights Reserved.</p>
          <p className="font-medium text-zinc-400 italic">
            A cleaner Texas. A stronger Tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
}
