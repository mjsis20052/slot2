import React from 'react';
import Header from './components/Header';
import NotificationToast from './components/NotificationToast';
import ContactSection from './components/ContactSection';
import { WHATSAPP_LINK } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark font-sans text-white overflow-x-hidden selection:bg-brand-accent selection:text-white pb-20 md:pb-0">
      <NotificationToast />
      <Header />

      <main className="pt-24">
        {/* Banner / Hero "Slot Style" */}
        <div className="px-4 mb-8">
            <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative shadow-2xl border border-brand-accent/20 group">
                 {/* Backgrounds */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-purple via-brand-dark to-brand-purple z-0"></div>
                <img 
                    src="https://picsum.photos/seed/casino99/1600/800" 
                    alt="Casino Banner" 
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 z-0 transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Content - Using padding instead of fixed aspect ratio to prevent cutting off text */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent min-h-[400px]">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white italic drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] mb-4 neon-text leading-tight">
                        OBTÉN UN BONO DE <br className="sm:hidden" /> BIENVENIDA CON <br className="sm:hidden" /> TU PRIMER RECARGA
                    </h1>
                    <div className="bg-brand-dark/50 backdrop-blur-sm px-6 py-2 rounded-lg border border-brand-gold/30 mb-8 inline-block transform -skew-x-12">
                         <p className="text-brand-gold text-2xl md:text-4xl font-bold uppercase tracking-widest gold-text-glow transform skew-x-12">
                            $20.000 ARS
                        </p>
                    </div>
                   
                    <a 
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-brand-accent hover:bg-fuchsia-500 text-white font-bold py-4 px-12 rounded-full shadow-[0_0_30px_rgba(217,0,255,0.6)] transition-all transform hover:scale-105 hover:shadow-[0_0_50px_rgba(217,0,255,0.8)] uppercase tracking-wide text-lg flex items-center gap-2"
                    >
                        RECLAMAR AHORA
                    </a>
                </div>
            </div>
        </div>

        {/* Contact / Recharge Section */}
        <ContactSection />
      </main>

      {/* Simple Footer */}
      <footer className="bg-[#0a0014] py-8 border-t border-white/5 text-center px-4">
        <p className="text-gray-500 text-sm mb-2">
            © 2024 Mundo Slot Argentina. Juega con responsabilidad.
        </p>
        <p className="text-gray-700 text-xs">
            Solo para mayores de 18 años.
        </p>
      </footer>

      {/* Sticky Mobile Bar */}
      <div className="fixed bottom-0 left-0 w-full p-2 md:hidden z-40 bg-brand-dark/95 backdrop-blur border-t border-brand-accent/20">
        <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-accent to-brand-purple text-white font-bold py-3 rounded-xl shadow-lg animate-pulse-slow"
        >
            <span className="uppercase tracking-wide">Cargar Fichas</span>
        </a>
      </div>
    </div>
  );
}

export default App;