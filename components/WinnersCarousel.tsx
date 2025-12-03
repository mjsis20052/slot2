import React from 'react';
import { RECENT_WINNERS } from '../constants';

const WinnersCarousel: React.FC = () => {
  return (
    <section id="winners" className="py-20 bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-2">Últimos Ganadores</h2>
            <p className="text-gray-400">Gente real, premios reales. Tú podrías ser el siguiente.</p>
          </div>
          <a href="#" className="hidden md:block text-gold-500 hover:text-gold-400 font-medium text-sm">Ver lista completa &rarr;</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RECENT_WINNERS.slice(0, 3).map((winner) => (
            <div key={winner.id} className="bg-dark-800 rounded-xl overflow-hidden border border-white/5 group hover:border-gold-500/50 transition-all duration-300">
              <div className="h-48 bg-dark-700 relative overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${winner.id}/600/400`} 
                  alt="Winner prize" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-gold-500 text-dark-900 text-xs font-bold px-3 py-1 rounded-full">
                  Entregado
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{winner.name}</h3>
                    <p className="text-sm text-gray-400">{winner.location}</p>
                  </div>
                  <span className="text-xs font-mono text-gray-500 border border-gray-700 px-2 py-1 rounded">
                    Ticket #{Math.floor(Math.random() * 9000) + 1000}
                  </span>
                </div>
                <div className="border-t border-white/10 pt-4 mt-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Premio</p>
                  <p className="text-gold-400 font-bold text-lg">{winner.prize}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="#" className="text-gold-500 hover:text-gold-400 font-medium text-sm">Ver lista completa &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default WinnersCarousel;