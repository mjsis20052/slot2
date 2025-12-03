import React from 'react';
import { MessageCircle, ArrowRight, Wallet, ShieldCheck } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section id="contact-section" className="py-20 px-4 relative bg-brand-dark">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-4 uppercase italic">
          ¿Te quedaste sin <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">fichas?</span>
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          Cargá saldo al instante por WhatsApp. Aceptamos Mercado Pago y Transferencia.
        </p>

        <div className="bg-gradient-to-br from-brand-purple to-brand-dark border border-brand-accent/30 p-8 rounded-3xl relative overflow-hidden group hover:border-brand-accent/60 transition-colors duration-500 shadow-2xl">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/20 rounded-full blur-[80px] group-hover:bg-brand-accent/30 transition-all"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-500/20 p-2 rounded-lg">
                    <Wallet className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Carga Express</h3>
                </div>
                <p className="text-gray-400 max-w-sm text-sm">
                  Envíanos un mensaje y te cargamos las fichas en menos de 5 minutos.
                </p>
                <div className="flex gap-4 mt-4 text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-brand-gold" /> Seguro</span>
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-brand-gold" /> Rápido</span>
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-brand-gold" /> 24/7</span>
                </div>
              </div>

              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-full md:w-auto bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
              >
                <MessageCircle className="w-6 h-6" />
                CONTACTAR AHORA
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;