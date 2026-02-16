
import React from 'react';

export const PostBrief: React.FC = () => {
  return (
    <section className="py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Post a Brief</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-8">
              Tell us your story, we'll handle the matching.
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Submit your goals, background, and specific questions. Our smart matching algorithm notifies relevant experts immediately.
            </p>
            
            <ul className="space-y-6 mb-10">
              {[
                "Average response time under 12 hours",
                "Receive up to 5 personalized offers",
                "No obligation to hire until you find the one",
                "Secure, private messaging platform"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-700 font-semibold">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <button className="px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 shadow-xl transition-all hover:-translate-y-1 active:scale-95">
              Post My Brief Now
            </button>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative glass-card border-slate-100 rounded-[2.5rem] shadow-2xl p-4 overflow-hidden">
               <div className="bg-slate-50 rounded-2xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-bold text-slate-800">Brief: Medical School Prep</h4>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold">ACTIVE</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: "Dr. Sarah K.", school: "Harvard Med", price: "$150/hr", img: "12" },
                      { name: "James Wilson", school: "Johns Hopkins", price: "$120/hr", img: "15" },
                      { name: "Elena Rossi", school: "Oxford University", price: "$180/hr", img: "18" }
                    ].map((offer, i) => (
                      <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between animate-fade-in" style={{ animationDelay: `${i * 200}ms` }}>
                        <div className="flex items-center gap-3">
                          <img src={`https://picsum.photos/seed/${offer.img}/100/100`} className="w-10 h-10 rounded-full object-cover" />
                          <div>
                            <p className="text-sm font-bold text-slate-800">{offer.name}</p>
                            <p className="text-xs text-slate-500 font-medium">{offer.school}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-bold text-blue-600">{offer.price}</p>
                          <button className="text-[10px] font-bold text-white bg-slate-900 px-3 py-1 rounded-lg mt-1">View Offer</button>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
               <div className="text-center">
                 <p className="text-sm font-bold text-slate-400">Receiving fresh offers from experts...</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
