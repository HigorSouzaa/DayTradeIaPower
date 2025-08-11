import React, { useState } from 'react';
import { ChevronDown, ChevronRight, HelpCircle, Search } from 'lucide-react';

interface FAQProps {
  onBack: () => void;
}

const FAQ: React.FC<FAQProps> = ({ onBack }) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqItems = [
    {
      category: 'Geral',
      question: 'O que é a TradeAI Pro?',
      answer: 'A TradeAI Pro é uma plataforma de investimentos que utiliza inteligência artificial para realizar operações de day trade no mercado de ações brasileiro. Oferecemos um sistema de cotas acessível a partir de R$ 75,00 com diferentes perfis de risco.'
    },
    {
      category: 'Investimentos',
      question: 'Como funciona o sistema de cotas?',
      answer: 'Cada cota custa R$ 75,00 e representa uma participação no fundo de investimento. Você pode adquirir quantas cotas desejar. Os lucros são distribuídos proporcionalmente ao número de cotas que você possui.'
    },
    {
      category: 'Investimentos',
      question: 'Quais são os perfis de risco disponíveis?',
      answer: 'Oferecemos três perfis: Baixo Risco (1,3% ao dia), Médio Risco (1,6% ao dia) e Alto Risco (2,2% ao dia). Cada perfil tem estratégias específicas de acordo com sua tolerância ao risco.'
    },
    {
      category: 'Segurança',
      question: 'Meus investimentos são seguros?',
      answer: 'Sim, utilizamos as melhores práticas de segurança, incluindo criptografia de dados, segregação patrimonial e supervisão de algoritmos. Além disso, operamos em conformidade com a regulamentação brasileira.'
    },
    {
      category: 'Conta',
      question: 'Como criar uma conta?',
      answer: 'Clique em "Cadastrar" no topo da página, preencha seus dados pessoais, faça a verificação de identidade enviando seus documentos e realize seu primeiro depósito para começar a investir.'
    },
    {
      category: 'Conta',
      question: 'Preciso verificar minha identidade?',
      answer: 'Sim, por questões de segurança e conformidade regulatória, é necessário verificar sua identidade enviando RG/CNH e comprovante de residência antes de realizar investimentos.'
    },
    {
      category: 'Pagamentos',
      question: 'Qual o valor mínimo para investir?',
      answer: 'O valor mínimo é de R$ 75,00, equivalente a uma cota. Você pode investir múltiplos de R$ 75,00 conforme sua disponibilidade financeira.'
    },
    {
      category: 'Pagamentos',
      question: 'Como posso depositar dinheiro?',
      answer: 'Aceitamos depósitos via PIX, TED e transferência bancária. O PIX é processado instantaneamente, enquanto TED pode levar até 1 dia útil para ser processada.'
    },
    {
      category: 'Pagamentos',
      question: 'Quando posso sacar meus lucros?',
      answer: 'Os saques podem ser solicitados a qualquer momento após D+1 da operação. O processamento leva até 2 dias úteis para PIX e até 3 dias úteis para TED.'
    },
    {
      category: 'Plataforma',
      question: 'Como acompanho meus investimentos?',
      answer: 'Através do dashboard você pode acompanhar em tempo real seus investimentos, lucros, histórico de operações e performance. Também enviamos relatórios diários por e-mail.'
    },
    {
      category: 'Plataforma',
      question: 'A plataforma funciona no celular?',
      answer: 'Sim, nossa plataforma é totalmente responsiva e otimizada para dispositivos móveis. Você pode acessar todas as funcionalidades pelo navegador do seu smartphone.'
    },
    {
      category: 'IA e Tecnologia',
      question: 'Como funciona a inteligência artificial?',
      answer: 'Nossa IA analisa milhares de dados do mercado em tempo real, identifica padrões e executa operações automaticamente. Os algoritmos são constantemente aprimorados com base na performance histórica.'
    },
    {
      category: 'IA e Tecnologia',
      question: 'Posso controlar as operações da IA?',
      answer: 'Você pode escolher o perfil de risco e definir limites, mas as operações são executadas automaticamente pela IA. Isso garante velocidade e remove o fator emocional das decisões.'
    },
    {
      category: 'Riscos',
      question: 'Posso perder dinheiro?',
      answer: 'Sim, todo investimento envolve riscos. Embora nossa IA seja sofisticada, não há garantia de lucros. Você pode perder parte ou todo o capital investido. Invista apenas o que pode perder.'
    },
    {
      category: 'Riscos',
      question: 'Existe alguma garantia de lucro?',
      answer: 'Não oferecemos garantia de lucros. As rentabilidades apresentadas são estimativas baseadas em dados históricos e não garantem resultados futuros. Resultados passados não indicam performance futura.'
    },
    {
      category: 'Suporte',
      question: 'Como entrar em contato com o suporte?',
      answer: 'Você pode nos contatar através do chat ao vivo na plataforma, e-mail (suporte@tradeaipro.com.br) ou telefone (11) 4002-8922. Nosso horário de atendimento é de segunda a sexta, das 9h às 18h.'
    },
    {
      category: 'Suporte',
      question: 'Qual o prazo de resposta do suporte?',
      answer: 'Chat ao vivo: imediato durante horário comercial. E-mail: até 24 horas. Telefone: imediato durante horário comercial. Para questões complexas, pode levar até 48 horas.'
    }
  ];

  const filteredFAQ = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(faqItems.map(item => item.category))];

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
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
              <HelpCircle className="w-8 h-8 text-purple-400 mr-3" />
              <h1 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                  Perguntas Frequentes
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Encontre respostas rápidas para as dúvidas mais comuns sobre nossa plataforma
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar perguntas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gradient-to-r from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <span
                key={category}
                className="px-3 py-1 bg-purple-600/20 border border-purple-600/30 rounded-full text-sm text-purple-300"
              >
                {category}
              </span>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQ.map((item, index) => {
              const isExpanded = expandedItem === index;
              
              return (
                <div key={index} className="bg-gradient-to-br from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-purple-600/5 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full mr-3">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ml-4 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isExpanded && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-purple-600/20 pt-4">
                        <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filteredFAQ.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">Nenhuma pergunta encontrada</h3>
              <p className="text-gray-500">Tente usar termos diferentes na busca</p>
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-12 bg-gradient-to-r from-purple-600/10 to-purple-700/10 border border-purple-600/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Não encontrou sua resposta?</h3>
            <p className="text-gray-300 mb-6">
              Nossa equipe de suporte está pronta para ajudar com qualquer dúvida específica
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg font-semibold text-white hover:from-purple-700 hover:to-purple-800 transition-all">
                Chat ao Vivo
              </button>
              <button className="px-6 py-3 border border-purple-600 rounded-lg font-semibold text-purple-400 hover:bg-purple-600/10 transition-all">
                Enviar E-mail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;