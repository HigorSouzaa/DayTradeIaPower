import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Dashboard from './components/Dashboard';
import Simulator from './components/Simulator';
import Gamification from './components/Gamification';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import RiskPolicy from './components/RiskPolicy';
import Regulation from './components/Regulation';
import HelpCenter from './components/HelpCenter';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import TechnicalSupport from './components/TechnicalSupport';

type PageType = 'home' | 'terms' | 'privacy' | 'risks' | 'regulation' | 'help' | 'faq' | 'contact' | 'support';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const navigateToPage = (page: PageType) => {
    setCurrentPage(page);
  };

  const backToHome = () => {
    setCurrentPage('home');
  };

  // Render different pages based on currentPage state
  if (currentPage === 'terms') {
    return <TermsOfService onBack={backToHome} />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={backToHome} />;
  }

  if (currentPage === 'risks') {
    return <RiskPolicy onBack={backToHome} />;
  }

  if (currentPage === 'regulation') {
    return <Regulation onBack={backToHome} />;
  }

  if (currentPage === 'help') {
    return <HelpCenter onBack={backToHome} />;
  }

  if (currentPage === 'faq') {
    return <FAQ onBack={backToHome} />;
  }

  if (currentPage === 'contact') {
    return <Contact onBack={backToHome} />;
  }

  if (currentPage === 'support') {
    return <TechnicalSupport onBack={backToHome} />;
  }

  // Home page
  return (
    <div className="min-h-screen bg-black text-white">
      <Header onAuthClick={openAuthModal} />
      <Hero onGetStarted={() => openAuthModal('register')} />
      <HowItWorks />
      <Dashboard />
      <Simulator />
      <Gamification />
      <Footer onNavigate={navigateToPage} />
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        setMode={setAuthMode}
      />
    </div>
  );
}

export default App;