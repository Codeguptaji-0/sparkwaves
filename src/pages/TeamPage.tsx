import Team from '../components/Team';
import Footer from '../components/Footer';

import { useSEO } from '../hooks/useSEO';

export default function TeamPage() {
  useSEO({
    title: 'Meet the Team — 4 Humans + 37 AI Agents | Sparkwaves Production Delhi',
    description: 'Sparkwaves Production runs on 4 human experts and 37 purpose-built AI agents across 11 departments. Meet our founders and see how we deliver enterprise-scale software from Mukandpur, Delhi.',
    keywords: 'Sparkwaves team, Sparkwaves founders, AI-powered software company Delhi, 37 AI agents, human-AI team, software developers Mukandpur, Suraj Narayan Gupta, Nitesh Chauhan'
  });

  return (
    <>
      <main className="pt-24 min-h-screen bg-slate-950">
        <Team />
      </main>
      <Footer />
    </>
  );
}
