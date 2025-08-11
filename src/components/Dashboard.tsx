import React from 'react';
import { TrendingUp, DollarSign, Target, Calendar, BarChart3, PieChart } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { icon: DollarSign, label: "Saldo Total", value: "R$ 12.450,00", change: "+15,2%", positive: true },
    { icon: TrendingUp, label: "Lucro Hoje", value: "R$ 198,40", change: "+1,6%", positive: true },
    { icon: Target, label: "Cotas Ativas", value: "165", change: "+3", positive: true },
    { icon: Calendar, label: "Dias Ativos", value: "87", change: "consecutivos", positive: true }
  ];

  const recentOperations = [
    { time: "09:30", type: "COMPRA", stock: "PETR4", quantity: 100, price: "R$ 28,45", result: "+R$ 142,50", positive: true },
    { time: "10:15", type: "VENDA", stock: "VALE3", quantity: 50, price: "R$ 65,80", result: "+R$ 89,20", positive: true },
    { time: "11:45", type: "COMPRA", stock: "ITUB4", quantity: 200, price: "R$ 31,20", result: "-R$ 45,80", positive: false },
    { time: "14:20", type: "VENDA", stock: "BBAS3", quantity: 150, price: "R$ 42,10", result: "+R$ 203,75", positive: true }
  ];

  return (
    <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-950/20 to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Dashboard Inteligente
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Acompanhe seus investimentos em tempo real com análises detalhadas e insights da IA
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-xl p-6 hover:border-purple-500/40 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-8 h-8 text-purple-400" />
                  <span className={`text-sm font-medium ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.change}
                  </span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chart Preview */}
          <div className="bg-gradient-to-br from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Performance Mensal</h3>
              <BarChart3 className="w-6 h-6 text-purple-400" />
            </div>
            
            {/* Mock Chart */}
            <div className="space-y-4">
              {[85, 92, 78, 95, 88, 96, 89].map((value, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="text-sm text-gray-400 w-12">Dia {index + 1}</span>
                  <div className="flex-1 bg-purple-900/20 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-purple-400 w-12">{value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Operations */}
          <div className="bg-gradient-to-br from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Operações Recentes</h3>
              <PieChart className="w-6 h-6 text-purple-400" />
            </div>
            
            <div className="space-y-3">
              {recentOperations.map((op, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-purple-900/10 rounded-lg hover:bg-purple-900/20 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs text-gray-400 font-mono">{op.time}</span>
                    <span className={`text-xs px-2 py-1 rounded ${op.type === 'COMPRA' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                      {op.type}
                    </span>
                    <span className="text-sm font-medium text-white">{op.stock}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-300">{op.quantity}x {op.price}</div>
                    <div className={`text-sm font-semibold ${op.positive ? 'text-green-400' : 'text-red-400'}`}>
                      {op.result}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-600/25">
            Acessar Dashboard Completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;