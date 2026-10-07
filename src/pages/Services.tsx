import ServicesComponent from '../components/Services';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/WhyChooseUs';

import { useSEO } from '../hooks/useSEO';

export default function Services() {
  useSEO({
    title: 'Software Services in Delhi — ERP, School Management, GeM IT | Sparkwaves Production',
    description: 'Sparkwaves Production offers custom ERP systems, school management software, and GeM-ready IT solutions from Mukandpur, Delhi. 4-person team + 37 AI agents. MSME certified. Fixed-price quotes in 48 hrs.',
    keywords: 'custom software development Delhi, ERP system manufacturer India, school management software Delhi, GeM IT vendor Delhi, MSME software company Mukandpur, manufacturing ERP India, government procurement IT, Sparkwaves services',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Sparkwaves Production',
      description: 'Custom ERP, school management, and GeM IT services from Mukandpur, Delhi.',
      url: 'https://sparkwavsproduction.me/services',
      telephone: '+919891081934',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mukandpur',
        addressRegion: 'Delhi',
        addressCountry: 'IN',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Sparkwaves IT Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Manufacturing ERP Systems' },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'School Management Software' },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'GeM-Ready Government IT Solutions' },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'AI Workflow Automation' },
          },
        ],
      },
    },
  });

  return (
    <div className="pt-16 min-h-screen bg-slate-950">
      <ServicesComponent />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
