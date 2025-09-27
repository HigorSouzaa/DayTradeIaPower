import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Dashboard from './components/Dashboard';
import Simulator from './components/Simulator';
import Gamification from './components/Gamification';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import UserDashboard from './components/UserDashboard';
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
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
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

  const handleAuthSuccess = (user: any) => {
    setUser(user);
  };

  const handleSignOut = () => {
    setUser(null);
  };

  // Show loading screen while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300">Carregando...</p>
        </div>
      </div>
    );
  }

  // If user is logged in, show user dashboard
  if (user && currentPage === 'home') {
    return <UserDashboard user={user} />;
  }

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
      <Header 
        onAuthClick={openAuthModal} 
        user={user}
        onSignOut={handleSignOut}
      />
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
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
}

export default App;