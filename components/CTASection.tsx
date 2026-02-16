
import React from 'react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[3rem] bg-gradient-to-tr from-blue-700 to-indigo-800 overflow-hidden shadow-3xl shadow-blue-200">
          <div className="absolute inset-0 opacity-10">
             <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          </div>
          <div className="relative px-8 py-20 md:py-32 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Ready to start your journey to excellence?
            </h2>
            <p className="text-xl text-blue-100/80 mb-12 font-medium max-w-2xl mx-auto">
              Join thousands of students who have already found their perfect match. Start building your academic future today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-blue-700 font-black rounded-2xl shadow-2xl hover:bg-blue-50 transition-all hover:-translate-y-1 active:scale-95 text-lg">
                Get Started Free
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-transparent text-white border-2 border-white/20 hover:bg-white/10 font-black rounded-2xl transition-all active:scale-95 text-lg">
                Explore Counselors
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
