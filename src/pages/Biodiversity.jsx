import { GlassPanel } from "../components/ui/Components";

export default function Biodiversity() {
  return (
    <div className="p-margin-desktop w-full max-w-container-max mx-auto flex flex-col gap-6">
      <style>{`
        .glass-pod {
            background: rgba(10, 14, 20, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid #45474b;
            border-top: 1px solid #ddfcff;
            border-image: linear-gradient(to bottom, #ddfcff, transparent 20%) 1;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
            position: relative;
        }
        .glass-pod::before {
             content: '';
             position: absolute;
             top: 0;
             left: 0;
             right: 0;
             height: 1px;
             background: linear-gradient(90deg, transparent, #ddfcff, transparent);
             opacity: 0.5;
        }
        .active-glow {
            border: 1px solid #ddfcff;
            box-shadow: inset 0 0 20px rgba(0, 241, 254, 0.1), 0 0 15px rgba(0, 241, 254, 0.2);
        }
        .perspective-grid {
            transform: perspective(500px) rotateX(60deg);
            transform-origin: top;
        }
        .btn-primary {
            background: linear-gradient(135deg, #00f1fe, #4fdbc8);
            color: #2d3137;
            border: 1px solid #ddfcff;
            text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }
        .btn-ghost {
            background: transparent;
            color: #ddfcff;
            border: 1px solid rgba(0, 241, 254, 0.5);
            transition: all 0.3s ease;
        }
        .btn-ghost:hover {
            border-color: #ddfcff;
            box-shadow: 0 0 10px rgba(0, 241, 254, 0.3);
        }
        .blinking-dot {
            animation: blink 2s infinite;
        }
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }
      `}</style>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <GlassPanel delay={0.1} className="glass-pod rounded-xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
              <span className="material-symbols-outlined text-secondary">diversity_2</span> Total Monitored
            </div>
            <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(0,241,254,0.8)]"></div>
          </div>
          <div className="font-display-lg text-display-lg text-on-surface mb-2">1,248</div>
          <div className="flex items-center gap-2 font-label-sm text-label-sm text-tertiary">
            <span className="material-symbols-outlined text-[16px]">arrow_upward</span> 12 vs yesterday
          </div>
        </GlassPanel>

        
        <GlassPanel delay={0.2} className="glass-pod rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-tertiary"></div>
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
              <span className="material-symbols-outlined text-tertiary">bubble_chart</span> Species Richness
            </div>
            <div className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_rgba(79,219,200,0.8)]"></div>
          </div>
          <div className="font-display-lg text-display-lg text-on-surface mb-2">84.2%</div>
          <div className="flex items-center gap-2 font-label-sm text-label-sm text-tertiary">
            <span className="material-symbols-outlined text-[16px]">arrow_upward</span> 2.1% vs yesterday
          </div>
        </GlassPanel>

        
        <GlassPanel delay={0.3} className="glass-pod rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-error"></div>
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
              <span className="material-symbols-outlined text-error">pest_control</span> Invasive Detections
            </div>
            <div className="w-2 h-2 rounded-full bg-error shadow-[0_0_8px_rgba(255,180,171,0.8)]"></div>
          </div>
          <div className="font-display-lg text-display-lg text-on-surface mb-2">3</div>
          <div className="flex items-center gap-2 font-label-sm text-label-sm text-error">
            <span className="material-symbols-outlined text-[16px]">arrow_upward</span> 1 vs yesterday
          </div>
        </GlassPanel>

        
        <GlassPanel delay={0.4} className="glass-pod rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-secondary-fixed"></div>
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
              <span className="material-symbols-outlined text-secondary-fixed">healing</span> Critical Habitat
            </div>
            <div className="w-2 h-2 rounded-full bg-secondary-fixed shadow-[0_0_8px_rgba(116,245,255,0.8)] blinking-dot"></div>
          </div>
          <div className="font-display-lg text-display-lg text-on-surface mb-2">92.5%</div>
          <div className="flex items-center gap-2 font-label-sm text-label-sm text-tertiary">
            <span className="material-symbols-outlined text-[16px]">arrow_upward</span> 0.5% vs yesterday
          </div>
        </GlassPanel>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        <div className="md:col-span-8 flex flex-col gap-6">
          
          <GlassPanel delay={0.5} className="glass-pod rounded-xl flex flex-col relative overflow-hidden p-6 min-h-[500px] active-glow">
            <div className="flex justify-between items-center mb-4 z-10 relative">
              <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-sm">map</span> Coral Reef Vitality Map
              </div>
              <div className="flex gap-2">
                <button className="btn-primary px-4 py-2 rounded-md font-label-md text-label-md text-sm">Vitality Heatmap</button>
                <button className="btn-ghost px-4 py-2 rounded-md font-label-md text-label-md text-sm">Species Tracker</button>
              </div>
            </div>
            
            
            <div className="absolute inset-0 top-16 bottom-16 bg-surface-container-lowest perspective-grid border-y border-outline-variant/30 overflow-hidden">
              <div className="w-full h-full bg-cover bg-center opacity-60" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZFeZB-04O2LcR860MyUK2Ws6vP3AaABcVpVXGBcvoe2hk6CTay1vMT8e2TZyb5N7gLzm63Pn48PTMb2QJ0sRNwUk0DmBbHZNOUx8fwlFz8ZNDM65Qzzn5hc0nK1x1g-_1Ffcnl9f0m9a389hwr8rlQHa-8ha9sAbACuFsJr6h8UoxDWRgAz2jZqUIMWlOo5vX64_egLC9YOc-_N1hBhND77vIOSidOWoQU4vc3KeJTOtlnB4Q2Rs9')"}}></div>
              
              
              <div className="absolute top-[40%] left-[30%]">
                <div className="relative w-4 h-4 rounded-full bg-secondary shadow-[0_0_15px_rgba(0,241,254,1)] blinking-dot"></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-surface-container-high/90 backdrop-blur-sm border border-secondary/50 px-3 py-1.5 rounded text-xs font-label-sm text-on-surface z-20">
                  Staghorn Cluster<br/><span className="text-tertiary">Healthy</span>
                </div>
              </div>
              <div className="absolute top-[60%] left-[65%]">
                <div className="relative w-4 h-4 rounded-full bg-error shadow-[0_0_15px_rgba(255,180,171,1)]"></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-surface-container-high/90 backdrop-blur-sm border border-error/50 px-3 py-1.5 rounded text-xs font-label-sm text-on-surface z-20">
                  Bleaching Alert<br/><span className="text-error">Critical</span>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-10 bg-surface-container-high/50 p-3 rounded-lg backdrop-blur-md border border-outline-variant/30 mt-auto">
              <div className="flex items-center gap-4 text-xs font-label-sm text-on-surface-variant">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">touch_app</span> Drag to Rotate</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">mouse</span> Scroll to Zoom</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-label-sm">Vitality:</span>
                <div className="w-32 h-2 rounded-full bg-gradient-to-r from-error via-tertiary to-secondary"></div>
              </div>
            </div>
          </GlassPanel>

          
          <GlassPanel delay={0.6} className="glass-pod rounded-xl p-6">
            <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-sm">list_alt</span> Species Catalog (Recent Detections)
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-label-sm text-label-sm">
                <thead>
                  <tr className="text-on-surface-variant border-b border-outline-variant/30">
                    <th className="pb-3 font-medium">Species ID</th>
                    <th className="pb-3 font-medium">Type</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium">Zone</th>
                  </tr>
                </thead>
                <tbody className="text-on-surface">
                  <tr className="border-b border-outline-variant/10 hover:bg-surface-container-high/50 transition-colors cursor-pointer group">
                    <td className="py-3 flex items-center gap-2 text-secondary group-hover:text-secondary-fixed">#CR-492</td>
                    <td className="py-3">Elkhorn Coral</td>
                    <td className="py-3"><span className="bg-error/20 text-error px-2 py-1 rounded-sm border border-error/30 text-[10px] uppercase">Endangered</span></td>
                    <td className="py-3 text-on-surface-variant">Sector Alpha-9</td>
                  </tr>
                  <tr className="border-b border-outline-variant/10 hover:bg-surface-container-high/50 transition-colors cursor-pointer">
                    <td className="py-3 text-secondary">#FI-105</td>
                    <td className="py-3">Manta Ray</td>
                    <td className="py-3"><span className="bg-tertiary/20 text-tertiary px-2 py-1 rounded-sm border border-tertiary/30 text-[10px] uppercase">Healthy</span></td>
                    <td className="py-3 text-on-surface-variant">Pelagic Zone B</td>
                  </tr>
                  <tr className="border-b border-outline-variant/10 hover:bg-surface-container-high/50 transition-colors cursor-pointer">
                    <td className="py-3 text-secondary">#MA-088</td>
                    <td className="py-3">Green Sea Turtle</td>
                    <td className="py-3"><span className="bg-tertiary/20 text-tertiary px-2 py-1 rounded-sm border border-tertiary/30 text-[10px] uppercase">Healthy</span></td>
                    <td className="py-3 text-on-surface-variant">Reef Edge 4</td>
                  </tr>
                  <tr className="hover:bg-surface-container-high/50 transition-colors cursor-pointer">
                    <td className="py-3 text-secondary">#IV-002</td>
                    <td className="py-3">Crown-of-Thorns</td>
                    <td className="py-3"><span className="bg-error/20 text-error px-2 py-1 rounded-sm border border-error/30 text-[10px] uppercase">Invasive Alert</span></td>
                    <td className="py-3 text-on-surface-variant">Sector Gamma-2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GlassPanel>
        </div>

        
        <div className="md:col-span-4 flex flex-col gap-6">
          
          <GlassPanel delay={0.7} className="glass-pod rounded-xl p-6 active-glow flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="font-label-md text-label-md text-secondary uppercase tracking-wider flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">science</span> Species Profile
              </div>
              <div className="bg-error/20 text-error px-2 py-1 rounded border border-error/50 font-label-sm text-[10px] uppercase blinking-dot">Endangered</div>
            </div>
            
            <div className="mb-6 relative h-48 rounded-lg overflow-hidden border border-outline-variant/30">
              <img className="w-full h-full object-cover opacity-80 mix-blend-screen" alt="Elkhorn Coral" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzRlMMiNSb5M301D7vzSWwbX-joD3rJRd0FPTqfV2fsiPt71WJqXMYDnz4o3lTNGa9PO6SBs_VUv4G36YrEU734vZhn1QRIrqvz7GsbOE4CspRxQsr7QQ2tWiK-8iuQyv8uZpaUsz13eT87ZiF6bMe7ZiDomiQ3NhkyWH0J-qeOpl9fVGnzE7XgmP-39-PJc1R4u9L0LpPpVE0RN_t9fXzinuOERHHWvNalQ-NIqBE_VTkdv2jOXx5"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Elkhorn Coral</h3>
                <div className="font-label-sm text-label-sm text-secondary italic">Acropora palmata</div>
              </div>
            </div>
            
            <div className="space-y-4 flex-1">
              <div>
                <div className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase">Population Status</div>
                <div className="flex items-end gap-2">
                  <span className="font-display-lg text-[32px] font-bold text-on-surface leading-none">1,842</span>
                  <span className="font-label-sm text-error mb-1">colony units</span>
                </div>
                <div className="w-full h-1 bg-surface-container-highest mt-2 rounded-full overflow-hidden">
                  <div className="h-full bg-error w-[15%] shadow-[0_0_8px_rgba(255,180,171,0.8)]"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-surface-container-high rounded border border-outline-variant/20">
                  <div className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase text-[10px]">Optimal Depth</div>
                  <div className="font-body-md text-on-surface">1 - 5m</div>
                </div>
                <div className="p-3 bg-surface-container-high rounded border border-outline-variant/20">
                  <div className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase text-[10px]">Current Threat</div>
                  <div className="font-body-md text-error text-sm">Bleaching / Disease</div>
                </div>
              </div>
              
              <div>
                <div className="font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">Habitat Range Map</div>
                <div className="h-24 rounded border border-outline-variant/30 bg-surface-container-lowest relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVnasD4itp0ryDqSxXuy7VHvtRry7M8-SckZudASwUNbwiet_j4ZY6e9BcZlG0_Suk0XavhJrfne8-wuCUaQwVXDX-DX1dfDaL73tS5TTg4gE1yIDpXLvtSYF5qbbVFK8Tadwzbbjfkj9WxfXKm-MMJagyAi2xaBQndGFzWxQi98aq5IPQgnquf7ew1nmDDBzttsZR003JHujRMI8Ml2aOSlBrMhBOQ7NlA9cSB-3MCTsESsDvb_gx')"}}></div>
                  <div class="w-12 h-6 border border-secondary rounded-full absolute bg-secondary/10 flex items-center justify-center shadow-[0_0_10px_rgba(0,241,254,0.3)]">
                    <div class="w-2 h-2 bg-secondary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="w-full btn-ghost py-3 rounded-lg mt-6 font-label-md text-label-md flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">add_task</span> Initiate Conservation Protocol
            </button>
          </GlassPanel>

          
          <GlassPanel delay={0.8} className="glass-pod rounded-xl p-6">
            <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary text-sm">donut_large</span> Ecosystem Balance
            </div>
            <div className="flex items-center gap-6">
              
              <div className="relative w-24 h-24 rounded-full border-[8px] border-surface-container-high">
                
                <div className="absolute inset-[-8px] rounded-full border-[8px] border-transparent border-t-tertiary border-r-tertiary border-b-tertiary transform rotate-45"></div>
                <div className="absolute inset-[-8px] rounded-full border-[8px] border-transparent border-l-secondary transform rotate-45"></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="font-headline-md text-on-surface font-bold text-lg">84%</span>
                </div>
              </div>
              <div className="flex-1 space-y-3 font-label-sm text-label-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2"><div className="w-2 h-2 bg-tertiary rounded-full"></div> <span className="text-on-surface">Healthy</span></div>
                  <span className="text-tertiary">84.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2"><div class="w-2 h-2 bg-secondary rounded-full"></div> <span className="text-on-surface">At Risk</span></div>
                  <span className="text-secondary">10.3%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2"><div class="w-2 h-2 bg-error rounded-full"></div> <span className="text-on-surface">Critical</span></div>
                  <span className="text-error">5.5%</span>
                </div>
              </div>
            </div>
          </GlassPanel>
        </div>
      </div>
    </div>
  );
}
