
import React from 'react';
import { STEPS } from '../constants';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">The Process</h2>
          <p className="text-4xl md:text-5xl font-black text-slate-900">Your path to clarity.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, idx) => (
            <div key={step.id} className="relative group">
              <div className="absolute top-0 left-0 w-12 h-12 bg-blue-100/50 rounded-2xl -translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform"></div>
              <div className="relative glass-card p-10 rounded-[2rem] border border-white hover:border-blue-100 shadow-xl hover:shadow-2xl hover:shadow-blue-200/40 transition-all group-hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-emerald-400 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-200">
                  {step.icon}
                </div>
                <div className="absolute top-10 right-10 text-slate-100 text-6xl font-black pointer-events-none group-hover:text-blue-50 transition-colors">
                  0{step.id}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
              {idx < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] z-10">
                  <svg className="w-8 h-8 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
