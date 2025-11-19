import React from 'react';

export const KeyFindings: React.FC = () => {
  return (
    <section className="container mx-auto px-4 -mt-10 mb-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="bg-slate-800 border border-slate-700 p-8 rounded-lg shadow-xl hover:border-danger/50 transition-colors">
          <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 border border-slate-700">
            <i className="fa-solid fa-arrows-rotate text-danger text-xl"></i>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">The Strategic Inversion</h3>
          <p className="text-slate-400 leading-relaxed text-sm">
            While CSIS identifies Daesh-inspired plots as the top lethal threat, the funding portfolio exclusively prioritizes far-right research and generic social programs.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-slate-800 border border-slate-700 p-8 rounded-lg shadow-xl hover:border-danger/50 transition-colors">
          <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 border border-slate-700">
            <i className="fa-solid fa-users-slash text-danger text-xl"></i>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Systemic Exclusion</h3>
          <p className="text-slate-400 leading-relaxed text-sm">
            Antisemitism is marginalized. Zero funded projects adopt the IHRA definition, and no Jewish security agencies were listed as primary partners.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-slate-800 border border-slate-700 p-8 rounded-lg shadow-xl hover:border-danger/50 transition-colors">
          <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 border border-slate-700">
            <i className="fa-solid fa-mask text-danger text-xl"></i>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">The Agnostic Trap</h3>
          <p className="text-slate-400 leading-relaxed text-sm">
            Generic "anti-polarization" mandates fail to detect specific theological radicalization pathways used by groups like ISIS and Hamas to groom youth.
          </p>
        </div>

      </div>
    </section>
  );
};