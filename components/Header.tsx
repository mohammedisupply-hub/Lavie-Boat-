
import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b z-40 px-6 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-amber-500 text-xl shadow-inner border border-amber-500/30">
            ☥
          </div>
          <div className="luxury-font text-2xl font-bold tracking-tighter text-slate-900 flex flex-col leading-none">
            <span className="text-sm tracking-[0.3em] text-amber-600 font-sans font-bold">LAVIE</span>
            <span>BOAT</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 text-xs font-bold text-slate-600 uppercase tracking-widest">
          <a href="#concept" className="hover:text-amber-600 transition-colors">المفهوم</a>
          <a href="#floors" className="hover:text-amber-600 transition-colors">الطوابق</a>
          <a href="#gallery" className="hover:text-amber-600 transition-colors">الضيافة</a>
          <a href="#ramadan" className="hover:text-amber-600 transition-colors">رمضان</a>
        </div>

        <a 
          href="#booking"
          className="bg-slate-900 text-amber-500 border border-amber-500/50 px-6 py-2 rounded-full text-xs font-bold shadow-lg hover:bg-slate-800 transition-all"
        >
          طلب حجز
        </a>
      </div>
    </nav>
  );
};

export default Header;
