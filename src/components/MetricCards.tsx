import React, { useState } from 'react';
import { Zap, Layers, Globe, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MetricItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  detail: string;
  highlights: string[];
}

const METRICS: MetricItem[] = [
  {
    id: 'users',
    icon: Zap,
    value: '2M+',
    label: 'Active Users',
    detail: 'Over 2 million engineers, designers, and creators automate workflows daily with Nexora AI.',
    highlights: ['99.98% system uptime', 'Average 4.2x speedup in production', 'Enterprise-grade zero-retention privacy']
  },
  {
    id: 'models',
    icon: Layers,
    value: '500+',
    label: 'AI Models',
    detail: 'Curated library of state-of-the-art multimodal, reasoning, vision, and coding models ready for zero-latency deployment.',
    highlights: ['Ultra-fast inference caching', 'Custom fine-tuning weights', 'Seamless model switching with unified API']
  },
  {
    id: 'countries',
    icon: Globe,
    value: '150+',
    label: 'Countries',
    detail: 'Globally distributed edge execution network serving low-latency requests in over 150 countries.',
    highlights: ['Sub-30ms global edge routing', 'Multilingual support in 95+ languages', 'Compliant with GDPR, HIPAA & SOC-2']
  }
];

export function MetricCards() {
  const [selectedMetric, setSelectedMetric] = useState<MetricItem | null>(null);

  return (
    <>
      <div id="metric-cards-container" className="flex flex-col gap-3.5 w-full">
        {METRICS.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * index, duration: 0.4 }}
              onClick={() => setSelectedMetric(metric)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedMetric(metric)}
              id={`metric-card-${metric.id}`}
              className="group w-full bg-[#0b0c10]/75 hover:bg-[#101217]/85 backdrop-blur-md border border-neutral-800/80 hover:border-neutral-700/90 rounded-2xl p-4 sm:px-5 sm:py-4 flex items-center justify-between transition-all duration-200 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-indigo-950/20"
            >
              <div className="flex items-center gap-4">
                {/* Circular navy icon container matching reference */}
                <div className="w-12 h-12 rounded-full bg-[#0e1424] border border-[#1e284a]/80 flex items-center justify-center text-[#3b82f6] group-hover:scale-105 transition-transform flex-shrink-0">
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>
                
                {/* Metric values & labels */}
                <div className="flex flex-col text-left">
                  <span className="text-2xl sm:text-[26px] font-bold text-white tracking-tight leading-none mb-1">
                    {metric.value}
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-400 font-medium">
                    {metric.label}
                  </span>
                </div>
              </div>

              {/* Right Arrow indicator matching reference */}
              <div className="text-neutral-500 group-hover:text-neutral-200 transition-colors p-1">
                <ArrowRight className="w-5 h-5 stroke-[1.8] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Metric Detail Modal */}
      <AnimatePresence>
        {selectedMetric && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0f1117] border border-neutral-800 rounded-3xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedMetric(null)}
                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-[#0e1424] border border-[#1e284a] flex items-center justify-center text-[#3b82f6]">
                  <selectedMetric.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white tracking-tight">{selectedMetric.value}</h3>
                  <p className="text-neutral-400 text-sm font-medium">{selectedMetric.label}</p>
                </div>
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                {selectedMetric.detail}
              </p>

              <div className="space-y-2.5 mb-6">
                {selectedMetric.highlights.map((point, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedMetric(null)}
                className="w-full py-3 bg-gradient-to-r from-[#6029f6] via-[#4f46e5] to-[#3b82f6] text-white font-medium rounded-xl hover:opacity-90 transition"
              >
                Close Insights
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
