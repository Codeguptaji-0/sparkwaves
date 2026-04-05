import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-brand-500/20 rounded-lg group-hover:bg-brand-500/30 transition-colors">
            <Sparkles className="w-5 h-5 text-brand-400" />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-brand-300 transition-colors">
            Sparkwaves
          </span>
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
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link 
            to="/contact"
            className="px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium rounded-full transition-all hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]"
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

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-brand-400 transition-colors py-2 border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-brand-500 text-center text-white font-medium rounded-xl hover:bg-brand-600 transition-colors"
              >
                Let's Talk
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
