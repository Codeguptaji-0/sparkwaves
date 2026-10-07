import { Rocket, ShieldCheck, TerminalSquare, Layout, Zap, BarChart3 } from 'lucide-react';

import { useSEO } from '../hooks/useSEO';

const Changelog = () => {
  useSEO({
    title: 'Product Changelog & Updates - Sparkwaves',
    description: 'Stay updated with the latest releases, features, improvements, and system updates from Sparkwaves.',
    keywords: 'changelog, product updates, software development log, new SaaS features, sparkwaves releases'
  });

  return (
    <main className="py-32 bg-slate-950 min-h-screen text-slate-300 relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Changelog & Updates</h1>
        <p className="text-lg text-slate-400 mb-16">Follow our engineering journey as we build out the Sparkwaves SaaS ecosystem.</p>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">

          {/* ── Oct 2026: Admin CRM Pipeline ── */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-500 bg-slate-900 text-brand-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(20,184,166,0.3)] z-10">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-brand-500/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="font-bold text-white text-xl">Admin CRM Kanban Pipeline</h3>
                <time className="text-xs font-semibold text-brand-400 uppercase tracking-widest mt-1 sm:mt-0">October 2026</time>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Launched internal 6-stage CRM Kanban inside the admin command centre. Demo leads now progress through
                Lead Received → Contacted → Demo Booked → No Show → Closed Won / Closed Lost — fully tracked, drag-and-drop ready.
              </p>
              <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                <li>6-stage pipeline with per-stage lead counts and visual progress.</li>
                <li>Firebase Firestore backend — real-time sync across team members.</li>
                <li>Client portal scaffolded alongside admin dashboard.</li>
              </ul>
            </div>
          </div>

          {/* ── Oct 2026: B2B Demo Funnel ── */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-500 bg-slate-900 text-brand-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(20,184,166,0.3)] z-10">
              <Zap className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-brand-500/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="font-bold text-white text-xl">B2B Demo Funnel Launched</h3>
                <time className="text-xs font-semibold text-brand-400 uppercase tracking-widest mt-1 sm:mt-0">October 2026</time>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Replaced the single-form contact page with a full 3-step qualification funnel. Leads are pre-qualified by industry,
                team size, and timeline before reaching our inbox — cutting unqualified demo requests.
              </p>
              <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                <li>Step 1: Industry + team size + urgency qualifier.</li>
                <li>Step 2: Company name, city, and project brief.</li>
                <li>Step 3: Contact details + personalised confirmation page with objection handling.</li>
              </ul>
            </div>
          </div>

          {/* ── Oct 2026: Gazette Frontend Redesign ── */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-500 bg-slate-900 text-brand-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(20,184,166,0.3)] z-10">
              <Layout className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-brand-500/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="font-bold text-white text-xl">Full-Site Frontend Redesign (V3)</h3>
                <time className="text-xs font-semibold text-brand-400 uppercase tracking-widest mt-1 sm:mt-0">October 2026</time>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Completed a ground-up visual redesign of all 19 pages — migrating from an inconsistent first-draft style
                to a unified "Gazette" dark design system. Every page now shares the same type scale, spacing grid, and component library.
              </p>
              <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                <li>Consistent slate-950 dark base with teal brand-500 accent throughout.</li>
                <li>Framer Motion entry animations unified across all page heroes.</li>
                <li>TypeScript strict-mode clean — zero type errors across all 19 pages.</li>
              </ul>
            </div>
          </div>

          {/* ── April 2026: SaaS Launch Announcement ── */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-slate-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Rocket className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900/50 border border-slate-800 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="font-bold text-white text-xl">SaaS Products Launch Announcement</h3>
                <time className="text-xs font-medium text-slate-500 uppercase tracking-widest mt-1 sm:mt-0">April 2026</time>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                We officially announced the upcoming launch of E-comos (E-Commerce Hub) and Eudsaas (Smart School Management).
                Both platforms will operate on an affordable 3-tier subscription model.
              </p>
              <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                <li>Auto-Listing System introduced for E-comos.</li>
                <li>Digital workflow engine developed for Eudsaas.</li>
                <li>B2B Fuel Pump Geo-shift project teased.</li>
              </ul>
            </div>
          </div>

          {/* ── Late March 2026: Website V2 ── */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-slate-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900/50 border border-slate-800 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="font-bold text-white text-lg">Website V2 Architecture Deployed</h3>
                <time className="text-xs font-medium text-slate-500 uppercase tracking-widest mt-1 sm:mt-0">Late March 2026</time>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Deployed V2 of the Sparkwaves website on React + Vite + TypeScript.
                Implemented zero-refresh routing via React Router and established Firebase Firestore as the live database backend.
                First public-facing version of the admin dashboard scaffolded.
              </p>
            </div>
          </div>

          {/* ── Early 2026: Founded ── */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-slate-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <TerminalSquare className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900/50 border border-slate-800 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="font-bold text-white text-lg">Sparkwaves Production Founded</h3>
                <time className="text-xs font-medium text-slate-500 uppercase tracking-widest mt-1 sm:mt-0">Early 2026</time>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Assembled an elite squad of engineers covering Development, Data Science, AI/ML, and Marketing Operations. Focus solidified on providing enterprise solutions and custom automation systems.
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Changelog;
