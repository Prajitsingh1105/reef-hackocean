import { GlassPanel } from "../components/ui/Components";

export default function DataAnalytics() {
  return (
    <div className="p-margin-desktop w-full max-w-container-max mx-auto space-y-6">
      <style>{`
        .cyan-glow {
            box-shadow: 0 0 10px rgba(0, 241, 254, 0.2), inset 0 0 15px rgba(0, 241, 254, 0.05);
            border: 1px solid rgba(0, 241, 254, 0.8);
        }

        .chart-grid-bg {
            background-image: 
                linear-gradient(to right, rgba(79, 219, 200, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(79, 219, 200, 0.05) 1px, transparent 1px);
            background-size: 20px 20px;
        }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    
        <GlassPanel delay={0.1} className="rounded-xl p-5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/5 rounded-bl-full blur-xl group-hover:bg-secondary/10 transition-colors"></div>
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary">database</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">TOTAL DATA POINTS</p>
          <h3 className="font-display-lg text-display-lg text-on-surface">1.2<span className="text-2xl text-on-surface-variant">B</span></h3>
          <div className="flex items-center gap-1 mt-2 text-tertiary">
            <span className="material-symbols-outlined text-sm">arrow_upward</span>
            <span className="font-label-sm text-label-sm">+4.2% vs yesterday</span>
          </div>
        </GlassPanel>

        
        <GlassPanel delay={0.2} className="rounded-xl p-5 relative overflow-hidden group cyan-glow bg-secondary/5">
          <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 rounded-bl-full blur-xl group-hover:bg-secondary/20 transition-colors"></div>
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-secondary/50 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary">psychology</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(0,241,254,0.8)]"></span>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">AI MODEL CONFIDENCE</p>
          <h3 className="font-display-lg text-display-lg text-on-surface">94.8<span className="text-2xl text-on-surface-variant">%</span></h3>
          <div className="flex items-center gap-1 mt-2 text-tertiary">
            <span className="material-symbols-outlined text-sm">arrow_upward</span>
            <span className="font-label-sm text-label-sm">+0.5% vs yesterday</span>
          </div>
        </GlassPanel>

        
        <GlassPanel delay={0.3} className="rounded-xl p-5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-16 h-16 bg-tertiary/5 rounded-bl-full blur-xl group-hover:bg-tertiary/10 transition-colors"></div>
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary">sync</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">DATA SYNCHRONICITY</p>
          <h3 className="font-display-lg text-display-lg text-on-surface">99.9<span className="text-2xl text-on-surface-variant">%</span></h3>
          <div className="flex items-center gap-1 mt-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-sm">horizontal_rule</span>
            <span className="font-label-sm text-label-sm">Stable</span>
          </div>
        </GlassPanel>


        <GlassPanel delay={0.4} className="rounded-xl p-5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-16 h-16 bg-error/5 rounded-bl-full blur-xl group-hover:bg-error/10 transition-colors"></div>
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center justify-center">
              <span className="material-symbols-outlined text-error">troubleshoot</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">ANOMALIES PREDICTED</p>
          <h3 className="font-display-lg text-display-lg text-on-surface">12</h3>
          <div className="flex items-center gap-1 mt-2 text-error">
            <span className="material-symbols-outlined text-sm">arrow_upward</span>
            <span className="font-label-sm text-label-sm">+3 vs yesterday</span>
          </div>
        </GlassPanel>
      </div>

    
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 space-y-6">
          
          <GlassPanel delay={0.5} className="rounded-xl p-6 h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-widest mb-1">CORAL HEALTH VS TEMPERATURE</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant">7-Day Aggregated Model</p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded border border-outline-variant/50 text-label-sm font-label-sm text-on-surface hover:border-secondary transition-colors">Export</button>
                <button className="px-3 py-1 rounded border border-secondary text-secondary bg-secondary/10 text-label-sm font-label-sm hover:bg-secondary/20 transition-colors">Filter</button>
              </div>
            </div>
            
            <div className="flex-1 chart-grid-bg relative border-b border-l border-outline-variant/30 rounded-bl-sm">
              
              <div className="absolute -left-8 top-0 bottom-0 flex flex-col justify-between py-2 text-label-sm text-on-surface-variant font-label-sm text-right">
                <span>80</span>
                <span>60</span>
                <span>40</span>
                <span>20</span>
                <span>0</span>
              </div>
              
              
              <div className="absolute -bottom-6 left-0 right-0 flex justify-between px-2 text-label-sm text-on-surface-variant font-label-sm">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
              
              
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                
                <path d="M0,150 C50,120 100,160 150,110 C200,60 250,90 300,50 C350,10 400,40 500,20 L500,300 L0,300 Z" fill="url(#grad-temp)" opacity="0.1"></path>
                <path d="M0,150 C50,120 100,160 150,110 C200,60 250,90 300,50 C350,10 400,40 500,20" fill="none" stroke="#ffb4ab" strokeWidth="2"></path>
                
                
                <path d="M0,250 C50,260 100,220 150,200 C200,180 250,210 300,190 C350,170 400,120 500,100 L500,300 L0,300 Z" fill="url(#grad-coral)" opacity="0.1"></path>
                <path d="M0,250 C50,260 100,220 150,200 C200,180 250,210 300,190 C350,170 400,120 500,100" fill="none" stroke="#4fdbc8" strokeWidth="2" style={{filter: "drop-shadow(0 0 4px rgba(79, 219, 200, 0.5))"}}></path>
                
                
                <circle cx="300" cy="190" fill="#051424" r="4" stroke="#4fdbc8" strokeWidth="2"></circle>
                <circle cx="300" cy="50" fill="#051424" r="4" stroke="#ffb4ab" strokeWidth="2"></circle>
                
                <defs>
                  <linearGradient id="grad-temp" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#ffb4ab"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                  <linearGradient id="grad-coral" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#4fdbc8"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
              
             
              <div className="absolute left-[300px] top-[100px] -translate-x-1/2 bg-surface-container-high border border-outline-variant p-2 rounded shadow-lg pointer-events-none">
                <div className="text-label-sm font-label-sm text-on-surface mb-1">Thursday 14:00</div>
                <div className="flex items-center gap-2 text-label-sm font-label-sm">
                  <span className="w-2 h-2 rounded-full bg-error"></span>
                  <span className="text-on-surface-variant">Temp: 28.5°C</span>
                </div>
                <div className="flex items-center gap-2 text-label-sm font-label-sm">
                  <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                  <span className="text-on-surface-variant">Health: 62%</span>
                </div>
              </div>
              
              
              <div className="absolute left-[300px] top-0 bottom-0 w-px bg-outline-variant/50 pointer-events-none"></div>
            </div>
            
            
            <div className="flex justify-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-tertiary shadow-[0_0_5px_#4fdbc8]"></span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Coral Health Index</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-error"></span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Avg Temperature</span>
              </div>
            </div>
          </GlassPanel>

          
          <GlassPanel delay={0.6} className="rounded-xl p-6 h-[350px] flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-widest mb-1">BIODIVERSITY DISTRIBUTION</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant">By Pelagic Zone (Depth)</p>
              </div>
              <select className="bg-surface-container-high border-outline-variant/30 text-on-surface font-label-sm text-label-sm rounded focus:ring-secondary focus:border-secondary">
                <option>Sector Alpha</option>
                <option>Sector Beta</option>
                <option>Global View</option>
              </select>
            </div>
            
            <div className="flex-1 flex items-end justify-between px-4 pb-6 chart-grid-bg border-b border-l border-outline-variant/30 relative">
              
              <div className="absolute -left-8 top-0 bottom-6 flex flex-col justify-between py-2 text-label-sm text-on-surface-variant font-label-sm text-right">
                <span>1k</span>
                <span>500</span>
                <span>0</span>
              </div>
              
              
              <div className="w-16 h-[80%] flex flex-col justify-end group">
                <div className="w-full h-[20%] bg-error/80 border-t border-x border-error hover:bg-error transition-colors relative">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-surface p-1 text-xs rounded border border-outline-variant">Crit: 200</div>
                </div>
                <div className="w-full h-[30%] bg-primary/80 border border-primary hover:bg-primary transition-colors"></div>
                <div className="w-full h-[50%] bg-tertiary/80 border border-tertiary hover:bg-tertiary transition-colors"></div>
                <div className="text-center mt-2 font-label-sm text-label-sm text-on-surface-variant absolute -bottom-6 -ml-4">Epipelagic<br/><span className="text-[10px]">(0-200m)</span></div>
              </div>
              
              <div className="w-16 h-[60%] flex flex-col justify-end group">
                <div className="w-full h-[10%] bg-error/80 border-t border-x border-error hover:bg-error transition-colors"></div>
                <div className="w-full h-[40%] bg-primary/80 border border-primary hover:bg-primary transition-colors"></div>
                <div className="w-full h-[50%] bg-tertiary/80 border border-tertiary hover:bg-tertiary transition-colors"></div>
                <div className="text-center mt-2 font-label-sm text-label-sm text-on-surface-variant absolute -bottom-6 -ml-4">Mesopelagic<br/><span className="text-[10px]">(200-1k)</span></div>
              </div>
              
              <div className="w-16 h-[40%] flex flex-col justify-end group">
                <div className="w-full h-[5%] bg-error/80 border-t border-x border-error hover:bg-error transition-colors"></div>
                <div className="w-full h-[25%] bg-primary/80 border border-primary hover:bg-primary transition-colors"></div>
                <div className="w-full h-[70%] bg-tertiary/80 border border-tertiary hover:bg-tertiary transition-colors"></div>
                <div className="text-center mt-2 font-label-sm text-label-sm text-on-surface-variant absolute -bottom-6 -ml-4">Bathypelagic<br/><span className="text-[10px]">(1k-4k)</span></div>
              </div>
              
              <div className="w-16 h-[20%] flex flex-col justify-end group">
                <div className="w-full h-[0%] bg-error/80 border-t border-x border-error hover:bg-error transition-colors"></div>
                <div className="w-full h-[15%] bg-primary/80 border border-primary hover:bg-primary transition-colors"></div>
                <div className="w-full h-[85%] bg-tertiary/80 border border-tertiary hover:bg-tertiary transition-colors"></div>
                <div className="text-center mt-2 font-label-sm text-label-sm text-on-surface-variant absolute -bottom-6 -ml-4">Abyssopelagic<br/><span className="text-[10px]">(4k-6k)</span></div>
              </div>
            </div>
          </GlassPanel>
        </div>

        
        <div className="space-y-6">
          
          <GlassPanel delay={0.7} className="rounded-xl p-6 h-[400px] flex flex-col">
            <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-widest mb-1">PLASTIC CONCENTRATION</h3>
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-4">Depth vs Current Velocity</p>
            
            <div className="flex-1 chart-grid-bg relative border-b border-l border-outline-variant/30">
              
              <div className="absolute left-[20%] top-[10%] w-3 h-3 rounded-full bg-secondary/80 border border-secondary shadow-[0_0_8px_rgba(0,241,254,0.6)] animate-pulse" title="High density cluster"></div>
              <div className="absolute left-[15%] top-[15%] w-2 h-2 rounded-full bg-secondary/60"></div>
              <div className="absolute left-[25%] top-[8%] w-2 h-2 rounded-full bg-secondary/60"></div>
              
              <div className="absolute left-[45%] top-[40%] w-2 h-2 rounded-full bg-secondary/40"></div>
              <div className="absolute left-[50%] top-[45%] w-4 h-4 rounded-full bg-secondary/70 border border-secondary" title="Accumulation Zone"></div>
              <div className="absolute left-[55%] top-[35%] w-2 h-2 rounded-full bg-secondary/40"></div>
              
              <div className="absolute left-[80%] top-[80%] w-3 h-3 rounded-full bg-secondary/50 border border-secondary/50"></div>
              <div className="absolute left-[75%] top-[85%] w-2 h-2 rounded-full bg-secondary/30"></div>
              <div className="absolute left-[85%] top-[75%] w-2 h-2 rounded-full bg-secondary/30"></div>
              
              
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-label-sm font-label-sm text-on-surface-variant">Depth (m) →</div>
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 text-label-sm font-label-sm text-on-surface-variant">Velocity (m/s) →</div>
            </div>
          </GlassPanel>

          
          <GlassPanel delay={0.8} className="rounded-xl p-6 h-[350px] flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-widest">THREAT INTELLIGENCE</h3>
              <span className="material-symbols-outlined text-on-surface-variant text-sm">info</span>
            </div>
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-6">NLP extracted anomalies from comms</p>
            
            <div className="flex-1 relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/50 pointer-events-none z-10"></div>
              <div className="relative w-full h-full flex flex-wrap content-center justify-center gap-x-4 gap-y-2 text-center p-2">
                <span className="text-error font-bold text-2xl" style={{opacity: 1}}>Ghost Nets</span>
                <span className="text-secondary font-medium text-lg" style={{opacity: 0.8}}>Bleaching</span>
                <span className="text-tertiary text-sm" style={{opacity: 0.6}}>Trawling</span>
                <span className="text-on-surface font-semibold text-xl" style={{opacity: 0.9}}>Microplastics</span>
                <span className="text-primary text-xs" style={{opacity: 0.4}}>Temperature Spike</span>
                <span className="text-error font-medium text-lg" style={{opacity: 0.8}}>Oil Slick</span>
                <span className="text-secondary text-sm" style={{opacity: 0.7}}>Acoustic Smog</span>
                <span className="text-on-surface-variant text-xs" style={{opacity: 0.5}}>Algal Bloom</span>
                <span className="text-tertiary font-medium text-base" style={{opacity: 0.7}}>Acidification</span>
                <span className="text-primary text-xs" style={{opacity: 0.4}}>Hypoxia</span>
                <span className="text-secondary font-bold text-xl" style={{opacity: 0.85}}>Cargo Debris</span>
              </div>
            </div>
          </GlassPanel>
        </div>
      </div>
    </div>
  );
}
