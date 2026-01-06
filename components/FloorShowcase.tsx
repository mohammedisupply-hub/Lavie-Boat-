
import React from 'react';
import { FLOORS } from '../constants';

const FloorShowcase: React.FC = () => {
  return (
    <section id="floors" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="luxury-font text-5xl text-slate-800 mb-4">تفاصيل الرحلة</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {FLOORS.map((floor, idx) => (
            <div key={floor.id} className="group bg-white rounded-3xl overflow-hidden shadow-2xl transition-transform hover:-translate-y-2 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={floor.image} 
                  alt={floor.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {floor.id}
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="luxury-font text-2xl font-bold mb-4 text-slate-800">{floor.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {floor.description}
                </p>
                <ul className="space-y-2">
                  {floor.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloorShowcase;
