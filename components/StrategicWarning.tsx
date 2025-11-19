import React from 'react';
import { AlertTriangle, Factory, Gavel, Map } from 'lucide-react';

export const StrategicWarning: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 border-t border-slate-800 relative overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-amber-900/10 blur-[100px] -z-10 pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4 text-amber-500 font-bold uppercase tracking-widest text-sm">
                  <AlertTriangle className="w-5 h-5" />
                  Strategic Warning
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  The Downstream Danger: <br />
                  <span className="text-amber-500">Weaponizing "Resilience"</span>
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  The consequences of this funding imbalance extend beyond wasted resources. By systematically funding research that hunts for "Far-Right" narratives while ignoring Islamist extremism, the government creates a dangerous <strong className="text-white">incentive structure</strong>.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  When research grants depend on finding "Right-Wing" threats, researchers are incentivized to manufacture evidence by recoding mainstream Jewish identity and Zionism as "extremist," establishing the pretext to criminalize support for Israel under the guise of "anti-polarization."
              </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
              
              <div className="bg-slate-800/50 border border-amber-500/20 p-6 rounded-xl hover:bg-slate-800 transition-colors group">
                  <div className="flex items-start gap-4">
                      <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 group-hover:border-amber-500/50 transition-colors">
                          <Factory className="w-6 h-6 text-slate-400 group-hover:text-amber-400" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">1. The "Demand" for Hate</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">
                              With millions allocated to find Right-Wing threats despite waning kinetic intelligence, researchers are pressured to broaden definitions. This creates a feedback loop where mainstream political dissent—or Jewish support for Israel—is recoded as "far-right adjacency" to generate the necessary data points to justify funding.
                          </p>
                      </div>
                  </div>
              </div>

              <div className="bg-slate-800/50 border border-amber-500/20 p-6 rounded-xl hover:bg-slate-800 transition-colors group">
                  <div className="flex items-start gap-4">
                      <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 group-hover:border-amber-500/50 transition-colors">
                          <Gavel className="w-6 h-6 text-slate-400 group-hover:text-amber-400" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">2. Criminalizing Identity</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">
                              Under "social cohesion" mandates, the goal shifts from stopping violence to stopping <em>friction</em>. Jewish advocacy is increasingly framed as "divisive" or a "provocation." This establishes a bureaucratic precedent where Zionism is treated not as a protected identity, but as a disruption to public order that must be suppressed.
                          </p>
                      </div>
                  </div>
              </div>

              <div className="bg-slate-800/50 border border-amber-500/20 p-6 rounded-xl hover:bg-slate-800 transition-colors group">
                  <div className="flex items-start gap-4">
                      <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 group-hover:border-amber-500/50 transition-colors">
                          <Map className="w-6 h-6 text-slate-400 group-hover:text-amber-400" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">3. Importing the UK Failure</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">
                              In the UK’s "Prevent" strategy, this model has already failed. Jewish students wearing Zionist badges were flagged for "radicalization" while "Free Palestine" badges were protected speech. Canada’s CRF is currently funding the machinery to replicate this precise failure.
                          </p>
                      </div>
                  </div>
              </div>

          </div>
      </div>
    </section>
  );
};