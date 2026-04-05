import ServicesComponent from '../components/Services';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/WhyChooseUs';

export default function Services() {
  return (
    <div className="pt-16 min-h-screen bg-slate-950">
      <ServicesComponent />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
