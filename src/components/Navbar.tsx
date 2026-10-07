import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Services', href: '/services' },
    { name: 'Our Products', href: '/products' },
    { name: 'Our Team', href: '/team' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <motion.header 
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 md:px-8 pointer-events-none"
    >
      <div 
        className={`w-full max-w-6xl rounded-full border transition-all duration-500 py-3 px-6 md:px-8 flex justify-between items-center shadow-2xl pointer-events-auto ${
          isScrolled
            ? 'bg-slate-950/90 border-white/10 backdrop-blur-lg py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
            : 'bg-slate-950/70 border-white/8 backdrop-blur-md py-4'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center group transition-transform duration-300 hover:scale-[1.02]" aria-label="Sparkwaves Production Home">
          <img src="/logo.svg" alt="Sparkwaves Production Logo" className="h-9 md:h-11 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-400 transition-all group-hover:w-1/2"></span>
            </Link>
          ))}
          <Link 
            to="/contact"
            className="px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-full transition-all"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-4 right-4 md:hidden border border-white/10 bg-slate-950/95 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl flex flex-col gap-4 pointer-events-auto"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-slate-300 hover:text-brand-400 transition-colors py-2 border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-6 py-3.5 bg-brand-500 text-center text-white font-semibold rounded-2xl hover:bg-brand-600 transition-colors text-sm"
            >
              Let's Talk
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
