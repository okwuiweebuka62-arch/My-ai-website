import React, { useState } from 'react';
import { X, ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { NexoraLogoIcon } from './Logos';

interface AuthModalProps {
  isOpen: boolean;
  mode: 'login' | 'signup';
  onClose: () => void;
  onSwitchMode: (newMode: 'login' | 'signup') => void;
}

export function AuthModal({ isOpen, mode, onClose, onSwitchMode }: AuthModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#0b0c12] border border-neutral-800 rounded-3xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <NexoraLogoIcon className="w-8 h-8" />
          <span className="text-xl font-bold tracking-tight text-white">Nexora AI</span>
        </div>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">
              {mode === 'signup' ? 'Welcome to Nexora AI!' : 'Signed in successfully!'}
            </h3>
            <p className="text-sm text-neutral-400">
              {mode === 'signup' ? 'Preparing your trial sandbox environment...' : 'Redirecting to your workspace...'}
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
              {mode === 'signup' ? 'Start your 14-day free trial' : 'Welcome back to Nexora AI'}
            </h2>
            <p className="text-sm text-neutral-400 mb-6">
              {mode === 'signup'
                ? 'No credit card required. Full access to 500+ AI models and automated pipelines.'
                : 'Access your models, pipelines, and autonomous agents.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#11131c] border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">Password</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#11131c] border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#6029f6] via-[#4f46e5] to-[#3b82f6] text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 hover:opacity-95 transition"
              >
                <span>{mode === 'signup' ? 'Create Free Account' : 'Sign In'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-neutral-800 text-center flex flex-col gap-3">
              <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-500">
                <ShieldCheck className="w-4 h-4 text-neutral-400" />
                <span>Enterprise SOC-2 Type II Certified & GDPR Compliant</span>
              </div>

              <p className="text-xs text-neutral-400">
                {mode === 'signup' ? 'Already have an account?' : "Don't have an account yet?"}{' '}
                <button
                  type="button"
                  onClick={() => onSwitchMode(mode === 'signup' ? 'login' : 'signup')}
                  className="text-indigo-400 hover:text-indigo-300 underline font-medium"
                >
                  {mode === 'signup' ? 'Log in' : 'Start Free Trial'}
                </button>
              </p>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
