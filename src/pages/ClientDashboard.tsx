import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDatabase } from '../context/DatabaseContext';
import type { Client, Ticket } from '../context/DatabaseContext';
import { LogOut, Clock, CheckCircle2, AlertCircle, Building, Loader2, Send, FileText } from 'lucide-react';
import { sendEmailNotification } from '../utils/emailService';

const generateId = () => Math.random().toString(36).substr(2, 9);

import { useSEO } from '../hooks/useSEO';

export default function ClientDashboard() {
  const navigate = useNavigate();
  const { clients, tickets, setTickets } = useDatabase();
  const clientId = localStorage.getItem('swp_client_id');
  const activeClient = clients.find(c => c.id === clientId) || null;
  const clientTickets = activeClient ? tickets.filter(t => t.email === activeClient.email) : [];

  useSEO({
    title: 'Client Workspace - Sparkwaves',
    description: 'Secure client workspace dashboard.',
    keywords: 'client dashboard, workspace, sparkwaves'
  });
  
  // New Support Ticket State
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem('swp_client_auth');
    const cid = localStorage.getItem('swp_client_id');
    
    if (isAuth !== 'true' || !cid) {
      navigate('/client-portal');
      return;
    }

    if (clients.length > 0) {
      const currentClient = clients.find(c => c.id === cid);
      if (!currentClient) {
        // Client was deleted or ID invalid
        localStorage.removeItem('swp_client_auth');
        localStorage.removeItem('swp_client_id');
        navigate('/client-portal');
      }
    }
  }, [clients, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('swp_client_auth');
    localStorage.removeItem('swp_client_id');
    navigate('/client-portal');
  };

  const handleTicketSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeClient) return;
    
    setIsSubmitting(true);
    const newTicket: Ticket = {
      id: generateId(),
      subject: `[Client Portal] ${subject}`,
      email: activeClient.email,
      message,
      status: 'Open',
      date: new Date().toISOString()
    };
    
    setTickets([newTicket, ...tickets]);
    await sendEmailNotification('Ticket', newTicket as unknown as Record<string, unknown>);
    setIsSubmitting(false);
    setSubject('');
    setMessage('');
  };

  if (!activeClient) {
    return <div className="min-h-screen bg-slate-950 flex justify-center items-center"><Loader2 className="w-8 h-8 text-brand-500 animate-spin" /></div>;
  }

  const getStatusColor = (status: Client['projectStatus']) => {
    switch(status) {
      case 'Planning': return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      case 'Development': return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'Testing': return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      case 'Deployed': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-brand-500/30">
      {/* Client Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 shadow-2xl backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(20,184,166,0.3)]">
              {activeClient.company.slice(0,1)}
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white">{activeClient.company}</h1>
              <p className="text-xs text-brand-400 font-medium uppercase tracking-widest leading-none">Client Portal</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <span className="hidden md:inline-block text-slate-400 font-mono">{activeClient.email}</span>
            <button onClick={handleLogout} className="flex items-center gap-2 text-red-400 hover:text-red-300 transition bg-red-500/10 hover:bg-red-500/20 px-4 py-2 rounded-lg border border-red-500/20">
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-8">
        
        {/* Left Column: Metrics & Project Tracking */}
        <div className="lg:col-span-2 space-y-8">
          
          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 blur-3xl pointer-events-none rounded-full"></div>
            
            <h2 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-8 flex items-center gap-2">
              <Building className="w-5 h-5 text-slate-500" /> Executive Summary
            </h2>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
              <div>
                <h3 className="text-3xl font-extrabold text-white mb-2">{activeClient.projectName}</h3>
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${getStatusColor(activeClient.projectStatus)}`}>
                  Phase: {activeClient.projectStatus}
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-400 mb-1 font-bold uppercase tracking-widest">Global Progress</p>
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">
                  {activeClient.progressPercentage}%
                </div>
              </div>
            </div>

            {/* Heavy Progress Bar */}
            <div className="w-full bg-slate-950 rounded-full h-4 border border-slate-800 overflow-hidden shadow-inner relative">
               <div className="absolute inset-0 bg-brand-500 transition-all duration-1000 ease-out h-full" style={{ width: `${activeClient.progressPercentage}%` }}>
                 {/* Shimmer effect inside progress bar */}
                 <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
               </div>
            </div>
            
            <p className="text-sm text-slate-500 mt-6 max-w-2xl leading-relaxed">
              This intelligence dashboard surfaces real-time telemetry regarding your engineering deployment. Sparkwaves technical teams update this matrix upon conclusion of rigorous sprint milestones.
            </p>
          </section>

          {/* Official Documents */}
          {activeClient.documents && activeClient.documents.length > 0 && (
            <section>
              <h2 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-slate-500" /> Official Documents & Billing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeClient.documents.map(doc => (
                  <a key={doc.id} href={doc.link} target="_blank" rel="noreferrer" className="bg-slate-900 border border-slate-800 hover:border-brand-500/50 transition rounded-2xl p-6 flex items-center gap-4 group">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${doc.type === 'Bill' ? 'bg-amber-500/10 text-amber-500 group-hover:bg-amber-500/20' : 'bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20'} transition-colors`}>
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-white truncate group-hover:text-brand-400 transition-colors">{doc.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{doc.type}</span>
                        <span className="text-[10px] text-slate-600">• {new Date(doc.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Ticket History */}
          <section>
            <h2 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-slate-500" /> Direct Communication History
            </h2>
            
            <div className="space-y-4">
              {clientTickets.length === 0 ? (
                <div className="bg-slate-900 border border-slate-800 border-dashed rounded-2xl p-12 text-center">
                  <CheckCircle2 className="w-12 h-12 text-slate-700 mx-auto mb-4" />
                  <p className="text-slate-400 font-medium">No active support interactions.</p>
                  <p className="text-sm text-slate-500 mt-2">All engineering lanes are green.</p>
                </div>
              ) : (
                clientTickets.map(ticket => (
                  <div key={ticket.id} className="bg-slate-900 border border-slate-800 hover:border-slate-700 transition rounded-2xl p-6 relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors">{ticket.subject}</h4>
                        <p className="text-xs text-slate-500 mt-1">{new Date(ticket.date).toLocaleString()}</p>
                      </div>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full border ${ticket.status === 'Open' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'}`}>
                        {ticket.status}
                      </span>
                    </div>
                    <div className="bg-slate-950 p-4 rounded-xl text-slate-300 text-sm whitespace-pre-wrap leading-relaxed shadow-inner border border-white/5">
                      {ticket.message}
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>

        </div>

        {/* Right Column: Fast Actions */}
        <div className="lg:col-span-1 space-y-6">
          <section className="bg-gradient-to-b from-brand-900/40 to-slate-900 border border-brand-500/20 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 blur-3xl rounded-full"></div>
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2 relative z-10">
              <AlertCircle className="w-5 h-5 text-brand-400" /> Dispatch Intelligence
            </h2>
            
            <form onSubmit={handleTicketSubmit} className="space-y-4 relative z-10">
               <div className="space-y-1">
                 <label className="text-xs font-bold text-brand-300 uppercase tracking-wider">Directive Subject</label>
                 <input type="text" required value={subject} onChange={e=>setSubject(e.target.value)} placeholder="e.g. API Integration Check" className="w-full bg-slate-950 border border-brand-500/30 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-brand-500 transition-colors placeholder:text-slate-600" />
               </div>
               <div className="space-y-1">
                 <label className="text-xs font-bold text-brand-300 uppercase tracking-wider">Payload Details</label>
                 <textarea required value={message} onChange={e=>setMessage(e.target.value)} rows={5} placeholder="Describe your request..." className="w-full bg-slate-950 border border-brand-500/30 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-brand-500 transition-colors resize-none placeholder:text-slate-600"></textarea>
               </div>
               <button disabled={isSubmitting} type="submit" className="w-full py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-500/20 disabled:opacity-50">
                 {isSubmitting ? 'Transmitting...' : 'Send to Engineering Hub'} <Send className="w-4 h-4" />
               </button>
            </form>
          </section>
        </div>
      </main>

    </div>
  );
}
