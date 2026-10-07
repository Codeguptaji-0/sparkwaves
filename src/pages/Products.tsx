import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Shield, Database as DatabaseIcon, LayoutGrid, Cpu, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useDatabase } from '../context/DatabaseContext';
import { useSEO } from '../hooks/useSEO';

// Per-product availability framing — keyed by product name
type AvailabilityType = 'available' | 'enterprise' | 'development';
interface Availability {
  type: AvailabilityType;
  label: string;
  sublabel: string;
}

const AVAILABILITY: Record<string, Availability> = {
  'E-comos': {
    type: 'available',
    label: 'Available for Build',
    sublabel: 'Start your project in 2–3 weeks',
  },
  'Eudsaas': {
    type: 'available',
    label: 'Available for Build',
    sublabel: 'Pilot cohort open now',
  },
  'FuelOps': {
    type: 'enterprise',
    label: 'Enterprise Only',
    sublabel: 'Contact us for availability',
  },
};

const AVAILABILITY_STYLES: Record<AvailabilityType, { badge: string; dot: string }> = {
  available: {
    badge: 'bg-emerald-500/10 border border-emerald-500/25 text-emerald-400',
    dot: 'bg-emerald-400',
  },
  enterprise: {
    badge: 'bg-amber-500/10 border border-amber-500/25 text-amber-400',
    dot: 'bg-amber-400',
  },
  development: {
    badge: 'bg-slate-700/40 border border-slate-700 text-slate-400',
    dot: 'bg-slate-500',
  },
};

// Pilot / reference section data
const PILOT_REFERENCES = [
  {
    name: 'Mukandpur Trader (MSME)',
    product: 'E-comos',
    quote: 'GeM listings that took us 3 days now happen in under 30 minutes. The auto-listing alone paid for itself.',
    industry: 'E-commerce & Government Procurement',
    status: 'Pilot client · Delhi',
  },
  {
    name: 'Private School — Greater Noida',
    product: 'Eudsaas',
    quote: 'Attendance, fee tracking, and parent notifications all from one dashboard. Teachers spend less time on admin.',
    industry: 'K-12 Education',
    status: 'Active pilot · NCR',
  },
];

