import React from 'react';
import { ArrowRight, Bot, TrendingUp, Shield } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-600/10 border border-purple-600/30 rounded-full px-4 py-2 mb-8">
            <Bot className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm text-purple-300">Powered by AI</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Day Trade
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Inteligente
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Invista com inteligência artificial avançada. Sistema de cotas a partir de R$ 75,00 
            com rentabilidade diária de até 2,2%. Seguro, transparente e rentável.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={onGetStarted}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-600/25"
            >
              Comece Agora
              <ArrowRight className="inline w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-purple-600 rounded-xl font-semibold text-lg hover:bg-purple-600/10 transition-all">
              Ver Demo
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-green-400 mb-2">1,3%</h3>
            <p className="text-sm text-gray-300">Retorno Baixo Risco</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-orange-400 mb-2">1,6%</h3>
            <p className="text-sm text-gray-300">Retorno Médio Risco</p>
          </div>
          
          <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-red-400 mb-2">2,2%</h3>
            <p className="text-sm text-gray-300">Retorno Alto Risco</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;