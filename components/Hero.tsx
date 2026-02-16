
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="text-center lg:text-left mb-16 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Verified Counselors Globally
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Academic Potential</span> with Elite Mentors.
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              Connect with experienced counselors who have navigated the world's top universities. Personalized guidance, actionable strategy, and proven results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all hover:-translate-y-1 active:scale-95">
                Start My Journey
              </button>
              <button className="px-8 py-4 bg-white text-slate-800 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all active:scale-95">
                Browse Counselors
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-8 justify-center lg:justify-start opacity-70">
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold text-lg">99%</span>
                <span className="text-sm font-medium">Satisfaction Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500 font-bold text-lg">24/7</span>
                <span className="text-sm font-medium">Support Access</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-indigo-500 font-bold text-lg">5k+</span>
                <span className="text-sm font-medium">Students Placed</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-emerald-100 rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative glass-card rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/40 aspect-square sm:aspect-auto">
              <img 
                src="https://picsum.photos/seed/counseling/800/800" 
                alt="Counseling Preview" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">Live Now</p>
                    <p className="text-sm font-bold text-slate-800">124 counselors available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
