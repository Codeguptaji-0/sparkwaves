import Hero from '../components/Hero';
import ProcessFlow from '../components/ProcessFlow';
import TrustSection from '../components/TrustSection';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Building2, PhoneCall } from 'lucide-react';
import { useDatabase } from '../context/DatabaseContext';

import { useSEO } from '../hooks/useSEO';

export default function Home() {
  const { settings } = useDatabase();

  useSEO({
    title: 'Sparkwaves Production — Software for Manufacturers, Schools & Government | New Delhi',
    description:
      'Custom ERP, school management software, GeM-ready IT solutions and AI automation built in Mukandpur, Delhi. MSME certified. 30% below Delhi market prices.',
    keywords:
      'software company Delhi, manufacturing ERP India, school management software Delhi, GeM registration software, government IT solutions, MSME software, factory automation India, Sparkwaves Production, Mukandpur software company',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Sparkwaves Production',
      url: 'https://sparkwavsproduction.me',
      logo: 'https://sparkwavsproduction.me/logo.png',
      description:
        'B2B software company in Mukandpur, Delhi. Delivering custom ERP, school management systems, and GeM IT solutions to manufacturers, schools, and government bodies.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mukandpur',
        addressRegion: 'New Delhi',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9891081934',
        contactType: 'sales',
      },
    },
  });

  return (
    <>
      <main>
        <Hero />

        {/* Quick navigation cards */}
        <section className="py-14 bg-slate-950 border-t border-white/5 relative z-10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <Link
                to="/services"
                className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-500/50 transition-all duration-200 hover:-translate-y-1"
              >
                <Factory className="w-7 h-7 text-brand-400 mb-4" strokeWidth={1.8} />
                <h3 className="text-xl font-bold text-white mb-2">What we build</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  ERP for factories. School portals. GeM IT solutions. Digital marketing. All under one roof.
                </p>
                <span className="text-brand-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  See services <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                to="/about"
                className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all duration-200 hover:-translate-y-1"
              >
                <Building2 className="w-7 h-7 text-emerald-400 mb-4" strokeWidth={1.8} />
                <h3 className="text-xl font-bold text-white mb-2">Who we are</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  4 human experts + 37 AI agents, Mukandpur, Delhi. MSME-certified. No freelancers, no outsourcing.
                </p>
                <span className="text-emerald-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  About us <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                to="/contact"
                className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-200 hover:-translate-y-1"
              >
                <PhoneCall className="w-7 h-7 text-blue-400 mb-4" strokeWidth={1.8} />
                <h3 className="text-xl font-bold text-white mb-2">Talk to us directly</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  WhatsApp, call, email, or raise a support ticket — we respond fast, in Hindi or English.
                </p>
                <span className="text-blue-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Contact <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

            </div>
          </div>
        </section>

        <ProcessFlow />
        {settings.showReviews && <TrustSection />}

        {/* Bottom CTA strip */}
        <section className="py-20 relative z-10 bg-slate-900 border-t border-white/10 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 60% 50%, rgba(20,184,166,0.07) 0%, rgba(59,130,246,0.05) 50%, transparent 80%)',
            }}
          />

          <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-brand-400 uppercase tracking-widest mb-4">Work with us</p>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
                Running a factory, school,<br className="hidden md:block" />
                or department?
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-xl">
                Tell us what's slowing your team down. We'll scope a solution and send a fixed-price quote within 48 hours — no retainer, no commitment.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/demo"
                  className="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(20,184,166,0.25)] hover:-translate-y-0.5"
                >
                  Book a free demo <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/919891081934"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium rounded-xl flex items-center gap-2 transition-all hover:-translate-y-0.5"
                >
                  WhatsApp us
                </a>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-7 rounded-2xl w-full md:w-auto min-w-[260px] shadow-xl">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">Direct contact</p>
              <div className="space-y-5">
                <div>
                  <span className="text-xs text-slate-500 block mb-1">Sales</span>
                  <a
                    href="tel:+919891081934"
                    className="text-lg font-bold text-slate-200 hover:text-brand-400 transition-colors"
                  >
                    +91 98910 81934
                  </a>
                </div>
                <div className="h-px bg-slate-800 w-full" />
                <div>
                  <span className="text-xs text-slate-500 block mb-1">Email</span>
                  <a
                    href="mailto:founder@sparkwavsproduction.me"
                    className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    founder@sparkwavsproduction.me
                  </a>
                </div>
                <div className="h-px bg-slate-800 w-full" />
                <div>
                  <span className="text-xs text-slate-500 block mb-1">MSME</span>
                  <span className="text-sm font-medium text-slate-400">UDYAM-DL-01-0063225</span>
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
