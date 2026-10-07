import { motion } from 'framer-motion';
import { Search, FileCheck, Wrench, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Understand Your Work',
    desc: 'We sit with your team — factory floor, school admin, or govt department — and map every manual process that can be automated or digitised.',
    icon: Search,
    color: 'text-brand-400',
    glow: 'rgba(20,184,166,0.15)',
  },
  {
    id: '02',
    title: 'Plan & Quote',
    desc: 'A fixed-price quote within 48 hours. No hidden fees, no scope creep. Milestones written down in plain Hindi or English — whichever you prefer.',
    icon: FileCheck,
    color: 'text-blue-400',
    glow: 'rgba(59,130,246,0.15)',
  },
  {
    id: '03',
    title: 'Build In-House',
    desc: 'Everything is coded by our team in Mukandpur, Delhi. We never outsource. Weekly demo calls so you see progress, not just promises.',
    icon: Wrench,
    color: 'text-indigo-400',
    glow: 'rgba(99,102,241,0.15)',
  },
  {
    id: '04',
    title: 'Hand Over & Support',
    desc: 'Training for your staff. Live handover. WhatsApp and email support post-launch. We stay on until your team is fully comfortable.',
    icon: HeadphonesIcon,
    color: 'text-emerald-400',
    glow: 'rgba(52,211,153,0.15)',
  },
];

export default function ProcessFlow() {
  return (
    <section id="process" className="py-28 bg-slate-950 relative overflow-hidden border-t border-slate-800/50">
      {/* Subtle ambient glows */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-500/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Section label + heading */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-xs font-semibold tracking-widest text-brand-400 uppercase mb-4"
          >
            How we work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.06 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight"
          >
            From first call to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-400">
              live system.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.12 }}
            className="text-slate-400 text-lg max-w-xl leading-relaxed"
          >
            Four steps. No jargon. Designed for factories, schools, and government buyers — not Silicon Valley startups.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-[2.75rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group relative flex flex-col"
                >
                  {/* Icon node */}
                  <div
                    className="w-[3.25rem] h-[3.25rem] rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center mb-7 relative group-hover:border-slate-500 transition-colors duration-200 shadow-lg"
                    style={{ boxShadow: `0 0 0 0 transparent` }}
                  >
                    <Icon className={`w-6 h-6 ${step.color}`} strokeWidth={1.8} />
                    {/* Step badge */}
                    <span className="absolute -top-2.5 -right-2.5 bg-slate-800 border border-slate-700 text-slate-400 text-[10px] font-black w-6 h-6 rounded-md flex items-center justify-center tracking-tight">
                      {step.id}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-brand-300 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom trust note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-slate-800/60 flex flex-wrap gap-6 text-xs text-slate-500 font-medium"
        >
          <span>✓ Fixed-price contracts only</span>
          <span>✓ No outsourcing, ever</span>
          <span>✓ 48-hour quote turnaround</span>
          <span>✓ Post-launch support included</span>
        </motion.div>
      </div>
    </section>
  );
}
