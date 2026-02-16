
import React from 'react';

export const Mission: React.FC = () => {
  return (
    <section className="relative py-32 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-6">Our Mission</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white leading-tight mb-10">
            Education is the ultimate equalizer. <span className="text-slate-400 italic font-medium">We just build the bridges.</span>
          </h3>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 font-light">
            Founded by educators who believe in radical transparency, CounselMatch democratizes access to elite mentorship. We believe every student, regardless of background, deserves a navigator for their academic voyage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black text-white mb-2">12M+</span>
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Minutes Mentored</span>
            </div>
            <div className="w-px h-12 bg-slate-800 hidden sm:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black text-blue-400 mb-2">94%</span>
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Admission Rate</span>
            </div>
            <div className="w-px h-12 bg-slate-800 hidden sm:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black text-emerald-400 mb-2">100+</span>
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Universities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
