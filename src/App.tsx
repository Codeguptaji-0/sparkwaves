import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import FloatingContactBtn from './components/FloatingContactBtn';
import Scene3D from './components/Scene3D';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Changelog from './pages/Changelog';
import NotFound from './pages/NotFound';
import TeamPage from './pages/TeamPage';

import BookDemo from './pages/BookDemo';
import CookieBanner from './components/CookieBanner';
import FeedbackWidget from './components/FeedbackWidget';
import AdminAuth from './pages/AdminAuth';
import AdminDashboard from './pages/AdminDashboard';
import ClientPortalAuth from './pages/ClientPortalAuth';
import ClientDashboard from './pages/ClientDashboard';

// Helper component to hide layout on admin routes
function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHiddenRoute = location.pathname.startsWith('/swp-command-center') || location.pathname.startsWith('/client-portal');

  return (
    <>
      {!isHiddenRoute && <Navbar />}
      {children}
      {!isHiddenRoute && <FloatingContactBtn />}
    </>
  );
}

function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 font-sans selection:bg-brand-500/30 text-white relative">
        <Scene3D />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <LayoutWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/demo" element={<BookDemo />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/changelog" element={<Changelog />} />
              <Route path="/team" element={<TeamPage />} />
              
              {/* Secure Admin Routes */}
              <Route path="/swp-command-center" element={<AdminAuth />} />
              <Route path="/swp-command-center/dashboard" element={<AdminDashboard />} />
              
              {/* Secure Client Portal Routes */}
              <Route path="/client-portal" element={<ClientPortalAuth />} />
              <Route path="/client-portal/dashboard" element={<ClientDashboard />} />

              {/* Fallback 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </LayoutWrapper>
        </div>
        
        {/* Universal Modals & Widgets */}
        <CookieBanner />
        <FeedbackWidget />
      </div>
    </BrowserRouter>
  );
}

export default App;
