
import React from 'react';

export const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      ),
      url: "#"
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z"></path>
        </svg>
      ),
      url: "#"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      url: "#"
    }
  ];

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-emerald-400 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                CM
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-800">CounselMatch</span>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed max-w-xs mb-8">
              The premium marketplace for elite educational guidance and career mentorship.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all cursor-pointer hover:shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Platform", links: ["Discover", "How it Works", "Quality Control", "Pricing"] },
            { title: "Company", links: ["About Us", "Our Mission", "Careers", "Contact"] },
            { title: "Resources", links: ["Blog", "Guides", "Student Portal", "Counselor Hub"] },
            { title: "Legal", links: ["Terms", "Privacy", "Cookie Policy", "Verification"] }
          ].map((col, i) => (
            <div key={i}>
              <h4 className="font-black text-slate-800 text-sm uppercase tracking-widest mb-6">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-slate-500 hover:text-blue-600 font-medium transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-slate-400">
          <p>© 2025 CounselMatch. All rights reserved.</p>
          <div className="flex gap-8">
             <a href="#" className="hover:text-slate-600">English (US)</a>
             <a href="#" className="hover:text-slate-600">GBP (£)</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
