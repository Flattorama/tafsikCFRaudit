import React, { useEffect, useRef, useState } from 'react';

export const StrategicInversionChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const transitionStyle = {
    transitionProperty: 'width',
    transitionDuration: '1500ms',
    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
  };

  return (
    <div 
      ref={containerRef} 
      className="bg-slate-950 p-6 md:p-10 border border-slate-700 relative overflow-hidden w-full shadow-2xl rounded-sm font-sans"
    >
      {/* Added Title as requested */}
      <div className="absolute top-0 left-0 bg-slate-800 px-3 py-1 border-b border-r border-slate-700 z-20">
           <span className="text-xs font-bold text-white uppercase tracking-widest">Misaligned Priorities</span>
      </div>

      {/* HEADER - Hidden on mobile */}
      <div className="hidden md:grid grid-cols-[1fr_180px_1fr] gap-5 items-center mb-8 mt-6">
        <div className="text-left">
          <h3 className="text-danger m-0 tracking-widest text-xl font-condensed font-bold uppercase">THE KINETIC REALITY</h3>
          <p className="text-slate-500 text-sm font-mono m-0">CSIS Threat Assessment</p>
        </div>
        <div></div>
        <div className="text-right">
          <h3 className="text-teal m-0 tracking-widest text-xl font-condensed font-bold uppercase">THE PUBLIC FUNDING</h3>
          <p className="text-slate-500 text-sm font-mono m-0">CRF 2025 Allocation</p>
        </div>
      </div>

      {/* Mobile Header spacer */}
      <div className="md:hidden mt-8"></div>

      {/* ROW 1: ISLAMIST */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_180px_1fr] gap-2 md:gap-5 items-center mb-8 md:mb-6">
        {/* Label (Order 1 on mobile, 2 on desktop) */}
        <div className="order-1 md:order-2 text-left md:text-center text-slate-100 font-condensed font-bold text-2xl md:text-lg tracking-widest border-y-0 md:border-y border-slate-700 py-1 md:py-2 md:h-full flex items-center justify-start md:justify-center">
            ISLAMIST / DAESH
        </div>

        {/* Threat Bar (Order 2 on mobile, 1 on desktop) */}
        <div className="order-2 md:order-1 w-full h-8 md:h-10 bg-slate-900/50 md:bg-white/5 relative flex items-center justify-start md:justify-end rounded md:rounded-none">
          <div 
            className="h-full flex items-center px-3 whitespace-nowrap font-mono text-xs font-bold text-white justify-start md:justify-end border-l-2 border-red-300 shadow-[0_0_15px_rgba(239,68,68,0.3)] md:shadow-[-5px_0_15px_rgba(239,68,68,0.3)] bg-gradient-to-r from-[#7f1d1d] to-[#EF4444]"
            style={{ width: isVisible ? '95%' : '0%', ...transitionStyle }}
          >
            <span className="md:hidden text-[10px] text-red-200 mr-2 opacity-75">THREAT:</span>
            <span>CRITICAL</span>
          </div>
        </div>
        
        {/* Funding Bar (Order 3 on mobile, 3 on desktop) */}
        <div className="order-3 md:order-3 w-full h-8 md:h-10 bg-slate-900/50 md:bg-white/5 relative flex items-center justify-start rounded md:rounded-none">
           <div className="h-full w-0" style={{ width: '0%' }}></div>
           <span className={`text-danger font-bold ml-0 md:ml-4 pl-3 md:pl-0 font-mono text-sm animate-pulse transition-opacity duration-500 delay-[1500ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
             <span className="md:hidden text-[10px] text-slate-500 mr-2">FUNDING:</span>
             0% FUNDED
           </span>
        </div>
      </div>

      {/* ROW 2: ANTISEMITISM */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_180px_1fr] gap-2 md:gap-5 items-center mb-8 md:mb-6">
        {/* Label */}
        <div className="order-1 md:order-2 text-left md:text-center text-slate-100 font-condensed font-bold text-2xl md:text-lg tracking-widest border-y-0 md:border-y border-slate-700 py-1 md:py-2 md:h-full flex items-center justify-start md:justify-center">
            ANTISEMITISM
        </div>

        {/* Threat Bar */}
        <div className="order-2 md:order-1 w-full h-8 md:h-10 bg-slate-900/50 md:bg-white/5 relative flex items-center justify-start md:justify-end rounded md:rounded-none">
          <div 
            className="h-full flex items-center px-3 whitespace-nowrap font-mono text-xs font-bold text-white justify-start md:justify-end border-l-2 border-red-300 shadow-[0_0_15px_rgba(239,68,68,0.3)] md:shadow-[-5px_0_15px_rgba(239,68,68,0.3)] bg-gradient-to-r from-[#7f1d1d] to-[#EF4444]"
            style={{ width: isVisible ? '85%' : '0%', ...transitionStyle }}
          >
            <span className="md:hidden text-[10px] text-red-200 mr-2 opacity-75">THREAT:</span>
            <span>HIGH</span>
          </div>
        </div>

        {/* Funding Bar */}
        <div className="order-3 md:order-3 w-full h-8 md:h-10 bg-slate-900/50 md:bg-white/5 relative flex items-center justify-start rounded md:rounded-none">
          <div 
            className="h-full flex items-center px-2 whitespace-nowrap font-mono text-xs font-bold text-white justify-start border-r-2 border-teal-200 shadow-[0_0_15px_rgba(20,184,166,0.3)] md:shadow-[5px_0_15px_rgba(20,184,166,0.3)] bg-gradient-to-r from-[#14B8A6] to-[#0f766e]"
            style={{ width: isVisible ? '10%' : '0%', ...transitionStyle }}
          >
            <span className="md:hidden text-[10px] text-teal-100 mr-2 opacity-75">FUNDING:</span>
            <span className="ml-1">LOW</span>
          </div>
        </div>
      </div>

      {/* ROW 3: FAR-RIGHT */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_180px_1fr] gap-2 md:gap-5 items-center">
        {/* Label */}
        <div className="order-1 md:order-2 text-left md:text-center text-slate-100 font-condensed font-bold text-2xl md:text-lg tracking-widest border-y-0 md:border-y border-slate-700 py-1 md:py-2 md:h-full flex items-center justify-start md:justify-center">
            FAR-RIGHT
        </div>

        {/* Threat Bar */}
        <div className="order-2 md:order-1 w-full h-8 md:h-10 bg-slate-900/50 md:bg-white/5 relative flex items-center justify-start md:justify-end rounded md:rounded-none">
          <div 
            className="h-full flex items-center px-3 whitespace-nowrap font-mono text-xs font-bold text-white justify-start md:justify-end border-gray-400 bg-slate-600"
            style={{ width: isVisible ? '30%' : '0%', ...transitionStyle }}
          >
            <span className="md:hidden text-[10px] text-slate-300 mr-2 opacity-75">THREAT:</span>
            <span>MED</span>
          </div>
        </div>

        {/* Funding Bar */}
        <div className="order-3 md:order-3 w-full h-8 md:h-10 bg-slate-900/50 md:bg-white/5 relative flex items-center justify-start rounded md:rounded-none">
          <div 
            className="h-full flex items-center px-3 whitespace-nowrap font-mono text-xs font-bold text-white justify-start border-r-2 border-teal-200 shadow-[0_0_15px_rgba(20,184,166,0.3)] md:shadow-[5px_0_15px_rgba(20,184,166,0.3)] bg-gradient-to-r from-[#14B8A6] to-[#0f766e]"
            style={{ width: isVisible ? '90%' : '0%', ...transitionStyle }}
          >
            <span className="md:hidden text-[10px] text-teal-100 mr-2 opacity-75">FUNDING:</span>
            <span>OVER-INDEXED</span>
          </div>
        </div>
      </div>

      {/* FAILURE OVERLAY */}
      <div className="absolute bottom-3 right-4 text-[10px] text-danger font-mono opacity-60 tracking-widest uppercase hidden md:block">
        STRATEGIC GAP DETECTED
      </div>

    </div>
  );
};