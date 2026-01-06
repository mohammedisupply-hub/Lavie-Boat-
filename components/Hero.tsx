
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      {/* Background with real interior vibes */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
          alt="Lavie Boat Interior" 
          className="w-full h-full object-cover scale-105 animate-[slow-zoom_25s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/90"></div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
      `}} />

      <div className="relative z-10 max-w-4xl">
        <div className="mb-6 inline-block">
          <span className="text-amber-500 text-4xl mb-4 block">☥</span>
          <p className="text-amber-400 font-bold tracking-[0.4em] mb-2 uppercase text-sm">
            Exclusive Nile Experience
          </p>
          <div className="h-px w-20 bg-amber-500/50 mx-auto"></div>
        </div>
        
        <h1 className="luxury-font text-7xl md:text-9xl text-white mb-6 drop-shadow-2xl">
          LAVIE BOAT
        </h1>
        
        <p className="text-xl md:text-3xl text-slate-200 mb-12 luxury-font font-light italic leading-relaxed max-w-2xl mx-auto">
          "بني سويف كما لم ترها من قبل.. خصوصية تليق بمكانتكم في قلب النيل"
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="#floors" 
            className="bg-amber-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-700 transition-all shadow-[0_0_20px_rgba(217,119,6,0.4)]"
          >
            استكشف الفخامة
          </a>
          <a 
            href="#booking" 
            className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md"
          >
            الحجز المسبق
          </a>
        </div>
      </div>

      {/* Scroll indicator with gold accent */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-amber-500 uppercase tracking-widest font-bold opacity-70">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-amber-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
