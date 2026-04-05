import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Tagline Badge */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-8 text-brand-300 text-sm font-medium cursor-default"
          >
            <span>✨ Innovating Your Digital Tomorrow</span>
            <ChevronRight className="w-4 h-4" />
          </motion.div>

          {/* Main Headings */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 mb-6 drop-shadow-sm">
            SPARKWAVES <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-blue-500">
              PRODUCTION
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforming businesses with cutting-edge SaaS, AI, Data, and Cloud solutions. We don't just build, we engineer the future.
          </p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Link 
              to="/services"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 font-bold rounded-xl text-lg hover:bg-slate-200 hover:scale-105 transition-all flex items-center justify-center gap-2 group shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-slate-800/20 hover:bg-slate-800/60 backdrop-blur-xl text-white font-medium rounded-xl text-lg border border-slate-700/50 hover:border-blue-400 transition-all text-center flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              <Play className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
              Book a Demo
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Gradient Line */}
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
    </section>
  );
};

export default Hero;
