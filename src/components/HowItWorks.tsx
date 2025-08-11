import React from 'react';
import { DollarSign, TrendingUp, Shield, BarChart3, Users, Award } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: DollarSign,
      title: "Adquira suas Cotas",
      description: "Comece com apenas R$ 75,00 por cota. Valor acessível para todos os perfis de investidor.",
      color: "purple"
    },
    {
      icon: Shield,
      title: "Escolha seu Perfil",
      description: "Baixo, médio ou alto risco. Cada perfil com rentabilidade e estratégia específica da IA.",
      color: "blue"
    },
    {
      icon: BarChart3,
      title: "IA Opera para Você",
      description: "Nossa inteligência artificial analisa o mercado 24/7 e executa as melhores operações.",
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "Acompanhe os Lucros",
      description: "Dashboard em tempo real com relatórios diários, semanais e mensais de performance.",
      color: "orange"
    }
  ];

  const riskLevels = [
    {
      level: "Baixo Risco",
      icon: Shield,
      percentage: "1,3%",
      description: "Operações conservadoras com maior segurança",
      color: "green",
      bgColor: "from-green-500/10 to-green-600/5",
      borderColor: "border-green-500/20"
    },
    {
      level: "Médio Risco",
      icon: BarChart3,
      percentage: "1,6%",
      description: "Equilibrio entre segurança e rentabilidade",
      color: "orange",
      bgColor: "from-orange-500/10 to-orange-600/5",
      borderColor: "border-orange-500/20"
    },
    {
      level: "Alto Risco",
      icon: TrendingUp,
      percentage: "2,2%",
      description: "Máxima rentabilidade com estratégias avançadas",
      color: "red",
      bgColor: "from-red-500/10 to-red-600/5",
      borderColor: "border-red-500/20"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Como Funciona
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sistema simples e transparente para maximizar seus investimentos com segurança
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-xl p-6 h-full hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-sm font-bold text-white">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-white">{step.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-600 to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Risk Levels */}
        <div className="bg-gradient-to-r from-purple-600/5 to-purple-700/5 border border-purple-600/20 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Perfis de Investimento
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {riskLevels.map((risk, index) => {
              const Icon = risk.icon;
              return (
                <div key={index} className={`bg-gradient-to-br ${risk.bgColor} border ${risk.borderColor} rounded-xl p-6 text-center hover:scale-105 transition-all duration-300`}>
                  <div className={`w-16 h-16 bg-${risk.color}-500/20 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-8 h-8 text-${risk.color}-400`} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">{risk.level}</h4>
                  <div className={`text-3xl font-bold text-${risk.color}-400 mb-3`}>{risk.percentage}</div>
                  <p className="text-sm text-gray-300 leading-relaxed">{risk.description}</p>
                  <div className="mt-4 text-xs text-gray-400">ao dia*</div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-xs text-gray-400">
              * Rentabilidade estimada baseada em dados históricos. Investimentos envolvem riscos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;