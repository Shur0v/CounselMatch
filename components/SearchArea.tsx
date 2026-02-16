
import React, { useState } from 'react';

const CATEGORIES = ["Ivy League", "Medical School", "Law School", "MBA", "International Student", "Scholarships"];

export const SearchArea: React.FC = () => {
  const [activeChip, setActiveChip] = useState(CATEGORIES[0]);

  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Find your perfect counselor in seconds.</h2>
        </div>
        
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-600 rounded-2xl blur-xl opacity-10 group-focus-within:opacity-20 transition-opacity"></div>
          <div className="relative flex items-center glass-card border border-slate-200 rounded-3xl p-2 shadow-xl">
            <div className="pl-6 text-slate-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search by specialty, university, or keyword (e.g. 'Harvard Admissions')" 
              className="w-full py-5 px-4 bg-transparent border-none focus:ring-0 text-lg placeholder-slate-400 text-slate-800"
            />
            <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors hidden sm:block">
              Search
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveChip(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeChip === category 
                ? "bg-slate-900 text-white border-slate-900 shadow-md" 
                : "bg-white text-slate-600 border-slate-100 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
