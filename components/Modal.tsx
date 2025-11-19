import React from 'react';
import { AuditEntry } from '../types';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

interface ModalProps {
  entry: AuditEntry | null;
  onClose: () => void;
}

// Custom tick to prevent text cutoff
const CustomTick = ({ payload, x, y, textAnchor, cx, cy }: any) => {
  const words = payload.value.split(' ');
  return (
    <g className="recharts-layer recharts-polar-angle-axis-tick">
      <text
        x={x}
        y={y}
        className="recharts-text recharts-polar-angle-axis-tick-value"
        textAnchor={textAnchor}
        fill="#cbd5e1"
        fontSize={10}
        fontWeight={500}
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

export const Modal: React.FC<ModalProps> = ({ entry, onClose }) => {
  if (!entry) return null;

  const data = [
    { subject: 'Far-Right Focus', A: entry.breakdown_scores.far_right_focus, fullMark: 4 },
    { subject: 'Omission of Islamic Radicalization', A: entry.breakdown_scores.islamist_focus, fullMark: 4 },
    { subject: 'Antisemitism Neglect', A: entry.breakdown_scores.antisemitism_focus, fullMark: 4 },
    { subject: 'No IHRA', A: entry.breakdown_scores.ihra_definition, fullMark: 2 },
    { subject: 'Agnostic Framing', A: entry.breakdown_scores.ideology_agnostic, fullMark: 2 },
    { subject: 'No Jewish Partners', A: entry.breakdown_scores.jewish_partnerships, fullMark: 2 },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md" onClick={onClose}>
      <div 
        className="bg-slate-900 border border-slate-700 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex justify-between items-start z-10">
          <div>
             <div className="flex items-center gap-3 mb-2">
                <span className={`inline-block px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wide border ${
                    entry.risk_level === 'Very High' ? 'bg-danger text-white border-danger' : 
                    entry.risk_level === 'High' ? 'bg-orange text-slate-900 border-orange' : 
                    'bg-teal text-white border-teal'
                }`}>
                    {entry.risk_level} Risk
                </span>
                <span className="text-slate-500 text-xs font-mono">ID: {entry.organization.substring(0,3).toUpperCase()}-2025</span>
             </div>
            <h2 className="text-2xl font-bold text-white leading-tight">{entry.organization}</h2>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">{entry.project_title}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors">
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Analysis */}
          <div className="lg:col-span-2 space-y-8">
             <div>
                <h3 className="text-sm font-bold text-danger uppercase tracking-wider mb-3 border-b border-danger/20 pb-2">
                    <i className="fa-solid fa-magnifying-glass mr-2"></i> 
                    Forensic Analysis
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                    {entry.analysis}
                </p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg">
                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-3">Detected Biases</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                        {entry.breakdown_scores.islamist_focus === 4 && (
                            <li className="flex items-start text-danger"><i className="fa-solid fa-triangle-exclamation mt-1 mr-2 text-xs"></i> Total Silence on Islamism</li>
                        )}
                        {entry.breakdown_scores.antisemitism_focus >= 3 && (
                            <li className="flex items-start text-danger"><i className="fa-solid fa-triangle-exclamation mt-1 mr-2 text-xs"></i> Marginalization of Antisemitism</li>
                        )}
                        {entry.breakdown_scores.far_right_focus >= 3 && (
                            <li className="flex items-start text-orange"><i className="fa-solid fa-circle-exclamation mt-1 mr-2 text-xs"></i> Exclusive Far-Right Focus</li>
                        )}
                    </ul>
                </div>
                <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg">
                     <h4 className="text-xs font-bold text-slate-500 uppercase mb-3">Governance Gaps</h4>
                     <ul className="space-y-2 text-sm text-slate-300">
                        {entry.breakdown_scores.ihra_definition === 2 && (
                            <li className="flex items-start text-slate-400"><i className="fa-regular fa-square mt-1 mr-2 text-xs"></i> No IHRA Definition</li>
                        )}
                        {entry.breakdown_scores.jewish_partnerships === 2 && (
                            <li className="flex items-start text-slate-400"><i className="fa-regular fa-square mt-1 mr-2 text-xs"></i> No Jewish Partnership</li>
                        )}
                         {entry.breakdown_scores.ideology_agnostic > 0 && (
                            <li className="flex items-start text-slate-400"><i className="fa-regular fa-square mt-1 mr-2 text-xs"></i> Agnostic/Vague Framing</li>
                        )}
                    </ul>
                </div>
             </div>
          </div>

          {/* Column 2: Radar Chart */}
          <div className="bg-slate-800/30 rounded-xl border border-slate-700/50 p-4 flex flex-col items-center justify-center min-h-[300px]">
            <h4 className="text-center text-slate-400 text-sm font-semibold mb-2">Bias Topology</h4>
            <div className="w-full h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
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
            <div className="text-center mt-4">
                 <span className="text-3xl font-bold text-white">{entry.total_score}</span>
                 <span className="text-sm text-slate-500">/20</span>
                 <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Cumulative Bias Score</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};