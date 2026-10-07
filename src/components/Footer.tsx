import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-16 border-t border-slate-900">
      <div className="container mx-auto px-6 md:px-12">

        {/* Top grid — logo + nav + contact side by side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand column */}
          <div>
            <Link to="/" aria-label="Sparkwaves Production Home" className="inline-block mb-4 opacity-90 hover:opacity-100 transition-opacity">
              <img src="/logo.svg" alt="Sparkwaves Production Logo" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Custom software, AI automation, and GeM-ready IT services for manufacturers, schools, and government bodies.
            </p>
            <div className="flex flex-col gap-1 mt-4">
              <span className="text-xs text-slate-600">UDYAM-DL-01-0063225</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-600">
                <MapPin className="w-3 h-3" strokeWidth={1.8} />
                Mukandpur, Delhi, India
              </span>
            </div>
          </div>

          {/* Links column */}
          <div>
            <p className="text-xs font-semibold text-slate-400 mb-4 tracking-wide">Quick links</p>
            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <Link to="/services" className="hover:text-brand-400 transition-colors w-fit">Services</Link>
              <Link to="/products" className="hover:text-brand-400 transition-colors w-fit">Products</Link>
              <Link to="/about" className="hover:text-brand-400 transition-colors w-fit">About us</Link>
              <Link to="/team" className="hover:text-brand-400 transition-colors w-fit">Team</Link>
              <Link to="/contact" className="hover:text-brand-400 transition-colors w-fit">Contact</Link>
              <Link to="/demo" className="hover:text-brand-400 transition-colors w-fit">Book a demo</Link>
            </div>
          </div>

          {/* Contact column */}
          <div>
            <p className="text-xs font-semibold text-slate-400 mb-4 tracking-wide">Get in touch</p>
            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <a href="tel:+919891081934" className="inline-flex items-center gap-2 hover:text-slate-300 transition-colors">
                <Phone className="w-3.5 h-3.5 text-slate-600 shrink-0" strokeWidth={1.8} />
                +91 98910 81934
                <span className="text-xs text-slate-700">Call + WhatsApp</span>
              </a>
              <a href="tel:+918601924292" className="inline-flex items-center gap-2 hover:text-slate-300 transition-colors">
                <Phone className="w-3.5 h-3.5 text-slate-600 shrink-0" strokeWidth={1.8} />
                +91 86019 24292
                <span className="text-xs text-slate-700">Call only</span>
              </a>
              <a href="mailto:sales@sparkwavsproduction.me" className="inline-flex items-center gap-2 hover:text-slate-300 transition-colors">
                <Mail className="w-3.5 h-3.5 text-slate-600 shrink-0" strokeWidth={1.8} />
                sales@sparkwavsproduction.me
              </a>
              <a href="mailto:support@sparkwavsproduction.me" className="inline-flex items-center gap-2 hover:text-slate-300 transition-colors">
                <Mail className="w-3.5 h-3.5 text-slate-600 shrink-0" strokeWidth={1.8} />
                support@sparkwavsproduction.me
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-700">
          <p>© {new Date().getFullYear()} Sparkwaves Production. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/changelog" className="hover:text-slate-500 transition-colors">Changelog</Link>
            <Link to="/privacy-policy" className="hover:text-slate-500 transition-colors">Privacy policy</Link>
            <Link to="/terms-of-service" className="hover:text-slate-500 transition-colors">Terms of service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
