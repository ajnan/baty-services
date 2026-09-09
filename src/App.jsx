import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';

// Scroll to top automatically when navigating between pages
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleOpenQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#0a0c10] text-slate-100 font-sans selection:bg-[#fdb813] selection:text-black">
        {/* Global Navigation Bar */}
        <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Routed Pages */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/services"
              element={<ServicesPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/projects"
              element={<ProjectsPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/faq"
              element={<FAQPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
            {/* Fallback to Home */}
            <Route
              path="*"
              element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Universal Quick Quote Modal */}
        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={handleCloseQuoteModal}
        />
      </div>
    </Router>
  );
}
