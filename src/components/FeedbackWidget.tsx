import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquarePlus, X, Send, CheckCircle } from 'lucide-react';

const FeedbackWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call to feedback ingestion service (like Canny, Featurebase, or own DB)
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setIsOpen(false);
        setFeedback('');
      }, 3000);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed left-6 bottom-6 md:auto md:left-6 md:bottom-6 z-[80] transition-all duration-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'} p-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white rounded-full shadow-2xl group focus:outline-none`}
        aria-label="Give Feedback"
      >
        <MessageSquarePlus className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Expandable Feedback Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-4 bottom-4 md:left-6 md:bottom-6 w-[calc(100vw-32px)] md:w-80 z-[100] bg-slate-900 border border-slate-700 shadow-2xl rounded-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-slate-800/80 border-b border-slate-700 flex justify-between items-center">
              <h4 className="text-white font-bold text-sm flex items-center gap-2">
                <MessageSquarePlus className="w-4 h-4 text-brand-400" />
                Feature Request & Limits
              </h4>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Form */}
            <div className="p-5">
              {isSuccess ? (
                <div className="py-6 flex flex-col items-center justify-center text-center">
                   <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-3">
                     <CheckCircle className="w-6 h-6 text-emerald-400" />
                   </div>
                   <p className="text-white font-bold mb-1">Feedback Sent!</p>
                   <p className="text-slate-400 text-xs">Our engineering team will review it.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Found a bug? Have a feature idea? Let us know..."
                    className="w-full h-28 bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-brand-500 outline-none resize-none transition-colors"
                  ></textarea>
                  <button 
                    disabled={isSubmitting || !feedback.trim()}
                    type="submit" 
                    className="w-full py-2.5 bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white text-sm font-bold rounded-lg flex justify-center items-center gap-2 transition-colors"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>Push to Backlog <Send className="w-3.5 h-3.5" /></>
                    )}
                  </button>
                  <p className="text-[10px] text-center text-slate-500 mt-1">Diagnostic system data is attached automatically for debugging.</p>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeedbackWidget;
