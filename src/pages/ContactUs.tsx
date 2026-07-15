import ContactComponent from '../components/Contact';
import Footer from '../components/Footer';

import { useSEO } from '../hooks/useSEO';

export default function ContactUs() {
  useSEO({
    title: 'Contact Sparkwaves - Support, Tickets & Consultations',
    description: 'Get in touch with our principal engineers. Open support tickets, request technical consultation, or chat directly via WhatsApp.',
    keywords: 'contact sparkwaves, support tickets, project consult, whatsapp chat'
  });

  return (
    <div className="pt-16 min-h-screen bg-slate-950">
      <ContactComponent />
      <Footer />
    </div>
  );
}
