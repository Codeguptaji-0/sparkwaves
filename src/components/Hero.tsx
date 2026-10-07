import { motion } from 'framer-motion';
import { ArrowRight, Phone, Building2, Factory, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

// Stat counter data — real numbers from company profile
const stats = [
  { value: '100+', label: 'Projects delivered' },
  { value: '37', label: 'AI agents active' },
  { value: 'MSME', label: 'Registered (Udyam)' },
  { value: 'GeM', label: 'Govt. portal ready' },
];

// Industries served — shows depth of focus
const verticals = [
  { icon: Factory, label: 'Manufacturing' },
  { icon: GraduationCap, label: 'Education' },
  { icon: Building2, label: 'Government' },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-950">

      {/* Subtle diagonal grid — restrained, not decorative noise */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(60deg, #94a3b8 0px, #94a3b8 1px, transparent 1px, transparent 60px)',
        }}
      />

      {/* One focused ambient glow — spending boldness here */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(20,184,166,0.13) 0%, rgba(59,130,246,0.07) 60%, transparent 100%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Location + credential line — builds trust instantly */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap items-center gap-3 mb-10"
          >
            <span className="text-xs font-semibold text-slate-400 tracking-wide">
              Mukandpur, Delhi
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-700" aria-hidden />
            <span className="text-xs font-semibold text-brand-400 tracking-wide">
              UDYAM-DL-01-0063225
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-700" aria-hidden />
            {verticals.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400"
              >
                <Icon className="w-3.5 h-3.5 text-slate-500" strokeWidth={1.8} />
                {label}
              </span>
            ))}
          </motion.div>

          {/* Main headline — left-aligned, not centered generic */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-5xl md:text-[5.5rem] font-black tracking-tighter text-white leading-[0.95] mb-7 select-none"
          >
            Technology
            <br />
            <span
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #2dd4bf 0%, #38bdf8 55%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              built for India.
            </span>
          </motion.h1>

          {/* Sub-copy — specific, not vague corporate speak */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.12 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed"
          >
            Sparkwaves Production delivers custom software, AI automation, and
            GeM-ready IT services to manufacturers, schools, and government
            bodies — at 30% below market price.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.18 }}
            className="flex flex-col sm:flex-row gap-3 mb-16"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors text-base group"
            >
              Talk to us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <a
              href="https://wa.me/919891081934"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg transition-colors text-base border border-slate-700 hover:border-slate-500"
            >
              <Phone className="w-4 h-4 text-brand-400" strokeWidth={2} />
              WhatsApp now
            </a>

            <Link
              to="/demo"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-slate-400 hover:text-white font-semibold transition-colors text-base underline-offset-4 hover:underline"
            >
              Book a demo
            </Link>
          </motion.div>

          {/* Stats strip — real, credible */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.28 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-800/60 rounded-xl overflow-hidden border border-slate-800"
          >
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-slate-900/80 px-6 py-5 flex flex-col gap-1"
              >
                <span className="text-2xl font-black text-white tracking-tight">{value}</span>
                <span className="text-xs text-slate-500 font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" aria-hidden />
    </section>
  );
};

export default Hero;
