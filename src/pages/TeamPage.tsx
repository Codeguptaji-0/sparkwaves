import Team from '../components/Team';
import Footer from '../components/Footer';

import { useSEO } from '../hooks/useSEO';

export default function TeamPage() {
  useSEO({
    title: 'Meet the Team - Sparkwaves',
    description: 'Get to know the engineers and founders behind Sparkwaves who design and deploy your high-performance enterprise applications.',
    keywords: 'sparkwaves founders, dev agency team, software developers, principal engineers'
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
