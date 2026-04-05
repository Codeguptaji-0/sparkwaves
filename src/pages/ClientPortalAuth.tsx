import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDatabase } from '../context/DatabaseContext';
import { Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ClientPortalAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { clients } = useDatabase();

  useEffect(() => {
    if (localStorage.getItem('swp_client_auth') === 'true') {
      navigate('/client-portal/dashboard');
    }
  }, [navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Authenticate specifically against generated client credentials
    const validClient = clients.find(c => c.email === email && c.portalPassword === password);
    
    if (validClient) {
      localStorage.setItem('swp_client_auth', 'true');
      localStorage.setItem('swp_client_id', validClient.id);
      navigate('/client-portal/dashboard');
    } else {
      setError('Invalid credentials. Contact SWP Admin if you lost access.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-900/20 via-slate-950 to-slate-950"></div>
      
      <div className="z-10 w-full max-w-md px-6">
        <Link to="/" className="inline-block mb-12 hover:opacity-80 transition block text-center">
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            SPARKWAVES <span className="text-brand-500">CLIENT</span>
          </h1>
          <p className="text-slate-500 text-sm tracking-widest uppercase mt-1">Secure Project Environment</p>
        </Link>
        
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 rounded-[2rem] shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center border border-brand-500/20">
              <ShieldCheck className="w-5 h-5 text-brand-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Portal Access</h2>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Assigned Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input 
                  type="email" required
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-500 transition-colors"
                  placeholder="name@company.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Access Key</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input 
                  type="password" required
                  value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-500 transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            <button type="submit" className="w-full py-4 px-6 mt-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 group transition-all shadow-lg shadow-brand-500/20">
              Enter Operations Portal <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
        
        <p className="text-center text-slate-600 text-xs mt-8">
          This portal is strictly for authorized Sparkwaves Production clients. <br/>All access attempts are logged.
        </p>
      </div>
    </div>
  );
}
