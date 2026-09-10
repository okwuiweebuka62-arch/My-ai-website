import React, { useState } from 'react';
import { X, Play, Pause, Sparkles, Code2, Bot, Wand2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartTrial: () => void;
}

export function DemoModal({ isOpen, onClose, onStartTrial }: DemoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState<'automate' | 'code' | 'content'>('automate');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="bg-[#0b0c12] border border-neutral-800 rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl relative"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-[#0f1118]">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="ml-2 text-xs font-medium text-neutral-400">
              Nexora AI Studio — Live Product Tour
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition"
            aria-label="Close demo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo Stage */}
        <div className="p-6 sm:p-8">
          {/* Feature selector tabs */}
          <div className="flex items-center gap-2 mb-6 border-b border-neutral-800 pb-3 overflow-x-auto">
            <button
              onClick={() => setActiveTab('automate')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition ${
                activeTab === 'automate'
                  ? 'bg-[#181a24] text-white border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Wand2 className="w-4 h-4 text-purple-400" />
              <span>Multi-Agent Automation</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition ${
                activeTab === 'code'
                  ? 'bg-[#181a24] text-white border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Code2 className="w-4 h-4 text-blue-400" />
              <span>Autonomous Code Generation</span>
            </button>
            <button
              onClick={() => setActiveTab('content')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition ${
                activeTab === 'content'
                  ? 'bg-[#181a24] text-white border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Bot className="w-4 h-4 text-emerald-400" />
              <span>Multimodal Vision & Analytics</span>
            </button>
          </div>

          {/* Interactive Screen Preview */}
          <div className="relative rounded-2xl bg-[#07080b] border border-neutral-800/90 p-6 min-h-[300px] flex flex-col justify-between overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active Pipeline Execution
                </span>
                <span className="text-xs font-mono text-indigo-400 bg-indigo-950/40 px-2.5 py-1 rounded-md border border-indigo-900/50">
                  Latency: 18ms
                </span>
              </div>

              {activeTab === 'automate' && (
                <div className="space-y-3 font-mono text-xs sm:text-sm text-neutral-300">
                  <div className="p-3 bg-[#11131c] rounded-xl border border-neutral-800 flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <span>[Step 1] Ingesting enterprise CRM data & ticket queues...</span>
                    <span className="ml-auto text-emerald-400 text-xs">Complete</span>
                  </div>
                  <div className="p-3 bg-[#11131c] rounded-xl border border-neutral-800 flex items-center gap-3">
                    <Wand2 className="w-4 h-4 text-purple-400" />
                    <span>[Step 2] Synthesizing customer sentiment and drafting resolution plans...</span>
                    <span className="ml-auto text-yellow-400 text-xs animate-pulse">Processing</span>
                  </div>
                  <div className="p-3 bg-[#11131c] rounded-xl border border-neutral-800/50 flex items-center gap-3 opacity-60">
                    <Bot className="w-4 h-4 text-neutral-500" />
                    <span>[Step 3] Dispatching automated webhook actions across Stripe & Slack...</span>
                    <span className="ml-auto text-neutral-500 text-xs">Queued</span>
                  </div>
                </div>
              )}

              {activeTab === 'code' && (
                <div className="p-4 bg-[#10121a] rounded-xl border border-neutral-800 font-mono text-xs sm:text-sm text-neutral-300 space-y-2">
                  <div className="text-neutral-500">// Auto-generated by Nexora Neural Code Agent v4.2</div>
                  <div className="text-purple-400 font-semibold">export async function deployAutonomousCluster(config: ClusterConfig) &#123;</div>
                  <div className="text-neutral-400 pl-4">const cluster = await NexoraEngine.init(&#123; models: ['reasoner-pro-1'], distributed: true &#125;);</div>
                  <div className="text-neutral-400 pl-4">return await cluster.optimizeWorkloads(&#123; targetLatencyMs: 15 &#125;);</div>
                  <div className="text-purple-400 font-semibold">&#125;</div>
                </div>
              )}

              {activeTab === 'content' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 bg-[#11131c] rounded-xl border border-neutral-800">
                    <h4 className="text-white font-semibold text-sm mb-1">Visual Multimodal OCR</h4>
                    <p className="text-neutral-400 text-xs">Extracted 1,480 layout tables from technical schematics with 99.8% precision.</p>
                  </div>
                  <div className="p-4 bg-[#11131c] rounded-xl border border-neutral-800">
                    <h4 className="text-white font-semibold text-sm mb-1">Localized Translation</h4>
                    <p className="text-neutral-400 text-xs">Real-time dynamic voice & text localization deployed in 95 languages.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom playback bar */}
            <div className="pt-6 mt-4 border-t border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-white transition"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
                <div className="w-32 sm:w-64 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="w-3/5 h-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                </div>
                <span className="text-xs text-neutral-400 font-mono">01:24 / 02:45</span>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onStartTrial();
                }}
                className="bg-gradient-to-r from-[#6029f6] to-[#3b82f6] text-white px-5 py-2 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-2 hover:opacity-90 transition"
              >
                <span>Try Nexora Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
