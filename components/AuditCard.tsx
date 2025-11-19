import React from 'react';
import { AlertTriangle, AlertOctagon, ShieldCheck } from 'lucide-react';
import { AuditEntry } from '../types';

interface AuditCardProps {
  data: AuditEntry;
  onClick: () => void;
}

export const AuditCard: React.FC<AuditCardProps> = ({ data, onClick }) => {
  const isVeryHigh = data.risk_level === 'Very High';
  const isHigh = data.risk_level === 'High';

  return (
    <div 
      onClick={onClick}
      className="bg-slate-900 border border-slate-700 rounded-sm p-5 h-full flex flex-col hover:border-slate-500 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-2xl group"
    >
      {/* Header: Score & Badge */}
      <div className="flex justify-between items-start mb-4">
        <div className={`flex items-center gap-2 px-2 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider border ${
          isVeryHigh ? 'bg-danger/10 text-danger border-danger' :
          isHigh ? 'bg-orange/10 text-orange border-orange' :
          'bg-teal/10 text-teal border-teal'
        }`}>
          {isVeryHigh ? <AlertOctagon className="w-3 h-3" /> : 
           isHigh ? <AlertTriangle className="w-3 h-3" /> : 
           <ShieldCheck className="w-3 h-3" />}
          {data.risk_level} Risk
        </div>
        <div className="text-2xl font-bold text-white font-condensed">
          {data.total_score}<span className="text-slate-500 text-base font-mono">/20</span>
        </div>
      </div>

      {/* Title Section */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-1 leading-tight font-condensed group-hover:text-orange transition-colors uppercase">
          {data.organization}
        </h3>
        <p className="text-xs text-slate-400 line-clamp-2 font-mono mt-2 border-t border-slate-800 pt-2">
          {data.project_title}
        </p>
      </div>

      {/* Mini Stats (Preview) */}
      <div className="space-y-3 mb-6 bg-slate-950 p-3 border border-slate-800/50">
        {/* Metric 1: Far Right Focus */}
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider font-mono">
          <span className="text-slate-500">Far-Right Focus</span>
          <div className="flex items-center gap-2">
            <div className="w-16 h-1 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-teal" 
                style={{ width: `${(data.breakdown_scores.far_right_focus / 4) * 100}%` }}
              ></div>
            </div>
            <span className="text-teal font-bold w-3 text-right">{data.breakdown_scores.far_right_focus}</span>
          </div>
        </div>

        {/* Metric 2: Islamist Focus (The Gap) */}
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider font-mono">
          <span className="text-slate-500 font-bold text-danger">Ignores Islamist</span>
          <div className="flex items-center gap-2">
            {/* High score here means High Risk (Missing focus) */}
            <div className="w-16 h-1 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-danger" 
                style={{ width: `${(data.breakdown_scores.islamist_focus / 4) * 100}%` }}
              ></div>
            </div>
            <span className="text-danger font-bold w-3 text-right">{data.breakdown_scores.islamist_focus}</span>
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="mt-auto pt-4 border-t border-slate-800">
        <div className="text-orange text-xs font-mono font-semibold flex items-center justify-end group-hover:underline underline-offset-4 decoration-orange uppercase tracking-widest">
          View Forensic Detail &rarr;
        </div>
      </div>
    </div>
  );
};