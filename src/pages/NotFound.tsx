import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight, Home } from 'lucide-react';

import { useSEO } from '../hooks/useSEO';

export default function NotFound() {
  useSEO({
    title: 'Page Not Found - Sparkwaves',
    description: 'The requested page could not be found. Go back to Sparkwaves home page to explore our services and SaaS products.',
    keywords: '404 not found, sparkwaves, error'
  });

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-2xl mx-auto"
      >
        <div className="inline-flex items-center justify-center w-24 h-24 mb-8 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl">
          <AlertTriangle className="w-12 h-12 text-brand-400" />
        </div>
        
        <h1 className="text-7xl md:text-9xl font-extrabold text-white mb-6 tracking-tighter">
          4<span className="text-brand-500">0</span>4
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-slate-300 mb-4">
          System Node Not Found
        </h2>
        
        <p className="text-slate-500 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          The requested trajectory leads to an unmapped sector. The page you are looking for has been relocated or deactivated.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/"
            className="group px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-2xl transition-all shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:-translate-y-1 flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <Home className="w-5 h-5" />
            Return to Core Sector
          </Link>
          <Link
            to="/about"
            className="group px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            Our Infrastructure
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
