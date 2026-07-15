import ServicesComponent from '../components/Services';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/WhyChooseUs';

import { useSEO } from '../hooks/useSEO';

export default function Services() {
  useSEO({
    title: 'Our B2B Services - Cloud, Web & App Development | Sparkwaves',
    description: 'Explore our enterprise engineering services: cloud & infrastructure, full-stack web/app development, data intelligence, and growth automation.',
    keywords: 'B2B development, cloud services, web app development, data pipeline, performance marketing, workflow automation',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "B2B Enterprise Engineering Services",
      "provider": {
        "@type": "Corporation",
        "name": "Sparkwaves Production",
        "url": "https://sparkwavsproduction.me"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Sparkwaves B2B Services Catalog",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud & Infrastructure Solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web & App Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Data Intelligence Pipelines"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Workflow Automation & Growth Systems"
            }
          }
        ]
      }
    }
  });

  return (
    <div className="pt-16 min-h-screen bg-slate-950">
      <ServicesComponent />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
