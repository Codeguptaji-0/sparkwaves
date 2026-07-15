import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950/80 backdrop-blur-md py-16 border-t border-slate-900 text-center">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <Link to="/" className="flex items-center mb-6 opacity-85 hover:opacity-100 transition-opacity" aria-label="Sparkwaves Production Home">
          <img src="/logo.svg" alt="Sparkwaves Production Logo" className="h-10 w-auto object-contain" />
        </Link>
        
        <p className="text-slate-400 text-sm mb-4 max-w-md">
          Innovating Your Digital Tomorrow. Empowering visionary businesses with SaaS, AI, and Cloud architectures.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-6">
          <span className="text-slate-500 text-xs font-mono bg-slate-900/60 px-3 py-1 rounded-md border border-slate-800">
            MSME Registration: UDYAM-DL-01-0063225
          </span>
          <span className="text-slate-500 text-xs font-mono bg-slate-900/60 px-3 py-1 rounded-md border border-slate-800">
            HQ: Dwarka, New Delhi, India
          </span>
        </div>
        
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
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Sparkwaves Production. All rights reserved.</p>
          <p className="font-mono text-[10px] tracking-widest text-slate-700 uppercase">CLASSIFICATION: CONFIDENTIAL // Version 2.4.0</p>
          <p>New Delhi, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
