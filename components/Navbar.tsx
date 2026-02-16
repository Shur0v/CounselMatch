
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full glass-card border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-emerald-400 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200/50">
              CM
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">CounselMatch</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Discover</a>
            <a href="#" className="hover:text-blue-600 transition-colors">How it Works</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#" className="hover:text-blue-600 transition-colors">About Us</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-sm font-semibold text-slate-600 hover:text-slate-900">Log in</button>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
