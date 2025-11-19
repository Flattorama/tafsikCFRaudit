import React, { useState } from 'react';
import { AlertTriangle, ShieldAlert, ShieldCheck, Ban, CheckCircle2, Filter, Info } from 'lucide-react';

export const MechanismFailure = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="w-full bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-2xl">
          {/* Header Section */}
          <div className="mb-8 border-b border-slate-800 pb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <Filter className="text-red-500 w-8 h-8" />
              The Filtering Failure
            </h2>
            <p className="text-slate-400 mt-2 max-w-3xl text-lg">
              How the policy of <span className="text-white font-semibold">"Ideological Agnosticism"</span> creates a structural blindspot, blocking resources for the primary lethal threat while over-indexing on lower-priority targets.
            </p>
          </div>

          {/* The Pipeline Visualizer */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
            
            {/* COLUMN 1: THE INTELLIGENCE INPUT (THE REALITY) */}
            <div className="lg:col-span-3 flex flex-col gap-6 relative z-10">
              <h3 className="text-slate-400 font-mono text-sm uppercase tracking-widest mb-2 border-b border-slate-700 pb-2">
                Input: Threat Intelligence
              </h3>
              
              {/* Card 1: Islamist Threat */}
              <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-red-500 relative group">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2 text-red-400 font-bold">
                    <ShieldAlert className="w-5 h-5" />
                    <span>Islamist / Antisemitism</span>
                  </div>
                  <span className="bg-red-900/30 text-red-400 text-xs px-2 py-1 rounded uppercase font-bold">
                    Critical Priority
                  </span>
                </div>
                <p className="text-slate-400 text-sm">
                  Core driver of recent lethal plots (Ottawa, Toronto). High kinetic danger.
                </p>
                {/* Visual Connection Line (Desktop Only) */}
                <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-1 bg-gradient-to-r from-red-500/50 to-red-500/20"></div>
              </div>

              {/* Card 2: Far Right Threat */}
              <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-blue-500 relative opacity-75">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2 text-blue-400 font-bold">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Far-Right / IMVE</span>
                  </div>
                  <span className="bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded uppercase font-bold">
                    Moderate Priority
                  </span>
                </div>
                <p className="text-slate-400 text-sm">
                  Present but lower relative lethality in current 2025 intel assessments.
                </p>
                {/* Visual Connection Line (Desktop Only) */}
                <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-1 bg-gradient-to-r from-blue-500/50 to-blue-500/20"></div>
              </div>
            </div>

            {/* COLUMN 2: THE MECHANISM (THE BROKEN FILTER) */}
            <div className="lg:col-span-6 px-0 md:px-2 lg:px-8 flex flex-col justify-center relative z-20">
               {/* The "Filter" Box Container */}
               <div className="bg-slate-800/50 border-2 border-dashed border-slate-600 rounded-xl p-4 md:p-6 relative mt-8 lg:mt-0">
                  
                  {/* Label */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-slate-900 px-2 md:px-4 text-slate-300 font-mono text-[10px] md:text-xs uppercase tracking-widest border border-slate-700 rounded-full whitespace-nowrap">
                    The Mechanism: "Ideological Agnosticism"
                  </div>

                  <div className="space-y-6 md:space-y-8 mt-4">
                    {/* Path 1: The Blockage */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                      <div className="w-full h-14 md:h-16 bg-slate-900 border border-red-900/50 rounded flex items-center px-3 md:px-4 relative overflow-hidden shrink-0">
                        <div className="absolute inset-0 bg-red-900/10 animate-pulse"></div>
                        <span className="relative text-red-200 font-medium text-xs md:text-sm z-10 pr-10">
                          Input: Specific Theological Threat
                        </span>
                        {/* The Wall */}
                        <div className="absolute right-10 top-0 bottom-0 w-1 bg-red-600/50 shadow-[0_0_15px_rgba(220,38,38,0.8)]"></div>
                        <div className="absolute right-2 text-red-500">
                          <Ban className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                      </div>
                      <div className="text-xs text-red-400 w-full md:w-32 font-medium pl-1 md:pl-0">
                        <span className="block mb-1 font-bold md:font-normal">FILTER REJECTED:</span>
                        "Too specific. Does not fit 'social cohesion' model."
                      </div>
                    </div>

                    {/* Path 2: The Pass-Through */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                      <div className="w-full h-14 md:h-16 bg-slate-900 border border-blue-900/50 rounded flex items-center px-3 md:px-4 relative shrink-0">
                         <span className="text-blue-200 font-medium text-xs md:text-sm z-10 pr-10">
                          Input: "Hate" & "Polarization"
                        </span>
                        {/* The Open Gate */}
                        <div className="absolute right-2 text-green-500">
                          <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                      </div>
                      <div className="text-xs text-green-400 w-full md:w-32 font-medium pl-1 md:pl-0">
                        <span className="block mb-1 font-bold md:font-normal">FILTER APPROVED:</span>
                        "Fits generic 'anti-hate' mandate."
                      </div>
                    </div>
                  </div>

               </div>
            </div>

            {/* COLUMN 3: THE FUNDING OUTPUT (THE FAILURE) */}
            <div className="lg:col-span-3 flex flex-col gap-6 relative z-10 mt-6 lg:mt-0">
               <h3 className="text-slate-400 font-mono text-sm uppercase tracking-widest mb-2 border-b border-slate-700 pb-2 text-left lg:text-right">
                Output: 2025 Funding
              </h3>

              {/* Result 1: Zero Funding */}
              <div className="bg-red-950/30 p-4 rounded-lg border border-red-900/50 flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center h-auto lg:h-full min-h-[100px] lg:min-h-[120px] gap-4">
                 <div className="text-4xl font-bold text-red-500 mb-0 lg:mb-1">0 / 19</div>
                 <div className="text-right">
                    <div className="text-red-400 font-semibold text-sm uppercase">Projects Funded</div>
                    <div className="text-red-300/60 text-xs mt-1 lg:mt-2">
                        Strategic Gap Created
                    </div>
                 </div>
              </div>

              {/* Result 2: Over Funding */}
              <div className="bg-blue-950/30 p-4 rounded-lg border border-blue-900/50 flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center h-auto lg:h-full min-h-[100px] lg:min-h-[120px] gap-4">
                 <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-0 lg:mb-1">Over-Indexed</div>
                 <div className="text-right">
                     <div className="text-blue-400 font-semibold text-sm uppercase">Focus on Far-Right</div>
                     <div className="text-blue-300/60 text-xs mt-1 lg:mt-2">
                        Resources Misallocated
                     </div>
                 </div>
              </div>

            </div>
          </div>

          {/* Footer / Legend */}
          <div className="mt-8 bg-slate-800/50 rounded p-4 border border-slate-700 flex items-start gap-3">
            <Info className="text-slate-400 w-5 h-5 mt-0.5 shrink-0" />
            <p className="text-sm text-slate-400">
              <strong className="text-white">The "Agnostic Trap":</strong> By refusing to name specific ideologies (Islamism) and relying on generic terms (Polarization), the funding mechanism inadvertently filters out threats that require theological expertise, while defaulting to threats that fit standard sociological models (Far Right).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
