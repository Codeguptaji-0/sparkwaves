import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight, MessageCircle, Ticket as TicketIcon, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDatabase } from '../context/DatabaseContext';
import { sendEmailNotification } from '../utils/emailService';

const Contact = () => {
  const { queries, setQueries, tickets, setTickets } = useDatabase();
  const [formType, setFormType] = useState<'contact' | 'ticket' | null>(null);
  
  // Generic form states
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState('');

  const handleQuerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const newQuery = {
      id: Math.random().toString(36).substr(2, 9),
      name, email, message,
      date: new Date().toISOString(),
      isReplied: false
    };
    
    setQueries([newQuery, ...queries]);
    await sendEmailNotification('Query', newQuery);
    
    setIsSubmitting(false);
    setSuccess('Inquiry sent successfully!');
    setTimeout(() => { setFormType(null); setSuccess(''); setName(''); setEmail(''); setMessage(''); }, 3000);
  };

  const handleTicketSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const newTicket = {
      id: Math.random().toString(36).substr(2, 9),
      subject: name, // Reusing name field for subject
      email, message,
      status: 'Open' as const,
      date: new Date().toISOString()
    };
    
    setTickets([newTicket, ...tickets]);
    await sendEmailNotification('Ticket', newTicket);
    
    setIsSubmitting(false);
    setSuccess('Support Ticket Raised Successfully!');
    setTimeout(() => { setFormType(null); setSuccess(''); setName(''); setEmail(''); setMessage(''); }, 3000);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-900/40 backdrop-blur-sm border-t border-slate-800/50">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Let's build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">future</span> together.
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
            Ready to scale your business with elite tech solutions? Reach out to our team in Delhi to discuss your next big leap.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                <MapPin className="w-6 h-6 text-brand-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Location</h4>
                <p className="text-slate-400 mt-1">Delhi, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700 group-hover:bg-brand-500/20 group-hover:border-brand-500 transition-colors">
                <Phone className="w-6 h-6 text-brand-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Direct Lines</h4>
                <div className="flex flex-col gap-2 mt-2 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 w-32">+91 9891081354</span>
                    <span className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Call Only</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 w-32">+91 8601924292</span>
                    <span className="text-xs px-2 py-1 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20">Call + WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 w-32">+91 9968167150</span>
                    <span className="text-xs px-2 py-1 rounded bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20">WhatsApp Only</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700 group-hover:bg-blue-500/20 group-hover:border-blue-500 transition-colors">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div className="w-full">
                <h4 className="text-xl font-bold text-white">Emails</h4>
                <div className="flex flex-col gap-2 mt-2 text-sm sm:text-base">
                  <a href="mailto:surajnarayangupta2004@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors break-all block">surajnarayangupta2004@gmail.com</a>
                  <a href="mailto:suraj9891@1vnm34.onmicrosoft.com" className="text-slate-400 hover:text-blue-400 transition-colors break-all block">suraj9891@1vnm34.onmicrosoft.com</a>
                  <a href="mailto:niteshji833@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors break-all block">niteshji833@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Form / Quick Links Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col justify-center border border-white/5 bg-slate-900/50"
        >
          {success && (
            <div className="absolute top-4 inset-x-4 p-4 bg-emerald-500/10 border border-emerald-500/50 rounded-xl text-center z-50 backdrop-blur-md">
              <p className="text-emerald-400 font-bold">{success}</p>
            </div>
          )}

          <div className="relative z-10 flex flex-col gap-4">
            
            {!formType ? (
              <>
                <h3 className="text-2xl font-bold text-white mb-4">Support Hub</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
                  <a href="https://wa.me/919968167150" target="_blank" rel="noopener noreferrer" className="w-full py-4 px-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 hover:border-[#25D366] text-white font-medium rounded-xl flex items-center justify-between group transition-all">
                    <div className="flex items-center gap-2"><MessageCircle className="w-5 h-5 text-[#25D366]" /><span>WhatsApp</span></div>
                  </a>
                  <a href="tel:+919891081354" className="w-full py-4 px-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium rounded-xl flex items-center justify-between group transition-all">
                    <div className="flex items-center gap-2"><Phone className="w-5 h-5 text-slate-300 group-hover:text-white" /><span>Call Us</span></div>
                  </a>
                </div>

                <button onClick={() => setFormType('contact')} className="w-full py-4 px-6 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-500 text-white font-medium rounded-xl flex items-center justify-between group transition-all">
                  <div className="flex items-center gap-3"><Mail className="w-6 h-6 text-blue-400" /><span className="text-lg">Send Query via Email</span></div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="h-px w-full bg-slate-800 my-4"></div>

                <Link to="/demo" className="w-full py-4 px-6 bg-brand-500 hover:bg-brand-600 border border-brand-400 text-white font-bold rounded-xl flex items-center justify-between group transition-all shadow-lg shadow-brand-500/20">
                  <div className="flex items-center gap-3 text-left"><Calendar className="w-6 h-6 text-white" /><span className="text-lg">Book Enterprise Demo</span></div>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </Link>

                <button onClick={() => setFormType('ticket')} className="w-full py-4 px-6 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500 text-white font-medium rounded-xl flex items-center justify-between group transition-all">
                  <div className="flex items-center gap-3 text-left"><TicketIcon className="w-6 h-6 text-emerald-400" /><span className="text-lg">Open Support Ticket</span></div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                </button>

                <Link to="/client-portal" className="w-full py-4 px-6 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-xl flex items-center justify-between group transition-all shadow-lg shadow-indigo-500/20">
                  <div className="flex items-center gap-3"><span className="text-lg font-bold">Client Portal Login</span></div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </>
            ) : (
              <form onSubmit={formType === 'contact' ? handleQuerySubmit : handleTicketSubmit} className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {formType === 'contact' ? <Mail className="w-5 h-5 text-blue-400" /> : <TicketIcon className="w-5 h-5 text-emerald-400" />}
                    {formType === 'contact' ? 'Submit Query' : 'Raise Ticket'}
                  </h3>
                  <button type="button" onClick={() => setFormType(null)} className="text-sm text-slate-400 hover:text-white transition">Cancel</button>
                </div>

                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder={formType === 'contact' ? "Your Name" : "Ticket Subject"} className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-brand-500" />
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-brand-500" />
                <textarea required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Please detail your request..." rows={4} className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-brand-500 resize-none"></textarea>

                <button disabled={isSubmitting} type="submit" className={`w-full py-4 px-6 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${formType === 'contact' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-emerald-500 hover:bg-emerald-600'} disabled:opacity-50 disabled:cursor-not-allowed`}>
                  {isSubmitting ? 'Processing...' : (formType === 'contact' ? 'Dispatch Query' : 'Submit Ticket')}
                  {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                </button>
              </form>
            )}
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 blur-3xl pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
