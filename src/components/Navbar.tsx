import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { NexoraLogoIcon } from './Logos';

interface NavbarProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
}

export function Navbar({ onOpenAuth }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'Solutions', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Resources', href: '#' },
  ];

  return (
    <header id="main-navbar" className="w-full relative z-40 bg-transparent py-5 px-6 sm:px-10 lg:px-14">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <NexoraLogoIcon className="w-8 h-8 group-hover:scale-105 transition-transform" />
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Nexora AI
          </span>
        </div>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeNav === link.label;
            return (
              <button
                key={link.label}
                onClick={() => setActiveNav(link.label)}
                className={`text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-[#18181b] text-white px-5 py-2 rounded-full shadow-inner'
                    : 'text-neutral-400 hover:text-white px-4 py-2 rounded-full hover:bg-neutral-900/50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => onOpenAuth('login')}
            id="nav-login-btn"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            Log in
          </button>
          <button
            onClick={() => onOpenAuth('signup')}
            id="nav-get-started-btn"
            className="group cursor-pointer bg-gradient-to-r from-[#6029f6] via-[#4f46e5] to-[#3b82f6] hover:opacity-95 text-white text-sm font-medium px-5 py-2.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-indigo-600/25 transition-all"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[76px] bg-[#090a0f] border-b border-neutral-800 p-6 flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  setActiveNav(link.label);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-xl text-base font-medium ${
                  activeNav === link.label
                    ? 'bg-[#18181b] text-white'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('login');
              }}
              className="w-full py-2.5 text-center text-sm font-medium text-neutral-300 hover:text-white rounded-xl border border-neutral-800 hover:bg-neutral-900"
            >
              Log in
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('signup');
              }}
              className="w-full py-3 bg-gradient-to-r from-[#6029f6] via-[#4f46e5] to-[#3b82f6] text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
