
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-right">
          <div className="luxury-font text-4xl mb-4">LAVIE BOAT</div>
          <p className="text-slate-400 max-w-sm">مركب عائم ثابت على ضفاف نهر النيل بمدينة بني سويف. تجربة لا تُكرر.</p>
        </div>

        <div className="flex gap-10 text-sm">
          <div className="space-y-4">
            <h4 className="font-bold text-amber-500 uppercase tracking-widest">التواصل</h4>
            <p className="text-slate-400">الحجز المسبق فقط</p>
            <p className="text-slate-400">واتساب: 01xxxxxxxxx</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-amber-500 uppercase tracking-widest">تابعنا</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-500">FB</a>
              <a href="#" className="hover:text-amber-500">IG</a>
              <a href="#" className="hover:text-amber-500">TT</a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Lavie Boat - بني سويف. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default Footer;
