import { GlassPanel } from "../components/ui/Components";

export default function SonarMatrix() {
  return (
    <div 
      className="p-margin-desktop w-full max-w-container-max mx-auto"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 241, 254, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 241, 254, 0.05) 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }}
    >
      <style>{`
        .cyan-glow {
            box-shadow: 0 0 8px rgba(0, 241, 254, 0.5), inset 0 0 12px rgba(0, 241, 254, 0.1);
            border-color: rgba(0, 241, 254, 1);
        }
        .blinking-dot {
            animation: blinker 1.5s linear infinite;
        }
        @keyframes blinker {
            50% { opacity: 0; }
        }
      `}</style>
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        
        <GlassPanel delay={0.1} className="p-5 rounded-xl flex flex-col relative">
          <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-secondary blinking-dot"></div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20">
              <span className="material-symbols-outlined text-secondary">radar</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Acoustic Coverage</span>
          </div>
          <div className="font-display-lg text-display-lg text-on-surface mb-1">94.2<span className="text-headline-md">%</span></div>
          <div className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 1.2% vs yesterday
          </div>
        </GlassPanel>

       
        <GlassPanel delay={0.2} className="p-5 rounded-xl flex flex-col relative cyan-glow bg-secondary/5">
          <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-error blinking-dot"></div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-error/10 flex items-center justify-center border border-error/20">
              <span className="material-symbols-outlined text-error">graphic_eq</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Event Detections</span>
          </div>
          <div className="font-display-lg text-display-lg text-on-surface mb-1">143</div>
          <div className="font-label-sm text-label-sm text-error flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 12 vs yesterday
          </div>
        </GlassPanel>

    
        <GlassPanel delay={0.3} className="p-5 rounded-xl flex flex-col relative">
          <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-tertiary blinking-dot"></div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center border border-tertiary/20">
              <span className="material-symbols-outlined text-tertiary">pest_control</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Marine Life Score</span>
          </div>
          <div className="font-display-lg text-display-lg text-on-surface mb-1">88.5</div>
          <div className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 2.1% vs yesterday
          </div>
        </GlassPanel>

        <GlassPanel delay={0.4} className="p-5 rounded-xl flex flex-col relative">
          <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-secondary blinking-dot"></div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-on-surface-variant/10 flex items-center justify-center border border-on-surface-variant/20">
              <span className="material-symbols-outlined text-on-surface-variant">hearing</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Anthro Noise Index</span>
          </div>
          <div className="font-display-lg text-display-lg text-on-surface mb-1">42.1<span className="text-headline-md text-on-surface-variant">dB</span></div>
          <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">horizontal_rule</span> Steady
          </div>
        </GlassPanel>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[800px]">
       
        <div className="col-span-1 lg:col-span-8 flex flex-col gap-6">
         
          <GlassPanel delay={0.5} className="rounded-xl flex flex-col flex-1 relative overflow-hidden border border-outline-variant/30 p-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-transparent z-20"></div>
            <div className="p-4 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container/50">
              <div className="flex items-center gap-2">
                <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-widest">Acoustic Spectrogram Feed</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-secondary/20 text-secondary border border-secondary/30">LIVE</span>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded border border-outline-variant/50 text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface hover:border-secondary transition-colors">Sector A</button>
                <button className="px-3 py-1 rounded border border-secondary text-label-sm font-label-sm text-secondary bg-secondary/10">Sector B</button>
              </div>
            </div>
            <div className="flex-1 p-4 grid grid-rows-2 gap-4">
              
              <div className="relative bg-surface-container-lowest rounded border border-outline-variant/20 overflow-hidden group">
                <div className="absolute top-2 left-2 z-10 font-label-sm text-label-sm text-on-surface-variant bg-surface-container-highest/80 px-2 py-1 rounded border border-outline-variant/30 backdrop-blur">
                  Depth: 0m - 500m | Freq: 10Hz - 2kHz
                </div>
                <div className="absolute inset-0 opacity-70 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6EpgCi4NQHclHJFCygNO3RG4HV8cZl7LK9uvCyyPxaqRmihKaC2TE7E-JoIWaRPeAxLYoFIa4lcAcxwO9LKUdNi0D8EI8l_5ZcSTVsqkMJnesWbfldjYAIDTBRYLuQ0FOMpim2D4_pY-VjvDhJJ8bi9EP9G1S0i5Shx_WXGbfpdh-N2MkjwJky-cSpLccE8gD9KGO5H0UE38aFXaf4POYR3TlTXxZJujvT6cCupSmFLJMPMmTWuqr')"}}></div>
                <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                  backgroundImage: "linear-gradient(rgba(0, 241, 254, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 241, 254, 0.05) 1px, transparent 1px)",
                  backgroundSize: "20px 20px"
                }}></div>
                <div className="absolute bottom-2 right-2 flex gap-1 z-10">
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-900 via-blue-500 to-secondary"></div>
                  <span className="text-[10px] text-on-surface-variant font-mono">Intensity</span>
                </div>
              </div>
             
              <div className="relative bg-surface-container-lowest rounded border border-outline-variant/20 overflow-hidden group">
                <div className="absolute top-2 left-2 z-10 font-label-sm text-label-sm text-on-surface-variant bg-surface-container-highest/80 px-2 py-1 rounded border border-outline-variant/30 backdrop-blur">
                  Depth: 500m - 2000m | Freq: 1Hz - 500Hz
                </div>
                <div className="absolute inset-0 opacity-80 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzfvdHDQGoAAj92erU6zbbLVRMjUANBwjGOJ3BtCPx_qw2QQyMR0kpxSbIOJSn246KtrBko8VH1rtyVcALo3ZBhcM9sl-dtjhKPTCOLYWFR1dGVpwnWm1Y0MByQaLzTDgsNx-infsIvQXz0DIdj5Htpyz2vx-35O6_MpYTTxlXu4JQxvZ1J-XfIi7ua6PoQU1bfDvLNYJisnqOP-wb0J2cijDIHvE0ITiklhXIFEULbfZKzo99KwkM')"}}></div>
                <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                  backgroundImage: "linear-gradient(rgba(0, 241, 254, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 241, 254, 0.05) 1px, transparent 1px)",
                  backgroundSize: "20px 20px"
                }}></div>
                <div className="absolute bottom-2 right-2 flex gap-1 z-10">
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-900 via-blue-500 to-secondary"></div>
                  <span className="text-[10px] text-on-surface-variant font-mono">Intensity</span>
                </div>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel delay={0.6} className="rounded-xl h-64 flex flex-col border border-outline-variant/30 overflow-hidden p-0">
            <div className="p-3 border-b border-outline-variant/20 bg-surface-container/50 flex justify-between items-center">
              <span className="font-label-sm text-label-sm text-on-surface uppercase font-bold tracking-widest">Acoustic Event Log</span>
              <button className="text-secondary flex items-center gap-1 font-label-sm text-label-sm hover:underline">
                <span className="material-symbols-outlined text-sm">download</span> Export
              </button>
            </div>
            <div className="flex-1 overflow-auto">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 bg-surface-container-high/90 backdrop-blur font-label-sm text-label-sm text-on-surface-variant border-b border-outline-variant/20">
                  <tr>
                    <th className="p-3 font-medium">Event ID</th>
                    <th className="p-3 font-medium">Type</th>
                    <th className="p-3 font-medium">Timestamp (UTC)</th>
                    <th className="p-3 font-medium">Location</th>
                    <th className="p-3 font-medium text-right">Confidence</th>
                  </tr>
                </thead>
                <tbody className="font-body-sm text-sm font-mono text-on-surface divide-y divide-outline-variant/10">
                  <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                    <td className="p-3 text-secondary">#AE-4921</td>
                    <td className="p-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-tertiary"></span> Bio-Acoustic</td>
                    <td className="p-3 text-on-surface-variant">12:44:10</td>
                    <td className="p-3">Sector B, -840m</td>
                    <td className="p-3 text-right text-tertiary">98%</td>
                  </tr>
                  <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                    <td className="p-3 text-secondary">#AE-4920</td>
                    <td className="p-3 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-error"></span> Anthropogenic</td>
                    <td className="p-3 text-on-surface-variant">12:41:05</td>
                    <td className="p-3">Sector A, -120m</td>
                    <td className="p-3 text-right text-error">92%</td>
                  </tr>
                  <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                    <td className="p-3 text-secondary">#AE-4919</td>
                    <td className="p-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-on-surface-variant"></span> Unknown</td>
                    <td className="p-3 text-on-surface-variant">12:38:55</td>
                    <td className="p-3">Sector B, -1500m</td>
                    <td className="p-3 text-right text-on-surface-variant">45%</td>
                  </tr>
                  <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                    <td className="p-3 text-secondary">#AE-4918</td>
                    <td className="p-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-tertiary"></span> Bio-Acoustic</td>
                    <td className="p-3 text-on-surface-variant">12:30:12</td>
                    <td className="p-3">Sector B, -900m</td>
                    <td className="p-3 text-right text-tertiary">88%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GlassPanel>
        </div>

      
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
          <GlassPanel delay={0.7} className="rounded-xl flex-1 flex flex-col border border-outline-variant/30 p-0">
            <div className="p-4 border-b border-outline-variant/20 bg-surface-container/50">
              <span className="font-label-sm text-label-sm text-on-surface uppercase font-bold tracking-widest flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-sm">troubleshoot</span>
                Species Signature Match
              </span>
            </div>
            <div className="p-4 flex flex-col gap-6 overflow-y-auto">
           
              <div className="bg-surface-container-low border border-outline-variant/20 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface font-semibold">Sperm Whale <span className="text-on-surface-variant text-xs italic font-sans font-normal">(Physeter macrocephalus)</span></h4>
                    <p className="font-label-sm text-label-sm text-tertiary mt-1">Match Confidence: 98%</p>
                  </div>
                  <span className="material-symbols-outlined text-tertiary">check_circle</span>
                </div>
                <div className="h-24 bg-surface-container-lowest rounded border border-outline-variant/10 relative overflow-hidden mb-2">
                  <div className="absolute inset-0 opacity-60 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDchdJKx1lSpWtjQ0FmHYIZpk4wTOE5CEdUyaGHUUyaaeEF6-Hnh8-i45dj7oOQw0BrkWlcPecy9z0gApsiIzz8PtQq4Wiz7KchwUMoDf_LvAhnsObg1qWClUFUrSL0nHu-rfwlocU2Fj4KdzBzwc82XfRZuDs-8JxsMLnyvaZM_Ong8ZeMKWds-w3oo3x4iQiHTsR2VoUX7TI0svuoRGa25wL0SvqnFLYeukM3B6o1G6kCijVSecPB')"}}></div>
                </div>
                <div className="flex justify-between font-mono text-[10px] text-on-surface-variant">
                  <span>Ref: Clicks &amp; Creaks</span>
                  <span>Freq: 2kHz - 30kHz</span>
                </div>
              </div>
              
              <div className="bg-surface-container-low border border-outline-variant/20 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface font-semibold">Leatherback Turtle <span className="text-on-surface-variant text-xs italic font-sans font-normal">(Dermochelys coriacea)</span></h4>
                    <p className="font-label-sm text-label-sm text-secondary mt-1">Match Confidence: 74%</p>
                  </div>
                  <span className="material-symbols-outlined text-secondary">help</span>
                </div>
                <div className="h-24 bg-surface-container-lowest rounded border border-outline-variant/10 relative overflow-hidden mb-2">
                  <div className="absolute inset-0 opacity-50 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBMZS9XbjuCLxkqkh6Z-YYJ7S7tQhG-gBAb3us9FR7sD1oaMIZa1MpCjMX3aSltBCWshWag6IfrhuwdMUZqrXJ20ndMKDHw3I-8AcijQQRvBig73dDJFDu3DMYtOcXy65jyYe9ItIxlI91EoGM7CuquZqHr9RjmaT5V3jEbQAHoiZ3K2LyAdE_hA8ddcNst1Sw1IRaUPdp8mx32GrmcO8OQl6ElGBj5thojRMvAnhRcRHkQRsYi-YTj')"}}></div>
                </div>
                <div className="flex justify-between font-mono text-[10px] text-on-surface-variant">
                  <span>Ref: Low-Freq Pulses</span>
                  <span>Freq: &lt; 500Hz</span>
                </div>
              </div>
              
              <div className="mt-auto p-3 rounded-lg bg-secondary/5 border border-secondary/20 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-secondary border-t-transparent animate-spin flex-shrink-0"></div>
                <div>
                  <div className="font-label-sm text-label-sm text-secondary">AI Analysis Active</div>
                  <div className="text-xs text-on-surface-variant font-mono mt-0.5">Processing Sector B buffer...</div>
                </div>
              </div>
            </div>
          </GlassPanel>
        </div>
      </div>
    </div>
  );
}
