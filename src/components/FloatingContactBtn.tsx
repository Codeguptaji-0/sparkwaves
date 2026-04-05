import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingContactBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling 300px down
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end group"
        >
          {/* Tooltip */}
          <div className="absolute -top-12 right-0 bg-slate-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none whitespace-nowrap border border-slate-700">
            Let's Talk WhatsApp
            {/* Arrow */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-slate-800 border-r border-b border-slate-700 transform rotate-45"></div>
          </div>

          <a
            href="https://wa.me/919968167150"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebc59] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all hover:scale-110 active:scale-95 text-white"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle className="w-8 h-8" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContactBtn;
