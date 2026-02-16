
import React from 'react';
import { QUALITY_METRICS } from '../constants';

export const QualitySystem: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-20">
          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Quality Control</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight">
              A self-policing <br/><span className="text-indigo-600">ecosystem of excellence.</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We don't just host counselors; we manage performance. Our proprietary quality system ensures only the highest performing mentors remain active.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Automatic Suspension", desc: "Counselors falling below 4.5 stars are automatically audited." },
                { title: "Verification Checkpoints", desc: "Annual identity and credential re-verification for all pros." },
                { title: "Escrow Protection", desc: "Funds are only released once milestones are achieved." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="glass-card p-10 rounded-[3rem] shadow-2xl border-white relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-[60px] opacity-50"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-10">
                  <h4 className="text-xl font-black text-slate-800 tracking-tight">System Performance</h4>
                  <span className="text-xs font-bold text-slate-400">LIVE FEED</span>
                </div>
                
                <div className="space-y-8">
                  {QUALITY_METRICS.map((metric, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-end mb-3">
                        <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">{metric.label}</span>
                        <span className="text-2xl font-black text-slate-900">{metric.value}</span>
                      </div>
                      <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${metric.color} rounded-full transition-all duration-1000`} 
                          style={{ width: metric.value.includes('.') ? metric.value.replace('.', '').slice(0, 2) + '%' : '100%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-slate-900 text-white p-6 rounded-2xl flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                    <p className="text-lg font-bold">Optimal Integrity</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold uppercase tracking-wider">Secured</span>
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
