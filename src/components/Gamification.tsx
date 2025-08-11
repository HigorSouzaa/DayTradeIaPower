import React from 'react';
import { Trophy, Award, Target, Zap, Crown, Star, TrendingUp, Users } from 'lucide-react';

const Gamification: React.FC = () => {
  const achievements = [
    { icon: Target, title: "Primeira Operação", description: "Complete sua primeira operação", unlocked: true, color: "green" },
    { icon: TrendingUp, title: "Lucro Consistente", description: "7 dias consecutivos no positivo", unlocked: true, color: "blue" },
    { icon: Award, title: "Meta R$ 500", description: "Alcance R$ 500 em lucros", unlocked: false, color: "purple" },
    { icon: Crown, title: "Top Trader", description: "Entre no top 10 do ranking", unlocked: false, color: "gold" },
    { icon: Zap, title: "Velocista", description: "Execute 100 operações", unlocked: false, color: "orange" },
    { icon: Star, title: "Mestre Trader", description: "30 dias consecutivos operando", unlocked: false, color: "red" }
  ];

  const leaderboard = [
    { rank: 1, name: "Carlos M.", profit: "R$ 8.450,00", change: "+2.1%", avatar: "CM" },
    { rank: 2, name: "Ana S.", profit: "R$ 7.890,00", change: "+1.9%", avatar: "AS" },
    { rank: 3, name: "João P.", profit: "R$ 6.720,00", change: "+1.8%", avatar: "JP" },
    { rank: 4, name: "Maria L.", profit: "R$ 5.980,00", change: "+1.6%", avatar: "ML" },
    { rank: 5, name: "Pedro R.", profit: "R$ 5.450,00", change: "+1.5%", avatar: "PR" }
  ];

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return "from-yellow-400 to-yellow-600";
      case 2: return "from-gray-300 to-gray-500";
      case 3: return "from-amber-600 to-amber-800";
      default: return "from-purple-400 to-purple-600";
    }
  };

  return (
    <section id="rankings" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-950/20 to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Sistema de Conquistas
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ganhe medalhas, conquiste objetivos e compete com outros traders na plataforma
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div className="bg-gradient-to-br from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-8">
              <Trophy className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Suas Conquistas</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className={`p-4 rounded-xl border transition-all ${
                    achievement.unlocked 
                      ? `border-${achievement.color}-500/30 bg-${achievement.color}-500/10` 
                      : 'border-gray-600/30 bg-gray-600/5 opacity-60'
                  }`}>
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        achievement.unlocked 
                          ? `bg-${achievement.color}-500/20` 
                          : 'bg-gray-600/20'
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          achievement.unlocked 
                            ? `text-${achievement.color}-400` 
                            : 'text-gray-400'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold text-sm ${
                          achievement.unlocked ? 'text-white' : 'text-gray-400'
                        }`}>
                          {achievement.title}
                        </h4>
                        <p className={`text-xs ${
                          achievement.unlocked ? 'text-gray-300' : 'text-gray-500'
                        }`}>
                          {achievement.description}
                        </p>
                        {achievement.unlocked && (
                          <span className={`inline-flex items-center text-xs px-2 py-1 rounded mt-2 bg-${achievement.color}-500/20 text-${achievement.color}-400`}>
                            ✓ Desbloqueado
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <div className="bg-purple-900/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-400">4/10</div>
                <div className="text-sm text-gray-300">Conquistas Desbloqueadas</div>
                <div className="w-full bg-purple-900/30 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="bg-gradient-to-br from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-8">
              <Users className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Ranking Semanal</h3>
            </div>

            <div className="space-y-4">
              {leaderboard.map((trader, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-purple-900/10 rounded-xl hover:bg-purple-900/20 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold text-white bg-gradient-to-r ${getRankColor(trader.rank)}`}>
                      {trader.rank}
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-white">{trader.avatar}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{trader.name}</div>
                      <div className="text-sm text-gray-400">Trader Verificado</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-400">{trader.profit}</div>
                    <div className="text-sm text-green-400">{trader.change}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-purple-600/20 to-purple-700/20 rounded-xl text-center">
              <div className="text-lg font-semibold text-white mb-1">Sua Posição: #12</div>
              <div className="text-sm text-purple-300">Continue operando para subir no ranking!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gamification;