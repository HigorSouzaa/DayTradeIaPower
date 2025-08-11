import React, { useState } from 'react';
import { Settings, AlertCircle, CheckCircle, Clock, ChevronRight, Monitor, Smartphone, Wifi, Bug } from 'lucide-react';

interface TechnicalSupportProps {
  onBack: () => void;
}

const TechnicalSupport: React.FC<TechnicalSupportProps> = ({ onBack }) => {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);

  const commonIssues = [
    {
      id: 'login',
      icon: AlertCircle,
      title: 'Problemas de Login',
      description: 'Não consigo acessar minha conta',
      color: 'red',
      solutions: [
        'Verifique se o e-mail e senha estão corretos',
        'Tente redefinir sua senha',
        'Limpe o cache do navegador',
        'Desative extensões do navegador temporariamente'
      ]
    },
    {
      id: 'platform',
      icon: Monitor,
      title: 'Problemas na Plataforma',
      description: 'A plataforma não carrega ou apresenta erros',
      color: 'orange',
      solutions: [
        'Atualize a página (F5 ou Ctrl+R)',
        'Verifique sua conexão com a internet',
        'Tente usar outro navegador',
        'Desative bloqueadores de anúncios'
      ]
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Problemas no Mobile',
      description: 'Dificuldades ao usar no celular',
      color: 'blue',
      solutions: [
        'Atualize seu navegador mobile',
        'Limpe o cache do navegador',
        'Verifique se tem espaço de armazenamento',
        'Reinicie o aplicativo do navegador'
      ]
    },
    {
      id: 'connection',
      icon: Wifi,
      title: 'Problemas de Conexão',
      description: 'Lentidão ou desconexões frequentes',
      color: 'purple',
      solutions: [
        'Teste sua velocidade de internet',
        'Reinicie seu modem/roteador',
        'Tente usar dados móveis temporariamente',
        'Verifique se não há manutenção programada'
      ]
    }
  ];

  const systemStatus = [
    { service: 'Plataforma Principal', status: 'online', uptime: '99.9%' },
    { service: 'API de Trading', status: 'online', uptime: '99.8%' },
    { service: 'Sistema de Pagamentos', status: 'maintenance', uptime: '99.5%' },
    { service: 'Notificações', status: 'online', uptime: '99.7%' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'green';
      case 'maintenance': return 'orange';
      case 'offline': return 'red';
      default: return 'gray';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online': return 'Online';
      case 'maintenance': return 'Manutenção';
      case 'offline': return 'Offline';
      default: return 'Desconhecido';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <button
              onClick={onBack}
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-6"
            >
              <ChevronRight className="w-5 h-5 mr-2 rotate-180" />
              Voltar
            </button>
            <div className="flex items-center justify-center mb-4">
              <Settings className="w-8 h-8 text-purple-400 mr-3" />
              <h1 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                  Suporte Técnico
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Resolva problemas técnicos rapidamente com nossas soluções automatizadas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* System Status */}
              <div className="bg-gradient-to-br from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Status do Sistema</h2>
                <div className="space-y-4">
                  {systemStatus.map((service, index) => {
                    const statusColor = getStatusColor(service.status);
                    return (
                      <div key={index} className="flex items-center justify-between p-4 bg-purple-900/10 rounded-lg">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 bg-${statusColor}-400 rounded-full mr-3`}></div>
                          <span className="text-white font-medium">{service.service}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className={`text-${statusColor}-400 text-sm font-medium`}>
                            {getStatusText(service.status)}
                          </span>
                          <span className="text-gray-400 text-sm">{service.uptime}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Common Issues */}
              <div className="bg-gradient-to-br from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Problemas Comuns</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {commonIssues.map((issue) => {
                    const Icon = issue.icon;
                    const isSelected = selectedIssue === issue.id;
                    
                    return (
                      <div key={issue.id} className="space-y-4">
                        <button
                          onClick={() => setSelectedIssue(isSelected ? null : issue.id)}
                          className={`w-full p-4 rounded-xl border transition-all text-left ${
                            isSelected 
                              ? `border-${issue.color}-500/40 bg-${issue.color}-500/10` 
                              : `border-${issue.color}-500/20 hover:border-${issue.color}-500/30`
                          }`}
                        >
                          <div className="flex items-start">
                            <Icon className={`w-6 h-6 text-${issue.color}-400 mr-3 mt-1`} />
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-white mb-1">{issue.title}</h3>
                              <p className="text-gray-300 text-sm">{issue.description}</p>
                            </div>
                          </div>
                        </button>
                        
                        {isSelected && (
                          <div className={`p-4 bg-${issue.color}-500/5 border border-${issue.color}-500/20 rounded-lg`}>
                            <h4 className="text-white font-medium mb-3">Soluções Recomendadas:</h4>
                            <ul className="space-y-2">
                              {issue.solutions.map((solution, idx) => (
                                <li key={idx} className="flex items-start text-sm text-gray-300">
                                  <CheckCircle className={`w-4 h-4 text-${issue.color}-400 mr-2 mt-0.5 flex-shrink-0`} />
                                  {solution}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Diagnostic Tool */}
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Diagnóstico Automático</h2>
                <p className="text-gray-300 mb-6">
                  Execute um diagnóstico completo para identificar possíveis problemas em sua conexão e configuração.
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-semibold text-white hover:from-blue-700 hover:to-blue-800 transition-all">
                  Executar Diagnóstico
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Ações Rápidas</h3>
                <div className="space-y-3">
                  <button className="w-full p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 hover:bg-green-500/30 transition-colors text-left">
                    🔄 Limpar Cache
                  </button>
                  <button className="w-full p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-colors text-left">
                    🔐 Redefinir Senha
                  </button>
                  <button className="w-full p-3 bg-orange-500/20 border border-orange-500/30 rounded-lg text-orange-400 hover:bg-orange-500/30 transition-colors text-left">
                    📱 Testar Conectividade
                  </button>
                  <button className="w-full p-3 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400 hover:bg-purple-500/30 transition-colors text-left">
                    📊 Verificar Performance
                  </button>
                </div>
              </div>

              {/* Contact Support */}
              <div className="bg-gradient-to-br from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Precisa de Ajuda?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Se não conseguiu resolver o problema, nossa equipe técnica está pronta para ajudar.
                </p>
                <div className="space-y-3">
                  <button className="w-full p-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg text-white hover:from-purple-700 hover:to-purple-800 transition-all">
                    Chat Técnico
                  </button>
                  <button className="w-full p-3 border border-purple-600 rounded-lg text-purple-400 hover:bg-purple-600/10 transition-all">
                    Abrir Ticket
                  </button>
                </div>
              </div>

              {/* System Requirements */}
              <div className="bg-gradient-to-br from-gray-600/10 to-gray-700/5 border border-gray-600/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Requisitos do Sistema</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div>
                    <strong className="text-white">Navegadores:</strong>
                    <p>Chrome 90+, Firefox 88+, Safari 14+, Edge 90+</p>
                  </div>
                  <div>
                    <strong className="text-white">Conexão:</strong>
                    <p>Mínimo 5 Mbps para operações</p>
                  </div>
                  <div>
                    <strong className="text-white">JavaScript:</strong>
                    <p>Deve estar habilitado</p>
                  </div>
                  <div>
                    <strong className="text-white">Cookies:</strong>
                    <p>Necessários para funcionamento</p>
                  </div>
                </div>
              </div>

              {/* Report Bug */}
              <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Bug className="w-5 h-5 text-red-400 mr-2" />
                  <h3 className="text-lg font-bold text-white">Reportar Bug</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Encontrou um erro? Nos ajude a melhorar reportando o problema.
                </p>
                <button className="w-full p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/30 transition-colors">
                  Reportar Problema
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSupport;