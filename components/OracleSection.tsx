import React, { useState } from 'react';
import { Sparkles, Loader2, RefreshCw } from 'lucide-react';
import { generateLuckPrediction } from '../services/geminiService';
import { OracleResponse } from '../types';

const OracleSection: React.FC = () => {
  const [name, setName] = useState('');
  const [sign, setSign] = useState('Aries');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<OracleResponse | null>(null);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    setLoading(true);
    try {
      const data = await generateLuckPrediction(name, sign);
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-dark-900 z-0">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-purple-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[10%] w-72 h-72 bg-gold-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 mb-6">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-purple-200">Impulsado por Gemini AI</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
          Oráculo de la <span className="text-purple-400">Suerte</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Descubre tus números de la suerte personalizados y recibe una predicción única para participar en nuestros sorteos.
        </p>

        {!result ? (
          <div className="bg-dark-800 border border-dark-700 p-8 rounded-2xl max-w-md mx-auto shadow-2xl">
            <form onSubmit={handleConsult} className="space-y-6">
              <div className="text-left">
                <label className="block text-sm text-gray-400 mb-2">Tu Nombre</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Juan Pérez"
                  className="w-full bg-dark-900 border border-dark-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div className="text-left">
                <label className="block text-sm text-gray-400 mb-2">Tu Signo Zodiacal</label>
                <select 
                  value={sign}
                  onChange={(e) => setSign(e.target.value)}
                  className="w-full bg-dark-900 border border-dark-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                >
                  {['Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis'].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-lg shadow-lg shadow-purple-900/50 transition-all transform hover:scale-[1.02] flex justify-center items-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                {loading ? 'Consultando los astros...' : 'Revelar mi Suerte'}
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-dark-800 border border-gold-500/30 p-8 rounded-2xl max-w-lg mx-auto shadow-[0_0_50px_rgba(168,85,247,0.15)] animate-fade-in-up">
            <h3 className="text-2xl font-bold text-white mb-2">¡El destino ha hablado, {name}!</h3>
            <p className="text-purple-300 italic mb-8">"{result.prediction}"</p>
            
            <div className="mb-8">
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Tus Números de la Suerte</p>
              <div className="flex justify-center gap-3 flex-wrap">
                {result.luckyNumbers.map((num, idx) => (
                  <div key={idx} className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-700 text-dark-900 font-bold text-xl shadow-lg shadow-gold-900/50">
                    {num}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-dark-900/50 rounded-lg p-4 mb-8">
              <span className="text-gray-400 text-sm">Color de Poder: </span>
              <span className="text-white font-bold">{result.powerColor}</span>
            </div>

            <button 
              onClick={() => setResult(null)}
              className="text-gray-400 hover:text-white flex items-center justify-center gap-2 w-full transition-colors text-sm"
            >
              <RefreshCw className="w-4 h-4" />
              Intentar de nuevo
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OracleSection;