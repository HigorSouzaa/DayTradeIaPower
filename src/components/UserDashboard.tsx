import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Calendar, 
  BarChart3, 
  PieChart, 
  Plus,
  Settings,
  ArrowUpRight,
  ArrowDownRight,
  Activity
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useInvestments } from '../hooks/useInvestments';

const UserDashboard: React.FC = () => {
  const { profile } = useAuth();
  const { 
    investments, 
    operations, 
    loading, 
    createInvestment, 
    getTotalBalance, 
    getTotalProfit,
    getActiveInvestments 
  } = useInvestments();

  const [showInvestModal, setShowInvestModal] = useState(false);
  const [investAmount, setInvestAmount] = useState(75);
  const [selectedRisk, setSelectedRisk] = useState<'low' | 'medium' | 'high'>('medium');

  const totalBalance = getTotalBalance();
  const totalProfit = getTotalProfit();
  const activeInvestments = getActiveInvestments();
  const profitPercentage = totalBalance > 0 ? (totalProfit / (totalBalance - totalProfit)) * 100 : 0;

  const riskData = {
    low: { rate: 0.013, color: 'green', name: 'Baixo Risco', bgColor: 'from-green-500/10 to-green-600/5', borderColor: 'border-green-500/20' },
    medium: { rate: 0.016, color: 'orange', name: 'Médio Risco', bgColor: 'from-orange-500/10 to-orange-600/5', borderColor: 'border-orange-500/20' },
    high: { rate: 0.022, color: 'red', name: 'Alto Risco', bgColor: 'from-red-500/10 to-red-600/5', borderColor: 'border-red-500/20' }
  };

  const handleCreateInvestment = async () => {
    const { error } = await createInvestment(investAmount, selectedRisk);
    if (!error) {
      setShowInvestModal(false);
      setInvestAmount(75);
      setSelectedRisk('medium');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300">Carregando dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Olá, {profile?.full_name?.split(' ')[0] || 'Trader'}! 👋
            </h1>
            <p className="text-gray-300">Acompanhe seus investimentos e operações em tempo real</p>
          </div>
          <button
            onClick={() => setShowInvestModal(true)}
            className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105 flex items-center"
          >
            <Plus className="w-5 h-5 mr-2" />
            Novo Investimento
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-8 h-8 text-purple-400" />
              <span className={`text-sm font-medium ${profitPercentage >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {profitPercentage >= 0 ? '+' : ''}{profitPercentage.toFixed(1)}%
              </span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              R$ {totalBalance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <div className="text-sm text-gray-400">Saldo Total</div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <ArrowUpRight className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">
              R$ {totalProfit.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <div className="text-sm text-gray-400">Lucro Total</div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-8 h-8 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">+{activeInvestments.length}</span>
            </div>
            <div className="text-2xl font-bold text-blue-400 mb-1">{activeInvestments.length}</div>
            <div className="text-sm text-gray-400">Investimentos Ativos</div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Activity className="w-8 h-8 text-orange-400" />
              <span className="text-sm font-medium text-orange-400">{operations.length}</span>
            </div>
            <div className="text-2xl font-bold text-orange-400 mb-1">{operations.length}</div>
            <div className="text-sm text-gray-400">Operações Hoje</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Investments */}
          <div className="bg-gradient-to-br from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Meus Investimentos</h3>
              <BarChart3 className="w-6 h-6 text-purple-400" />
            </div>
            
            {investments.length === 0 ? (
              <div className="text-center py-8">
                <Target className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-400 mb-2">Nenhum investimento ainda</h4>
                <p className="text-gray-500 mb-4">Comece investindo com apenas R$ 75,00</p>
                <button
                  onClick={() => setShowInvestModal(true)}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all"
                >
                  Fazer Primeiro Investimento
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {investments.map((investment) => {
                  const risk = riskData[investment.risk_level];
                  const dailyReturn = (investment.amount * risk.rate);
                  
                  return (
                    <div key={investment.id} className={`p-4 bg-gradient-to-r ${risk.bgColor} border ${risk.borderColor} rounded-lg`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 bg-${risk.color}-400 rounded-full mr-3`}></div>
                          <span className="font-medium text-white">{risk.name}</span>
                        </div>
                        <span className={`text-sm px-2 py-1 rounded ${
                          investment.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {investment.status === 'active' ? 'Ativo' : 'Pausado'}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400">Investido</p>
                          <p className="font-semibold text-white">
                            R$ {investment.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400">Retorno Total</p>
                          <p className={`font-semibold ${investment.total_return >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            R$ {investment.total_return.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-600/20">
                        <p className="text-xs text-gray-400">Retorno estimado hoje: 
                          <span className={`ml-1 font-semibold text-${risk.color}-400`}>
                            +R$ {dailyReturn.toFixed(2)}
                          </span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Recent Operations */}
          <div className="bg-gradient-to-br from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Operações Recentes</h3>
              <PieChart className="w-6 h-6 text-purple-400" />
            </div>
            
            {operations.length === 0 ? (
              <div className="text-center py-8">
                <Activity className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-400 mb-2">Nenhuma operação ainda</h4>
                <p className="text-gray-500">As operações da IA aparecerão aqui</p>
              </div>
            ) : (
              <div className="space-y-3">
                {operations.slice(0, 5).map((op) => (
                  <div key={op.id} className="flex items-center justify-between p-3 bg-purple-900/10 rounded-lg hover:bg-purple-900/20 transition-colors">
                    <div className="flex items-center space-x-3">
                      <span className="text-xs text-gray-400 font-mono">
                        {new Date(op.executed_at).toLocaleTimeString('pt-BR', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        op.operation_type === 'buy' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {op.operation_type === 'buy' ? 'COMPRA' : 'VENDA'}
                      </span>
                      <span className="text-sm font-medium text-white">{op.stock_symbol}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-300">
                        {op.quantity}x R$ {op.price.toFixed(2)}
                      </div>
                      <div className={`text-sm font-semibold ${
                        op.result >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {op.result >= 0 ? '+' : ''}R$ {op.result.toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Investment Modal */}
        {showInvestModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowInvestModal(false)}></div>
            
            <div className="relative bg-gradient-to-br from-purple-900/90 to-black/90 border border-purple-600/30 rounded-2xl p-8 w-full max-w-md mx-4 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-6">Novo Investimento</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Valor do Investimento
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">R$</span>
                    <input
                      type="number"
                      value={investAmount}
                      onChange={(e) => setInvestAmount(Number(e.target.value))}
                      className="w-full pl-12 pr-4 py-3 bg-purple-900/20 border border-purple-600/30 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                      min="75"
                      step="75"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Valor mínimo: R$ 75,00</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-4">
                    Perfil de Risco
                  </label>
                  <div className="space-y-3">
                    {Object.entries(riskData).map(([key, data]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedRisk(key as 'low' | 'medium' | 'high')}
                        className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                          selectedRisk === key
                            ? `border-${data.color}-500 bg-${data.color}-500/10`
                            : `border-${data.color}-500/30 hover:border-${data.color}-500/50`
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-white">{data.name}</div>
                            <div className={`text-sm text-${data.color}-400`}>
                              {(data.rate * 100).toFixed(1)}% ao dia
                            </div>
                          </div>
                          <div className={`w-4 h-4 rounded-full border-2 ${
                            selectedRisk === key 
                              ? `bg-${data.color}-500 border-${data.color}-500` 
                              : `border-${data.color}-500/50`
                          }`}></div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => setShowInvestModal(false)}
                    className="flex-1 py-3 border border-purple-600 rounded-lg text-purple-400 hover:bg-purple-600/10 transition-all"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleCreateInvestment}
                    className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg text-white hover:from-purple-700 hover:to-purple-800 transition-all"
                  >
                    Investir
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;