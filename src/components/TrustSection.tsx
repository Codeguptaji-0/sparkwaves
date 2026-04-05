import { motion } from 'framer-motion';

export default function TrustSection() {
  return (
    <section id="trust" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Innovators</span>
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Delivering robust SaaS products and bespoke IT services to businesses globally.
          </p>
        </div>
        
        {/* Placeholder for Testimonials / Logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: item * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10"
            >
              <div className="flex text-yellow-500 mb-4">{'★'.repeat(5)}</div>
              <p className="text-slate-300 italic mb-6">"Sparkwaves fundamentally transformed our operational efficiency. Their hybrid approach of SaaS and custom services is unmatched."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 mr-4"></div>
                <div>
                  <h4 className="text-white font-medium">Enterprise Client</h4>
                  <p className="text-xs text-slate-500">Tech Lead</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Badges */}
        <div className="border-t border-white/10 pt-12 flex flex-wrap justify-center gap-8 text-slate-500">
           <div className="flex items-center space-x-2">
             <span className="font-semibold text-sm">SSL Secured</span>
           </div>
           <div className="flex items-center space-x-2">
             <span className="font-semibold text-sm">Enterprise Grade</span>
           </div>
           <div className="flex items-center space-x-2">
             <span className="font-semibold text-sm">Data Privacy First</span>
           </div>
        </div>
      </div>
    </section>
  );
}
