import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950/50 backdrop-blur-md py-12 border-t border-slate-900/50 text-center">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <Link to="/" className="flex items-center gap-2 mb-6 opacity-80 hover:opacity-100 transition-opacity">
          <Sparkles className="w-5 h-5 text-brand-500" />
          <span className="text-xl font-bold tracking-tight text-white">
            Sparkwaves
          </span>
        </Link>
        
        <p className="text-slate-500 text-sm mb-2 max-w-sm">
          Innovating Your Digital Tomorrow. Empowering visionary businesses with SaaS, AI, and Cloud architectures.
        </p>

        <p className="text-slate-500 text-xs mb-6 font-mono bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
          MSME Reg: UDYAM-DL-01-0063225
        </p>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-4 text-sm font-medium text-slate-400">
          <Link to="/services" className="hover:text-brand-400 transition-colors">Services</Link>
          <Link to="/products" className="hover:text-brand-400 transition-colors">Products</Link>
          <Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-brand-400 transition-colors">Contact</Link>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8 text-xs font-medium text-slate-500">
          <Link to="/changelog" className="hover:text-slate-300 transition-colors">Changelog</Link>
          <span className="opacity-30">|</span>
          <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          <span className="opacity-30">|</span>
          <Link to="/terms-of-service" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
        </div>

        <div className="w-full h-px bg-slate-900 mb-8"></div>
        
        <p className="text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} Sparkwaves Production. All rights reserved. <br className="md:hidden" />
          Based in Delhi, India.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
