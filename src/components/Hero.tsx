import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-950">
      
      {/* Decorative Grid and Ambient Lights */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b1a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Tagline Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-white/5 backdrop-blur-md mb-8 text-brand-300 text-sm font-semibold tracking-wide cursor-default shadow-lg shadow-black/30"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-pulse"></span>
            <span>Innovating Your Digital Tomorrow</span>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </motion.div>

          {/* Main Headings */}
          <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white mb-6 leading-none select-none">
            SPARKWAVES <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-teal-300 to-blue-500 drop-shadow-[0_0_30px_rgba(20,184,166,0.2)]">
              PRODUCTION
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforming corporate landscapes with cutting-edge SaaS, AI models, custom data pipelines, and highly scalable cloud systems.
          </p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Link 
              to="/services"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-500 to-teal-600 text-white font-bold rounded-xl text-md hover:from-brand-600 hover:to-teal-700 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] transition-all flex items-center justify-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/60 hover:bg-slate-900/90 backdrop-blur-md text-slate-200 font-bold rounded-xl text-md border border-white/10 hover:border-brand-500/50 hover:scale-[1.03] transition-all text-center flex items-center justify-center gap-2 group shadow-lg"
            >
              <Play className="w-4 h-4 text-brand-400 fill-brand-400/20 group-hover:scale-110 transition-transform" />
              Book a Demo
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Bottom Gradients */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
    </section>
  );
};

export default Hero;
