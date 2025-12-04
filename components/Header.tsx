import React from 'react';
import { Zap, Coins, Volume2, VolumeX } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import { useAudio } from '../contexts/AudioContext';

const Header: React.FC = () => {
  const { isMuted, toggleMute } = useAudio();
  
  const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-40 bg-brand-dark/90 backdrop-blur-lg border-b border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="relative">
                <Zap className="w-8 h-8 text-brand-accent fill-brand-accent animate-pulse-fast" />
                <div className="absolute inset-0 bg-brand-accent blur-lg opacity-50"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-black text-white tracking-tighter leading-none italic neon-text">
                  MUNDO
                </span>
                <span className="text-lg font-display font-bold text-brand-gold tracking-widest leading-none">
                  SLOT
                </span>
              </div>
            </div>
            {/* Audio Control */}
            <button
              onClick={toggleMute}
              className="p-2 rounded-full hover:bg-brand-purple/50 transition-all transform hover:scale-110"
              aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              ) : (
                <Volume2 className="w-5 h-5 text-brand-accent hover:text-white transition-colors" />
              )}
            </button>
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-4">
             <button 
              onClick={() => window.open(WHATSAPP_LINK, '_blank')}
              className="hidden md:flex bg-gradient-to-r from-brand-accent to-purple-600 hover:from-brand-accent/80 hover:to-purple-500 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(217,0,255,0.4)] items-center gap-2"
            >
              <Coins className="w-4 h-4" />
              CARGAR SALDO
            </button>
            <button 
              onClick={scrollToContact}
              className="md:hidden bg-brand-accent text-white p-2 rounded-full shadow-[0_0_15px_rgba(217,0,255,0.5)]"
            >
              <Coins className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;