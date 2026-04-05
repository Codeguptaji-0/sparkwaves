import { motion } from 'framer-motion';
import { Target, Lightbulb, User } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/30 backdrop-blur-sm border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-6"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Trust</span> & Scalability
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          
          {/* Vision & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 border border-blue-500/30">
              <Target className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Vision & Mission</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Our mission is to democratize enterprise-grade technology. We strive to transform traditional businesses into agile, data-driven powerhouses using AI, Cloud, and scalable software architecture.
            </p>
            <p className="text-slate-400 leading-relaxed">
              At Sparkwaves Production, we envision a future where complex technical operations are seamlessly automated, allowing human capital to focus purely on creative and strategic growth.
            </p>
          </motion.div>

          {/* Hybrid Advantage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors relative overflow-hidden"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none"></div>
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6 border border-emerald-500/30">
              <Lightbulb className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">The Hybrid Advantage</h3>
            <p className="text-slate-400 leading-relaxed font-medium text-white/80 mb-4">
              We are not just a service agency; we are product builders.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Sparkwaves Production operates as both a high-end IT consulting firm and a dedicated SaaS provider. By building our own proprietary software products, we gain deep, hands-on experience with the latest technologies. We then funnel this cutting-edge expertise directly into the bespoke services we provide to our enterprise clients.
            </p>
          </motion.div>
        </div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-1 md:p-12 text-center md:text-left shadow-2xl"
        >
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center text-center md:text-left">
            <div className="flex flex-col items-center justify-center">
               <div className="w-48 h-48 rounded-full border-4 border-slate-800 p-2 mb-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center shadow-2xl">
                 <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                    <User className="w-20 h-20 text-slate-500" />
                 </div>
               </div>
               <h4 className="text-2xl font-bold text-white mb-1">Suraj Narayan Gupta</h4>
               <p className="text-brand-400 font-medium tracking-wide text-sm uppercase">Founder & Chief Architect</p>
            </div>
            
            <div className="px-6 md:px-0">
               <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mb-8 mx-auto md:mx-0 rounded-full"></div>
               <h3 className="text-3xl font-bold text-white mb-6">Built on Technical Excellence</h3>
               <p className="text-lg text-slate-400 leading-relaxed mb-6">
                 "Our philosophy is simple: technology should be a distinct competitive advantage, not a cost center. We architect systems that scale from day one, ensuring our clients never have to rebuild when growth accelerates."
               </p>
               <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 font-medium">Enterprise Architecture</span>
                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 font-medium">Cloud Infrastructure</span>
                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 font-medium">AI Integration</span>
               </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;
