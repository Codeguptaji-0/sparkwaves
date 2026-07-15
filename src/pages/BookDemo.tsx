import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Building2, User, Phone, Mail, ArrowRight } from 'lucide-react';
import { useDatabase } from '../context/DatabaseContext';
import Footer from '../components/Footer';

import { useSEO } from '../hooks/useSEO';

export default function BookDemo() {
  const { demoRequests, setDemoRequests } = useDatabase();

  useSEO({
    title: 'Book a Product Demo - Sparkwaves',
    description: 'Schedule a live demo session with our team to explore Sparkwaves products and see how our custom automation can grow your business.',
    keywords: 'book demo, saas demo, enterprise workflow integration, school management system demo'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessReq: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRequest = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      businessReq: formData.businessReq,
      date: new Date().toISOString(),
      status: 'Pending' as const
    };
    
    setDemoRequests([...demoRequests, newRequest]);
    setIsSubmitted(true);
  };

  return (
    <>
      <main className="min-h-screen bg-slate-950 py-32 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Copy */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-500/10 text-brand-400 border border-brand-500/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                <Calendar className="w-4 h-4" /> Schedule Demo
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                See How We Transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">Enterprise Workflows.</span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 max-w-xl">
                Book an exclusive 1-on-1 session with our engineering team. We'll dive deep into your architecture requirements and demonstrate our platforms live.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Personalized walkthrough of E-comos or Eudsaas.",
                  "Architecture and security compliance teardown.",
                  "Pricing and Custom SLA negotiations."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Request Received</h3>
                    <p className="text-slate-400 mb-8">
                      Our enterprise sales team will contact you shortly to schedule an exact time.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition"
                    >
                      Book Another Session
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                         <User className="w-4 h-4 text-brand-400"/> Full Name
                      </label>
                      <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-500 transition-colors" placeholder="John Doe" />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                           <Phone className="w-4 h-4 text-brand-400"/> Work Phone
                        </label>
                        <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-500 transition-colors" placeholder="+1 (555) 000-0000" />
                      </div>
                      
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                           <Mail className="w-4 h-4 text-brand-400"/> Work Email
                        </label>
                        <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-500 transition-colors" placeholder="john@company.com" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                         <Building2 className="w-4 h-4 text-brand-400"/> Business Requirement / Inquiry
                      </label>
                      <textarea required value={formData.businessReq} onChange={e => setFormData({...formData, businessReq: e.target.value})} rows={4} className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-500 transition-colors resize-none" placeholder="We are looking to migrate our operations to..." />
                    </div>

                    <button type="submit" className="w-full py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all group shadow-[0_0_20px_rgba(20,184,166,0.2)]">
                      Submit Booking Request <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-center text-xs text-slate-500">By submitting, you agree to our <a href="/privacy-policy" className="underline hover:text-white">Privacy Policy</a>.</p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
