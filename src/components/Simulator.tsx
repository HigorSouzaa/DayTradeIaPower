import React, { useState, useEffect, useCallback } from 'react';
import { Calculator, TrendingUp, Calendar, DollarSign, BarChart3, Target, Zap } from 'lucide-react';

interface SimulationPoint {
  period: number;
  value: number;
  return: number;
  date: Date;
}

const riskData = {
  low: { 
    rate: 0.013, 
    color: 'green', 
    name: 'Baixo Risco',
    description: 'Investimentos conservadores com menor volatilidade',
    volatility: 0.8
  },
  medium: { 
    rate: 0.016, 
    color: 'orange', 
    name: 'Médio Risco',
    description: 'Equilíbrio entre risco e retorno',
    volatility: 1.0
  },
  high: { 
    rate: 0.022, 
    color: 'red', 
    name: 'Alto Risco',
    description: 'Maior potencial de retorno com maior volatilidade',
    volatility: 1.3
  }
};

const Simulator: React.FC = () => {
  const [amount, setAmount] = useState(1000);
  const [riskLevel, setRiskLevel] = useState<'low' | 'medium' | 'high'>('medium');
  const [timeframe, setTimeframe] = useState<'daily' | 'weekly' | 'monthly' | 'yearly'>('monthly');
  const [simulationData, setSimulationData] = useState<SimulationPoint[]>([]);

  const calculateReturns = useCallback(() => {
    const dailyRate = riskData[riskLevel].rate;
    const volatility = riskData[riskLevel].volatility;
    
    const daily = amount * dailyRate;
    const weekly = amount * Math.pow(1 + dailyRate, 7) - amount;
    const monthly = amount * Math.pow(1 + dailyRate, 30) - amount;
    const yearly = amount * Math.pow(1 + dailyRate, 365) - amount;
    
    return { daily, weekly, monthly, yearly, volatility };
  }, [amount, riskLevel]);

  const generateSimulationData = useCallback(() => {
    const returns = calculateReturns();
    const data: SimulationPoint[] = [];
    const periods = timeframe === 'daily' ? 30 : timeframe === 'weekly' ? 12 : timeframe === 'monthly' ? 12 : 5;
    
    for (let i = 0; i <= periods; i++) {
      const baseReturn = returns[timeframe] * (i / periods);
      const volatilityFactor = 1 + (Math.random() - 0.5) * returns.volatility * 0.1;
      const simulatedReturn = baseReturn * volatilityFactor;
      
      data.push({
        period: i,
        value: amount + simulatedReturn,
        return: simulatedReturn,
        date: new Date(Date.now() + (timeframe === 'daily' ? i * 24 * 60 * 60 * 1000 : 
                                    timeframe === 'weekly' ? i * 7 * 24 * 60 * 60 * 1000 :
                                    timeframe === 'monthly' ? i * 30 * 24 * 60 * 60 * 1000 :
                                    i * 365 * 24 * 60 * 60 * 1000))
      });
    }
    
    setSimulationData(data);
  }, [amount, timeframe, calculateReturns]);

  useEffect(() => {
    generateSimulationData();
  }, [generateSimulationData]);

  const returns = calculateReturns();

  const periods = [
    { label: '1 Dia', value: returns.daily, icon: Calendar, timeframe: 'daily' },
    { label: '1 Semana', value: returns.weekly, icon: TrendingUp, timeframe: 'weekly' },
    { label: '1 Mês', value: returns.monthly, icon: DollarSign, timeframe: 'monthly' },
    { label: '1 Ano', value: returns.yearly, icon: BarChart3, timeframe: 'yearly' }
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Controls */}
              <div>
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

                {/* Timeframe Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-4">
                    Período de Simulação
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { key: 'daily', label: '30 Dias', icon: Calendar },
                      { key: 'weekly', label: '12 Semanas', icon: TrendingUp },
                      { key: 'monthly', label: '12 Meses', icon: DollarSign },
                      { key: 'yearly', label: '5 Anos', icon: BarChart3 }
                    ].map(({ key, label, icon: Icon }) => (
                      <button
                        key={key}
                        onClick={() => setTimeframe(key as 'daily' | 'weekly' | 'monthly' | 'yearly')}
                        className={`p-3 rounded-lg border-2 transition-all flex items-center justify-center ${
                          timeframe === key
                            ? 'border-purple-500 bg-purple-500/10'
                            : 'border-purple-500/30 hover:border-purple-500/50'
                        }`}
                      >
                        <Icon className="w-4 h-4 text-purple-400 mr-2" />
                        <span className="text-sm text-white">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Risk Level Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-4">
                    Perfil de Risco
                  </label>
                  <div className="space-y-3">
                    {Object.entries(riskData).map(([key, data]) => (
                      <button
                        key={key}
                        onClick={() => setRiskLevel(key as 'low' | 'medium' | 'high')}
                        className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                          riskLevel === key
                            ? `border-${data.color}-500 bg-${data.color}-500/10`
                            : `border-${data.color}-500/30 hover:border-${data.color}-500/50`
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className={`text-lg font-bold text-${data.color}-400 mb-1`}>
                              {data.name}
                            </div>
                            <div className="text-sm text-gray-300">{data.description}</div>
                          </div>
                          <div className={`text-2xl font-bold text-${data.color}-400`}>
                            {(data.rate * 100).toFixed(1)}%
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Quick Stats */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Resumo da Simulação</h4>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300">Valor Investido</span>
                      <DollarSign className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">
                      R$ {amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-600/10 to-green-700/5 border border-green-600/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300">Retorno Estimado</span>
                      <Target className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-green-400">
                      +R$ {returns[timeframe].toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </div>
                    <div className="text-sm text-gray-400">
                      {((returns[timeframe] / amount) * 100).toFixed(1)}% de retorno
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600/10 to-blue-700/5 border border-blue-600/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300">Valor Total</span>
                      <TrendingUp className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-blue-400">
                      R$ {(amount + returns[timeframe]).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-600/10 to-orange-700/5 border border-orange-600/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300">Volatilidade</span>
                      <Zap className="w-5 h-5 text-orange-400" />
                    </div>
                    <div className="text-2xl font-bold text-orange-400">
                      {(riskData[riskLevel].volatility * 100).toFixed(0)}%
                    </div>
                    <div className="text-sm text-gray-400">
                      {riskData[riskLevel].volatility < 1 ? 'Baixa' : 
                       riskData[riskLevel].volatility === 1 ? 'Média' : 'Alta'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="border-t border-purple-600/20 pt-8">
            <h4 className="text-xl font-bold text-white mb-6 text-center">Projeção de Crescimento</h4>
            
            {/* Simple Chart Visualization */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-xl p-6">
                <h5 className="text-lg font-semibold text-white mb-4">Evolução do Investimento</h5>
                <div className="h-64 flex items-end justify-between space-x-1">
                  {simulationData.slice(0, 12).map((point, index) => {
                    const maxValue = Math.max(...simulationData.map(d => d.value));
                    const height = (point.value / maxValue) * 100;
                    const color = riskData[riskLevel].color;
                    
                    return (
                      <div key={index} className="flex flex-col items-center flex-1">
                        <div 
                          className={`w-full bg-gradient-to-t from-${color}-600 to-${color}-400 rounded-t transition-all duration-500 hover:from-${color}-500 hover:to-${color}-300`}
                          style={{ height: `${height}%`, minHeight: '4px' }}
                          title={`Período ${index + 1}: R$ ${point.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                        ></div>
                        {index % 3 === 0 && (
                          <span className="text-xs text-gray-400 mt-2">{index + 1}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>Início</span>
                  <span>Fim do Período</span>
                </div>
              </div>
            </div>

            {/* Period Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {periods.map((period, index) => {
                const Icon = period.icon;
                const color = riskData[riskLevel].color;
                const isSelected = period.timeframe === timeframe;
                
                return (
                  <div 
                    key={index} 
                    className={`bg-gradient-to-br from-${color}-500/10 to-${color}-600/5 border border-${color}-500/20 rounded-xl p-4 text-center transition-all cursor-pointer ${
                      isSelected ? `ring-2 ring-${color}-400` : 'hover:border-purple-500/50'
                    }`}
                    onClick={() => setTimeframe(period.timeframe as 'daily' | 'weekly' | 'monthly' | 'yearly')}
                  >
                    <Icon className={`w-6 h-6 text-${color}-400 mx-auto mb-2`} />
                    <div className="text-sm font-medium text-gray-300 mb-1">{period.label}</div>
                    <div className={`text-lg font-bold text-${color}-400 mb-1`}>
                      +R$ {period.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </div>
                    <div className="text-xs text-gray-400">
                      {((period.value / amount) * 100).toFixed(1)}%
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Detailed Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-600/10 to-green-700/5 border border-green-600/20 rounded-xl p-6">
                <h5 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                  Melhor Cenário
                </h5>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Valor Final:</span>
                    <span className="text-green-400 font-semibold">
                      R$ {(amount + returns[timeframe] * 1.2).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Lucro:</span>
                    <span className="text-green-400 font-semibold">
                      +R$ {(returns[timeframe] * 1.2).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-600/10 to-red-700/5 border border-red-600/20 rounded-xl p-6">
                <h5 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 text-red-400 mr-2 rotate-180" />
                  Pior Cenário
                </h5>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Valor Final:</span>
                    <span className="text-red-400 font-semibold">
                      R$ {(amount + returns[timeframe] * 0.8).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Lucro:</span>
                    <span className="text-red-400 font-semibold">
                      +R$ {(returns[timeframe] * 0.8).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xs text-gray-400 mb-4">
                * Simulação baseada em projeções históricas. Resultados passados não garantem resultados futuros.
                <br />
                ** Valores podem variar devido à volatilidade do mercado.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-600/25">
                Começar a Investir Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulator;