import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar, CheckCircle2, Building2, User, Phone, Mail,
  ArrowRight, ArrowLeft, Factory, GraduationCap, Landmark,
  ShoppingCart, HelpCircle, ChevronRight,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDatabase } from '../context/DatabaseContext';
import { sendEmailNotification } from '../utils/emailService';
import Footer from '../components/Footer';
import { useSEO } from '../hooks/useSEO';

// ── Types ─────────────────────────────────────────────────────────────────────

type Industry = 'manufacturing' | 'education' | 'government' | 'ecommerce' | 'other';
type TeamSize = 'solo' | 'small' | 'medium' | 'large';
type Timeline = 'immediate' | '1_3months' | '3_6months' | 'exploring';

interface Step1Data {
  industry: Industry | '';
  teamSize: TeamSize | '';
  timeline: Timeline | '';
}

interface Step2Data {
  companyName: string;
  city: string;
  requirement: string;
}

interface Step3Data {
  name: string;
  phone: string;
  email: string;
}

// ── Constants ─────────────────────────────────────────────────────────────────

const INDUSTRIES: { value: Industry; label: string; icon: React.ElementType; desc: string }[] = [
  { value: 'manufacturing', label: 'Manufacturing / Factory', icon: Factory, desc: 'ERP, inventory, GST billing' },
  { value: 'education', label: 'School / Institute', icon: GraduationCap, desc: 'School management, fees, attendance' },
  { value: 'government', label: 'Government / GeM', icon: Landmark, desc: 'GeM-ready IT, dept. digitisation' },
  { value: 'ecommerce', label: 'E-Commerce', icon: ShoppingCart, desc: 'Listings, disputes, fulfilment' },
  { value: 'other', label: 'Other', icon: HelpCircle, desc: 'Tell us more in step 2' },
];

const TEAM_SIZES: { value: TeamSize; label: string }[] = [
  { value: 'solo', label: '1–5 people' },
  { value: 'small', label: '6–25 people' },
  { value: 'medium', label: '26–100 people' },
  { value: 'large', label: '100+ people' },
];

const TIMELINES: { value: Timeline; label: string }[] = [
  { value: 'immediate', label: 'Ready now' },
  { value: '1_3months', label: 'In 1–3 months' },
  { value: '3_6months', label: 'In 3–6 months' },
  { value: 'exploring', label: 'Just exploring' },
];

const TOTAL_STEPS = 3;

