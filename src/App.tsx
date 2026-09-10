/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { MetricCards } from './components/MetricCards';
import { GoogleLogo, MicrosoftLogo, AdobeLogo, NotionLogo, SpotifyLogo } from './components/Logos';
import { DemoModal } from './components/DemoModal';
import { AuthModal } from './components/AuthModal';

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'login' | 'signup' }>({
    isOpen: false,
    mode: 'signup',
  });

  const handleOpenAuth = (mode: 'login' | 'signup') => {
    setAuthModal({ isOpen: true, mode });
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col justify-between selection:bg-indigo-600 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Background Video (Muted, looping continuously, no black overlay for full visibility) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        src="https://res.cloudinary.com/tcbfgzom/video/upload/v1789015395/Robot_turning_head_20260909213004.mp4"
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        {/* Top Navigation */}
        <Navbar onOpenAuth={handleOpenAuth} />

        {/* Main Hero Section */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-14 pt-8 sm:pt-14 pb-16 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Left Column: Hero Content & CTAs */}
            <div className="lg:col-span-7 flex flex-col pr-0 lg:pr-6 xl:pr-10">
              {/* Eyebrow badge with gradient bar */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-6 sm:mb-8"
              >
                {/* Purple-to-blue gradient accent bar */}
                <div className="w-8 sm:w-10 h-[2.5px] bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] rounded-full flex-shrink-0" />
                <span className="text-[11px] sm:text-xs tracking-[0.2em] font-medium text-neutral-400 uppercase select-none">
                  NEXT-GEN AI FOR A SMARTER TOMORROW
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[46px] sm:text-[68px] lg:text-[76px] xl:text-[84px] font-extrabold tracking-[-0.03em] leading-[1.06] text-white mb-6 drop-shadow-sm"
              >
                Build, Create,
                <br />
                <span className="bg-gradient-to-r from-[#9d5cf7] via-[#6366f1] to-[#38bdf8] bg-clip-text text-transparent">
                  Automate
                </span>{' '}
                with AI
              </motion.h1>

              {/* Description Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-xl mb-9 font-normal drop-shadow-sm"
              >
                Nexora AI gives you powerful tools, intelligent assistants, and customizable AI models to turn your ideas into reality — faster, easier, and smarter.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 sm:gap-5 mb-16 sm:mb-20"
              >
                {/* Primary Button: Start Free Trial */}
                <button
                  onClick={() => handleOpenAuth('signup')}
                  id="hero-start-trial-btn"
                  className="group cursor-pointer bg-gradient-to-r from-[#6029f6] via-[#4f46e5] to-[#3b82f6] hover:opacity-95 text-white font-medium text-sm sm:text-base px-7 sm:px-8 py-3.5 rounded-full flex items-center gap-2 shadow-lg shadow-indigo-600/35 transition-all"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Secondary Button: Watch Demo */}
                <button
                  onClick={() => setDemoOpen(true)}
                  id="hero-watch-demo-btn"
                  className="group cursor-pointer bg-[#0a0a0d]/80 hover:bg-[#12131a] backdrop-blur-md border border-neutral-700/80 hover:border-neutral-500 text-white font-medium text-sm sm:text-base px-6 sm:px-7 py-3.5 rounded-full flex items-center gap-3 transition-all"
                >
                  <span>Watch Demo</span>
                  {/* Outlined Play Circle Icon matching source */}
                  <div className="w-6 h-6 rounded-full border border-neutral-400 group-hover:border-white flex items-center justify-center transition-colors">
                    <svg
                      className="w-2.5 h-2.5 fill-current text-white translate-x-[1px]"
                      viewBox="0 0 10 12"
                    >
                      <polygon points="0,0 10,6 0,12" />
                    </svg>
                  </div>
                </button>
              </motion.div>

              {/* Trusted By Section (Bottom Left) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="pt-2"
              >
                <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-5">
                  TRUSTED BY INNOVATORS WORLDWIDE
                </p>
                <div className="flex flex-wrap items-center gap-7 sm:gap-9 opacity-85 hover:opacity-100 transition-opacity">
                  <GoogleLogo />
                  <MicrosoftLogo />
                  <AdobeLogo />
                  <NotionLogo />
                  <SpotifyLogo />
                </div>
              </motion.div>
            </div>

            {/* Right Column: Key Metrics & Feature Highlights */}
            {/* Note the subtle thin vertical divider line running down on desktop */}
            <div className="lg:col-span-5 lg:border-l lg:border-neutral-800/80 lg:pl-10 xl:pl-14 flex flex-col justify-start pt-2 sm:pt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.15] drop-shadow-sm">
                  Powerful AI
                  <br />
                  for Real Results
                </h2>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mt-3.5 max-w-sm font-normal drop-shadow-sm">
                  From content creation to code generation, Nexora AI helps you work smarter and achieve more.
                </p>
              </motion.div>

              {/* 3 Metric Cards */}
              <MetricCards />
            </div>
          </div>
        </main>
      </div>

      {/* Interactive Modals */}
      <DemoModal
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
        onStartTrial={() => handleOpenAuth('signup')}
      />

      <AuthModal
        isOpen={authModal.isOpen}
        mode={authModal.mode}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        onSwitchMode={(newMode) => setAuthModal({ isOpen: true, mode: newMode })}
      />
    </div>
  );
}
