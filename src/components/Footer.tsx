import React from 'react';
import { TrendingUp, Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const footerLinks = {
    plataforma: [
      { name: 'Como Funciona', href: '#como-funciona' },
      { name: 'Dashboard', href: '#dashboard' },
      { name: 'Simulador', href: '#simulador' },
      { name: 'Rankings', href: '#rankings' }
    ],
    suporte: [
      { name: 'Central de Ajuda', href: '#', page: 'help' },
      { name: 'FAQ', href: '#', page: 'faq' },
      { name: 'Contato', href: '#', page: 'contact' },
      { name: 'Suporte Técnico', href: '#', page: 'support' }
    ],
    legal: [
      { name: 'Termos de Uso', href: '#', page: 'terms' },
      { name: 'Política de Privacidade', href: '#', page: 'privacy' },
      { name: 'Política de Riscos', href: '#', page: 'risks' },
      { name: 'Regulamentação', href: '#', page: 'regulation' }
    ]
  };

  return (
    <footer className="bg-gradient-to-b from-black to-purple-950/30 border-t border-purple-600/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                TradeAI Pro
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              A plataforma de day trade mais avançada do Brasil, com inteligência artificial 
              para maximizar seus investimentos de forma segura e rentável.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contato@tradeaipro.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(11) 4002-8922</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-white font-semibold mb-4">Plataforma</h3>
            <ul className="space-y-2">
              {footerLinks.plataforma.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              {footerLinks.suporte.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-600/20 my-8"></div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-purple-600/10 to-purple-700/10 border border-purple-600/20 rounded-xl p-6 mb-8">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-white mb-2">
                Fique por dentro das novidades
              </h3>
              <p className="text-gray-300 text-sm">
                Receba insights exclusivos, análises de mercado e dicas de investimento
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:ml-8">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="px-4 py-3 bg-purple-900/20 border border-purple-600/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors min-w-0 sm:min-w-[250px]"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg font-semibold text-white hover:from-purple-700 hover:to-purple-800 transition-all whitespace-nowrap">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 TradeAI Pro. Todos os direitos reservados.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a href="#" className="p-2 bg-purple-600/20 rounded-lg text-purple-400 hover:bg-purple-600/30 hover:text-purple-300 transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-purple-600/20 rounded-lg text-purple-400 hover:bg-purple-600/30 hover:text-purple-300 transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-purple-600/20 rounded-lg text-purple-400 hover:bg-purple-600/30 hover:text-purple-300 transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
          <p className="text-xs text-amber-200 leading-relaxed">
            <strong>Aviso de Risco:</strong> Operações com instrumentos financeiros envolvem alto grau de risco e podem resultar em perdas que excedem seus depósitos iniciais. 
            Você deve considerar se compreende como funcionam os instrumentos financeiros e se pode correr o alto risco de perder seu dinheiro. 
            A TradeAI Pro não fornece conselhos, recomendações ou opiniões em relação à aquisição, detenção ou alienação de produtos financeiros.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;