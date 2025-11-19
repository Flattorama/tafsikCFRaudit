import React from 'react';
import { StrategicInversionChart } from './StrategicInversionChart';

export const Hero: React.FC = () => {
  return (
    <section className="w-full border-b border-slate-800 bg-slate-950 pt-12 pb-16 md:py-24 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-12 items-start">
          
          {/* Text Column */}
          <div className="w-full max-w-4xl text-left">
            <div className="inline-block px-3 py-1 mb-6 border border-danger/40 bg-danger/10 text-danger font-mono text-xs uppercase tracking-widest font-bold">
              Forensic Audit
            </div>
            
            <h1 className="text-5xl md:text-7xl font-condensed font-bold text-white uppercase leading-[0.9] mb-6">
              CANADA’S $37 MILLION <span className="text-slate-500">BLIND SPOT</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-sans text-slate-300 font-light mb-8 leading-relaxed border-l-4 border-danger pl-6">
              Intelligence agencies warn that ISIS-inspired plots and Antisemitism are our top lethal threats. So why is <span className="text-danger font-bold">0%</span> of Canada’s primary counter-radicalization fund dedicated to stopping them?
            </h2>
            
            <p className="text-slate-400 font-sans leading-relaxed mb-8 max-w-xl">
              On October 20, 2025, the government positioned its $36.9 million Community Resilience Fund (CRF) as a 'social cohesion' initiative—an 'upstream' strategy to build resilience against hate. But effective prevention requires targeting actual threats. Our forensic audit reveals a dangerous disconnect: while the funding focuses on 'grievance-based violence' and Far-Right research, it is structurally blind to the surge in Islamist extremism and anti-Jewish violence that is currently mobilizing youth.
            </p>
          </div>

          {/* Strategic Inversion Infographic */}
          <div className="w-full max-w-4xl flex justify-center">
            <StrategicInversionChart />
          </div>

        </div>
      </div>
    </section>
  );
};