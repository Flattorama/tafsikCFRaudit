import React from 'react';

export const MisalignmentMatrix: React.FC = () => {
  return (
    <section id="matrix" className="container mx-auto px-4 py-24 scroll-mt-24 border-b border-slate-800">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-condensed font-bold text-white uppercase">How Funding is Misaligned with Reality</h2>
        <div className="h-px flex-grow bg-slate-800"></div>
      </div>

      {/* Grid Container */}
      <div className="rounded border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
        
        {/* Desktop Header - Hidden on Mobile */}
        <div className="hidden lg:grid grid-cols-4 bg-slate-950 border-b border-slate-700 text-slate-500 font-mono text-xs uppercase tracking-widest">
          <div className="p-6 font-semibold">The Threat (Intel)</div>
          <div className="p-6 font-semibold">The Reality (Plots)</div>
          <div className="p-6 font-semibold">The Funding (CRF)</div>
          <div className="p-6 font-semibold text-right">The Score</div>
        </div>

        {/* Row 1: Antisemitism */}
        <div className="grid grid-cols-1 lg:grid-cols-4 border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
          {/* Threat */}
          <div className="p-6 lg:border-r border-slate-800/50">
            <span className="lg:hidden text-[10px] text-slate-500 font-mono uppercase tracking-widest block mb-2">The Threat</span>
            <div className="font-condensed font-bold text-white text-2xl mb-2">ANTISEMITISM</div>
            <div className="text-sm text-slate-400 font-mono">Core driver of violent extremism</div>
          </div>
          {/* Reality */}
          <div className="p-6 lg:border-r border-slate-800/50">
             <span className="lg:hidden text-[10px] text-slate-500 font-mono uppercase tracking-widest block mb-2">The Reality</span>
             <p className="text-slate-300 font-sans leading-relaxed text-sm">Central to 3 of 4 cited domestic plots (Ottawa, Toronto, NYC).</p>
          </div>
          {/* Funding */}
          <div className="p-6 lg:border-r border-slate-800/50">
             <span className="lg:hidden text-[10px] text-slate-500 font-mono uppercase tracking-widest block mb-2">The Funding</span>
             <p className="text-slate-400 font-mono text-sm mb-2">Named in only 2 projects; always diluted.</p>
             <div className="text-danger font-bold uppercase text-sm tracking-wider">0 Dedicated Interventions</div>
          </div>
          {/* Score */}
          <div className="p-6 flex items-center lg:justify-end">
             <span className="lg:hidden text-[10px] text-slate-500 font-mono uppercase tracking-widest mr-4">Score:</span>
             <span className="bg-danger text-white px-3 py-1 font-condensed font-bold uppercase tracking-widest text-sm rounded-sm">
               Severe Gap
             </span>
          </div>
        </div>

        {/* Row 2: Islamist / Daesh */}
        <div className="grid grid-cols-1 lg:grid-cols-4 bg-slate-800/30 border-b border-slate-800 border-l-4 border-l-danger relative">
           {/* Threat */}
           <div className="p-6 lg:border-r border-slate-800/50">
             <span className="lg:hidden text-[10px] text-danger/70 font-mono uppercase tracking-widest block mb-2">The Threat</span>
             <div className="font-condensed font-bold text-danger text-2xl mb-2">ISLAMIST / DAESH</div>
             <div className="text-sm text-slate-400 font-mono">Critical Priority</div>
             <p className="text-xs text-slate-500 mt-2">Only threat stream named in operational disruptions.</p>
           </div>

           {/* Reality + Exhibit A */}
           <div className="p-6 lg:border-r border-slate-800/50 relative group">
              <span className="lg:hidden text-[10px] text-slate-500 font-mono uppercase tracking-widest block mb-2">The Reality</span>
              <div className="flex flex-col gap-6">
                  <p className="text-slate-300 font-sans leading-relaxed text-sm">
                    Toronto Father-Son plot (Axes/Machetes), Ottawa Youth plot (Explosives).
                  </p>
                  
                  {/* Exhibit A - Inline now for safety */}
                  <div className="bg-paper rotate-1 shadow-xl border border-slate-400 p-2 max-w-[200px] transform transition-transform hover:rotate-0 hover:scale-105">
                       <div className="bg-slate-900 p-2 h-16 flex items-center justify-center overflow-hidden relative mb-2">
                          <i className="fa-solid fa-gavel text-4xl text-slate-800 absolute"></i>
                          <div className="text-slate-500 text-[8px] font-mono absolute bottom-1 left-1">EXHIBIT A</div>
                       </div>
                       <p className="text-[8px] font-mono leading-tight text-slate-700 uppercase">
                          <strong>EVIDENCE:</strong> Weapons acquired by Daesh-inspired suspects in Toronto, July 2024.
                       </p>
                  </div>
              </div>
           </div>

           {/* Funding */}
           <div className="p-6 lg:border-r border-slate-800/50">
              <span className="lg:hidden text-[10px] text-slate-500 font-mono uppercase tracking-widest block mb-2">The Funding</span>
              <p className="text-slate-400 font-mono text-sm mb-2">Total Silence.</p>
              <div className="text-danger font-bold uppercase text-sm tracking-wider">0 Projects Explicitly Name</div>
           </div>

           {/* Score */}
           <div className="p-6 flex items-center lg:justify-end">
              <span className="lg:hidden text-[10px] text-slate-500 font-mono uppercase tracking-widest mr-4">Score:</span>
              <span className="bg-danger text-white px-3 py-1 font-condensed font-bold uppercase tracking-widest text-sm rounded-sm shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                Total Failure
              </span>
           </div>
        </div>

        {/* Row 3: Far-Right */}
        <div className="grid grid-cols-1 lg:grid-cols-4 hover:bg-slate-800/50 transition-colors">
           {/* Threat */}
           <div className="p-6 lg:border-r border-slate-800/50">
              <span className="lg:hidden text-[10px] text-slate-500 font-mono uppercase tracking-widest block mb-2">The Threat</span>
              <div className="font-condensed font-bold text-teal text-2xl mb-2">FAR-RIGHT / IMVE</div>
              <div className="text-sm text-slate-400 font-mono">Monitor</div>
           </div>
           {/* Reality */}
           <div className="p-6 lg:border-r border-slate-800/50">
              <span className="lg:hidden text-[10px] text-slate-500 font-mono uppercase tracking-widest block mb-2">The Reality</span>
              <p className="text-slate-300 font-sans leading-relaxed text-sm">Zero specific plots cited as 2024-2025 operational examples.</p>
           </div>
           {/* Funding */}
           <div className="p-6 lg:border-r border-slate-800/50">
              <span className="lg:hidden text-[10px] text-slate-500 font-mono uppercase tracking-widest block mb-2">The Funding</span>
              <p className="text-slate-400 font-mono text-sm mb-2">Primary focus of 3 major research projects.</p>
              <div className="text-teal font-bold uppercase text-sm tracking-wider">Heavily Resourced</div>
           </div>
           {/* Score */}
           <div className="p-6 flex items-center lg:justify-end">
              <span className="lg:hidden text-[10px] text-slate-500 font-mono uppercase tracking-widest mr-4">Score:</span>
              <span className="bg-teal text-slate-900 px-3 py-1 font-condensed font-bold uppercase tracking-widest text-sm rounded-sm">
                Over-Indexed
              </span>
           </div>
        </div>

      </div>
    </section>
  );
};