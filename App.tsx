import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ZeroStat } from './components/ZeroStat';
import { MisalignmentMatrix } from './components/MisalignmentMatrix';
import { BiasAudit } from './components/BiasAudit';
import { MechanismFailure } from './components/MechanismFailure';
import { StrategicWarning } from './components/StrategicWarning';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-danger selection:text-white bg-slate-950">
      <Navbar />
      
      <main>
        <Hero />
        
        <ZeroStat />
        
        <MisalignmentMatrix />
        
        <BiasAudit />

        <MechanismFailure />

        <StrategicWarning />

        <section className="max-w-7xl mx-auto px-4 py-24 border-t border-slate-800 scroll-mt-24" id="methodology">
            
            <div className="mb-12">
                <h2 className="text-3xl md:text-5xl font-condensed font-bold text-white mb-6 uppercase">Methodology: The Bias Scoring Matrix</h2>
                <p className="text-slate-400 max-w-3xl text-lg">
                    To move beyond subjective criticism, we applied a standardized <strong>20-point forensic rubric</strong> to every recipient. 
                    This operates on the principle of "Negative Space Analysis"—measuring national security gaps. 
                    <span className="text-danger font-bold">Points are assigned as penalties.</span> A higher score indicates a higher risk of systemic bias.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div className="lg:col-span-2 bg-slate-900 border border-slate-700 shadow-xl">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-950 border-b border-slate-700">
                                <th className="p-4 text-slate-500 font-mono text-xs uppercase tracking-widest">Scoring Criteria</th>
                                <th className="p-4 text-slate-500 font-mono text-xs uppercase tracking-widest hidden sm:table-cell">Rationale</th>
                                <th className="p-4 text-danger font-mono text-xs uppercase tracking-widest text-right">Max Penalty</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            <tr className="hover:bg-slate-800 transition">
                                <td className="p-4 text-white font-condensed text-lg font-bold uppercase">1. Exclusive Far-Right Focus</td>
                                <td className="p-4 text-slate-400 text-sm hidden sm:table-cell">Does the project strictly target Right-Wing Extremism while ignoring other threats?</td>
                                <td className="p-4 text-danger font-bold text-right font-mono">+4</td>
                            </tr>
                            <tr className="hover:bg-slate-800 transition">
                                <td className="p-4 text-white font-condensed text-lg font-bold uppercase">2. Ignored Islamist Threat</td>
                                <td className="p-4 text-slate-400 text-sm hidden sm:table-cell">Is there a total absence of terms like "Jihadist," "Daesh," or "Islamist"?</td>
                                <td className="p-4 text-danger font-bold text-right font-mono">+4</td>
                            </tr>
                            <tr className="hover:bg-slate-800 transition">
                                <td className="p-4 text-white font-condensed text-lg font-bold uppercase">3. Ignored Antisemitism</td>
                                <td className="p-4 text-slate-400 text-sm hidden sm:table-cell">Does the mandate fail to explicitly name Antisemitism as a primary focus?</td>
                                <td className="p-4 text-danger font-bold text-right font-mono">+4</td>
                            </tr>
                            <tr className="hover:bg-slate-800 transition">
                                <td className="p-4 text-white font-condensed text-lg font-bold uppercase">4. No IHRA Definition</td>
                                <td className="p-4 text-slate-400 text-sm hidden sm:table-cell">Failure to operationalize the International Holocaust Remembrance Alliance definition.</td>
                                <td className="p-4 text-danger font-bold text-right font-mono">+2</td>
                            </tr>
                            <tr className="hover:bg-slate-800 transition">
                                <td className="p-4 text-white font-condensed text-lg font-bold uppercase">5. Vague "Agnostic" Framing</td>
                                <td className="p-4 text-slate-400 text-sm hidden sm:table-cell">Reliance on generic terms like "polarization" or "social cohesion" that mask ideology.</td>
                                <td className="p-4 text-danger font-bold text-right font-mono">+2</td>
                            </tr>
                            <tr className="hover:bg-slate-800 transition">
                                <td className="p-4 text-white font-condensed text-lg font-bold uppercase">6. No Jewish Partnerships</td>
                                <td className="p-4 text-slate-400 text-sm hidden sm:table-cell">Lack of formal partnership with mainstream Jewish security bodies (e.g., CIJA).</td>
                                <td className="p-4 text-danger font-bold text-right font-mono">+2</td>
                            </tr>
                            <tr className="hover:bg-slate-800 transition">
                                <td className="p-4 text-white font-condensed text-lg font-bold uppercase">7. Leadership Red Flags</td>
                                <td className="p-4 text-slate-400 text-sm hidden sm:table-cell">Key personnel with a public record of minimizing October 7 or anti-Israel bias.</td>
                                <td className="p-4 text-danger font-bold text-right font-mono">+2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="lg:col-span-1 flex flex-col gap-4">
                    <div className="bg-slate-900 p-8 border border-slate-700 h-full">
                        <h3 className="text-white font-condensed font-bold text-xl uppercase mb-6 border-b border-slate-800 pb-2">Risk Stratification</h3>
                        <p className="text-sm text-slate-400 mb-8 font-mono">Total scores determine the "Risk Level" displayed on the Audit cards.</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start p-4 bg-slate-950 border border-danger rounded-sm">
                                <div className="h-10 w-10 bg-danger flex items-center justify-center text-white font-bold shrink-0 font-mono">
                                    15+
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-danger font-bold uppercase text-sm font-condensed text-lg">Very High Risk</h4>
                                    <p className="text-xs text-slate-400 mt-1">Complete structural blindness to Islamist/Antisemitic threats.</p>
                                </div>
                            </div>

                            <div className="flex items-start p-4 bg-slate-950 border border-orange rounded-sm">
                                <div className="h-10 w-10 bg-orange flex items-center justify-center text-slate-900 font-bold shrink-0 font-mono">
                                    10-14
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-orange font-bold uppercase text-sm font-condensed text-lg">High Risk</h4>
                                    <p className="text-xs text-slate-400 mt-1">Generic framing that obscures specific ideological dangers.</p>
                                </div>
                            </div>

                            <div className="flex items-start p-4 bg-slate-950 border border-teal rounded-sm">
                                <div className="h-10 w-10 bg-teal flex items-center justify-center text-white font-bold shrink-0 font-mono">
                                    &lt;9
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-teal font-bold uppercase text-sm font-condensed text-lg">Medium/Low Risk</h4>
                                    <p className="text-xs text-slate-400 mt-1">Some alignment with the intelligence threat picture.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;