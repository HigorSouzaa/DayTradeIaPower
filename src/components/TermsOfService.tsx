import React from 'react';
import LegalLayout from './LegalLayout';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  return (
    <LegalLayout title="Termos de Uso" onBack={onBack}>
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <div className="text-sm text-purple-400 mb-6">
          Última atualização: Janeiro de 2025
        </div>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e utilizar a plataforma TradeAI Pro, você concorda em cumprir e estar vinculado a estes Termos de Uso. 
            Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Descrição dos Serviços</h2>
          <p>
            A TradeAI Pro é uma plataforma de investimentos que utiliza inteligência artificial para operações de day trade 
            no mercado de ações brasileiro. Oferecemos:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Sistema de cotas de investimento a partir de R$ 75,00</li>
            <li>Três perfis de risco: baixo (1,3%), médio (1,6%) e alto (2,2%) de rentabilidade diária estimada</li>
            <li>Dashboard para acompanhamento de operações em tempo real</li>
            <li>Simulador de investimentos</li>
            <li>Sistema de gamificação e rankings</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Elegibilidade e Cadastro</h2>
          <p>
            Para utilizar nossos serviços, você deve:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Ser maior de 18 anos</li>
            <li>Ser residente no Brasil</li>
            <li>Fornecer informações verdadeiras e atualizadas</li>
            <li>Manter a confidencialidade de suas credenciais de acesso</li>
            <li>Possuir CPF válido e regularizado</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Investimentos e Riscos</h2>
          <p>
            <strong>IMPORTANTE:</strong> Todos os investimentos envolvem riscos. As rentabilidades apresentadas são estimativas 
            baseadas em dados históricos e não garantem resultados futuros. Você pode perder parte ou todo o capital investido.
          </p>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mt-4">
            <p className="text-amber-200">
              <strong>Aviso de Risco:</strong> Operações no mercado financeiro podem resultar em perdas superiores ao capital inicial investido.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">5. Taxas e Pagamentos</h2>
          <p>
            Nossa estrutura de taxas inclui:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Taxa de performance: 20% sobre os lucros obtidos</li>
            <li>Taxa de administração: 2% ao ano sobre o patrimônio</li>
            <li>Sem taxa de entrada ou saída</li>
            <li>Cobrança proporcional ao período de permanência</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">6. Responsabilidades do Usuário</h2>
          <p>
            Você se compromete a:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Utilizar a plataforma de forma legal e ética</li>
            <li>Não compartilhar suas credenciais de acesso</li>
            <li>Manter seus dados atualizados</li>
            <li>Não tentar burlar os sistemas de segurança</li>
            <li>Respeitar os direitos de propriedade intelectual</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">7. Limitação de Responsabilidade</h2>
          <p>
            A TradeAI Pro não se responsabiliza por:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Perdas financeiras decorrentes de operações no mercado</li>
            <li>Falhas técnicas temporárias na plataforma</li>
            <li>Decisões de investimento tomadas pelo usuário</li>
            <li>Variações do mercado financeiro</li>
            <li>Casos fortuitos ou força maior</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">8. Propriedade Intelectual</h2>
          <p>
            Todos os direitos de propriedade intelectual da plataforma, incluindo algoritmos de IA, design, 
            textos e marcas, pertencem à TradeAI Pro e são protegidos por lei.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">9. Rescisão</h2>
          <p>
            Podemos suspender ou encerrar sua conta a qualquer momento por violação destes termos. 
            Você pode encerrar sua conta a qualquer momento através do suporte.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">10. Alterações nos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer momento. 
            As alterações serão comunicadas através da plataforma e por e-mail.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">11. Lei Aplicável</h2>
          <p>
            Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida no foro da comarca de São Paulo/SP.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">12. Contato</h2>
          <p>
            Para dúvidas sobre estes termos, entre em contato:
          </p>
          <div className="mt-3 space-y-1">
            <p>E-mail: legal@tradeaipro.com.br</p>
            <p>Telefone: (11) 4002-8922</p>
            <p>Endereço: Av. Paulista, 1000 - São Paulo/SP</p>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
};

export default TermsOfService;