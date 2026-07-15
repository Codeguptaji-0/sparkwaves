import Hero from '../components/Hero';
import ProcessFlow from '../components/ProcessFlow';
import TrustSection from '../components/TrustSection';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Info, PhoneCall } from 'lucide-react';
import { useDatabase } from '../context/DatabaseContext';

import { useSEO } from '../hooks/useSEO';

export default function Home() {
  const { settings } = useDatabase();
  
  useSEO({
    title: 'Sparkwaves - Enterprise SaaS & Development Agency',
    description: 'We build high-performance web applications and enterprise SaaS solutions designed for maximum scale and user engagement.',
    keywords: 'Sparkwaves, SaaS agency, enterprise software development, web application engineering, automation, custom developer'
  });

  return (
    <>
      <main>
        <Hero />
        
        {/* Quick Overview Navigation */}
        <section className="py-12 bg-slate-950/80 border-t border-white/5 relative z-10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/services" className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-500/50 transition-all hover:-translate-y-1">
                <Cloud className="w-8 h-8 text-brand-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Our B2B Services</h3>
                <p className="text-slate-400 text-sm mb-4">Enterprise engineering, Cloud, Data Intelligence, and Automation.</p>
                <span className="text-brand-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ArrowRight className="w-4 h-4" /></span>
              </Link>
              
              <Link to="/about" className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all hover:-translate-y-1">
                <Info className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">The Hybrid Advantage</h3>
                <p className="text-slate-400 text-sm mb-4">Discover our vision, mission, and the founders engineering your success.</p>
                <span className="text-emerald-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">About Us <ArrowRight className="w-4 h-4" /></span>
              </Link>
              
              <Link to="/contact" className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-1">
                <PhoneCall className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Support & Connect</h3>
                <p className="text-slate-400 text-sm mb-4">Open support tickets, chat directly, or log into the Client Portal.</p>
                <span className="text-blue-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Contact Us <ArrowRight className="w-4 h-4" /></span>
              </Link>
            </div>
          </div>
        </section>

        <ProcessFlow />
        {settings.showReviews && <TrustSection />}

        {/* Bottom CTA / Contact Strip */}
        <section className="py-20 relative z-10 bg-slate-900 border-t border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-brand-500/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-slate-900 to-slate-950"></div>
          
          <div className="container mx-auto px-6 relative z-10 opacity-100 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                Ready to accelerate your <span className="text-brand-400">Growth?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Skip the lines. Reach out directly to our principal engineers to discuss architecture, timelines, and enterprise scaling.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/demo" className="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:-translate-y-1">
                  Book a Demo <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="https://wa.me/919968167150" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium rounded-xl flex items-center gap-2 transition-all hover:-translate-y-1">
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-md w-full md:w-auto shadow-2xl">
              <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                <PhoneCall className="w-5 h-5 text-brand-400" /> Direct Access
              </h4>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Corporate Sales</span>
                  <a href="tel:+919891081354" className="text-xl font-bold text-slate-200 hover:text-brand-400 transition-colors">+91 9891081354</a>
                </div>
                <div className="h-px bg-slate-800 w-full"></div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Enterprise Inquiries</span>
                  <a href="mailto:founder@sparkwavsproduction.me" className="text-md font-medium text-slate-300 hover:text-blue-400 transition-colors">founder@sparkwavsproduction.me</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
