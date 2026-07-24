import { GlassPanel } from "../components/ui/Components";

export default function Volunteers() {
  return (
    <div className="p-margin-mobile md:p-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-container-max mx-auto relative z-0">
      <style>{`
        .active-panel {
            border: 1px solid rgba(0, 241, 254, 0.5) !important;
            box-shadow: inset 0 0 20px rgba(0, 241, 254, 0.05), 0 0 15px rgba(0, 241, 254, 0.1);
        }
        
        .text-glow {
            text-shadow: 0 0 10px rgba(116, 245, 255, 0.5);
        }
        
        .pulse-dot {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 241, 254, 0.7); }
            70% { opacity: 0.5; transform: scale(1.1); box-shadow: 0 0 0 5px rgba(0, 241, 254, 0); }
            100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 241, 254, 0); }
        }
        
        .progress-bar-glow {
            box-shadow: 0 0 10px rgba(0, 241, 254, 0.5);
        }

        .bg-grid {
            background-image: linear-gradient(to right, rgba(0, 241, 254, 0.03) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(0, 241, 254, 0.03) 1px, transparent 1px);
            background-size: 40px 40px;
            transform: perspective(500px) rotateX(60deg) scale(2);
            transform-origin: top center;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
            pointer-events: none;
        }
      `}</style>
      
      
      <div className="absolute inset-0 pointer-events-none z-[-1] overflow-hidden -mx-margin-desktop -mt-margin-desktop h-[150vh]">
        <div className="bg-grid opacity-30 h-full"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background"></div>
      </div>

      
      <div className="col-span-1 lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <GlassPanel delay={0.1} className="rounded-xl p-5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4">
            <div className="w-2 h-2 rounded-full bg-secondary pulse-dot"></div>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Verified Volunteers</span>
          </div>
          <div className="font-display-lg text-display-lg text-on-surface mb-2">18,492</div>
          <div className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
            12.4% vs last month
          </div>
        </GlassPanel>

        
        <GlassPanel delay={0.2} className="rounded-xl p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <div className="w-2 h-2 rounded-full bg-tertiary pulse-dot"></div>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-tertiary/10 border border-tertiary/30 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-[18px]">hub</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Community Projects</span>
          </div>
          <div className="font-display-lg text-display-lg text-on-surface mb-2">342</div>
          <div className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
            8 new this week
          </div>
        </GlassPanel>

        
        <GlassPanel delay={0.3} className="rounded-xl p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <div className="w-2 h-2 rounded-full bg-secondary-fixed pulse-dot"></div>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-secondary-fixed/10 border border-secondary-fixed/30 flex items-center justify-center text-secondary-fixed">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Volunteer Hours</span>
          </div>
          <div className="font-display-lg text-display-lg text-on-surface mb-2">
            1.2<span className="text-headline-md font-normal text-on-surface-variant">M</span>
          </div>
          <div className="font-label-sm text-label-sm text-secondary-fixed flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
            Across 45 regions
          </div>
        </GlassPanel>

    
        <GlassPanel delay={0.4} className="rounded-xl p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <div className="w-2 h-2 rounded-full bg-tertiary-fixed pulse-dot"></div>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-tertiary-fixed/10 border border-tertiary-fixed/30 flex items-center justify-center text-tertiary-fixed">
              <span className="material-symbols-outlined text-[18px]">data_usage</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Member Data Points</span>
          </div>
          <div className="font-display-lg text-display-lg text-on-surface mb-2">
            458<span className="text-headline-md font-normal text-on-surface-variant">k</span>
          </div>
          <div className="font-label-sm text-label-sm text-tertiary-fixed flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
            Visual confirmations
          </div>
        </GlassPanel>
      </div>

      
      <div className="col-span-1 lg:col-span-8 flex flex-col gap-6">
        
        <GlassPanel delay={0.5} className="active-panel rounded-xl p-6 relative overflow-hidden flex flex-col min-h-[400px]">
          <div className="absolute inset-0 z-0">
            <div className="bg-cover bg-center w-full h-full opacity-30 mix-blend-luminosity" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAC08loufh2Tiih5Chp063v_ueCrzq2CNy6rzWlb0swaxLHUk6Mb6PqGD_DT6-_s9XOxsq9v9NWSBfWf06pgS_lSqjvSU_RT8Y-BYBF3mxs6Ppco9vXbKiEgYUZXNZlzr2TpJXPhyereL6Fn2zBjuJyJd_ixpvfU3gSmId5GMWMm2QebD-VYjEvSseN7SFBIMZkcmx5yOQShcFc2nwNc1vlrWQgC9dWdw7Tb-VzaDbVXXDyT2-QFyK4')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          </div>
          <div className="relative z-10 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-auto">
              <div>
                <span className="px-3 py-1 bg-secondary/20 border border-secondary/50 rounded-full font-label-sm text-label-sm text-secondary uppercase tracking-widest backdrop-blur-md inline-block mb-3">Project Spotlight</span>
                <h3 className="font-headline-lg text-headline-lg font-bold text-white mb-2 text-glow">Operation Mariana Cleanup</h3>
                <p className="font-body-md text-on-surface-variant max-w-xl">Coordinated deep-sea debris removal focusing on ghost nets in Sector 7G. 154 Guardians currently deployed in local nodes.</p>
              </div>
              <button className="bg-gradient-to-r from-secondary-container to-secondary-fixed text-on-secondary-fixed font-label-md text-label-md px-6 py-2 rounded-lg font-bold hover:shadow-[0_0_15px_rgba(0,241,254,0.4)] transition-all">
                Join Operation
              </button>
            </div>
            
            <div className="mt-8 bg-surface-container/50 border border-outline-variant/30 p-5 rounded-lg backdrop-blur-md">
              <div className="flex justify-between items-end mb-2">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Debris Removal Progress</span>
                <span className="font-label-md text-label-md text-secondary">75% (15,000kg / 20,000kg)</span>
              </div>
              <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-secondary to-secondary-fixed w-[75%] progress-bar-glow rounded-full"></div>
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-surface border border-outline-variant"></div>
                    <div className="w-6 h-6 rounded-full bg-surface border border-outline-variant"></div>
                    <div className="w-6 h-6 rounded-full bg-surface border border-outline-variant"></div>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">+151 Active Guardians</span>
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">
                  Est. Completion: 48 Hours
                </div>
              </div>
            </div>
          </div>
        </GlassPanel>

        
        <GlassPanel delay={0.6} className="rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline-md text-headline-md font-semibold text-on-surface">Top Contributors</h3>
            <a className="font-label-sm text-label-sm text-secondary hover:text-secondary-fixed transition-colors flex items-center gap-1" href="#">View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="bg-surface-container/30 p-4 rounded-lg flex items-center gap-4 hover:bg-surface-container/50 transition-colors border-none border border-outline-variant/20">
              <div className="relative">
                <img className="w-12 h-12 rounded-full object-cover border border-secondary/50" alt="Elena" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAYh5rQqfBssFEcuU09H-jn1ZCPJ-gMM-cs4fqxIm9_XJReV6wksYkrHMeO_hoZvolx6KjHse_0xAsdgTTA-1MUbm0sdcbsHxd120HZ97EBLQ2wqHKJ8iHEOzfun9mxqzPn1Jo2nd1xQ3c072xlSLr_ktGFr3_3I5ZlO4CQDv9GH9OaSC5Oy0spyKsZ3V_THHtuRPjDkkHIg6KWnSdJcDRugC1nwaMjuGgmtRqAABPaNF1ieXHJlSj"/>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-background flex items-center justify-center">
                  <span className="material-symbols-outlined text-[10px] text-on-secondary">star</span>
                </div>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface font-semibold">Elena Rostova</p>
                <p className="font-label-sm text-label-sm text-secondary">Level 12 Sentinel</p>
              </div>
            </div>
            
            <div className="bg-surface-container/30 p-4 rounded-lg flex items-center gap-4 hover:bg-surface-container/50 transition-colors border border-outline-variant/20">
              <div className="relative">
                <img className="w-12 h-12 rounded-full object-cover border border-outline-variant/50" alt="Marcus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByvBy0iuJJuLiyu_o7iC-TtWZt_uzXbJInhFpcVtCF-k1E6Q2GPVMeWiopUTETq78xyrHr_kXiOzEH0Ho5f8ae94cIJUIRiZtryvf-Bm3_4Xk73ARveRsg0wjqY8JNWKf2ZAgY-As8X8DNGHUwbWEkbsdVmbf6rpIwZGtxBsNXblffyC5DyPhV6I9wF7UQJGFR6bqp0ys6uSCHNej1IV3P38fcCJ6LK4FcLQ-PUuTsbtxGnyP5kKEU"/>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface font-semibold">Marcus Chen</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Level 8 Navigator</p>
              </div>
            </div>
            
            <div className="bg-surface-container/30 p-4 rounded-lg flex items-center gap-4 hover:bg-surface-container/50 transition-colors border border-outline-variant/20">
              <div className="relative">
                <img className="w-12 h-12 rounded-full object-cover border border-outline-variant/50" alt="Aisha" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDApEejG2i7vqBd6cbxIU4CgLrHjVEbo-cEFN_faVZbzLqqF8dq5uBTvlXRPpCpsspdPhrZSxSxUPvA3y1j2n2TlQ5bVWdYmYnUVgHnsi-LBZI0XUCb_GA4Y7sRKbwLyCZS0EYRU_IBEfIZzy5PqbBN0krPWPxMsu9-5GotbwpBb5O7VEPDWv4Oyw-X1vo4DTvgX4YdyyuC-ByN9cuXv0Y0njOnHZKP3oedHcWBiLAJsTTP029Sx0Bu"/>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface font-semibold">Aisha Diallo</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Level 9 Analyst</p>
              </div>
            </div>
          </div>
        </GlassPanel>
      </div>

    
      <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
    
        <GlassPanel delay={0.7} className="rounded-xl p-6 border border-secondary/30 relative overflow-hidden group hover:border-secondary transition-colors cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-[24px]">assignment_add</span>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-secondary font-bold mb-1">Submit Data Log</h4>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Upload localized sonar pings or visual debris confirmations to the global matrix.</p>
            </div>
          </div>
        </GlassPanel>

    
        <GlassPanel delay={0.8} className="rounded-xl p-6 flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline-md text-headline-md font-semibold text-on-surface">Live Comm Feed</h3>
            <span className="material-symbols-outlined text-on-surface-variant">rss_feed</span>
          </div>
          <div className="flex flex-col gap-5 overflow-y-auto pr-2">
    
            <div className="flex gap-3 pb-5 border-b border-outline-variant/20">
              <div className="w-2 h-2 rounded-full bg-secondary mt-1.5 flex-shrink-0 pulse-dot"></div>
              <div>
                <p className="font-label-sm text-label-sm text-secondary mb-1">System • 2m ago</p>
                <p className="font-body-md text-body-md text-on-surface">Drone Alpha deployed to investigate acoustic anomaly in Sector 4.</p>
              </div>
            </div>
            
        
            <div className="flex gap-3 pb-5 border-b border-outline-variant/20">
              <div className="w-2 h-2 rounded-full bg-tertiary mt-1.5 flex-shrink-0"></div>
              <div className="w-full">
                <p className="font-label-sm text-label-sm text-tertiary mb-1">Community Node 7 • 15m ago</p>
                <p className="font-body-md text-body-md text-on-surface mb-2">Visual confirmation of newly formed coral cluster near artificial reef structure.</p>
                <img className="w-full h-24 object-cover rounded-lg border border-outline-variant/30" alt="Coral cluster" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe270LRV3GRTyv-eKqgFxaclb1VCv3iv_xzZsMFZuhA_X_-rnmxOhXpSamn5U49f_vrWuKxYGdGPxFr2Mch7WvXThQEsoiCq2Z4X5j35qd_eHpBxjqjzOga6C2P6RfU3socGQ3ZP041R5jqhNkdbDWkcncA08zw6hyxP1XNbWsvlv3iREbmE0yIOBRnAmutXXJOXg6ggSYYQH950vn5j5euz7RWfvbR-9RIsoifiXntRvAJbOaKl7b"/>
              </div>
            </div>
            
            <div className="flex gap-3 pb-5 border-b border-outline-variant/20">
              <div className="w-2 h-2 rounded-full bg-on-surface-variant mt-1.5 flex-shrink-0"></div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Data Matrix • 1h ago</p>
                <p className="font-body-md text-body-md text-on-surface">Weekly biodiversity report compiled. Access via Analytics pod.</p>
              </div>
            </div>
          </div>
        </GlassPanel>
      </div>
    </div>
  );
}
