import { motion } from 'framer-motion';
import { Target, Rocket, ShieldCheck, Zap, Globe, Code2 } from 'lucide-react';
import Footer from '../components/Footer';
import Team from '../components/Team';
import { useSEO } from '../hooks/useSEO';

export default function AboutUs() {
  useSEO({
    title: 'About Sparkwaves Production — Software Company in Mukandpur, Delhi',
    description:
      'Sparkwaves Production — 4 human experts + 37 AI agents, Mukandpur, Delhi. We build ERP systems, school management software, and GeM-ready IT solutions for manufacturers, schools, and government buyers. MSME certified.',
    keywords:
      'Sparkwaves Production about, software company Mukandpur Delhi, MSME IT company Delhi, who is Sparkwaves, Indian software startup, manufacturing ERP company India, GeM IT vendor Delhi',
  });

  return (
    <>
      <main className="min-h-screen bg-slate-950 text-white pt-24 overflow-hidden relative">

        {/* Ambient background */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-80 left-0 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">

          {/* ── Origin story ── */}
          <section className="py-16 md:py-24 max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xs font-semibold tracking-widest text-brand-400 uppercase mb-6"
            >
              Our story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.06 }}
              className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.95]"
            >
              Built in Delhi.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-400">
                For India.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12 }}
              className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl"
            >
              Sparkwaves Production started from a simple observation: Indian manufacturers, schools, and government departments were stuck with either overpriced enterprise software from big vendors or unreliable freelancers who disappeared after delivery. We built a third option — a lean team of 4 people backed by 37 specialised AI agents, delivering faster, smarter, and at 30% below Delhi market rates. Human accountability, AI speed.
            </motion.p>
          </section>

          {/* ── Mission & Vision ── */}
          <section className="py-16 border-t border-slate-800/50">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-10 hover:border-brand-500/40 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-brand-500/15 rounded-xl flex items-center justify-center mb-6 border border-brand-500/20">
                  <Target className="w-6 h-6 text-brand-400" strokeWidth={1.8} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Mission</h3>
                <p className="text-slate-400 leading-relaxed">
                  Make professional software accessible to every Indian factory, school, and government office — at a price they can afford, in a language they can understand, with support that doesn't disappear after payment.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-10 hover:border-blue-500/40 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-blue-500/15 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20">
                  <Rocket className="w-6 h-6 text-blue-400" strokeWidth={1.8} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Vision</h3>
                <p className="text-slate-400 leading-relaxed">
                  India's manufacturing sector, 1.5 million schools, and thousands of government departments — all running on reliable, homegrown software built by Indian teams who understand the local regulatory and operational reality.
                </p>
              </motion.div>
            </div>
          </section>

          {/* ── What we actually build ── */}
          <section className="py-20 border-t border-slate-800/50">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="mb-14"
            >
              <p className="text-xs font-semibold tracking-widest text-brand-400 uppercase mb-4">What we build</p>
              <h2 className="text-4xl font-black text-white tracking-tight mb-4">Three sectors. Real software.</h2>
              <p className="text-slate-400 max-w-2xl">
                Not a generic agency pitch. These are the actual systems we deliver.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Code2,
                  color: 'text-brand-400',
                  bg: 'bg-brand-500/10',
                  title: 'Manufacturing ERP',
                  desc: 'Inventory, production tracking, supplier billing, GST-compliant invoicing — built around how your factory actually runs.',
                },
                {
                  icon: Globe,
                  color: 'text-violet-400',
                  bg: 'bg-violet-500/10',
                  title: 'School Management',
                  desc: 'Admission portals, fees, attendance, report cards, and parent communication — one dashboard, no Excel sheets.',
                },
                {
                  icon: ShieldCheck,
                  color: 'text-blue-400',
                  bg: 'bg-blue-500/10',
                  title: 'Government & GeM IT',
                  desc: 'GeM-ready procurement systems, department digitisation, shift tracking, and custom IT solutions for public sector buyers.',
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.1 }}
                    className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-slate-600 transition-colors duration-200"
                  >
                    <div className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center mb-5`}>
                      <Icon className={`w-5 h-5 ${item.color}`} strokeWidth={1.8} />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── Core values ── */}
          <section className="py-20 border-t border-slate-800/50">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="mb-14"
            >
              <p className="text-xs font-semibold tracking-widest text-brand-400 uppercase mb-4">How we work</p>
              <h2 className="text-4xl font-black text-white tracking-tight">Four rules we don't break.</h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  num: '01',
                  title: 'Fixed prices only',
                  desc: "We quote before we build. If something takes longer, that's our problem — not yours.",
                },
                {
                  num: '02',
                  title: 'No outsourcing',
                  desc: '4 human experts + 37 AI agents, all working from our office in Mukandpur. No freelancers, no outsourcing, no black boxes.',
                },
                {
                  num: '03',
                  title: 'Plain language',
                  desc: 'Contracts, quotes, and handover notes in Hindi or English — whichever works for your team.',
                },
                {
                  num: '04',
                  title: 'Post-launch support',
                  desc: 'We train your staff, fix bugs, and remain reachable on WhatsApp — not just during the project.',
                },
              ].map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-slate-600 transition-colors duration-200"
                >
                  <span className="text-3xl font-black text-brand-500/25 block mb-4">{val.num}</span>
                  <h4 className="text-base font-bold text-white mb-2">{val.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── Why choose us ── */}
          <section className="py-20 border-t border-slate-800/50">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-4xl font-black text-white mb-6 tracking-tight">
                  Why not just hire a freelancer?
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Freelancers disappear. Agencies overcharge and outsource anyway. With Sparkwaves, you get a team with a fixed office address, a registered MSME certificate, and skin in the game — because our reputation depends on your system working.
                </p>
                <ul className="space-y-5">
                  {[
                    {
                      icon: ShieldCheck,
                      color: 'text-emerald-400',
                      bg: 'bg-emerald-500/10',
                      title: 'MSME Certificate',
                      sub: 'Registered, auditable, accountable. Not a WhatsApp number.',
                    },
                    {
                      icon: Zap,
                      color: 'text-brand-400',
                      bg: 'bg-brand-500/10',
                      title: '30% below market price',
                      sub: 'Verified across Delhi NCR rates for comparable custom software.',
                    },
                    {
                      icon: Globe,
                      color: 'text-blue-400',
                      bg: 'bg-blue-500/10',
                      title: 'GeM-ready IT solutions',
                      sub: 'Everything meets government procurement compliance rules out of the box.',
                    },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <li key={i} className="flex items-start gap-4">
                        <div className={`p-2 ${item.bg} rounded-lg shrink-0 mt-0.5`}>
                          <Icon className={`w-5 h-5 ${item.color}`} strokeWidth={1.8} />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-sm">{item.title}</h4>
                          <p className="text-sm text-slate-400">{item.sub}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>

              {/* Right: quick stats panel */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl"
              >
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-7">At a glance</p>
                <div className="space-y-6">
                  {[
                    { label: 'Projects delivered', value: '100+' },
                    { label: 'Years in operation', value: '3+' },
                    { label: 'Human team', value: '4 people' },
                    { label: 'AI agents', value: '37 active' },
                    { label: 'Office location', value: 'Mukandpur, Delhi' },
                    { label: 'MSME number', value: 'UDYAM-DL-01-0063225' },
                    { label: 'GeM vendor', value: 'Yes' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-baseline border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                      <span className="text-slate-400 text-sm">{label}</span>
                      <span className="text-white font-bold text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </div>

        {/* Team */}
        <div className="border-t border-slate-800/50 bg-slate-950 relative z-20 mt-8">
          <Team />
        </div>
      </main>
      <Footer />
    </>
  );
}
