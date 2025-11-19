import React from 'react';

export const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-24 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-condensed font-bold text-white uppercase mb-6">The Map Must Match the Territory</h2>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-sans">
          The 2025 portfolio represents a dangerous strategic inversion. It funds a map that ignores the actual territory. We do not need to defund Far-Right research; we must match it with equal resources for the threats demonstrating the clearest lethal intent: Islamist Extremism and Antisemitism.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a 
             href="/CRFaudit/Tafsik_Report_2025-CRF_Bias_Strategic_Audit.pdf"
             download="Tafsik_Report_2025-CRF_Bias_Strategic_Audit.pdf"
             className="px-8 py-4 bg-orange hover:bg-orange-600 text-slate-900 font-bold text-lg uppercase tracking-wider rounded shadow-lg hover:shadow-orange/20 transition-all transform hover:-translate-y-1 inline-flex items-center justify-center"
          >
             <i className="fa-solid fa-file-pdf mr-3"></i>
             Download Full Forensic Audit (PDF)
          </a>
          
          <a 
            href="#methodology" 
            onClick={(e) => handleScroll(e, 'methodology')}
            className="text-paper underline decoration-slate-600 hover:decoration-paper underline-offset-4 font-mono text-sm hover:text-white transition-colors"
          >
            View Methodology: The 20-Point Bias Score
          </a>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs font-mono uppercase">
           <span>Tafsik Strategic Audit: CRF 2025</span>
           <span>Data: Public Safety Canada / CSIS Reports</span>
        </div>
      </div>
    </footer>
  );
};