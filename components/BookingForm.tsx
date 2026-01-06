
import React, { useState } from 'react';

const BookingForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="booking" className="py-24 bg-slate-900 text-white text-center px-6">
        <div className="max-w-2xl mx-auto p-12 bg-white/5 rounded-3xl border border-white/10">
          <div className="text-5xl mb-6">✨</div>
          <h2 className="luxury-font text-4xl mb-4">شكراً لاهتمامكم</h2>
          <p className="text-xl text-slate-300">سيتواصل معكم أحد ممثلي الإدارة المختصين خلال ٢٤ ساعة لتنسيق تجربتكم الخاصة.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1">
          <h2 className="luxury-font text-5xl mb-6 text-slate-800">احجز تجربتك النخبوية</h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            نعتذر... Lavie Boat لا تعمل بنظام الدخول المباشر. جميع الزيارات والحجوزات تتم بالتنسيق المسبق فقط حفاظاً على خصوصية ضيوفنا.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-slate-700">
              <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-amber-600">📍</div>
              <div>بني سويف، ضفاف النيل</div>
            </div>
            <div className="flex items-center gap-4 text-slate-700">
              <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-amber-600">🛡️</div>
              <div>خصوصية وأمان 100%</div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full">
          <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-2xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2 uppercase">الاسم بالكامل</label>
                <input type="text" required className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-amber-500" placeholder="الاسم الكريم" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2 uppercase">الجهة / الشركة</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-amber-500" placeholder="اختياري" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-400 mb-2 uppercase">نوع المناسبة</label>
              <select className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-amber-500">
                <option>إفطار شركات / رمضان</option>
                <option>حفل زفاف راقٍ</option>
                <option>اجتماع رسمي</option>
                <option>زيارة خاصة للمطعم</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2 uppercase">التاريخ المفضل</label>
                <input type="date" required className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-amber-500" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2 uppercase">عدد الضيوف</label>
                <input type="number" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-amber-500" placeholder="العدد المتوقع" />
              </div>
            </div>
            <button className="w-full bg-slate-900 text-white py-5 rounded-xl font-bold text-xl hover:bg-slate-800 transition-all shadow-xl">
              إرسال طلب الحجز
            </button>
            <p className="text-center text-xs text-slate-400 italic">بمجرد الضغط، ستقوم الإدارة بمراجعة طلبكم والرد هاتفياً.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
