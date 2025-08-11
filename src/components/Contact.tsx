import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, ChevronRight } from 'lucide-react';

interface ContactProps {
  onBack: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'geral'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Chat ao Vivo',
      description: 'Resposta imediata durante horário comercial',
      action: 'Iniciar Chat',
      color: 'green',
      available: true
    },
    {
      icon: Mail,
      title: 'E-mail',
      description: 'Resposta em até 24 horas',
      action: 'contato@tradeaipro.com.br',
      color: 'blue',
      available: true
    },
    {
      icon: Phone,
      title: 'Telefone',
      description: 'Segunda a sexta, 9h às 18h',
      action: '(11) 4002-8922',
      color: 'purple',
      available: true
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Av. Paulista, 1000 - Bela Vista\nSão Paulo/SP - CEP: 01310-100'
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      info: 'Segunda a Sexta: 9h às 18h\nSábado: 9h às 13h\nDomingo: Fechado'
    },
    {
      icon: Phone,
      title: 'Telefones',
      info: 'Geral: (11) 4002-8922\nSuporte: (11) 4002-8923\nComercial: (11) 4002-8924'
    }
  ];

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
                Entre em Contato
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Estamos aqui para ajudar. Escolha a melhor forma de entrar em contato conosco
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className={`bg-gradient-to-br from-${method.color}-500/10 to-${method.color}-600/5 border border-${method.color}-500/20 rounded-xl p-6 text-center hover:border-${method.color}-500/40 transition-all`}>
                  <div className={`w-16 h-16 bg-${method.color}-500/20 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-8 h-8 text-${method.color}-400`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{method.description}</p>
                  <button className={`px-4 py-2 bg-${method.color}-500/20 border border-${method.color}-500/30 rounded-lg text-${method.color}-400 hover:bg-${method.color}-500/30 transition-all text-sm font-medium`}>
                    {method.action}
                  </button>
                  {method.available && (
                    <div className="mt-3">
                      <span className="inline-flex items-center text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                        ● Online
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-purple-900/20 border border-purple-600/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-purple-900/20 border border-purple-600/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Categoria
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-purple-900/20 border border-purple-600/30 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    <option value="geral">Dúvida Geral</option>
                    <option value="suporte">Suporte Técnico</option>
                    <option value="investimentos">Investimentos</option>
                    <option value="conta">Problemas com Conta</option>
                    <option value="comercial">Comercial</option>
                    <option value="parceria">Parcerias</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-purple-900/20 border border-purple-600/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Resumo da sua mensagem"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-purple-900/20 border border-purple-600/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Descreva sua dúvida ou solicitação em detalhes..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg font-semibold text-white hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-[1.02] flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Office Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Informações de Contato</h2>
                
                <div className="space-y-6">
                  {officeInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                          <p className="text-gray-300 whitespace-pre-line">{info.info}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Links Úteis</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-blue-400 hover:text-blue-300 transition-colors">
                    → Central de Ajuda
                  </a>
                  <a href="#" className="block text-blue-400 hover:text-blue-300 transition-colors">
                    → Perguntas Frequentes
                  </a>
                  <a href="#" className="block text-blue-400 hover:text-blue-300 transition-colors">
                    → Status da Plataforma
                  </a>
                  <a href="#" className="block text-blue-400 hover:text-blue-300 transition-colors">
                    → Política de Privacidade
                  </a>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-red-400 mb-3">Emergência</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Para problemas urgentes relacionados à segurança da conta:
                </p>
                <p className="text-red-400 font-semibold">
                  📞 (11) 4002-8925 (24h)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;