
import React from 'react';
import { MARKETING_POSTS, AD_COPIES, TIMELINE } from '../constants';

const MarketingHub: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h3 className="text-slate-400 text-sm font-bold mb-2 uppercase tracking-wider">نبرة الصوت</h3>
          <p className="text-lg font-bold text-slate-800">رسمية راقية (Premium & Formal)</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h3 className="text-slate-400 text-sm font-bold mb-2 uppercase tracking-wider">الجمهور المستهدف</h3>
          <p className="text-lg font-bold text-slate-800">نخبة المجتمع وكبار المسؤولين</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h3 className="text-slate-400 text-sm font-bold mb-2 uppercase tracking-wider">الميزانية المقترحة</h3>
          <p className="text-lg font-bold text-slate-800">2500 ج / شهرياً</p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Posts Content */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-r-4 border-amber-600 pr-4">محتوى السوشيال ميديا 📱</h2>
          {MARKETING_POSTS.map(post => (
            <div key={post.id} className="bg-white p-8 rounded-2xl shadow-sm border hover:border-amber-200 transition-colors">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-bold px-3 py-1 bg-slate-100 rounded-full text-slate-500 uppercase">{post.platform}</span>
                <button className="text-amber-600 font-bold text-sm hover:underline" onClick={() => navigator.clipboard.writeText(post.content)}>نسخ النص</button>
              </div>
              <h4 className="font-bold text-slate-800 mb-2">{post.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed bg-slate-50 p-4 rounded-xl whitespace-pre-line">{post.content}</p>
            </div>
          ))}
        </div>

        {/* Ad Copies */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-r-4 border-slate-800 pr-4">إعلانات Meta الممولة 📣</h2>
          {AD_COPIES.map(ad => (
            <div key={ad.id} className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
              <span className="text-xs font-bold text-amber-500 uppercase mb-4 block">{ad.type}</span>
              <p className="text-lg mb-6 leading-relaxed italic">"{ad.text}"</p>
              <div className="flex justify-between items-center border-t border-white/10 pt-4">
                <span className="text-sm text-slate-400 font-mono">CTA: {ad.cta}</span>
                <span className="bg-amber-600 text-white px-4 py-1 rounded text-xs font-bold">نشط</span>
              </div>
            </div>
          ))}

          {/* Customer Journey */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border mt-8">
            <h3 className="text-xl font-bold mb-4">رحلة العميل (Customer Journey)</h3>
            <div className="space-y-4">
              {['مرحلة الوعي: إعلان Reel هادئ للنيل', 'مرحلة الاهتمام: تصفح صور الطوابق وقراءة بوست الخصوصية', 'مرحلة التفاعل: رسالة خاصة أو Lead Form', 'مرحلة القرار: استلام عرض مخصص', 'الحجز: دفع العربون وتأكيد الموعد'].map((step, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500 shrink-0">{i+1}</div>
                  <div className="text-slate-700 text-sm">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-white p-10 rounded-3xl shadow-sm border overflow-x-auto">
        <h2 className="text-2xl font-bold mb-8">الخطة الزمنية (٣ أشهر) 🗓️</h2>
        <div className="flex gap-8 min-w-[800px]">
          {TIMELINE.map((time, idx) => (
            <div key={idx} className="flex-1 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h4 className="text-xl font-bold text-slate-800 mb-1">{time.month}</h4>
              <p className="text-sm text-amber-600 font-bold mb-4">{time.goal}</p>
              <div className="space-y-6">
                {time.weeks.map((w, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border">
                    <span className="text-xs font-bold text-slate-400 block mb-2">{w.week}</span>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {w.activities.map((act, j) => <li key={j}>• {act}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingHub;
