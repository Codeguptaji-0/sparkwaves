import { motion } from 'framer-motion';
import { Target, Rocket, ShieldCheck, Zap, Cog, Activity, Code2, Globe } from 'lucide-react';
import Footer from '../components/Footer';
import Team from '../components/Team';

import { useSEO } from '../hooks/useSEO';

export default function AboutUs() {
  useSEO({
    title: 'About Us - The Hybrid SaaS Advantage | Sparkwaves',
    description: 'Learn about the vision, mission, and expert team behind Sparkwaves. Engineering next-generation digital infrastructure for enterprise scale.',
    keywords: 'about sparkwaves, team, hybrid SaaS model, software agency founders, engineering vision'
  });
  return (
    <>
      <main className="min-h-screen bg-slate-950 text-white pt-24 overflow-hidden relative selection:bg-brand-500/30">
        
        {/* Background Atmosphere */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-96 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          {/* Header Story */}
          <section className="py-16 md:py-24 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-brand-500/10 text-brand-400 border border-brand-500/20 rounded-full text-xs font-bold tracking-widest uppercase mb-8"
            >
               Our Origin
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
            >
              Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">Future of Work.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 leading-relaxed"
            >
              Sparkwaves Production was founded on a simple principle: enterprise software doesn't have to be sluggish, bloated, or ugly. We fuse high-performance engineering with visually stunning aesthetics to create platforms that businesses actually want to use.
            </motion.p>
          </section>

          {/* Mission & Vision Grid */}
          <section className="py-16">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 hover:border-brand-500/50 transition-colors shadow-2xl"
              >
                <div className="w-14 h-14 bg-brand-500/20 rounded-2xl flex items-center justify-center mb-6 border border-brand-500/30">
                  <Target className="w-7 h-7 text-brand-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  To eliminate systemic bottlenecks in massive industries—like education, logistics, and retail—by deploying radically efficient, cloud-native software ecosystems that replace analog chaos with algorithmic precision.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 hover:border-blue-500/50 transition-colors shadow-2xl"
              >
                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30">
                  <Rocket className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  We foresee a digital horizon where our unified tools—E-comos, Eudsaas, and FuelOps—run the invisible infrastructure of thousands of scaling organizations globally, securely and reliably.
                </p>
              </motion.div>
            </div>
          </section>

          {/* What We Do */}
          <section className="py-24 border-t border-slate-800/50 mt-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What We Do</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">We design robust, high-performance systems to solve complex operational challenges, eliminating scalability bottlenecks before they affect your bottom line.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Code2 />, title: "SaaS Development", desc: "Building proprietary ecosystems like E-comos and Eudsaas." },
                { icon: <Cog />, title: "Custom Engineering", desc: "Crafting bespoke enterprise applications specifically tailored to operational logic." },
                { icon: <Activity />, title: "Data Intelligence", desc: "Aggregating metrics, telemetry, and analytics into actionable dashboards." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-slate-950 border border-slate-800 rounded-2xl">
                  <div className="text-brand-400 mb-6">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Core Values Section */}
          <section className="py-24 border-t border-slate-800/50">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                Our Foundation
              </div>
              <h2 className="text-4xl font-bold mb-4">Core Corporate Values</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">The engineering principles that guide our architecture, client partnerships, and delivery standards.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "Technical Excellence", desc: "We design software on clean, modular architectures that scale from day one, avoiding technical debt." },
                { title: "Operational Precision", desc: "We replace manual bottlenecks with automated workflows, achieving extreme operational efficiency." },
                { title: "Data Integrity", desc: "We enforce strict encryption and security protocols across all our internal and custom client pipelines." },
                { title: "Client Trust", desc: "We establish long-term partnerships driven by uptime reliability, absolute transparency, and SLA compliance." }
              ].map((val, i) => (
                <div key={i} className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-brand-500/30 transition-colors">
                  <span className="text-3xl font-extrabold text-brand-500/30 block mb-4">0{i+1}</span>
                  <h4 className="text-lg font-bold text-white mb-2">{val.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-24 border-t border-slate-800/50">
             <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                   <h2 className="text-4xl font-bold mb-6">Why Choose Sparkwaves?</h2>
                   <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                     When you partner with us or deploy our platforms, you aren't fighting legacy tech debt. You're adopting modernized logic. Our tech stack relies on robust WebGL rendering, Framer-accelerated UI drops, and uncompromising database security. 
                   </p>
                   <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                        <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400"><ShieldCheck className="w-6 h-6"/></div>
                        <div>
                          <h4 className="font-bold text-white">Military-Grade Encryption</h4>
                          <p className="text-sm text-slate-400">All data transferred between your organization and our servers is strictly end-to-end encrypted.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><Zap className="w-6 h-6"/></div>
                        <div>
                          <h4 className="font-bold text-white">Zero Latency UI/UX</h4>
                          <p className="text-sm text-slate-400">Built on React 18 & Edge-computing architectures to ensure blink-of-an-eye interface updates.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><Globe className="w-6 h-6"/></div>
                        <div>
                          <h4 className="font-bold text-white">Worldwide Scalability</h4>
                          <p className="text-sm text-slate-400">Our backends automatically auto-scale to meet your peak transactional loads without downtime.</p>
                        </div>
                      </li>
                   </ul>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-blue-500/20 blur-3xl transform rotate-12"></div>
                  <div className="bg-slate-900 border border-slate-700 p-8 rounded-3xl relative z-10 shadow-2xl">
                    <div className="flex justify-between items-end mb-8">
                       <div>
                         <span className="block text-slate-400 text-sm mb-1 uppercase tracking-widest font-bold">System Status</span>
                         <span className="text-2xl font-bold text-emerald-400 flex items-center gap-2">
                           <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></span> 100% Operational
                         </span>
                       </div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-brand-500 w-[98%]"></div></div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[95%]"></div></div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-purple-500 w-[100%]"></div></div>
                    </div>
                  </div>
                </div>
             </div>
          </section>
        </div>

        {/* Team Module at the bottom */}
        <div className="border-t border-slate-800/50 pt-16 bg-slate-950 relative z-20">
           <Team />
        </div>
      </main>
      <Footer />
    </>
  );
}
