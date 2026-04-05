import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/declined cookies
    const consent = localStorage.getItem('sparkwaves_cookie_consent');
    if (!consent) {
      // Delay showing banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('sparkwaves_cookie_consent', 'accepted');
    setIsVisible(false);
    // Initialize analytics trackers here in real prod (PostHog.init etc)
  };

  const handleDecline = () => {
    localStorage.setItem('sparkwaves_cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="fixed bottom-0 left-0 right-0 md:bottom-6 md:left-6 md:right-auto md:max-w-md z-[90] p-6 bg-slate-900 border border-slate-700/50 shadow-2xl rounded-t-2xl md:rounded-2xl"
        >
           <button 
             onClick={handleDecline} 
             className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
           >
             <X className="w-5 h-5" />
           </button>
           
           <div className="flex gap-4 items-start pr-6">
             <div className="p-3 bg-brand-500/20 rounded-xl mt-1">
               <ShieldCheck className="w-6 h-6 text-brand-400" />
             </div>
             <div>
               <h4 className="text-white font-bold mb-2">We value your privacy</h4>
               <p className="text-slate-400 text-sm leading-relaxed mb-4">
                 We use cookies and similar technologies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies as detailed in our <Link to="/privacy-policy" className="text-brand-400 hover:underline">Privacy Policy</Link>.
               </p>
               <div className="flex flex-col sm:flex-row gap-3">
                 <button onClick={handleDecline} className="px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 text-sm font-semibold transition-colors w-full sm:w-auto">
                   Essential Only
                 </button>
                 <button onClick={handleAccept} className="px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-sm font-bold shadow-lg transition-colors w-full sm:w-auto">
                   Accept All
                 </button>
               </div>
             </div>
           </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
