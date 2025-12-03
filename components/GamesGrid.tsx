import React from 'react';
import { Play } from 'lucide-react';
import { SlotGame } from '../types';

interface GamesGridProps {
  title: string;
  games: SlotGame[];
  icon?: React.ReactNode;
}

const GamesGrid: React.FC<GamesGridProps> = ({ title, games, icon }) => {
  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
          {icon && <div className="text-brand-accent">{icon}</div>}
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-wide neon-text">
            {title}
          </h2>
          <div className="h-1 flex-1 bg-gradient-to-r from-brand-accent/50 to-transparent rounded-full ml-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {games.map((game) => (
            <div 
              key={game.id} 
              className="group relative rounded-xl overflow-hidden aspect-[4/3] border-2 border-transparent hover:border-brand-accent transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(217,0,255,0.4)] bg-brand-purple cursor-pointer"
            >
              {/* Game Image */}
              <img 
                src={game.imageUrl} 
                alt={game.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2 text-center">
                <div className="bg-brand-accent rounded-full p-3 mb-2 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                    <Play className="w-6 h-6 text-white fill-white" />
                </div>
                <span className="font-bold text-sm text-white">{game.title}</span>
                <span className="text-xs text-brand-gold mt-1">JUGAR AHORA</span>
              </div>

              {/* Hot Tag */}
              {game.isHot && (
                <div className="absolute top-2 left-2 bg-gradient-to-r from-red-600 to-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-md animate-pulse-slow">
                  HOT
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesGrid;