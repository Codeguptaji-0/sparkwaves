import { ShieldCheck, Lock, Eye, Database, Link as LinkIcon, Mail } from 'lucide-react';
import Footer from '../components/Footer';

import { useSEO } from '../hooks/useSEO';

const PrivacyPolicy = () => {
  useSEO({
    title: 'Privacy Policy - Sparkwaves',
    description: 'Read the Sparkwaves privacy policy to understand how we protect and handle your personal and enterprise data.',
    keywords: 'privacy policy, sparkwaves, legal data security, GDPR compliance'
  });

  return (
    <>
      <main className="py-32 bg-slate-950 min-h-screen text-slate-300 relative z-10 selection:bg-brand-500/30">
        
        {/* Background Effects */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-brand-500/10 blur-[100px] pointer-events-none"></div>
        <div className="absolute -left-32 top-64 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-20">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-500/10 text-brand-400 border border-brand-500/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              <ShieldCheck className="w-4 h-4" /> Legal
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-slate-400 text-lg">Last Updated: April 2026</p>
          </div>

          <div className="space-y-12">
            <section className="p-8 md:p-10 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl hover:border-slate-700 transition-colors shadow-xl shadow-black/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Lock className="w-6 h-6 text-brand-400" /> 1. Introduction
              </h2>
              <p className="leading-relaxed text-slate-400">
                At Sparkwaves Production ("we", "our", or "us"), we respect your privacy and are committed to protecting 
                the personal data of our enterprise clients, B2B partners, and site visitors. This Privacy Policy outlines 
                how we collect, process, and safeguard your data across all our digital suites, including <span className="text-cyan-400">E-comos</span>, <span className="text-emerald-400">Eudsaas</span>, 
                and custom engineering solutions.
              </p>
            </section>

            <section className="p-8 md:p-10 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl hover:border-slate-700 transition-colors shadow-xl shadow-black/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-blue-400" /> 2. Data We Collect
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-4 p-4 bg-slate-950/50 rounded-2xl border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-brand-500 mt-2 shrink-0 shadow-[0_0_10px_rgba(20,184,166,0.8)]"></div>
                  <p className="text-slate-400"><strong className="text-white">Contact Data:</strong> Names, business emails, and phone numbers submitted via our forms.</p>
                </li>
                <li className="flex gap-4 p-4 bg-slate-950/50 rounded-2xl border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-brand-500 mt-2 shrink-0 shadow-[0_0_10px_rgba(20,184,166,0.8)]"></div>
                  <p className="text-slate-400"><strong className="text-white">Usage Data:</strong> Analytical telemetry surrounding website navigation to improve our UI/UX flow.</p>
                </li>
                <li className="flex gap-4 p-4 bg-slate-950/50 rounded-2xl border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-brand-500 mt-2 shrink-0 shadow-[0_0_10px_rgba(20,184,166,0.8)]"></div>
                  <p className="text-slate-400"><strong className="text-white">Technical Data:</strong> IP addresses, browser types, and hardware analytics necessary for rendering our 3D WebGL components safely.</p>
                </li>
              </ul>
            </section>

            <section className="p-8 md:p-10 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl hover:border-slate-700 transition-colors shadow-xl shadow-black/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-emerald-400" /> 3. How We Use Your Data
              </h2>
              <p className="leading-relaxed text-slate-400">
                We specifically use collected data to communicate regarding enterprise deployments, manage support tickets, 
                secure our infrastructure, and comply with necessary B2B legal obligations. We <strong className="text-white">do not</strong> sell your 
                business data to third-party advertising networks under any circumstances.
              </p>
            </section>

            <section className="p-8 md:p-10 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl hover:border-slate-700 transition-colors shadow-xl shadow-black/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <LinkIcon className="w-6 h-6 text-purple-400" /> 4. Compliance & Security
              </h2>
              <p className="leading-relaxed text-slate-400">
                Our infrastructure relies on state-of-the-art encryption protocols. We comply with major data regulations 
                applicable to SaaS operations. For clients deploying our FuelOps Geo-Shift or Eudsaas architectures, 
                specialized Data Processing Agreements (DPA) will be executed superseding this general policy.
              </p>
            </section>

            <section className="p-8 md:p-10 bg-gradient-to-br from-brand-500/10 to-blue-500/10 backdrop-blur-xl border border-brand-500/20 rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6 text-brand-400" /> 5. Contact Information
              </h2>
              <p className="text-slate-400 mb-6">
                For legal inquiries or GDPR data-deletion requests, contact our compliance engineering team directly.
              </p>
              <a href="mailto:founder@sparkwavsproduction.me" className="inline-flex py-3 px-6 bg-slate-900 border border-slate-700 rounded-xl text-white hover:border-brand-400 transition-colors font-medium">
                founder@sparkwavsproduction.me
              </a>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
