import React, { useState } from 'react';
import { Calculator, TrendingUp, Calendar, DollarSign } from 'lucide-react';

const Simulator: React.FC = () => {
  const [amount, setAmount] = useState(1000);
  const [riskLevel, setRiskLevel] = useState<'low' | 'medium' | 'high'>('medium');

  const riskData = {
    low: { rate: 0.013, color: 'green', name: 'Baixo Risco' },
    medium: { rate: 0.016, color: 'orange', name: 'Médio Risco' },
    high: { rate: 0.022, color: 'red', name: 'Alto Risco' }
  };

  const calculateReturns = () => {
    const dailyRate = riskData[riskLevel].rate;
    const daily = amount * dailyRate;
    const weekly = amount * Math.pow(1 + dailyRate, 7) - amount;
    const monthly = amount * Math.pow(1 + dailyRate, 30) - amount;
    
    return { daily, weekly, monthly };
  };

  const returns = calculateReturns();

  const periods = [
    { label: '1 Dia', value: returns.daily, icon: Calendar },
    { label: '1 Semana', value: returns.weekly, icon: TrendingUp },
    { label: '1 Mês', value: returns.monthly, icon: DollarSign }
  ];

  return (
    <section id="simulador" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Simulador de Investimentos
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Calcule o potencial de retorno do seu investimento com nossos diferentes perfis de risco
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-2xl p-8">
          {/* Input Section */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <Calculator className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Configure sua Simulação</h3>
            </div>

            {/* Amount Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Valor do Investimento
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">R$</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full pl-12 pr-4 py-4 bg-purple-900/20 border border-purple-600/30 rounded-xl text-white text-lg font-semibold focus:border-purple-500 focus:outline-none transition-colors"
                  min="75"
                  step="75"
                />
              </div>
              <p className="text-xs text-gray-400 mt-2">Valor mínimo: R$ 75,00 (1 cota)</p>
            </div>

            {/* Risk Level Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-4">
                Perfil de Risco
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(riskData).map(([key, data]) => (
                  <button
                    key={key}
                    onClick={() => setRiskLevel(key as 'low' | 'medium' | 'high')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      riskLevel === key
                        ? `border-${data.color}-500 bg-${data.color}-500/10`
                        : `border-${data.color}-500/30 hover:border-${data.color}-500/50`
                    }`}
                  >
                    <div className="text-center">
                      <div className={`text-2xl font-bold text-${data.color}-400 mb-1`}>
                        {(data.rate * 100).toFixed(1)}%
                      </div>
                      <div className="text-sm text-white font-medium">{data.name}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="border-t border-purple-600/20 pt-8">
            <h4 className="text-xl font-bold text-white mb-6 text-center">Retorno Estimado</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {periods.map((period, index) => {
                const Icon = period.icon;
                const color = riskData[riskLevel].color;
                
                return (
                  <div key={index} className={`bg-gradient-to-br from-${color}-500/10 to-${color}-600/5 border border-${color}-500/20 rounded-xl p-6 text-center`}>
                    <Icon className={`w-8 h-8 text-${color}-400 mx-auto mb-4`} />
                    <div className="text-lg font-medium text-gray-300 mb-2">{period.label}</div>
                    <div className={`text-2xl font-bold text-${color}-400 mb-2`}>
                      +R$ {period.value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div className="text-sm text-gray-400">
                      Total: R$ {(amount + period.value).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-8">
              <p className="text-xs text-gray-400 mb-4">
                * Simulação baseada em projeções. Resultados passados não garantem resultados futuros.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-600/25">
                Começar a Investir
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulator;