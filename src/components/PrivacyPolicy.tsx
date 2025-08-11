import React from 'react';
import LegalLayout from './LegalLayout';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <LegalLayout title="Política de Privacidade" onBack={onBack}>
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <div className="text-sm text-purple-400 mb-6">
          Última atualização: Janeiro de 2025
        </div>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Introdução</h2>
          <p>
            A TradeAI Pro valoriza sua privacidade e está comprometida em proteger seus dados pessoais. 
            Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações 
            em conformidade com a Lei Geral de Proteção de Dados (LGPD).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Dados Coletados</h2>
          <h3 className="text-lg font-semibold text-purple-400 mb-3">2.1 Dados Fornecidos por Você</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Nome completo</li>
            <li>CPF</li>
            <li>E-mail</li>
            <li>Telefone</li>
            <li>Data de nascimento</li>
            <li>Endereço completo</li>
            <li>Informações bancárias</li>
            <li>Documentos de identificação</li>
          </ul>

          <h3 className="text-lg font-semibold text-purple-400 mb-3 mt-6">2.2 Dados Coletados Automaticamente</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Endereço IP</li>
            <li>Informações do dispositivo</li>
            <li>Dados de navegação</li>
            <li>Cookies e tecnologias similares</li>
            <li>Localização geográfica</li>
            <li>Histórico de operações</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Finalidades do Tratamento</h2>
          <p>Utilizamos seus dados para:</p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Criar e manter sua conta na plataforma</li>
            <li>Processar operações de investimento</li>
            <li>Cumprir obrigações legais e regulatórias</li>
            <li>Prevenir fraudes e garantir segurança</li>
            <li>Melhorar nossos serviços e algoritmos de IA</li>
            <li>Enviar comunicações importantes</li>
            <li>Realizar análises estatísticas</li>
            <li>Oferecer suporte ao cliente</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Base Legal</h2>
          <p>O tratamento de seus dados é baseado em:</p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li><strong>Consentimento:</strong> Para comunicações de marketing</li>
            <li><strong>Execução de contrato:</strong> Para prestação dos serviços</li>
            <li><strong>Cumprimento de obrigação legal:</strong> Para atender regulamentações</li>
            <li><strong>Legítimo interesse:</strong> Para segurança e melhoria dos serviços</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">5. Compartilhamento de Dados</h2>
          <p>Podemos compartilhar seus dados com:</p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li><strong>Órgãos reguladores:</strong> CVM, Banco Central, Receita Federal</li>
            <li><strong>Parceiros financeiros:</strong> Bancos e corretoras</li>
            <li><strong>Prestadores de serviços:</strong> Empresas de tecnologia e segurança</li>
            <li><strong>Autoridades competentes:</strong> Quando exigido por lei</li>
          </ul>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-4">
            <p className="text-blue-200">
              <strong>Importante:</strong> Nunca vendemos seus dados pessoais para terceiros.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">6. Segurança dos Dados</h2>
          <p>Implementamos medidas de segurança rigorosas:</p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Criptografia de dados em trânsito e em repouso</li>
            <li>Autenticação de dois fatores</li>
            <li>Monitoramento 24/7 de segurança</li>
            <li>Controles de acesso restritivos</li>
            <li>Auditorias regulares de segurança</li>
            <li>Backup seguro dos dados</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">7. Retenção de Dados</h2>
          <p>
            Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas nesta política, 
            respeitando os prazos legais mínimos:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li><strong>Dados cadastrais:</strong> 5 anos após encerramento da conta</li>
            <li><strong>Histórico de operações:</strong> 5 anos conforme regulamentação</li>
            <li><strong>Dados de comunicação:</strong> 3 anos</li>
            <li><strong>Logs de acesso:</strong> 6 meses</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">8. Seus Direitos</h2>
          <p>Conforme a LGPD, você tem direito a:</p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li><strong>Acesso:</strong> Saber quais dados temos sobre você</li>
            <li><strong>Correção:</strong> Corrigir dados incompletos ou incorretos</li>
            <li><strong>Exclusão:</strong> Solicitar a eliminação de dados desnecessários</li>
            <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
            <li><strong>Oposição:</strong> Opor-se ao tratamento em certas situações</li>
            <li><strong>Revogação:</strong> Retirar consentimento a qualquer momento</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">9. Cookies</h2>
          <p>
            Utilizamos cookies para melhorar sua experiência na plataforma. Você pode gerenciar suas 
            preferências de cookies nas configurações do seu navegador.
          </p>
          <div className="mt-4 space-y-2">
            <p><strong>Cookies essenciais:</strong> Necessários para funcionamento da plataforma</p>
            <p><strong>Cookies de performance:</strong> Para análise e melhoria dos serviços</p>
            <p><strong>Cookies de marketing:</strong> Para personalização de conteúdo</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">10. Transferência Internacional</h2>
          <p>
            Alguns de nossos prestadores de serviços podem estar localizados fora do Brasil. 
            Garantimos que essas transferências atendem aos requisitos da LGPD e oferecem 
            nível adequado de proteção.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">11. Alterações na Política</h2>
          <p>
            Esta política pode ser atualizada periodicamente. Notificaremos sobre mudanças significativas 
            através da plataforma e por e-mail.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">12. Contato e DPO</h2>
          <p>
            Para exercer seus direitos ou esclarecer dúvidas sobre privacidade:
          </p>
          <div className="mt-3 space-y-1">
            <p><strong>Encarregado de Dados (DPO):</strong> dpo@tradeaipro.com.br</p>
            <p><strong>E-mail geral:</strong> privacidade@tradeaipro.com.br</p>
            <p><strong>Telefone:</strong> (11) 4002-8922</p>
            <p><strong>Endereço:</strong> Av. Paulista, 1000 - São Paulo/SP</p>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
};

export default PrivacyPolicy;