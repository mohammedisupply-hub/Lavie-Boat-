
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FloorShowcase from './components/FloorShowcase';
import BookingForm from './components/BookingForm';
import MarketingHub from './components/MarketingHub';
import Footer from './components/Footer';
import AIConcierge from './components/AIConcierge';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'marketing'>('landing');

  return (
    <div className="min-h-screen bg-white">
      {/* View Switcher Overlay (Sticky) */}
      <div className="fixed top-24 right-4 z-50 flex flex-col gap-2">
        <button 
          onClick={() => setView(view === 'landing' ? 'marketing' : 'landing')}
          className="bg-slate-900/90 backdrop-blur-md text-amber-500 px-4 py-2 rounded-full shadow-2xl text-[10px] font-bold border border-amber-500/30 hover:bg-slate-800 transition-all flex items-center gap-2"
        >
          {view === 'landing' ? 'إدارة التسويق 📊' : 'عرض الموقع 🌐'}
        </button>
      </div>

      {view === 'landing' ? (
        <>
          <Header />
          <main>
            <Hero />
            
            <section id="concept" className="py-24 px-6 bg-slate-50 border-b">
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-amber-600 font-bold text-sm tracking-widest mb-4 block uppercase">The Concept</span>
                <h2 className="luxury-font text-5xl md:text-6xl mb-8 text-slate-800">التمركز التسويقي</h2>
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  Lavie Boat ليست مجرد مطعم، إنها وجهة نخبوية مغلقة تم تصميمها لتوفير أقصى درجات الخصوصية والرقي. 
                  موقعنا الحصري في قلب نيل بني سويف يجعل من كل لحظة لوحة فنية بعيداً عن صخب المدينة.
                </p>
              </div>
            </section>

            <FloorShowcase />

            {/* Real Food Gallery Section */}
            <section id="gallery" className="py-24 bg-white px-6">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="luxury-font text-5xl text-slate-800 mb-4">فن الضيافة</h2>
                  <p className="text-slate-500">أطباقنا مختارة بعناية لتناسب ذوقكم الرفيع</p>
                  <div className="h-px w-20 bg-amber-600 mx-auto mt-6"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="h-80 overflow-hidden rounded-2xl group">
                    <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Grills" />
                  </div>
                  <div className="h-80 overflow-hidden rounded-2xl group">
                    <img src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Fried Chicken" />
                  </div>
                  <div className="h-80 overflow-hidden rounded-2xl group">
                    <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Steak" />
                  </div>
                </div>
              </div>
            </section>

            <section id="ramadan" className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative border-y border-amber-900/30">
              <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
              <div className="max-w-4xl mx-auto text-center relative z-10">
                <span className="text-amber-500 text-4xl mb-4 block">🌙</span>
                <h2 className="luxury-font text-6xl mb-8">رمضان في Lavie Boat</h2>
                <p className="text-2xl mb-12 leading-loose font-light">
                  إفطار وسحور مخصص لنخبة المجتمع. 
                  استمتع بالهدوء الروحاني على ضفاف النيل في جلسات مجهزة بالكامل لضمان خصوصيتكم.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                  <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <h3 className="text-amber-500 text-xl font-bold mb-3">للشركات والبنوك</h3>
                    <p className="text-sm text-slate-300">عروض مخصصة للمجموعات الكبيرة مع قوائم طعام متنوعة.</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <h3 className="text-amber-500 text-xl font-bold mb-3">عائلات VIP</h3>
                    <p className="text-sm text-slate-300">حجوزات خاصة تضمن الهدوء التام والخدمة الفندقية.</p>
                  </div>
                </div>
              </div>
            </section>

            <BookingForm />
          </main>
          <Footer />
          <AIConcierge />
        </>
      ) : (
        <div className="bg-slate-100 min-h-screen pb-20">
          <header className="bg-white border-b p-6 sticky top-0 z-40 flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-amber-600 text-2xl">☥</span>
              <h1 className="text-xl font-bold text-slate-800">Lavie Boat - Management Hub</h1>
            </div>
            <div className="text-[10px] text-slate-400 font-mono bg-slate-50 px-3 py-1 rounded-full border">Internal Strategy v2.1</div>
          </header>
          <MarketingHub />
        </div>
      )}
    </div>
  );
};

export default App;
