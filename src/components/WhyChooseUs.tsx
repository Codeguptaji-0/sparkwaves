import { motion } from 'framer-motion';
import { BadgeCheck, IndianRupee, MapPin, Bot } from 'lucide-react';

const differentiators = [
  {
    icon: IndianRupee,
    title: '30% below Delhi market — always',
    description:
      'We run a lean team out of our own office in Mukandpur. No agency overhead, no middlemen. The saving passes directly to you.',
    accent: 'text-brand-400',
    border: 'hover:border-brand-500/40',
  },
  {
    icon: BadgeCheck,
    title: 'GeM-registered & MSME-certified',
    description:
      'UDYAM-DL-01-0063225 registered. All our offerings are compliant with government procurement rules — ready for L1 bids on GeM portal.',
    accent: 'text-blue-400',
    border: 'hover:border-blue-500/40',
  },
  {
    icon: Bot,
    title: '37 AI agents. No waiting.',
    description:
      'Sales, legal, finance, content, support — every department runs on purpose-built AI agents supervised by our human team. Enterprise capacity, startup price.',
    accent: 'text-violet-400',
    border: 'hover:border-violet-500/40',
  },
  {
    icon: MapPin,
    title: 'Built in New Delhi, for Indian industry',
    description:
      'We understand TDS, HSN codes, school fee structures, Vyapaar workflows, and GeM bidding. No explaining Indian business logic from scratch.',
    accent: 'text-orange-400',
    border: 'hover:border-orange-500/40',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-28 relative bg-slate-950 border-t border-slate-800/50">
      <div className="container mx-auto px-6 md:px-12">

        {/* Heading block */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <p className="text-xs font-semibold tracking-widest text-brand-400 uppercase mb-4">
              Why Sparkwaves?
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Software built the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-400">
                Indian way.
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Most software agencies in Delhi sell you a retainer, then hand your work to a freelancer in another city. We don't. Our 4-person human team and 37 AI agents work together in-house, in Mukandpur — delivering faster, smarter, and at 30% below market rates. Human accountability, AI speed.
            </p>

            {/* Compact credentials strip */}
            <div className="grid grid-cols-2 gap-px bg-slate-800/60 rounded-xl overflow-hidden border border-slate-800">
              {[
                { label: '100+', sub: 'Projects delivered' },
                { label: '37', sub: 'AI agents active' },
                { label: 'MSME', sub: 'Udyam certified' },
                { label: 'GeM', sub: 'Govt. portal ready' },
              ].map(({ label, sub }) => (
                <div key={label} className="bg-slate-900/80 px-5 py-4">
                  <span className="block text-xl font-black text-white mb-0.5">{label}</span>
                  <span className="block text-xs text-slate-500">{sub}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: differentiator cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {differentiators.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.08 * idx }}
                  className={`p-6 bg-slate-900 border border-slate-800 rounded-2xl ${item.border} transition-colors duration-200`}
                >
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                    <Icon className={`w-5 h-5 ${item.accent}`} strokeWidth={1.8} />
                  </div>
                  <h4 className="text-white font-bold text-base mb-2 leading-snug">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
