import React from 'react';

export const Navbar: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900/95 border-b border-slate-800 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-scale-unbalanced-flip text-danger text-xl"></i>
          <span className="font-bold text-slate-100 tracking-wider uppercase text-sm md:text-base">
            Tafsik Strategic Audit: CRF 2025
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
          <a 
            href="#audit" 
            onClick={(e) => handleScroll(e, 'audit')}
            className="hover:text-white transition-colors"
          >
            Bias Audit
          </a>
          <a 
            href="#methodology" 
            onClick={(e) => handleScroll(e, 'methodology')}
            className="hover:text-white transition-colors"
          >
            Methodology
          </a>
          <a 
            href="/CRFaudit/Tafsik_Report_2025-CRF_Bias_Strategic_Audit.pdf" 
            download="Tafsik_Report_2025-CRF_Bias_Strategic_Audit.pdf"
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 rounded transition-colors flex items-center gap-2"
          >
            <i className="fa-solid fa-file-pdf"></i> Download Report
          </a>
        </div>
      </div>
    </nav>
  );
};