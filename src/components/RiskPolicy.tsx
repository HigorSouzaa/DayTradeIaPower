import React from 'react';
import LegalLayout from './LegalLayout';
import { AlertTriangle, TrendingDown, Shield } from 'lucide-react';

interface RiskPolicyProps {
  onBack: () => void;
}

const RiskPolicy: React.FC<RiskPolicyProps> = ({ onBack }) => {
  return (
    <LegalLayout title="Política de Riscos" onBack={onBack}>
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <div className="text-sm text-purple-400 mb-6">
          Última atualização: Janeiro de 2025
        </div>

        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />
            <h3 className="text-xl font-bold text-red-400">Aviso Importante sobre Riscos</h3>
          </div>
          <p className="text-red-200">
            <strong>ATENÇÃO:</strong> Investimentos em day trade envolvem alto grau de risco e podem resultar 
            em perdas significativas, incluindo a perda total do capital investido. Leia atentamente esta 
            política antes de investir.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Natureza dos Investimentos</h2>
          <p>
            A TradeAI Pro oferece serviços de investimento em day trade no mercado de ações brasileiro, 
            utilizando algoritmos de inteligência artificial. Day trade é uma modalidade de investimento 
            de alta frequência que envolve:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Compra e venda de ativos no mesmo dia</li>
            <li>Exposição a alta volatilidade do mercado</li>
            <li>Necessidade de monitoramento constante</li>
            <li>Possibilidade de perdas rápidas e significativas</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Tipos de Risco</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-500/10 to-red-600/5 border border-red-500/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
                <TrendingDown className="w-5 h-5 mr-2" />
                2.1 Risco de Mercado
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Volatilidade dos preços dos ativos</li>
                <li>Mudanças nas condições econômicas</li>
                <li>Eventos geopolíticos</li>
                <li>Alterações na política monetária</li>
                <li>Crises financeiras</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-orange-400 mb-3">2.2 Risco de Liquidez</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Dificuldade para vender ativos rapidamente</li>
                <li>Spreads elevados entre compra e venda</li>
                <li>Baixo volume de negociação</li>
                <li>Impacto no preço devido ao tamanho da operação</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">2.3 Risco Operacional</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Falhas nos sistemas de negociação</li>
                <li>Problemas de conectividade</li>
                <li>Erros humanos ou de algoritmo</li>
                <li>Interrupções no funcionamento da bolsa</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">2.4 Risco de Crédito</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Inadimplência de contrapartes</li>
                <li>Risco de liquidação</li>
                <li>Problemas com custodiantes</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Perfis de Risco</h2>
          <p className="mb-4">
            Nossa plataforma oferece três perfis de investimento com diferentes níveis de risco e retorno esperado:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-green-400 mb-2">Baixo Risco</h4>
              <p className="text-sm mb-2">Rentabilidade estimada: 1,3% ao dia</p>
              <ul className="text-xs space-y-1">
                <li>• Estratégias conservadoras</li>
                <li>• Menor exposição ao risco</li>
                <li>• Volatilidade reduzida</li>
                <li>• Maior estabilidade</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-orange-400 mb-2">Médio Risco</h4>
              <p className="text-sm mb-2">Rentabilidade estimada: 1,6% ao dia</p>
              <ul className="text-xs space-y-1">
                <li>• Equilíbrio risco/retorno</li>
                <li>• Diversificação moderada</li>
                <li>• Volatilidade média</li>
                <li>• Potencial de crescimento</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-red-400 mb-2">Alto Risco</h4>
              <p className="text-sm mb-2">Rentabilidade estimada: 2,2% ao dia</p>
              <ul className="text-xs space-y-1">
                <li>• Estratégias agressivas</li>
                <li>• Maior exposição ao risco</li>
                <li>• Alta volatilidade</li>
                <li>• Potencial de perdas elevadas</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mt-4">
            <p className="text-amber-200 text-sm">
              <strong>Importante:</strong> As rentabilidades apresentadas são estimativas baseadas em dados históricos 
              e não garantem resultados futuros. Resultados passados não são indicativos de performance futura.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Riscos Específicos da IA</h2>
          <p>
            Nossa plataforma utiliza algoritmos de inteligência artificial que apresentam riscos específicos:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li><strong>Risco de modelo:</strong> Algoritmos podem falhar ou produzir resultados inesperados</li>
            <li><strong>Overfitting:</strong> Modelos podem não se adaptar a novas condições de mercado</li>
            <li><strong>Viés de dados:</strong> Dados históricos podem não representar cenários futuros</li>
            <li><strong>Falhas técnicas:</strong> Problemas de software ou hardware podem afetar operações</li>
            <li><strong>Dependência tecnológica:</strong> Reliance excessiva em sistemas automatizados</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">5. Medidas de Controle de Risco</h2>
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 text-green-400 mr-3" />
            <h3 className="text-lg font-semibold text-green-400">Proteções Implementadas</h3>
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>Stop-loss automático para limitar perdas</li>
            <li>Diversificação de carteira</li>
            <li>Monitoramento em tempo real</li>
            <li>Limites de exposição por ativo</li>
            <li>Análise de risco contínua</li>
            <li>Backtesting regular dos algoritmos</li>
            <li>Supervisão humana especializada</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">6. Adequação do Investidor</h2>
          <p>
            Day trade é adequado apenas para investidores que:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Possuem conhecimento sobre mercado financeiro</li>
            <li>Têm capacidade financeira para suportar perdas</li>
            <li>Compreendem os riscos envolvidos</li>
            <li>Possuem objetivos de investimento compatíveis</li>
            <li>Têm perfil de risco adequado</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">7. Cenários de Estresse</h2>
          <p>
            Em condições adversas de mercado, você pode enfrentar:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Perdas superiores a 50% do capital em um único dia</li>
            <li>Impossibilidade de liquidar posições</li>
            <li>Perdas consecutivas por vários dias</li>
            <li>Necessidade de aportes adicionais</li>
            <li>Suspensão temporária das operações</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">8. Recomendações</h2>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-blue-200">
              <li>Invista apenas o que pode perder</li>
              <li>Diversifique seus investimentos</li>
              <li>Monitore regularmente sua carteira</li>
              <li>Mantenha reserva de emergência</li>
              <li>Busque orientação profissional quando necessário</li>
              <li>Estude continuamente sobre mercado financeiro</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">9. Declaração de Ciência</h2>
          <p>
            Ao utilizar nossa plataforma, você declara estar ciente de que:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Compreende todos os riscos descritos nesta política</li>
            <li>Possui capacidade financeira para suportar perdas</li>
            <li>Não há garantia de lucros ou proteção contra perdas</li>
            <li>A TradeAI Pro não oferece consultoria de investimento</li>
            <li>As decisões de investimento são de sua responsabilidade</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">10. Contato</h2>
          <p>
            Para dúvidas sobre riscos ou nossa política:
          </p>
          <div className="mt-3 space-y-1">
            <p>E-mail: riscos@tradeaipro.com.br</p>
            <p>Telefone: (11) 4002-8922</p>
            <p>Horário: Segunda a sexta, 9h às 18h</p>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
};

export default RiskPolicy;