// ── Helpers ───────────────────────────────────────────────────────────────────

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: TOTAL_STEPS }).map((_, i) => {
        const step = i + 1;
        const done = step < current;
        const active = step === current;
        return (
          <div key={i} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-300 ${
                done
                  ? 'bg-brand-500 text-white'
                  : active
                  ? 'bg-brand-500/20 border-2 border-brand-500 text-brand-400'
                  : 'bg-slate-800 border border-slate-700 text-slate-600'
              }`}
            >
              {done ? <CheckCircle2 className="w-4 h-4" /> : step}
            </div>
            {i < TOTAL_STEPS - 1 && (
              <div className={`h-px flex-1 w-12 transition-all duration-500 ${step < current ? 'bg-brand-500' : 'bg-slate-800'}`} />
            )}
          </div>
        );
      })}
      <span className="ml-2 text-xs text-slate-500 font-medium">Step {current} of {TOTAL_STEPS}</span>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function BookDemo() {
  useSEO({
    title: 'Book a Free Demo — Sparkwaves Production | Mukandpur, Delhi',
    description:
      "Tell us about your business — we'll qualify your needs and show you a live demo of the right system. Fixed-price quote within 48 hours. No commitment required.",
    keywords:
      'book demo Sparkwaves, free software demo Delhi, ERP demo manufacturer India, school management demo, GeM IT demo, custom software quote Delhi',
  });

  const { demoRequests, setDemoRequests } = useDatabase();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [step1, setStep1] = useState<Step1Data>({ industry: '', teamSize: '', timeline: '' });
  const [step2, setStep2] = useState<Step2Data>({ companyName: '', city: '', requirement: '' });
  const [step3, setStep3] = useState<Step3Data>({ name: '', phone: '', email: '' });

  // ── Qualification logic ────────────────────────────────────────────────────
  const isQualified = step1.timeline !== 'exploring' && step1.teamSize !== 'solo';

  // ── Validation ─────────────────────────────────────────────────────────────
  const step1Valid = step1.industry !== '' && step1.teamSize !== '' && step1.timeline !== '';
  const step2Valid = step2.companyName.trim() !== '' && step2.requirement.trim().length >= 20;
  const step3Valid = step3.name.trim() !== '' && step3.phone.trim().length >= 10 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(step3.email);

  // ── Submit ─────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!step3Valid) return;
    setIsSubmitting(true);

    const industryLabel = INDUSTRIES.find(i => i.value === step1.industry)?.label ?? step1.industry;
    const teamLabel = TEAM_SIZES.find(t => t.value === step1.teamSize)?.label ?? step1.teamSize;
    const timelineLabel = TIMELINES.find(t => t.value === step1.timeline)?.label ?? step1.timeline;

    const businessReq = `[${industryLabel} | ${teamLabel} | ${timelineLabel}]\n${step2.companyName}${step2.city ? ', ' + step2.city : ''}\n\n${step2.requirement}`;

    const newRequest = {
      id: Math.random().toString(36).substr(2, 9),
      name: step3.name,
      phone: step3.phone,
      email: step3.email,
      businessReq,
      date: new Date().toISOString(),
      status: 'Lead Received' as const,
    };

    setDemoRequests([...demoRequests, newRequest]);
    await sendEmailNotification('Query', { ...newRequest, subject: `Demo Request — ${industryLabel}`, message: businessReq });

    setIsSubmitting(false);

    // Navigate to confirmation with qualification status
    navigate('/demo/confirmation', { state: { qualified: isQualified, name: step3.name, phone: step3.phone, industry: industryLabel } });
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 60 : -60, opacity: 0 }),
  };

  const [direction, setDirection] = useState(1);

  const goNext = () => { setDirection(1); setStep(s => s + 1); };
  const goBack = () => { setDirection(-1); setStep(s => s - 1); };

  return (
    <>
      <main className="min-h-screen bg-slate-950 py-32 relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* ── Left: value prop ── */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-500/10 text-brand-400 border border-brand-500/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                <Calendar className="w-4 h-4" /> Free Demo
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white mb-6 leading-[1.05] tracking-tight">
                See it running
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-400">
                  in your context.
                </span>
              </h1>

              <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-md">
                Answer 3 quick questions — we'll match you to the right system and schedule a live 30-minute demo. Fixed-price quote within 48 hrs.
              </p>

              {/* Trust strip */}
              <div className="border border-slate-800 rounded-xl overflow-hidden mb-8">
                <div className="px-5 py-3 bg-slate-900/60 border-b border-slate-800">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Who this is for</p>
                </div>
                {[
                  'Factory / manufacturing unit owners',
                  'School & coaching institute admins',
                  'Government departments & GeM buyers',
                ].map((line, i) => (
                  <div key={i} className="px-5 py-3 border-b border-slate-800/70 last:border-0 flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                    <span className="text-slate-400 text-sm">{line}</span>
                  </div>
                ))}
              </div>

              {/* Social proof */}
              <div className="p-5 bg-slate-900/40 border border-slate-800 rounded-xl">
                <p className="text-slate-400 text-sm italic leading-relaxed">
                  "Sparkwaves showed us a working ERP demo in 30 minutes and delivered
                  a quote the same day. No fluff."
                </p>
                <p className="text-xs text-slate-600 mt-3 font-medium">— Enterprise Client, Tech Lead</p>
              </div>
            </motion.div>

            {/* ── Right: multi-step form ── */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.4 }}>
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 md:p-10 shadow-2xl overflow-hidden">

                <StepIndicator current={step} />

                <AnimatePresence mode="wait" custom={direction}>
                  {/* ── STEP 1: Qualification ── */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <h2 className="text-xl font-bold text-white mb-1">What's your business?</h2>
                      <p className="text-slate-500 text-sm mb-6">Helps us prepare the right demo.</p>

                      {/* Industry selection */}
                      <div className="mb-5">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Industry</label>
                        <div className="grid grid-cols-1 gap-2">
                          {INDUSTRIES.map(ind => {
                            const Icon = ind.icon as React.FC<React.SVGProps<SVGSVGElement> & { strokeWidth?: number }>;
                            const selected = step1.industry === ind.value;
                            return (
                              <button
                                key={ind.value}
                                type="button"
                                onClick={() => setStep1(s => ({ ...s, industry: ind.value }))}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all ${
                                  selected
                                    ? 'bg-brand-500/15 border-brand-500 text-white'
                                    : 'bg-slate-950/50 border-slate-700 text-slate-400 hover:border-slate-600 hover:text-white'
                                }`}
                              >
                                <Icon className={`w-5 h-5 shrink-0 ${selected ? 'text-brand-400' : 'text-slate-600'}`} strokeWidth={1.8} />
                                <div>
                                  <span className="text-sm font-semibold block">{ind.label}</span>
                                  <span className={`text-xs ${selected ? 'text-brand-400/80' : 'text-slate-600'}`}>{ind.desc}</span>
                                </div>
                                {selected && <CheckCircle2 className="w-4 h-4 text-brand-400 ml-auto shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Team size */}
                      <div className="mb-5">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Team size</label>
                        <div className="grid grid-cols-2 gap-2">
                          {TEAM_SIZES.map(t => (
                            <button
                              key={t.value}
                              type="button"
                              onClick={() => setStep1(s => ({ ...s, teamSize: t.value }))}
                              className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${
                                step1.teamSize === t.value
                                  ? 'bg-brand-500/15 border-brand-500 text-brand-300'
                                  : 'bg-slate-950/50 border-slate-700 text-slate-400 hover:border-slate-600 hover:text-white'
                              }`}
                            >
                              {t.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Timeline */}
                      <div className="mb-8">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">When do you need this?</label>
                        <div className="grid grid-cols-2 gap-2">
                          {TIMELINES.map(t => (
                            <button
                              key={t.value}
                              type="button"
                              onClick={() => setStep1(s => ({ ...s, timeline: t.value }))}
                              className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${
                                step1.timeline === t.value
                                  ? 'bg-brand-500/15 border-brand-500 text-brand-300'
                                  : 'bg-slate-950/50 border-slate-700 text-slate-400 hover:border-slate-600 hover:text-white'
                              }`}
                            >
                              {t.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        type="button"
                        disabled={!step1Valid}
                        onClick={goNext}
                        className="w-full py-4 bg-brand-500 hover:bg-brand-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all group"
                      >
                        Continue <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  )}

                  {/* ── STEP 2: Company details ── */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <h2 className="text-xl font-bold text-white mb-1">Tell us about your setup</h2>
                      <p className="text-slate-500 text-sm mb-6">We'll prepare a demo specific to your situation.</p>

                      <div className="space-y-5 mb-8">
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-brand-400" /> Company / organisation name
                          </label>
                          <input
                            type="text"
                            required
                            value={step2.companyName}
                            onChange={e => setStep2(s => ({ ...s, companyName: e.target.value }))}
                            className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-500 transition-colors placeholder-slate-600"
                            placeholder="Gupta Plastics Pvt. Ltd."
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">City (optional)</label>
                          <input
                            type="text"
                            value={step2.city}
                            onChange={e => setStep2(s => ({ ...s, city: e.target.value }))}
                            className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-500 transition-colors placeholder-slate-600"
                            placeholder="Delhi, Meerut, Lucknow…"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-brand-400" /> What exactly do you need?
                          </label>
                          <textarea
                            required
                            value={step2.requirement}
                            onChange={e => setStep2(s => ({ ...s, requirement: e.target.value }))}
                            rows={4}
                            className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-500 transition-colors resize-none placeholder-slate-600"
                            placeholder="E.g. — We run a 50-worker plastic unit. Need GST billing + inventory tracking for ~80 SKUs. Currently on Excel."
                          />
                          <p className={`text-xs mt-1 ${step2.requirement.length < 20 ? 'text-slate-600' : 'text-brand-400'}`}>
                            {step2.requirement.length < 20 ? `${20 - step2.requirement.length} more chars to continue` : '✓ Good detail'}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={goBack}
                          className="px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold rounded-xl flex items-center gap-2 transition-all"
                        >
                          <ArrowLeft className="w-4 h-4" /> Back
                        </button>
                        <button
                          type="button"
                          disabled={!step2Valid}
                          onClick={goNext}
                          className="flex-1 py-4 bg-brand-500 hover:bg-brand-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all group"
                        >
                          Continue <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* ── STEP 3: Contact details ── */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <h2 className="text-xl font-bold text-white mb-1">Where should we reach you?</h2>
                      <p className="text-slate-500 text-sm mb-6">We'll call or WhatsApp within 1 business day to confirm your slot.</p>

                      <form onSubmit={handleSubmit}>
                        <div className="space-y-5 mb-8">
                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                              <User className="w-4 h-4 text-brand-400" /> Your name
                            </label>
                            <input
                              required
                              type="text"
                              value={step3.name}
                              onChange={e => setStep3(s => ({ ...s, name: e.target.value }))}
                              className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-500 transition-colors placeholder-slate-600"
                              placeholder="Ramesh Kumar"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                              <Phone className="w-4 h-4 text-brand-400" /> Phone / WhatsApp
                            </label>
                            <input
                              required
                              type="tel"
                              value={step3.phone}
                              onChange={e => setStep3(s => ({ ...s, phone: e.target.value }))}
                              className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-500 transition-colors placeholder-slate-600"
                              placeholder="+91 98765 43210"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                              <Mail className="w-4 h-4 text-brand-400" /> Email
                            </label>
                            <input
                              required
                              type="email"
                              value={step3.email}
                              onChange={e => setStep3(s => ({ ...s, email: e.target.value }))}
                              className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-500 transition-colors placeholder-slate-600"
                              placeholder="you@company.com"
                            />
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <button
                            type="button"
                            onClick={goBack}
                            className="px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold rounded-xl flex items-center gap-2 transition-all"
                          >
                            <ArrowLeft className="w-4 h-4" /> Back
                          </button>
                          <button
                            type="submit"
                            disabled={!step3Valid || isSubmitting}
                            className="flex-1 py-4 bg-brand-500 hover:bg-brand-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all group shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:-translate-y-0.5"
                          >
                            {isSubmitting ? 'Submitting…' : 'Book my demo'}
                            {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                          </button>
                        </div>

                        <p className="text-center text-xs text-slate-500 mt-4">
                          By submitting, you agree to our{' '}
                          <Link to="/privacy-policy" className="underline hover:text-white">Privacy Policy</Link>.
                          No spam, no retainer.
                        </p>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Below-form trust note */}
              <div className="mt-4 text-center">
                <p className="text-xs text-slate-600">
                  Prefer to skip the form?{' '}
                  <a href="https://wa.me/919891081934" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors font-medium">
                    WhatsApp us directly
                  </a>
                  {' '}·{' '}
                  <a href="tel:+919891081934" className="text-slate-400 hover:text-white transition-colors font-medium">
                    +91 98910 81934
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