export default function Products() {
  const { products } = useDatabase();

  useSEO({
    title: 'Our Software Products — E-comos, Eudsaas, FuelOps | Sparkwaves Production',
    description:
      'Sparkwaves builds E-comos (e-commerce & GeM automation), Eudsaas (school management system), and FuelOps (geo-fenced shift tracking). Built in Delhi for Indian businesses.',
    keywords:
      'E-comos GeM automation, Eudsaas school management software, FuelOps shift tracker, Sparkwaves software products Delhi, school ERP India, e-commerce listing automation India, attendance geo-fencing',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Sparkwaves Software Products',
      description:
        'In-house software built by Sparkwaves Production for Indian manufacturers, schools, and government buyers.',
      itemListElement: products.map((product, idx) => ({
        '@type': 'Product',
        position: idx + 1,
        name: product.name,
        description: product.description,
        url: 'https://sparkwavsproduction.me/products',
      })),
    },
  });

  const getProductStyling = (index: number) => {
    const stylings = [
      { color: 'from-blue-500/20 to-cyan-500/20', border: 'hover:border-blue-500/40', icon: <DatabaseIcon className="w-8 h-8 text-blue-400" /> },
      { color: 'from-emerald-500/20 to-teal-500/20', border: 'hover:border-emerald-500/40', icon: <Zap className="w-8 h-8 text-emerald-400" /> },
      { color: 'from-purple-500/20 to-fuchsia-500/20', border: 'hover:border-purple-500/40', icon: <Shield className="w-8 h-8 text-purple-400" /> },
      { color: 'from-brand-500/20 to-emerald-500/20', border: 'hover:border-brand-500/40', icon: <LayoutGrid className="w-8 h-8 text-brand-400" /> },
      { color: 'from-rose-500/20 to-orange-500/20', border: 'hover:border-rose-500/40', icon: <Cpu className="w-8 h-8 text-rose-400" /> },
    ];
    return stylings[index % stylings.length];
  };

  return (
    <>
      <main className="pt-24 min-h-screen bg-slate-950 relative overflow-hidden">

        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-500/7 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-40 left-0 w-[500px] h-[500px] bg-blue-500/7 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 py-20 relative z-10">

          {/* ── Section header ── */}
          <div className="mb-20 max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xs font-semibold tracking-widest text-brand-400 uppercase mb-5"
            >
              Our products
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.06 }}
              className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[0.95]"
            >
              Software built{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-400">
                for Indian industry.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.12 }}
              className="text-lg text-slate-400 leading-relaxed"
            >
              Three in-house products for e-commerce automation, school management, and workforce tracking. All coded in Mukandpur, designed around Indian operational needs.
            </motion.p>
          </div>

          {/* ── Product cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => {
              const style = getProductStyling(idx);
              const avail = AVAILABILITY[product.name] ?? {
                type: 'development' as AvailabilityType,
                label: 'In Development',
                sublabel: `${product.progressPercentage ?? 0}% complete`,
              };
              const availStyle = AVAILABILITY_STYLES[avail.type];
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.2, duration: 0.4 }}
                  className={`relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 ${style.border} transition-all group p-8 flex flex-col`}
                >
                  {/* Glow blob */}
                  <div
                    className={`absolute top-0 right-0 w-64 h-64 -m-16 rounded-full bg-gradient-to-br ${style.color} blur-3xl opacity-20 group-hover:opacity-35 transition-opacity pointer-events-none`}
                  />

                  <div className="relative z-10 flex flex-col h-full">

                    {/* Availability badge — top right */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="bg-slate-800 w-14 h-14 rounded-xl flex items-center justify-center border border-slate-700">
                        {style.icon}
                      </div>
                      <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full ${availStyle.badge}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${availStyle.dot} animate-pulse`} />
                        {avail.label}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-1">{product.name}</h3>
                    <p className="text-xs text-slate-500 mb-3">{avail.sublabel}</p>
                    <p className="text-slate-400 mb-6 leading-relaxed text-sm min-h-[72px]">{product.description}</p>

                    {/* Use cases */}
                    <div className="mb-6">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-3">Who uses it</span>
                      <div className="flex flex-wrap gap-2">
                        {product.useCases.map((uc, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                          >
                            {uc}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8 flex-1">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-3">Key features</span>
                      <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm text-slate-300 gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Progress bar (only for "In Development") */}
                    {avail.type === 'development' && (
                      <div className="mb-8">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-bold text-brand-400 uppercase tracking-widest">In development</span>
                          <span className="text-sm font-bold text-white">{product.progressPercentage ?? 0}%</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5">
                          <div
                            className={`bg-gradient-to-r ${style.color.replace('/20', '/80')} h-1.5 rounded-full`}
                            style={{ width: `${product.progressPercentage ?? 0}%`, minWidth: '1rem' }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-slate-800 pt-6 mt-auto">
                      <div>
                        <span className="text-xs text-slate-500 block mb-1">Pricing model</span>
                        <span className="text-white font-semibold text-sm">{product.model}</span>
                      </div>
                      <Link
                        to="/demo"
                        className="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5 group-hover:shadow-[0_0_16px_rgba(20,184,166,0.25)]"
                      >
                        Book demo <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── Pilot / Case Study section ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-24 mb-8"
          >
            <div className="flex items-center gap-3 mb-10">
              <Clock className="w-5 h-5 text-brand-400" />
              <p className="text-xs font-black text-brand-400 uppercase tracking-widest">Early clients & pilots</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {PILOT_REFERENCES.map((ref, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.35 }}
                  className="p-7 bg-slate-900/50 border border-slate-800 hover:border-brand-500/20 rounded-2xl transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="font-bold text-white text-base">{ref.name}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{ref.industry}</p>
                    </div>
                    <span className="text-xs bg-brand-500/10 border border-brand-500/20 text-brand-400 px-3 py-1 rounded-full font-semibold whitespace-nowrap ml-3">
                      {ref.product}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed italic mb-4">"{ref.quote}"</p>
                  <p className="text-xs text-slate-600 font-medium">{ref.status}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-slate-600 mt-5 text-center">
              We are in active pilot phase — names shared with permission. Full case studies available during your demo.
            </p>
          </motion.div>

          {/* ── Bottom CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-12 bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center"
          >
            <p className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-4">Custom work</p>
            <h2 className="text-3xl font-black text-white mb-4 tracking-tight">
              Don't see exactly what you need?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
              All three products can be customised. We also build completely bespoke systems — just tell us your requirements and we'll send a fixed-price quote within 48 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/demo"
                className="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl flex items-center gap-2 transition-all hover:-translate-y-0.5 shadow-[0_0_20px_rgba(20,184,166,0.2)]"
              >
                Get a custom quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium rounded-xl transition-all hover:-translate-y-0.5"
              >
                See all services
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
