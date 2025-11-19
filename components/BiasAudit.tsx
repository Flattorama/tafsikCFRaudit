import React, { useState, useRef } from 'react';
import { Search, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { AuditCard } from './AuditCard';
import { AUDIT_DATA } from '../constants';
import { AuditEntry } from '../types';

// Custom tick to prevent text cutoff on Radar Chart
const CustomTick = ({ payload, x, y, textAnchor, cx, cy }: any) => {
  const words = payload.value.split(' ');
  return (
    <g className="recharts-layer recharts-polar-angle-axis-tick">
      <text
        x={x}
        y={y}
        className="recharts-text recharts-polar-angle-axis-tick-value"
        textAnchor={textAnchor}
        fill="#94a3b8" // slate-400
        fontSize={10}
        fontWeight={600}
        style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}
      >
        {words.map((word: string, i: number) => (
          <tspan 
            x={x} 
            dy={i === 0 ? 0 : 12} 
            key={i}
          >
            {word}
          </tspan>
        ))}
      </text>
    </g>
  );
};

export const BiasAudit: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedCard, setSelectedCard] = useState<AuditEntry | null>(null);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter Logic
  const filteredData = AUDIT_DATA.filter(org => {
    const matchesSearch = org.organization.toLowerCase().includes(search.toLowerCase()) || 
                          org.project_title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || org.risk_level === filter;
    return matchesSearch && matchesFilter;
  });

  // Scroll Handlers
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 scroll-mt-24" id="audit">
      
      {/* Section Header */}
      <div className="mb-8">
         <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-condensed font-bold text-white uppercase flex items-center gap-4">The Bias Audit</h2>
            <p className="text-slate-400 font-mono mt-2 text-sm">
              Forensic scoring of 19 funded projects. Search and inspect risk profiles.
            </p>
          </div>
        </div>
      </div>

      {/* Controls / Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 bg-slate-900 p-4 rounded-lg border border-slate-700">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 text-slate-500 w-5 h-5" />
          <input 
            type="text" 
            placeholder="SEARCH DATABASE..." 
            className="w-full bg-slate-950 border border-slate-700 rounded pl-10 pr-4 py-2 text-white focus:outline-none focus:border-orange font-mono text-sm uppercase placeholder-slate-600"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="relative min-w-[200px]">
          <select 
            className="w-full bg-slate-950 border border-slate-700 rounded pl-4 pr-10 py-2 text-white appearance-none focus:outline-none focus:border-orange cursor-pointer font-mono text-sm uppercase"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">Risk Level: All</option>
            <option value="Very High">Very High Risk</option>
            <option value="High">High Risk</option>
            <option value="Medium">Medium Risk</option>
          </select>
          <ChevronDown className="absolute right-3 top-3 text-slate-500 w-5 h-5 pointer-events-none" />
        </div>
      </div>

      {/* CAROUSEL CONTAINER */}
      <div className="relative group">
        
        {/* Left Button (Desktop) */}
        <button 
          onClick={() => scroll('left')}
          className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-slate-800 border border-slate-600 text-white p-2 rounded-full shadow-lg hover:bg-slate-700 transition-colors"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* The Scroll Area */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-2 px-2 no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' as any }}
        >
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div 
                key={index} 
                className="snap-center flex-shrink-0 w-[85vw] md:w-[380px] lg:w-[400px]"
              >
                <AuditCard 
                  data={item} 
                  onClick={() => setSelectedCard(item)} 
                />
              </div>
            ))
          ) : (
             <div className="w-full text-center py-12 text-slate-500 italic font-mono uppercase">
                No organizations found matching your filters.
             </div>
          )}
        </div>

        {/* Right Button (Desktop) */}
        <button 
          onClick={() => scroll('right')}
          className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-slate-800 border border-slate-600 text-white p-2 rounded-full shadow-lg hover:bg-slate-700 transition-colors"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Modal Implementation */}
      {selectedCard && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm" onClick={() => setSelectedCard(null)}>
          <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
             {/* Header */}
             <div className="bg-slate-800 p-6 border-b border-slate-700 flex justify-between items-start">
                <div>
                   <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white font-condensed uppercase">{selectedCard.organization}</h3>
                      <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider ${
                          selectedCard.risk_level === 'Very High' ? 'bg-danger/10 text-danger border border-danger' :
                          selectedCard.risk_level === 'High' ? 'bg-orange/10 text-orange border border-orange' :
                          'bg-teal/10 text-teal border border-teal'
                      }`}>
                        {selectedCard.risk_level} Risk
                      </span>
                   </div>
                   <p className="text-slate-400 text-sm font-mono">{selectedCard.project_title}</p>
                </div>
                <button onClick={() => setSelectedCard(null)} className="text-slate-400 hover:text-white text-2xl">&times;</button>
             </div>
             
             {/* Body */}
             <div className="p-6 space-y-6">
                
                {/* 1. Forensic Analysis */}
                <div className="bg-slate-950 p-4 rounded border border-slate-800">
                   <h4 className="text-xs font-mono uppercase text-slate-500 mb-2">Forensic Analysis</h4>
                   <p className="text-slate-300 leading-relaxed text-sm">{selectedCard.analysis}</p>
                </div>

                {/* 2. Bias Topology (Radar Chart) */}
                <div className="bg-slate-950/50 rounded-lg border border-slate-800 p-4 flex flex-col items-center justify-center">
                    <h4 className="text-xs font-mono uppercase text-slate-500 mb-4">Bias Topology Map</h4>
                    <div className="w-full h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={[
                                { subject: 'Far-Right Focus', A: selectedCard.breakdown_scores.far_right_focus, fullMark: 4 },
                                { subject: 'Islamist Omission', A: selectedCard.breakdown_scores.islamist_focus, fullMark: 4 },
                                { subject: 'Antisemitism Neglect', A: selectedCard.breakdown_scores.antisemitism_focus, fullMark: 4 },
                                { subject: 'No IHRA', A: selectedCard.breakdown_scores.ihra_definition, fullMark: 2 },
                                { subject: 'Agnostic Framing', A: selectedCard.breakdown_scores.ideology_agnostic, fullMark: 2 },
                                { subject: 'No Jewish Partners', A: selectedCard.breakdown_scores.jewish_partnerships, fullMark: 2 },
                            ]}>
                                <PolarGrid stroke="#334155" />
                                <PolarAngleAxis 
                                  dataKey="subject" 
                                  tick={(props) => <CustomTick {...props} />}
                                />
                                <PolarRadiusAxis angle={30} domain={[0, 4]} tick={false} axisLine={false} />
                                <Radar
                                    name="Bias Score"
                                    dataKey="A"
                                    stroke="#ef4444"
                                    strokeWidth={2}
                                    fill="#ef4444"
                                    fillOpacity={0.4}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                     <div className="text-center mt-2">
                        <div className="text-xs text-slate-500 font-mono uppercase">Total Bias Score</div>
                        <span className="text-xl font-bold text-white">{selectedCard.total_score}</span>
                        <span className="text-xs text-slate-500">/20</span>
                    </div>
                </div>

                {/* 3. Scoring Breakdown */}
                <div>
                   <h4 className="text-xs font-mono uppercase text-slate-500 mb-4">Scoring Breakdown</h4>
                   <div className="grid gap-4">
                      {Object.entries(selectedCard.breakdown_scores).map(([key, score]) => (
                         <div key={key} className="flex items-center justify-between border-b border-slate-800 pb-2">
                            <span className="text-slate-300 capitalize text-sm font-mono">{key.replace(/_/g, ' ')}</span>
                            <div className="flex items-center gap-3">
                               <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
                                  <div className={`h-full ${Number(score) > 0 ? 'bg-danger' : 'bg-slate-600'}`} style={{ width: `${(Number(score)/4)*100}%` }}></div>
                               </div>
                               <span className="text-white font-mono font-bold w-6 text-right text-xs">+{score}</span>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>

             </div>
          </div>
        </div>
      )}

      {/* Inline Styles for hiding scrollbar in Webkit/Chrome */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};