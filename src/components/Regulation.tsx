import React from 'react';
import LegalLayout from './LegalLayout';
import { Scale, Building, FileCheck } from 'lucide-react';

interface RegulationProps {
  onBack: () => void;
}

const Regulation: React.FC<RegulationProps> = ({ onBack }) => {
  return (
    <LegalLayout title="Regulamentação" onBack={onBack}>
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <div className="text-sm text-purple-400 mb-6">
          Última atualização: Janeiro de 2025
        </div>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Scale className="w-6 h-6 text-purple-400 mr-3" />
            1. Marco Regulatório
          </h2>
          <p>
            A TradeAI Pro opera em conformidade com a legislação brasileira e está sujeita à supervisão 
            dos seguintes órgãos reguladores:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li><strong>CVM (Comissão de Valores Mobiliários):</strong> Regulamentação do mercado de capitais</li>
            <li><strong>Banco Central do Brasil:</strong> Supervisão do sistema financeiro nacional</li>
            <li><strong>ANBIMA:</strong> Autorregulação do mercado financeiro</li>
            <li><strong>B3 (Brasil, Bolsa, Balcão):</strong> Regulamentação das operações em bolsa</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Licenças e Autorizações</h2>
          <div className="bg-gradient-to-r from-green-500/10 to-green-600/5 border border-green-500/20 rounded-lg p-4 mb-4">
            <div className="flex items-center mb-3">
              <Building className="w-5 h-5 text-green-400 mr-2" />
              <h3 className="text-lg font-semibold text-green-400">Status Regulatório</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• <strong>CNPJ:</strong> 12.345.678/0001-90</li>
              <li>• <strong>Registro CVM:</strong> Em processo de obtenção</li>
              <li>• <strong>Código ANBIMA:</strong> Pendente</li>
              <li>• <strong>Participante B3:</strong> Através de corretora parceira</li>
            </ul>
          </div>
          <p className="text-sm text-amber-200">
            <strong>Nota:</strong> A TradeAI Pro está em processo de obtenção das licenças necessárias 
            junto aos órgãos competentes. Atualmente operamos através de parcerias com instituições 
            devidamente autorizadas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Legislação Aplicável</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-2">3.1 Lei do Mercado de Capitais</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Lei nº 6.385/76 - Criação da CVM e regulamentação do mercado</li>
                <li>Lei nº 6.404/76 - Lei das Sociedades por Ações</li>
                <li>Lei nº 10.303/01 - Reforma da Lei das S.A.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-2">3.2 Regulamentação CVM</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Instrução CVM nº 539/13 - Administração de carteiras</li>
                <li>Instrução CVM nº 558/15 - Distribuição de cotas</li>
                <li>Instrução CVM nº 617/19 - Sandbox regulatório</li>
                <li>Resolução CVM nº 21/21 - Prevenção à lavagem de dinheiro</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-2">3.3 Outras Normas</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Lei nº 13.709/18 - Lei Geral de Proteção de Dados (LGPD)</li>
                <li>Lei nº 9.613/98 - Lei de Lavagem de Dinheiro</li>
                <li>Lei nº 8.078/90 - Código de Defesa do Consumidor</li>
                <li>Lei nº 10.406/02 - Código Civil Brasileiro</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Compliance e Controles</h2>
          <div className="flex items-center mb-4">
            <FileCheck className="w-6 h-6 text-blue-400 mr-3" />
            <h3 className="text-lg font-semibold text-blue-400">Programa de Integridade</h3>
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Política de Compliance:</strong> Procedimentos para cumprimento das normas</li>
            <li><strong>Prevenção à Lavagem de Dinheiro:</strong> Controles PLD/FT</li>
            <li><strong>Conheça seu Cliente (KYC):</strong> Verificação de identidade</li>
            <li><strong>Suitability:</strong> Adequação dos produtos ao perfil do investidor</li>
            <li><strong>Segregação de Ativos:</strong> Proteção do patrimônio dos clientes</li>
            <li><strong>Auditoria Independente:</strong> Revisão periódica dos controles</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">5. Proteção ao Investidor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">FGC - Fundo Garantidor</h4>
              <p className="text-sm">
                Recursos depositados em conta corrente são protegidos pelo FGC até R$ 250.000 
                por CPF e por instituição financeira.
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-500/10 to-green-600/5 border border-green-500/20 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-green-400 mb-2">Segregação Patrimonial</h4>
              <p className="text-sm">
                Os ativos dos clientes são mantidos separados do patrimônio da empresa, 
                garantindo proteção em caso de dificuldades financeiras.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">6. Obrigações Regulatórias</h2>
          <h3 className="text-lg font-semibold text-purple-400 mb-3">6.1 Relatórios e Comunicações</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Relatórios mensais à CVM sobre operações</li>
            <li>Comunicação de eventos relevantes</li>
            <li>Demonstrações financeiras auditadas</li>
            <li>Relatórios de compliance</li>
          </ul>

          <h3 className="text-lg font-semibold text-purple-400 mb-3">6.2 Transparência</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Divulgação de informações sobre estratégias</li>
            <li>Publicação de resultados e performance</li>
            <li>Comunicação clara sobre riscos</li>
            <li>Disponibilização de documentos regulatórios</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">7. Tecnologia e IA</h2>
          <p>
            O uso de inteligência artificial em operações financeiras está sujeito a:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li><strong>Resolução BCB nº 85/21:</strong> Governança de algoritmos</li>
            <li><strong>Circular BCB nº 4.015/20:</strong> Gestão de riscos operacionais</li>
            <li><strong>Instrução CVM nº 617/19:</strong> Sandbox para fintechs</li>
            <li><strong>Marco Legal da IA:</strong> Projeto de lei em tramitação</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">8. Tributação</h2>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-amber-400 mb-3">Regime Tributário</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><strong>Day Trade:</strong> Alíquota de 20% sobre ganhos líquidos</li>
              <li><strong>Imposto de Renda:</strong> Retenção na fonte quando aplicável</li>
              <li><strong>IOF:</strong> Incidência conforme prazo de aplicação</li>
              <li><strong>Declaração:</strong> Obrigatoriedade de informar na DIRPF</li>
            </ul>
            <p className="text-amber-200 text-xs mt-3">
              <strong>Importante:</strong> Consulte sempre um contador ou advogado tributarista 
              para orientações específicas sobre sua situação.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">9. Ouvidoria e Reclamações</h2>
          <p>
            Conforme regulamentação, mantemos canal de ouvidoria para:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Reclamações sobre produtos e serviços</li>
            <li>Denúncias de irregularidades</li>
            <li>Sugestões de melhoria</li>
            <li>Mediação de conflitos</li>
          </ul>
          <div className="mt-4 p-4 bg-purple-600/10 border border-purple-600/20 rounded-lg">
            <p><strong>Ouvidoria:</strong> ouvidoria@tradeaipro.com.br</p>
            <p><strong>Telefone:</strong> 0800-123-4567</p>
            <p><strong>Prazo de resposta:</strong> Até 10 dias úteis</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">10. Atualizações Regulatórias</h2>
          <p>
            Monitoramos continuamente mudanças na regulamentação e adaptamos nossos 
            processos conforme necessário. Principais fontes de atualização:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Portal da CVM</li>
            <li>Banco Central do Brasil</li>
            <li>ANBIMA</li>
            <li>B3</li>
            <li>Consultores jurídicos especializados</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">11. Contato Regulatório</h2>
          <p>
            Para questões relacionadas à regulamentação:
          </p>
          <div className="mt-3 space-y-1">
            <p>E-mail: regulatorio@tradeaipro.com.br</p>
            <p>Telefone: (11) 4002-8922</p>
            <p>Endereço: Av. Paulista, 1000 - São Paulo/SP</p>
            <p>Horário: Segunda a sexta, 9h às 18h</p>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
};

export default Regulation;