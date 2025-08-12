import React, { useState } from 'react';
import { Menu, X, TrendingUp, User, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

interface HeaderProps {
  onAuthClick: (mode: 'login' | 'register') => void;
}

const Header: React.FC<HeaderProps> = ({ onAuthClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, profile, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-purple-600/20 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              TradeAI Pro
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#como-funciona" className="text-gray-300 hover:text-purple-400 transition-colors">
              Como Funciona
            </a>
            <a href="#dashboard" className="text-gray-300 hover:text-purple-400 transition-colors">
              Dashboard
            </a>
            <a href="#simulador" className="text-gray-300 hover:text-purple-400 transition-colors">
              Simulador
            </a>
            <a href="#rankings" className="text-gray-300 hover:text-purple-400 transition-colors">
              Rankings
            </a>
          </nav>

          {/* Auth Buttons - Desktop */}
          {user ? (
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <User className="w-4 h-4" />
                <span className="text-sm">{profile?.full_name || user.email}</span>
              </div>
              <button 
                onClick={handleSignOut}
                className="flex items-center px-4 py-2 text-red-400 border border-red-600 rounded-lg hover:bg-red-600/10 transition-all"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </button>
            </div>
          ) : (
            <div className="hidden md:flex space-x-4">
              <button 
                onClick={() => onAuthClick('login')}
                className="px-4 py-2 text-purple-400 border border-purple-600 rounded-lg hover:bg-purple-600/10 transition-all"
              >
                Entrar
              </button>
              <button 
                onClick={() => onAuthClick('register')}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105"
              >
                Cadastrar
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-600/20">
            <nav className="flex flex-col space-y-4">
              <a href="#como-funciona" className="text-gray-300 hover:text-purple-400 transition-colors">
                Como Funciona
              </a>
              <a href="#dashboard" className="text-gray-300 hover:text-purple-400 transition-colors">
                Dashboard
              </a>
              <a href="#simulador" className="text-gray-300 hover:text-purple-400 transition-colors">
                Simulador
              </a>
              <a href="#rankings" className="text-gray-300 hover:text-purple-400 transition-colors">
                Rankings
              </a>
              {user ? (
                <div className="flex flex-col space-y-2 pt-4">
                  <div className="flex items-center space-x-2 text-gray-300 px-4 py-2">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{profile?.full_name || user.email}</span>
                  </div>
                  <button 
                    onClick={handleSignOut}
                    className="flex items-center px-4 py-2 text-red-400 border border-red-600 rounded-lg hover:bg-red-600/10 transition-all"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sair
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2 pt-4">
                  <button 
                    onClick={() => onAuthClick('login')}
                    className="px-4 py-2 text-purple-400 border border-purple-600 rounded-lg hover:bg-purple-600/10 transition-all"
                  >
                    Entrar
                  </button>
                  <button 
                    onClick={() => onAuthClick('register')}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all"
                  >
                    Cadastrar
                  </button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;