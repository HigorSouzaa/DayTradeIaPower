import React, { useState } from 'react';
import { Search, Book, MessageCircle, Phone, Mail, ChevronRight, ChevronDown } from 'lucide-react';

interface HelpCenterProps {
  onBack: () => void;
}

const HelpCenter: React.FC<HelpCenterProps> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'getting-started',
      title: 'Primeiros Passos',
      icon: Book,
      articles: [
        { title: 'Como criar uma conta', views: '1.2k' },
        { title: 'Verificação de identidade', views: '890' },
        { title: 'Primeiro depósito', views: '756' },
        { title: 'Escolhendo seu perfil de risco', views: '634' }
      ]
    },
    {
      id: 'investments',
      title: 'Investimentos',
      icon: MessageCircle,
      articles: [
        { title: 'Como funciona o sistema de cotas', views: '2.1k' },
        { title: 'Diferenças entre os perfis de risco', views: '1.8k' },
        { title: 'Acompanhando seus investimentos', views: '1.5k' },
        { title: 'Quando posso sacar meus lucros', views: '1.3k' }
      ]
    },
    {
      id: 'platform',
      title: 'Plataforma',
      icon: Phone,
      articles: [
        { title: 'Navegando pelo dashboard', views: '987' },
        { title: 'Interpretando os gráficos', views: '743' },
        { title: 'Sistema de notificações', views: '612' },
        { title: 'Configurações da conta', views: '534' }
      ]
    },
    {
      id: 'security',
      title: 'Segurança',
      icon: Mail,
      articles: [
        { title: 'Autenticação de dois fatores', views: '1.1k' },
        { title: 'Protegendo sua conta', views: '876' },
        { title: 'Reconhecendo tentativas de fraude', views: '654' },
        { title: 'Alterando senha', views: '432' }
      ]
    }
  ];

  const popularArticles = [
    { title: 'Como funciona o sistema de cotas', category: 'Investimentos', views: '2.1k' },
    { title: 'Diferenças entre os perfis de risco', category: 'Investimentos', views: '1.8k' },
    { title: 'Navegando pelo dashboard', category: 'Plataforma', views: '987' },
    { title: 'Como criar uma conta', category: 'Primeiros Passos', views: '1.2k' }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
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
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                Central de Ajuda
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Encontre respostas para suas dúvidas e aprenda a usar nossa plataforma
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar artigos de ajuda..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gradient-to-r from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Categories */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6">Categorias</h2>
              <div className="space-y-4">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isExpanded = expandedCategory === category.id;
                  
                  return (
                    <div key={category.id} className="bg-gradient-to-br from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="w-full p-6 flex items-center justify-between hover:bg-purple-600/5 transition-colors"
                      >
                        <div className="flex items-center">
                          <Icon className="w-6 h-6 text-purple-400 mr-4" />
                          <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isExpanded && (
                        <div className="px-6 pb-6">
                          <div className="space-y-3">
                            {category.articles.map((article, index) => (
                              <div key={index} className="flex items-center justify-between p-3 bg-purple-900/10 rounded-lg hover:bg-purple-900/20 transition-colors cursor-pointer">
                                <span className="text-gray-300">{article.title}</span>
                                <span className="text-sm text-gray-500">{article.views} visualizações</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Popular Articles */}
              <div className="bg-gradient-to-br from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Artigos Populares</h3>
                <div className="space-y-3">
                  {popularArticles.map((article, index) => (
                    <div key={index} className="p-3 bg-purple-900/10 rounded-lg hover:bg-purple-900/20 transition-colors cursor-pointer">
                      <h4 className="text-white font-medium mb-1">{article.title}</h4>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>{article.category}</span>
                        <span>{article.views} views</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Support */}
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Precisa de Mais Ajuda?</h3>
                <p className="text-gray-300 mb-4">
                  Não encontrou o que procurava? Nossa equipe está pronta para ajudar.
                </p>
                <div className="space-y-3">
                  <button className="w-full p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 hover:bg-green-500/30 transition-colors">
                    Chat ao Vivo
                  </button>
                  <button className="w-full p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-colors">
                    Enviar E-mail
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Estatísticas</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Artigos</span>
                    <span className="text-purple-400 font-semibold">127</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Visualizações</span>
                    <span className="text-purple-400 font-semibold">45.2k</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Avaliação</span>
                    <span className="text-green-400 font-semibold">4.8/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;