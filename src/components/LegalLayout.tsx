import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
  onBack: () => void;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ title, children, onBack }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-8">
            <button
              onClick={onBack}
              className="flex items-center text-purple-400 hover:text-purple-300 transition-colors mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar
            </button>
            <div className="flex items-center">
              <FileText className="w-6 h-6 text-purple-400 mr-3" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                {title}
              </h1>
            </div>
          </div>

          {/* Content */}
          <div className="bg-gradient-to-br from-purple-600/10 to-purple-700/5 border border-purple-600/20 rounded-2xl p-8">
            <div className="prose prose-invert prose-purple max-w-none">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalLayout;