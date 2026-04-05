import { Rocket, ShieldCheck, TerminalSquare } from 'lucide-react';

const Changelog = () => {
  return (
    <main className="py-32 bg-slate-950 min-h-screen text-slate-300 relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Changelog & Updates</h1>
        <p className="text-lg text-slate-400 mb-16">Follow our engineering journey as we build out the Sparkwaves SaaS ecosystem.</p>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
          
          {/* Update Item */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-500 bg-slate-900 text-brand-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(20,184,166,0.3)] z-10">
              <Rocket className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-brand-500/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="font-bold text-white text-xl">SaaS Products Launch Announcement</h3>
                <time className="text-xs font-semibold text-brand-400 uppercase tracking-widest mt-1 sm:mt-0">April 2026</time>
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

          {/* Update Item */}
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
                Deployed our state-of-the-art interactive 3D WebGL background powered by React Three Fiber.
                Implemented zero-refresh routing via React Router and established Live Dashboard scaffolding.
              </p>
            </div>
          </div>

          {/* Update Item */}
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
