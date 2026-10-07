import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, AlertCircle } from 'lucide-react';

import { useSEO } from '../hooks/useSEO';

export default function AdminAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useSEO({
    title: 'Command Center Auth - Sparkwaves',
    description: 'Secure admin portal authorization center.',
    keywords: 'admin, secure login, sparkwaves'
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (
      (email === 'suraj.gupta@sparkwavsproduction.me' && password === '9891@Suraj&Swp#admin') ||
      (email === 'nitesh.chauhan@sparkwavsproduction.me' && password === '8601@Nitesh#Swp&admin')
    ) {
      localStorage.setItem('swp_admin_auth', 'true');
      localStorage.setItem('swp_admin_user', email);
      navigate('/swp-command-center/dashboard');
    } else {
      setError('Invalid credentials or unauthorized access attempt.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="glass-panel p-8 md:p-12 rounded-3xl w-full max-w-md relative z-10 border border-brand-500/20 shadow-2xl shadow-brand-500/10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-brand-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-500/30">
            <Lock className="w-8 h-8 text-brand-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Command Center</h2>
          <p className="text-slate-400 text-sm mt-2">Restricted Access Portal</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Admin Identity (Email)</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="text" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-600"
                placeholder="admin@sparkwavsproduction.me"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Security Key (Password)</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-600"
                placeholder="••••••••••••"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] mt-4"
          >
            Authenticate Protocol
          </button>
        </form>
      </div>
    </div>
  );
}
