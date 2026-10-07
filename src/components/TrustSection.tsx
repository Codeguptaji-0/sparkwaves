import { motion } from 'framer-motion';
import { ShieldCheck, Award, MapPin, Users } from 'lucide-react';

const credentials = [
  {
    icon: ShieldCheck,
    label: 'MSME Registered',
    sub: 'UDYAM-DL-01-0063225',
    color: 'text-brand-400',
    bg: 'bg-brand-500/10',
  },
  {
    icon: Award,
    label: 'GeM Portal Ready',
    sub: 'Government e-Marketplace vendor',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: MapPin,
    label: 'Mukandpur, Delhi',
    sub: 'In-house team, no outsourcing',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Users,
    label: '100+ Projects Delivered',
    sub: 'Manufacturers · Schools · Govt.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
  },
];

const industries = [
  {
    name: 'Manufacturing',
    sample: 'ERP, inventory tracking, supplier billing automation for factories in Delhi NCR.',
  },
  {
    name: 'Education',
    sample: 'Fee management, admission portals, attendance dashboards for schools & coaching institutes.',
  },
  {
    name: 'Government & GeM',
    sample: 'GeM registration assistance, tender-ready IT solutions, department digitisation.',
  },
];

export default function TrustSection() {
  return (
    <section id="trust" className="py-28 bg-slate-950 border-t border-slate-800/50">
      <div className="container mx-auto px-6 md:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-widest text-brand-400 uppercase mb-4">Credentials</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Why businesses <br className="hidden md:block" />
            trust us.
          </h2>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            We're a certified MSME based in Mukandpur, Delhi. Every claim we make is backed by a registration, a client, or a live system.
          </p>
        </motion.div>

        {/* Credentials grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ show: { transition: { staggerChildren: 0.09 } }, hidden: {} }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
        >
          {credentials.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-colors duration-200"
              >
                <div className={`w-10 h-10 ${c.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${c.color}`} strokeWidth={1.8} />
                </div>
                <h4 className="text-white font-bold text-base mb-1">{c.label}</h4>
                <p className="text-slate-500 text-sm">{c.sub}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Industries served — horizontal strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="border border-slate-800 rounded-2xl overflow-hidden"
        >
          <div className="px-6 py-4 bg-slate-900/60 border-b border-slate-800">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Industries actively served</p>
          </div>
          <div className="divide-y divide-slate-800">
            {industries.map((ind, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 px-6 py-5">
                <span className="text-white font-bold text-sm w-40 shrink-0">{ind.name}</span>
                <span className="text-slate-400 text-sm">{ind.sample}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
