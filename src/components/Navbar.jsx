import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';
import Logo from '../assets/Logo';

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0c10]/95 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.8)] border-b border-zinc-800'
          : 'bg-[#0a0c10] border-b border-zinc-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group">
            <Logo />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#fdb813]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#fdb813] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Section: Phone Info & Free Quote Button */}
          <div className="hidden sm:flex items-center gap-5">
            {/* Phone Call Button / Display */}
            <a
              href="tel:4092184240"
              className="flex items-center gap-2.5 group text-left px-2 py-1"
            >
              <div className="w-9 h-9 rounded-full bg-amber-400/10 border border-[#fdb813]/30 flex items-center justify-center text-[#fdb813] group-hover:bg-[#fdb813] group-hover:text-black transition-colors">
                <Phone className="w-4 h-4 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-lg text-white group-hover:text-[#fdb813] transition-colors leading-none tracking-tight">
                  409-218-4240
                </span>
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold mt-0.5">
                  RESIDENTIAL & COMMERCIAL
                </span>
              </div>
            </a>

            {/* GET A FREE QUOTE Button */}
            <button
              onClick={onOpenQuoteModal}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-[#fdb813] hover:bg-[#e5a40b] text-black font-heading font-black text-base tracking-wider uppercase rounded shadow-[0_4px_14px_rgba(253,184,19,0.35)] hover:shadow-[0_6px_20px_rgba(253,184,19,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="sm:hidden px-3 py-1.5 bg-[#fdb813] text-black font-heading font-black text-xs uppercase rounded"
            >
              FREE QUOTE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-slate-200 hover:text-[#fdb813] hover:bg-zinc-800 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0c10] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded text-base font-semibold tracking-wide transition-colors ${
                    isActive
                      ? 'bg-amber-400/10 text-[#fdb813] border-l-4 border-[#fdb813]'
                      : 'text-slate-300 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-3">
            <a
              href="tel:4092184240"
              className="flex items-center gap-3 p-3 bg-zinc-900 rounded-lg border border-zinc-800"
            >
              <div className="w-10 h-10 rounded-full bg-[#fdb813] text-black flex items-center justify-center">
                <Phone className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-lg text-white">409-218-4240</span>
                <span className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">
                  Residential & Commercial
                </span>
              </div>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#fdb813] text-black font-heading font-black text-lg uppercase tracking-wider rounded shadow-md"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowRight className="w-5 h-5 stroke-[3]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
