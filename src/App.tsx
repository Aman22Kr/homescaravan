import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CaravanProvider } from './context/CaravanContext.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WishlistDrawer from './components/WishlistDrawer.jsx';
import BookingModal from './components/BookingModal.jsx';
import ToastNotification from './components/ToastNotification.jsx';

// Pages
import Home from './pages/Home.jsx';
import FleetPage from './pages/FleetPage.jsx';
import CaravanDetail from './pages/CaravanDetail.jsx';
import DestinationsPage from './pages/DestinationsPage.jsx';
import DestinationDetail from './pages/DestinationDetail.jsx';
import HowItWorksPage from './pages/HowItWorksPage.jsx';
import CampsitesPage from './pages/CampsitesPage.jsx';
import TariffsPage from './pages/TariffsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

// Scroll to top helper on hash route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <CaravanProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-neutral-50 text-neutral-900 selection:bg-amber-500/20 selection:text-amber-900">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/fleet" element={<FleetPage />} />
              <Route path="/fleet/:id" element={<CaravanDetail />} />
              <Route path="/destinations" element={<DestinationsPage />} />
              <Route path="/destinations/:id" element={<DestinationDetail />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/campsites" element={<CampsitesPage />} />
              <Route path="/tariffs" element={<TariffsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />

          {/* Interactive Global Drawers & Modals */}
          <WishlistDrawer />
          <BookingModal />
          <ToastNotification />
        </div>
      </HashRouter>
    </CaravanProvider>
  );
}
