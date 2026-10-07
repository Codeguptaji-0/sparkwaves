import { Scale, FileText, AlertTriangle, Cpu, Globe } from 'lucide-react';
import Footer from '../components/Footer';

import { useSEO } from '../hooks/useSEO';

const TermsOfService = () => {
  useSEO({
    title: 'Terms of Service - Sparkwaves',
    description: 'Review the terms and conditions for using Sparkwaves services, custom development, and SaaS applications.',
    keywords: 'terms of service, sparkwaves, legal terms, SaaS agreement, custom software developer terms'
  });

  return (
    <>
      <main className="py-32 bg-slate-950 min-h-screen text-slate-300 relative z-10 selection:bg-brand-500/30">
        
        {/* Background Effects */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-brand-500/10 blur-[100px] pointer-events-none"></div>
        <div className="absolute right-0 top-96 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-20">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-500/10 text-brand-400 border border-brand-500/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              <Scale className="w-4 h-4" /> Legal
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">Terms of Service</h1>
            <p className="text-slate-400 text-lg">Effective Date: April 2026</p>
          </div>

          <div className="space-y-12">
            <section className="p-8 md:p-10 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl hover:border-slate-700 transition-colors shadow-xl shadow-black/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-brand-400" /> 1. Acceptance of Terms
              </h2>
              <p className="leading-relaxed text-slate-400">
                By accessing the Sparkwaves Production website or utilizing our proprietary SaaS tools (E-comos, Eudsaas), 
                you agree to be legally bound by these Terms of Service. If you do not agree with any of these terms, 
                you are prohibited from utilizing our enterprise software suites.
              </p>
            </section>

            <section className="p-8 md:p-10 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl hover:border-slate-700 transition-colors shadow-xl shadow-black/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-purple-400" /> 2. Proprietary Rights
              </h2>
              <p className="leading-relaxed text-slate-400">
                All software architecture, UX/UI designs, AI models, and geographic-fencing logics engineered by Sparkwaves Production 
                remain the strict intellectual property of our corporation. Purchasing an enterprise license or subscription grants 
                a revocable usage tier, not explicit ownership of the underlying codebase.
              </p>
            </section>

            <section className="p-8 md:p-10 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl hover:border-slate-700 transition-colors shadow-xl shadow-black/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-emerald-400" /> 3. Liability & Warranties
              </h2>
              <p className="leading-relaxed text-slate-400">
                Our services are provided "as-is" without any express warranties. Under no circumstances shall Sparkwaves Production, 
                its founders, or its engineering delegates be held liable for indirect data loss, downtime, or revenue disruption 
                arising out of your use of our platforms to the maximum extent permitted by governing law.
              </p>
            </section>

            <section className="p-8 md:p-10 bg-gradient-to-br from-brand-500/10 to-purple-500/10 backdrop-blur-xl border border-brand-500/20 rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Globe className="w-6 h-6 text-brand-400" /> 4. Custom Engineering SLAs
              </h2>
              <p className="leading-relaxed text-slate-300">
                For clients engaging in custom software development, precise service level agreements (SLAs), delivery timelines, 
                and server uptime guarantees will be negotiated and signed in a separate Master Service Agreement (MSA). 
                Launch dates mentioned on social media are estimates and may shift according to engineering requirements.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfService;
