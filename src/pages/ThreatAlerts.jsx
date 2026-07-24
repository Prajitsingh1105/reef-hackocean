import { GlassPanel } from "../components/ui/Components";

export default function ThreatAlerts() {
  return (
    <div className="p-margin-mobile md:p-margin-desktop w-full max-w-container-max mx-auto flex flex-col gap-6">
      <style>{`
        .glow-active {
            border: 1px solid #00f1fe;
            box-shadow: inset 0 0 10px rgba(0, 241, 254, 0.2), 0 0 15px rgba(0, 241, 254, 0.1);
        }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <GlassPanel delay={0.1} className="p-5 rounded-lg flex flex-col justify-between relative overflow-hidden group glow-active border-error/50">
          <div className="absolute top-0 right-0 w-24 h-24 bg-error/10 rounded-full blur-xl -mr-8 -mt-8"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-error">warning</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Critical Threats</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
          </div>
          <div className="relative z-10">
            <span className="font-display-lg text-display-lg text-error">12</span>
            <div className="flex items-center gap-1 mt-2 text-error text-xs font-label-md">
              <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
              <span>3 since last shift</span>
            </div>
          </div>
        </GlassPanel>

        <GlassPanel delay={0.2} className="p-5 rounded-lg flex flex-col justify-between relative overflow-hidden">
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">pending_actions</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Pending Assessment</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-secondary/50"></span>
          </div>
          <div className="relative z-10">
            <span className="font-display-lg text-display-lg text-on-surface">24</span>
            <div className="flex items-center gap-1 mt-2 text-secondary text-xs font-label-md">
              <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
              <span>12% decrease</span>
            </div>
          </div>
        </GlassPanel>

        <GlassPanel delay={0.3} className="p-5 rounded-lg flex flex-col justify-between relative overflow-hidden">
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">timer</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Avg Response Time</span>
            </div>
          </div>
          <div className="relative z-10">
            <span className="font-display-lg text-display-lg text-on-surface">14<span className="text-xl text-on-surface-variant ml-1">m</span></span>
          </div>
        </GlassPanel>

        <GlassPanel delay={0.4} className="p-5 rounded-lg flex flex-col justify-between relative overflow-hidden">
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">check_circle</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Threats Resolved</span>
            </div>
          </div>
          <div className="relative z-10">
            <span className="font-display-lg text-display-lg text-on-surface">1,402</span>
            <div className="flex items-center gap-1 mt-2 text-tertiary text-xs font-label-md">
              <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
              <span>This week</span>
            </div>
          </div>
        </GlassPanel>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[500px]">
        <div className="lg:col-span-2">
          <GlassPanel delay={0.5} className="rounded-lg flex flex-col h-full overflow-hidden p-0">
            <div className="p-4 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-high/50">
              <h3 className="font-label-md text-label-md text-secondary">PRIORITY ALERT INBOX</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-xs font-label-md border border-outline-variant/30 rounded text-on-surface hover:border-secondary transition-colors">Filter</button>
                <button className="px-3 py-1 text-xs font-label-md border border-outline-variant/30 rounded text-on-surface hover:border-secondary transition-colors">Sort</button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-2">

              <div className="grid grid-cols-12 gap-4 px-4 py-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider border-b border-outline-variant/10">
                <div className="col-span-2">ID / Time</div>
                <div className="col-span-3">Type</div>
                <div className="col-span-2">Severity</div>
                <div className="col-span-3">Location (Depth)</div>
                <div className="col-span-2 text-right">Action</div>
              </div>
              
              <div className="grid grid-cols-12 gap-4 px-4 py-3 items-center rounded bg-error/10 border border-error/30 cursor-pointer hover:bg-error/20 transition-colors">
                <div className="col-span-2 font-label-md text-xs">
                  <div className="text-on-surface">TRT-892</div>
                  <div className="text-on-surface-variant opacity-70">12:30 UTC</div>
                </div>
                <div className="col-span-3 font-body-sm text-sm text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-error text-[18px]">phishing</span>
                  Illegal Trawling
                </div>
                <div className="col-span-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-label-sm bg-error/20 text-error border border-error/30">CRITICAL</span>
                </div>
                <div className="col-span-3 font-label-md text-xs text-on-surface-variant">
                  Sec 4G (-120m)
                </div>
                <div className="col-span-2 text-right">
                  <button className="text-secondary hover:text-secondary-fixed text-xs font-label-md uppercase">Dispatch</button>
                </div>
              </div>
              
              <div className="grid grid-cols-12 gap-4 px-4 py-3 items-center rounded hover:bg-surface-container-highest/30 transition-colors border border-transparent hover:border-outline-variant/20 cursor-pointer">
                <div className="col-span-2 font-label-md text-xs">
                  <div className="text-on-surface">TRT-891</div>
                  <div className="text-on-surface-variant opacity-70">11:15 UTC</div>
                </div>
                <div className="col-span-3 font-body-sm text-sm text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#ffca28]">recycling</span>
                  Ghost Net Cluster
                </div>
                <div className="col-span-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-label-sm bg-[#ffca28]/10 text-[#ffca28] border border-[#ffca28]/30">HIGH</span>
                </div>
                <div className="col-span-3 font-label-md text-xs text-on-surface-variant">
                  Sec 2B (-450m)
                </div>
                <div className="col-span-2 text-right">
                  <button className="text-secondary hover:text-secondary-fixed text-xs font-label-md uppercase">Review</button>
                </div>
              </div>
            </div>
          </GlassPanel>
        </div>

        <div className="lg:col-span-1">
          <GlassPanel delay={0.6} className="rounded-lg flex flex-col h-full overflow-hidden relative p-0">
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
              <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdJEaJv_2YSYdhO-BEMPx1IqXG4qGqMthfQvTRNXh0B_MAeWu-0y8qgIme9uowQhfgDfEIp3RqPW3t6gi_-Y1eLlM5bV_y-F8d7rjailgWyINZAuG0W-aNWuHx2tpkqnrim2J_UK5SkpuFU-7r9RdNEvO09bg7lkFOOjFR6XDaxb2H5i2kstO_DQ4qEINzcxPFR39kux1nBZbQ7G6sgu5eO0cFmkdd9CS04lijVFI2t3CU8pOgg2mq')"}}></div>
            </div>
            
            <div className="p-4 border-b border-error/30 flex justify-between items-center bg-error/10 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
                <h3 className="font-label-md text-label-md text-error font-bold">THREAT PROFILE: TRT-892</h3>
              </div>
              <span className="material-symbols-outlined text-error cursor-pointer">close</span>
            </div>
            
            <div className="p-5 flex-1 overflow-y-auto relative z-10 space-y-6">
              
              <div className="aspect-video bg-background rounded border border-outline-variant/30 relative overflow-hidden flex items-center justify-center">
                <img className="object-cover w-full h-full opacity-60 mix-blend-screen" alt="Threat visual" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDteDLBv1_4UXawC2bc1HlIwa6BIG1r4UZuisv_VNseVvA-oNH8d1UgZIy7eHpTnhw_p3zBuyLbzANh52fXrk9TX0mYcCmzWLdLFuYe9gfpWSjVgrk5mGAhesjlCvRF_mS9o_GA45XNCGMkePINASyU_ICfbQRdPDWiada5zygr1CsM_wJQsD-VmWi5N7miu3d3an8ng9PJqGOVA_IgA1hEeVtaAnUy-JIvpUH3NntBTvr2cu1Wmmt4"/>
                <div className="absolute inset-0 border border-error/50 m-4 rounded pointer-events-none flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-error border-dashed animate-[spin_4s_linear_infinite]"></div>
                </div>
                <div className="absolute bottom-2 left-2 text-[10px] font-label-sm text-secondary bg-background/80 px-1 rounded">CAM-FEED-04</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-on-surface-variant uppercase font-label-sm tracking-wider">Classification</p>
                  <p className="text-sm text-on-surface font-medium mt-1">Illegal Trawling Vessel</p>
                </div>
                <div>
                  <p className="text-[10px] text-on-surface-variant uppercase font-label-sm tracking-wider">Depth / Coordinates</p>
                  <p className="text-sm text-on-surface font-label-md mt-1">-120m / 45.2N, 12.8W</p>
                </div>
                <div>
                  <p className="text-[10px] text-on-surface-variant uppercase font-label-sm tracking-wider">Confidence Score</p>
                  <p className="text-sm text-secondary font-label-md mt-1">94.2%</p>
                </div>
                <div>
                  <p className="text-[10px] text-on-surface-variant uppercase font-label-sm tracking-wider">Estimated Impact</p>
                  <p className="text-sm text-error font-medium mt-1">Severe Reef Damage</p>
                </div>
              </div>
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent"></div>
              
              <div>
                <h4 className="font-label-sm text-xs text-on-surface-variant uppercase tracking-widest mb-3">Response Protocol</h4>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="w-4 h-4 rounded border border-error/50 flex-shrink-0 mt-0.5 group-hover:border-error transition-colors flex items-center justify-center">
                      <span className="w-2 h-2 bg-error rounded-sm opacity-0"></span>
                    </div>
                    <div className="text-sm">
                      <span className="text-on-surface group-hover:text-white transition-colors">Dispatch Drone Alpha for close recon</span>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="w-4 h-4 rounded border border-outline-variant/50 flex-shrink-0 mt-0.5 group-hover:border-secondary transition-colors"></div>
                    <div className="text-sm">
                      <span className="text-on-surface-variant group-hover:text-on-surface transition-colors">Log acoustic signature to database</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-surface-container-high/80 border-t border-outline-variant/20 relative z-10">
              <button className="w-full bg-gradient-to-r from-error/20 to-error/10 hover:from-error/30 hover:to-error/20 border border-error/50 text-error font-label-md py-2 px-4 rounded transition-all shadow-[0_0_15px_rgba(255,180,171,0.1)] hover:shadow-[0_0_20px_rgba(255,180,171,0.2)] flex items-center justify-center gap-2 uppercase tracking-widest text-xs">
                <span className="material-symbols-outlined text-[16px]">send</span>
                Initiate Intercept
              </button>
            </div>
          </GlassPanel>
        </div>
      </div>
    </div>
  );
}
