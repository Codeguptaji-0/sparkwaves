import { motion } from 'framer-motion';
import { Lightbulb, Code2, Rocket, Headset } from 'lucide-react';

export default function ProcessFlow() {
  const steps = [
    { 
      id: '01', 
      title: 'Discovery', 
      desc: 'Understanding your unique challenges and auditing your architecture.',
      icon: <Lightbulb className="w-8 h-8 text-brand-400" />
    },
    { 
      id: '02', 
      title: 'Strategy & Blueprint', 
      desc: 'Designing highly secure, scalable cloud and internal blueprints.',
      icon: <Code2 className="w-8 h-8 text-blue-400" />
    },
    { 
      id: '03', 
      title: 'Agile Engineering', 
      desc: 'Executing rigorous development sprints to deploy robust systems.',
      icon: <Rocket className="w-8 h-8 text-indigo-400" />
    },
    { 
      id: '04', 
      title: 'Scaling & Support', 
      desc: 'Continuous cloud optimization, maintenance, and 24/7 care.',
      icon: <Headset className="w-8 h-8 text-emerald-400" />
    }
  ];

  return (
    <section id="process" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Decorative Lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Our Methodology
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">Excellence.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A standardized, battle-tested pipeline transferring your ideas into resilient enterprise infrastructure. Uncompromising quality at every phase.
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Horizontal Connecting Line (hidden on mobile, visible on lg) */}
          <div className="hidden lg:block absolute top-[4.5rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative group flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Icon Node */}
                <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-8 relative group-hover:-translate-y-2 transition-transform duration-300 shadow-xl group-hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] group-hover:border-brand-500/50">
                   <div className="absolute inset-0 bg-brand-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   {item.icon}
                   {/* Step Number Badge */}
                   <div className="absolute -top-3 -right-3 w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 font-bold text-xs text-slate-300 flex items-center justify-center">
                     {item.id}
                   </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-300 transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[260px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
