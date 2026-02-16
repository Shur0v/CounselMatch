
import React from 'react';
import { TRUST_SIGNALS } from '../constants';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {TRUST_SIGNALS.map((signal, i) => (
            <div key={i} className="text-center p-8 rounded-3xl border border-slate-50 bg-slate-50/30 hover:bg-white hover:shadow-xl transition-all group">
              <div className="inline-block p-4 rounded-2xl bg-white shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {signal.icon}
              </div>
              <p className="text-4xl font-black text-slate-900 mb-2">{signal.value}</p>
              <h4 className="text-lg font-bold text-slate-800 mb-3">{signal.title}</h4>
              <p className="text-slate-500 font-medium leading-relaxed">
                {signal.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-slate-100">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-10">Trust by students at</p>
          <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-40 hover:grayscale-0 transition-all duration-500">
             <span className="text-2xl font-black italic tracking-tighter">HARVARD</span>
             <span className="text-2xl font-black tracking-widest">STANFORD</span>
             <span className="text-2xl font-black">OXFORD</span>
             <span className="text-2xl font-black italic">MIT</span>
             <span className="text-2xl font-black tracking-tighter">BERKELEY</span>
          </div>
        </div>
      </div>
    </section>
  );
};
