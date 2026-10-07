import { useLocation, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle2, Clock, MessageSquare, Phone, Calendar,
  Shield, ArrowRight, Zap, Users,
} from 'lucide-react';
import Footer from '../components/Footer';
import { useSEO } from '../hooks/useSEO';

interface LocationState {
  qualified: boolean;
  name: string;
  phone: string;
  industry: string;
}

const STEPS = [
  { icon: Clock, label: 'Within 1 business hour', desc: 'We review your brief internally and assign the right expert.' },
  { icon: Phone, label: 'We call or WhatsApp you', desc: 'Quick 5-min call to confirm timing and prep the right demo scenario.' },
  { icon: Calendar, label: '30-minute live demo', desc: 'We show the system running — tailored to your industry and team size.' },
  { icon: MessageSquare, label: 'Fixed-price quote same day', desc: 'You get a clear quote with deliverables, timeline, and no hidden cost.' },
];

const OBJECTIONS = [
  {
    q: 'We already tried software — it was too complicated.',
    a: 'Almost every client says this. Our deployments are hands-on: we train your team, migrate your data, and stay on WhatsApp support for 90 days after launch.',
  },
  {
    q: 'Are you too expensive for a business our size?',
    a: "We work with factories and schools of 5–500 people. Pricing is fixed, not per-seat. Most clients break even within 3 months on saved admin time alone — we'll show you the math.",
  },
  {
    q: 'We need this customised, not off-the-shelf.',
    a: 'Every system we build is custom. Our 37 AI agents let us move 3–5× faster than traditional dev shops at a fraction of the cost. Customisation is the default, not an add-on.',
  },
];

export default function DemoConfirmation() {
  useSEO({
    title: 'Demo Request Confirmed — Sparkwaves Production',
    description: "Your demo request is confirmed. Here's what happens next and how to prepare for your Sparkwaves demo call.",
    keywords: 'demo confirmed, Sparkwaves next steps',
    noIndex: true,
  });

  const location = useLocation();
  const state = location.state as LocationState | null;

  // If someone lands here directly without submitting the form, redirect
  if (!state) return <Navigate to="/demo" replace />;

  const { qualified, name } = state;

  return (
    <>
      <main className="min-h-screen bg-slate-950 pt-32 pb-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-500/8 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">

          {/* Hero confirmation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-500/15 border border-brand-500/30 rounded-full mb-8 shadow-[0_0_40px_rgba(20,184,166,0.2)]">
              <CheckCircle2 className="w-10 h-10 text-brand-400" />
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              {name ? `Got it, ${name.split(' ')[0]}.` : "You're in."}
            </h1>
            <p className="text-xl text-slate-400 max-w-xl mx-auto leading-relaxed">
              {qualified
                ? "Your request is in our pipeline. We'll reach out within 1 business hour to confirm your demo slot."
                : "We've received your request. A team member will review and reach out with recommendations soon."}
            </p>

            {/* WhatsApp shortcut */}
            <motion.a
              href="https://wa.me/919891081934"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.35 }}
              className="inline-flex items-center gap-3 mt-8 px-7 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl transition-all shadow-[0_0_25px_rgba(16,185,129,0.25)] hover:-translate-y-0.5 group"
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp us directly
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <p className="text-xs text-slate-600 mt-3">+91 98910 81934 · Call or WhatsApp</p>
          </motion.div>

          {/* What happens next */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-5 h-5 text-brand-400" />
              <h2 className="text-xl font-black text-white uppercase tracking-wider">What happens next</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + i * 0.08, duration: 0.3 }}
                    className="flex gap-4 p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-slate-700 transition-colors"
                  >
                    <div className="w-12 h-12 bg-brand-500/10 border border-brand-500/20 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand-400" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm mb-1">{step.label}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Objection handling */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-5 h-5 text-blue-400" />
              <h2 className="text-xl font-black text-white uppercase tracking-wider">Common questions clients ask</h2>
            </div>

            <div className="space-y-4">
              {OBJECTIONS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + i * 0.075, duration: 0.3 }}
                  className="p-7 bg-slate-900/40 border border-slate-800 rounded-2xl"
                >
                  <p className="font-bold text-white mb-3 flex items-start gap-2">
                    <span className="text-brand-400 font-black mt-0.5">Q</span>
                    {item.q}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed pl-5">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Social proof strip */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.35 }}
            className="p-8 bg-gradient-to-br from-brand-500/10 to-blue-500/10 border border-brand-500/20 rounded-2xl mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-5 h-5 text-brand-400" />
              <p className="text-xs font-black text-brand-400 uppercase tracking-widest">Built by Sparkwaves</p>
            </div>
            <p className="text-slate-300 leading-relaxed mb-2">
              4 human experts backed by 37 AI agents across 11 departments — we deliver at a speed and price
              that traditional agencies can't match. MSME registered · UDYAM-DL-01-0063225 · Mukandpur, Delhi.
            </p>
            <p className="text-slate-500 text-sm">
              Every project ships with source-code ownership, 90-day WhatsApp support, and a fixed price — no retainers, no surprises.
            </p>
          </motion.section>

          {/* Nav out */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="px-8 py-4 bg-slate-900 border border-slate-700 hover:border-slate-600 text-white font-semibold rounded-xl transition-colors"
            >
              Back to home
            </Link>
            <Link
              to="/services"
              className="flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl transition-all group"
            >
              Explore our services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
