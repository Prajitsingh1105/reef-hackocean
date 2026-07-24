import { GlassPanel } from "../components/ui/Components";
import { useRef } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function Reports() {
  const tableRef = useRef(null);

  const handleExportAll = () => {
    if (!tableRef.current) return;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.setTextColor(0, 241, 254);
    doc.text("A.E.G.I.S - Full Reports Log", 14, 20);
    
    autoTable(doc, {
      html: tableRef.current,
      startY: 30,
      theme: 'grid',
      headStyles: { fillColor: [0, 241, 254], textColor: [10, 14, 20] },
      styles: { fillColor: [20, 24, 30], textColor: [200, 200, 200] },
      alternateRowStyles: { fillColor: [30, 34, 40] },
      columns: [
        { header: 'Report ID', dataKey: 0 },
        { header: 'Category', dataKey: 1 },
        { header: 'Timestamp', dataKey: 2 },
        { header: 'Author', dataKey: 3 },
        { header: 'Status', dataKey: 4 }
      ]
    });
    
    doc.save("AEGIS_All_Reports.pdf");
  };

  return (
    <div className="p-margin-mobile md:p-margin-desktop grid grid-cols-1 gap-6 w-full max-w-container-max mx-auto h-full flex-col">
      <style>{`
        .glass-panel {
            background: rgba(10, 14, 20, 0.7);
            backdrop-filter: blur(12px);
            border-top: 1px solid #00f1fe;
            border-left: 1px solid rgba(0, 241, 254, 0.2);
            border-right: 1px solid rgba(0, 241, 254, 0.2);
            border-bottom: 1px solid rgba(0, 241, 254, 0.1);
        }
        .cyan-glow {
            box-shadow: 0 0 10px rgba(0, 241, 254, 0.3), inset 0 0 20px rgba(0, 241, 254, 0.1);
            border-color: #00f1fe;
        }
        .blinking-dot {
            animation: blink 1.5s infinite;
        }
        @keyframes blink { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
      `}</style>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassPanel delay={0.1} className="glass-panel p-4 rounded-lg relative overflow-hidden group hover:cyan-glow transition-all">
          <div className="flex justify-between items-start mb-2">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Reports Generated</span>
            <div className="w-8 h-8 rounded bg-secondary-container/20 flex items-center justify-center text-secondary-container">
              <span className="material-symbols-outlined text-sm">description</span>
            </div>
          </div>
          <div className="font-display-lg text-display-lg text-on-surface">1,492</div>
          <div className="mt-2 text-tertiary font-label-sm text-label-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">arrow_upward</span> 12% vs last month
          </div>
        </GlassPanel>
        
        <GlassPanel delay={0.2} className="glass-panel p-4 rounded-lg relative overflow-hidden group hover:cyan-glow transition-all">
          <div className="flex justify-between items-start mb-2">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Pending Approvals</span>
            <div className="w-8 h-8 rounded bg-error/20 flex items-center justify-center text-error">
              <span className="material-symbols-outlined text-sm">pending_actions</span>
            </div>
          </div>
          <div className="font-display-lg text-display-lg text-on-surface">14</div>
          <div className="mt-2 text-error font-label-sm text-label-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">arrow_downward</span> Action Required
          </div>
        </GlassPanel>
        
        <GlassPanel delay={0.3} className="glass-panel p-4 rounded-lg relative overflow-hidden group hover:cyan-glow transition-all">
          <div className="flex justify-between items-start mb-2">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Most Viewed</span>
            <div className="w-8 h-8 rounded bg-tertiary/20 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-sm">visibility</span>
            </div>
          </div>
          <div className="font-headline-md text-headline-md text-on-surface mt-2 truncate">Biodiversity Survey</div>
          <div className="mt-4 text-on-surface-variant font-label-sm text-label-sm">
            Updated 2 days ago
          </div>
        </GlassPanel>
        
        <GlassPanel delay={0.4} className="glass-panel p-4 rounded-lg relative overflow-hidden group hover:cyan-glow transition-all">
          <div className="flex justify-between items-start mb-2">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Last Sync</span>
            <div className="w-8 h-8 rounded bg-secondary/20 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-sm">sync</span>
            </div>
          </div>
          <div className="font-headline-md text-headline-md text-on-surface mt-2">Just Now</div>
          <div className="mt-4 text-secondary font-label-sm text-label-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">check_circle</span> Database synchronized
          </div>
        </GlassPanel>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
       
        <div className="lg:col-span-2 flex flex-col gap-6">
          <GlassPanel delay={0.5} className="glass-panel rounded-xl p-6 relative">
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-secondary-container blinking-dot"></div>
            <h3 className="font-label-md text-label-md text-secondary-container mb-4">CREATE NEW REPORT</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-surface-container-high border border-outline-variant hover:border-secondary-container hover:bg-secondary-container/10 rounded-lg p-4 text-left transition-all group">
                <span className="material-symbols-outlined text-3xl text-secondary-container mb-2 block group-hover:scale-110 transition-transform">analytics</span>
                <span className="font-headline-md text-headline-md text-on-surface block mb-1 text-sm">Sonar Analysis</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Generate acoustic maps</span>
              </button>
              <button className="bg-surface-container-high border border-outline-variant hover:border-tertiary hover:bg-tertiary/10 rounded-lg p-4 text-left transition-all group">
                <span className="material-symbols-outlined text-3xl text-tertiary mb-2 block group-hover:scale-110 transition-transform">diversity_1</span>
                <span className="font-headline-md text-headline-md text-on-surface block mb-1 text-sm">Biodiversity Audit</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Species count &amp; health</span>
              </button>
              <button className="bg-surface-container-high border border-outline-variant hover:border-error hover:bg-error/10 rounded-lg p-4 text-left transition-all group">
                <span className="material-symbols-outlined text-3xl text-error mb-2 block group-hover:scale-110 transition-transform">warning</span>
                <span className="font-headline-md text-headline-md text-on-surface block mb-1 text-sm">Threat Incident</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Log violations &amp; debris</span>
              </button>
            </div>
          </GlassPanel>

          <GlassPanel delay={0.6} className="glass-panel rounded-xl p-6 flex-1 flex flex-col min-h-0">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
              <h3 className="font-label-md text-label-md text-secondary-container uppercase">File Repository</h3>
              <div className="flex gap-2 w-full sm:w-auto">
                <button className="p-2 border border-outline-variant rounded hover:bg-surface-container-highest transition-colors text-on-surface-variant shrink-0"><span className="material-symbols-outlined text-sm">filter_list</span></button>
                <div className="relative flex-1 sm:flex-none">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
                  <input className="bg-surface-container border border-outline-variant rounded pl-9 pr-4 py-1.5 text-sm font-label-md text-on-surface focus:border-secondary-container focus:ring-1 focus:ring-secondary-container focus:outline-none w-full sm:w-64 transition-all" placeholder="Search reports..." type="text"/>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-x-auto overflow-y-auto border border-outline-variant/30 rounded">
              <table ref={tableRef} className="w-full text-left border-collapse min-w-[600px]">
                <thead className="bg-surface-container-high sticky top-0 z-10">
                  <tr>
                    <th className="p-3 font-label-sm text-label-sm text-on-surface-variant border-b border-outline-variant/30">Report ID</th>
                    <th className="p-3 font-label-sm text-label-sm text-on-surface-variant border-b border-outline-variant/30">Category</th>
                    <th className="p-3 font-label-sm text-label-sm text-on-surface-variant border-b border-outline-variant/30">Timestamp</th>
                    <th className="p-3 font-label-sm text-label-sm text-on-surface-variant border-b border-outline-variant/30">Author</th>
                    <th className="p-3 font-label-sm text-label-sm text-on-surface-variant border-b border-outline-variant/30">Status</th>
                    <th className="p-3 font-label-sm text-label-sm text-on-surface-variant border-b border-outline-variant/30 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="font-body-sm text-sm">
                  <tr className="border-b border-outline-variant/10 hover:bg-surface-container-highest/50 transition-colors">
                    <td className="p-3 text-secondary-container font-label-md">RPT-2094</td>
                    <td className="p-3"><span className="px-2 py-1 bg-tertiary/10 text-tertiary border border-tertiary/30 rounded text-xs uppercase font-label-sm">Biodiversity</span></td>
                    <td className="p-3 text-on-surface-variant">May 19, 08:30 UTC</td>
                    <td className="p-3">Dr. M. Chen</td>
                    <td className="p-3"><span className="text-tertiary flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-tertiary"></span> Final</span></td>
                    <td className="p-3 text-right">
                      <button className="text-on-surface-variant hover:text-secondary-container px-1"><span className="material-symbols-outlined text-sm">download</span></button>
                      <button className="text-on-surface-variant hover:text-secondary-container px-1"><span className="material-symbols-outlined text-sm">more_vert</span></button>
                    </td>
                  </tr>
                  <tr className="border-b border-outline-variant/10 hover:bg-surface-container-highest/50 transition-colors">
                    <td className="p-3 text-secondary-container font-label-md">RPT-2093</td>
                    <td className="p-3"><span className="px-2 py-1 bg-secondary-container/10 text-secondary-container border border-secondary-container/30 rounded text-xs uppercase font-label-sm">Sonar</span></td>
                    <td className="p-3 text-on-surface-variant">May 18, 14:15 UTC</td>
                    <td className="p-3">Auto-System</td>
                    <td className="p-3"><span className="text-error flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-error"></span> Draft</span></td>
                    <td className="p-3 text-right">
                      <button className="text-on-surface-variant hover:text-secondary-container px-1"><span className="material-symbols-outlined text-sm">download</span></button>
                      <button className="text-on-surface-variant hover:text-secondary-container px-1"><span className="material-symbols-outlined text-sm">more_vert</span></button>
                    </td>
                  </tr>
                  <tr className="border-b border-outline-variant/10 hover:bg-surface-container-highest/50 transition-colors">
                    <td className="p-3 text-secondary-container font-label-md">RPT-2092</td>
                    <td className="p-3"><span className="px-2 py-1 bg-error/10 text-error border border-error/30 rounded text-xs uppercase font-label-sm">Threat</span></td>
                    <td className="p-3 text-on-surface-variant">May 17, 22:00 UTC</td>
                    <td className="p-3">Aqua Guardian</td>
                    <td className="p-3"><span className="text-tertiary flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-tertiary"></span> Final</span></td>
                    <td className="p-3 text-right">
                      <button className="text-on-surface-variant hover:text-secondary-container px-1"><span className="material-symbols-outlined text-sm">download</span></button>
                      <button className="text-on-surface-variant hover:text-secondary-container px-1"><span className="material-symbols-outlined text-sm">more_vert</span></button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-highest/50 transition-colors">
                    <td className="p-3 text-secondary-container font-label-md">RPT-2091</td>
                    <td className="p-3"><span className="px-2 py-1 bg-primary/10 text-primary border border-primary/30 rounded text-xs uppercase font-label-sm">Routine</span></td>
                    <td className="p-3 text-on-surface-variant">May 16, 00:00 UTC</td>
                    <td className="p-3">Auto-System</td>
                    <td className="p-3"><span className="text-tertiary flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-tertiary"></span> Final</span></td>
                    <td className="p-3 text-right">
                      <button className="text-on-surface-variant hover:text-secondary-container px-1"><span className="material-symbols-outlined text-sm">download</span></button>
                      <button className="text-on-surface-variant hover:text-secondary-container px-1"><span className="material-symbols-outlined text-sm">more_vert</span></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GlassPanel>
        </div>

        
        <GlassPanel delay={0.7} className="lg:col-span-1 glass-panel rounded-xl p-6 cyan-glow flex flex-col relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: "radial-gradient(#00f1fe 1px, transparent 1px)", backgroundSize: "20px 20px"}}></div>
          <div className="flex justify-between items-center mb-6 relative z-10">
            <h3 className="font-label-md text-label-md text-secondary-container uppercase">Reports Analytics</h3>
            <span className="material-symbols-outlined text-secondary-container text-sm">insights</span>
          </div>
          
          <div className="space-y-6 flex-1 relative z-10 overflow-y-auto pr-2">
        
            <div>
              <div className="flex justify-between text-xs font-label-sm text-on-surface-variant mb-2">
                <span>Report Volume (7 Days)</span>
                <span>Total: 142</span>
              </div>
              <div className="h-32 bg-surface-container-high/50 border border-outline-variant/30 rounded flex items-end p-2 gap-1">
        
                <div className="w-full bg-secondary-container/40 h-[40%] rounded-t hover:bg-secondary-container transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] hidden group-hover:block bg-background px-1 rounded border border-outline-variant">12</div></div>
                <div className="w-full bg-secondary-container/40 h-[60%] rounded-t hover:bg-secondary-container transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] hidden group-hover:block bg-background px-1 rounded border border-outline-variant">18</div></div>
                <div className="w-full bg-secondary-container/40 h-[30%] rounded-t hover:bg-secondary-container transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] hidden group-hover:block bg-background px-1 rounded border border-outline-variant">9</div></div>
                <div className="w-full bg-secondary-container/40 h-[80%] rounded-t hover:bg-secondary-container transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] hidden group-hover:block bg-background px-1 rounded border border-outline-variant">24</div></div>
                <div className="w-full bg-secondary-container/40 h-[50%] rounded-t hover:bg-secondary-container transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] hidden group-hover:block bg-background px-1 rounded border border-outline-variant">15</div></div>
                <div className="w-full bg-secondary-container/40 h-[90%] rounded-t hover:bg-secondary-container transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] hidden group-hover:block bg-background px-1 rounded border border-outline-variant">27</div></div>
                <div className="w-full bg-secondary-container h-[100%] rounded-t shadow-[0_0_10px_rgba(0,241,254,0.5)] relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] hidden group-hover:block bg-background px-1 rounded border border-secondary-container text-secondary-container">37</div></div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-label-sm text-on-surface-variant mb-3 uppercase">Category Breakdown</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-tertiary">Biodiversity</span>
                    <span className="text-on-surface">45%</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                    <div className="w-[45%] h-full bg-tertiary shadow-[0_0_8px_rgba(79,219,200,0.5)]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-secondary-container">Sonar Analysis</span>
                    <span className="text-on-surface">35%</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                    <div className="w-[35%] h-full bg-secondary-container shadow-[0_0_8px_rgba(0,241,254,0.5)]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-error">Threat Reports</span>
                    <span className="text-on-surface">20%</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                    <div className="w-[20%] h-full bg-error shadow-[0_0_8px_rgba(255,180,171,0.5)]"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-auto pt-4">
              <button onClick={handleExportAll} className="w-full py-2 bg-transparent border border-secondary-container text-secondary-container hover:bg-secondary-container/10 transition-colors font-label-md rounded shadow-[0_0_10px_rgba(0,241,254,0.2)]">Export All Data</button>
            </div>
          </div>
        </GlassPanel>
      </div>
    </div>
  );
}
