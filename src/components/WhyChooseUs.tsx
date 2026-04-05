import { motion } from 'framer-motion';
import { Layers, BrainCircuit, TrendingUp, Target } from 'lucide-react';

const reasons = [
  {
    icon: Layers,
    title: "End-to-End Solutions",
    description: "From raw data to polished SaaS products, we handle the entire lifecycle. No fragmented tools, just one cohesive platform.",
  },
  {
    icon: BrainCircuit,
    title: "AI + Data Expertise",
    description: "We embed advanced data analytics and machine learning natively into our solutions, turning pure data into revenue-generating engines.",
  },
  {
    icon: TrendingUp,
    title: "Business Scalability",
    description: "Architected for hiper-growth. Our cloud-native pipelines ensure that your infrastructure scales automatically as your user base expands.",
  },
  {
    icon: Target,
    title: "Performance-Driven Approach",
    description: "Built for speed and conversion. Every pixel, every database query is optimized to deliver maximum performance and ROI.",
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 relative bg-slate-900/40 backdrop-blur-md border-t border-slate-800/50">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-6">
            <SparklesIcon className="w-4 h-4" /> Why Sparkwaves?
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-blue-500">product-driven ecosystems</span>.
          </h2>
          
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            Unlike traditional agencies, we don't just write code. We architect sustainable, high-performance digital ecosystems engineered specifically for scale, security, and market dominance.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div key={idx} className="flex flex-col gap-3 p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800 hover:border-brand-500/50 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-bold text-lg">{reason.title}</h4>
                  <p className="text-slate-400 text-sm">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Visual / Image Replacement (Glass Mockup) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-purple-500/20 rounded-[3rem] blur-3xl transform rotate-3"></div>
          
          <div className="relative glass-panel rounded-[2rem] p-8 md:p-12 overflow-hidden shadow-2xl border border-white/10 bg-slate-900/80">
            {/* Minimalist Dashboard Concept */}
            <div className="flex justify-between items-center border-b border-slate-800 pb-6 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="h-6 w-32 bg-slate-800 rounded-full"></div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 bg-slate-800/50 rounded-xl flex items-center justify-center border border-slate-700/50">
                  <div className="h-10 w-10 border-4 border-brand-500/30 border-t-brand-400 rounded-full animate-spin"></div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {[100, 75, 50].map((width, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="h-4 w-4 rounded-full bg-slate-700"></div>
                  <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${width}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full ${i === 0 ? 'bg-brand-400' : 'bg-blue-500'}`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-500/20 blur-2xl rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Simple embedded Sparkles icon since we didn't import Sparkles specifically up top to avoid duplicate
const SparklesIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
  </svg>
);

export default WhyChooseUs;
