import React, { useState, useEffect } from 'react';
import { Trophy, X } from 'lucide-react';
import { NOTIFICATIONS } from '../constants';

const NotificationToast: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [currentNotif, setCurrentNotif] = useState<typeof NOTIFICATIONS[0] | null>(null);

  useEffect(() => {
    // Initial delay
    const initialTimeout = setTimeout(() => {
      triggerNotification();
    }, 2000);

    const intervalId = setInterval(() => {
      triggerNotification();
    }, 8000); // Frequent updates to feel "alive"

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(intervalId);
    };
  }, []);

  const triggerNotification = () => {
    const random = NOTIFICATIONS[Math.floor(Math.random() * NOTIFICATIONS.length)];
    setCurrentNotif(random);
    setVisible(true);

    // Hide after 4 seconds
    setTimeout(() => {
      setVisible(false);
    }, 4000);
  };

  if (!visible || !currentNotif) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-fade-in-up max-w-[90vw] w-80 pointer-events-none">
      <div className="bg-brand-purple/90 backdrop-blur-md border border-brand-accent/50 shadow-[0_0_20px_rgba(217,0,255,0.3)] rounded-xl p-3 flex items-center gap-3 relative overflow-hidden pointer-events-auto">
        {/* Animated Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent skew-x-12 translate-x-[-100%] animate-[shimmer_1.5s_infinite]"></div>
        
        <div className="bg-brand-accent/20 p-2 rounded-full shrink-0 border border-brand-accent/30">
          <Trophy className="w-5 h-5 text-brand-accent" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <p className="text-[10px] text-brand-gold font-bold uppercase tracking-wider mb-0.5">
              ¡Ganador Reciente!
            </p>
          </div>
          <p className="text-xs font-medium text-white truncate">
            {currentNotif.name} ganó <span className="text-brand-gold font-bold text-sm">{currentNotif.amount}</span>
          </p>
          <p className="text-[10px] text-gray-400">
            en {currentNotif.game}
          </p>
        </div>

        <button 
          onClick={() => setVisible(false)}
          className="text-gray-500 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default NotificationToast;