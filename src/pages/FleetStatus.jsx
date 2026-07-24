import { GlassPanel } from "../components/ui/Components";
import { useSimulation } from "../context/SimulationContext";

export default function FleetStatus() {
  const { droneAlphaBattery, droneBetaBattery } = useSimulation();
  return (
    <div className="p-margin-desktop w-full max-w-container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
        
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <GlassPanel delay={0.1} className="p-4 rounded-xl border-t border-secondary/50 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-tertiary"></div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded bg-secondary/10 text-secondary">
                  <span className="material-symbols-outlined text-sm">settings_remote</span>
                </div>
                <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase">Drones</h3>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-headline-lg text-headline-lg text-on-surface">2<span className="text-on-surface-variant text-lg">/2</span></span>
              </div>
              <p className="font-label-sm text-xs text-tertiary mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[10px]">arrow_upward</span> Active
              </p>
            </GlassPanel>

            <GlassPanel delay={0.2} className="p-4 rounded-xl border-t border-secondary/50 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-tertiary"></div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded bg-secondary/10 text-secondary">
                  <span className="material-symbols-outlined text-sm">sensors</span>
                </div>
                <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase">Sonar Arrays</h3>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-headline-lg text-headline-lg text-on-surface">1<span className="text-on-surface-variant text-lg">/1</span></span>
              </div>
              <p className="font-label-sm text-xs text-tertiary mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[10px]">arrow_upward</span> Online
              </p>
            </GlassPanel>

            <GlassPanel delay={0.3} className="p-4 rounded-xl border-t border-secondary/50 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-tertiary"></div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded bg-secondary/10 text-secondary">
                  <span className="material-symbols-outlined text-sm">settings_input_antenna</span>
                </div>
                <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase">Comm Relays</h3>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-headline-lg text-headline-lg text-on-surface">1<span className="text-on-surface-variant text-lg">/1</span></span>
              </div>
              <p className="font-label-sm text-xs text-tertiary mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[10px]">arrow_upward</span> Online
              </p>
            </GlassPanel>

            <GlassPanel delay={0.4} className="p-4 rounded-xl border-t border-secondary/50 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-outline-variant"></div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded bg-outline-variant/10 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">build</span>
                </div>
                <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase">Maintenance</h3>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-headline-lg text-headline-lg text-on-surface">0<span className="text-on-surface-variant text-lg">/3</span></span>
              </div>
              <p className="font-label-sm text-xs text-on-surface-variant mt-1 flex items-center gap-1">
                Pending
              </p>
            </GlassPanel>
          </div>

          
          <GlassPanel delay={0.5} className="rounded-xl flex-1 flex flex-col overflow-hidden relative p-0">
            <div className="p-4 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container/50">
              <div className="flex items-center gap-2">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Asset Registry</span>
                <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></div>
              </div>
              <button className="text-secondary text-xs font-label-sm hover:underline flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">filter_list</span> Filter
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-outline-variant/20 bg-surface-container-low/50">
                    <th className="p-4 font-label-sm text-xs text-on-surface-variant font-medium">Asset ID</th>
                    <th className="p-4 font-label-sm text-xs text-on-surface-variant font-medium">Type</th>
                    <th className="p-4 font-label-sm text-xs text-on-surface-variant font-medium">Name</th>
                    <th className="p-4 font-label-sm text-xs text-on-surface-variant font-medium">Location</th>
                    <th className="p-4 font-label-sm text-xs text-on-surface-variant font-medium">Status</th>
                    <th className="p-4 font-label-sm text-xs text-on-surface-variant font-medium">Depth</th>
                    <th className="p-4 font-label-sm text-xs text-on-surface-variant font-medium">Battery %</th>
                    <th className="p-4 font-label-sm text-xs text-on-surface-variant font-medium">Current Mission</th>
                  </tr>
                </thead>
                <tbody className="font-label-md text-sm">
                  <tr className="border-b border-outline-variant/10 hover:bg-secondary/5 transition-colors cursor-pointer group">
                    <td className="p-4 text-on-surface-variant group-hover:text-secondary">DRN-A-01</td>
                    <td className="p-4"><span className="material-symbols-outlined text-sm text-on-surface-variant">settings_remote</span></td>
                    <td className="p-4 text-on-surface font-medium">Drone Alpha</td>
                    <td className="p-4 text-on-surface-variant">Sector 7G</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary border border-tertiary/20 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-tertiary"></div> Active
                      </span>
                    </td>
                    <td className="p-4 text-on-surface-variant">-1320m</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                          <div className={`h-full bg-secondary shadow-[0_0_5px_rgba(0,241,254,0.5)]`} style={{width: `${droneAlphaBattery}%`}}></div>
                        </div>
                        <span className="text-xs text-on-surface-variant">{droneAlphaBattery}%</span>
                      </div>
                    </td>
                    <td className="p-4 text-on-surface-variant truncate max-w-[150px]">Plastic Cluster Sweep</td>
                  </tr>
                  <tr className="border-b border-outline-variant/10 hover:bg-secondary/5 transition-colors cursor-pointer group">
                    <td className="p-4 text-on-surface-variant group-hover:text-secondary">DRN-B-02</td>
                    <td className="p-4"><span className="material-symbols-outlined text-sm text-on-surface-variant">settings_remote</span></td>
                    <td className="p-4 text-on-surface font-medium">Drone Beta</td>
                    <td className="p-4 text-on-surface-variant">Trench Alpha</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary border border-tertiary/20 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-tertiary"></div> Active
                      </span>
                    </td>
                    <td className="p-4 text-on-surface-variant">-2100m</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                          <div className={`h-full bg-secondary shadow-[0_0_5px_rgba(0,241,254,0.5)]`} style={{width: `${droneBetaBattery}%`}}></div>
                        </div>
                        <span className="text-xs text-on-surface-variant">{droneBetaBattery}%</span>
                      </div>
                    </td>
                    <td className="p-4 text-on-surface-variant truncate max-w-[150px]">Bio-Sampling</td>
                  </tr>
                  <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                    <td className="p-4 text-on-surface-variant group-hover:text-secondary">SNR-M-01</td>
                    <td className="p-4"><span className="material-symbols-outlined text-sm text-on-surface-variant">sensors</span></td>
                    <td className="p-4 text-on-surface font-medium">Sonar Matrix 01</td>
                    <td className="p-4 text-on-surface-variant">Reef Edge</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary border border-tertiary/20 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-tertiary"></div> Online
                      </span>
                    </td>
                    <td className="p-4 text-on-surface-variant">-500m</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                          <div className="h-full bg-secondary w-[98%] shadow-[0_0_5px_rgba(0,241,254,0.5)]"></div>
                        </div>
                        <span className="text-xs text-on-surface-variant">98%</span>
                      </div>
                    </td>
                    <td className="p-4 text-on-surface-variant truncate max-w-[150px]">Acoustic Monitoring</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GlassPanel>
        </div>

        
        <div className="col-span-12 lg:col-span-4 flex flex-col h-full">
          <GlassPanel delay={0.6} className="rounded-xl p-6 flex-1 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-label-md text-label-md text-secondary uppercase tracking-widest">Mission Schedule</h3>
              <button className="text-on-surface-variant hover:text-secondary transition-colors">
                <span className="material-symbols-outlined text-sm">more_horiz</span>
              </button>
            </div>
            <div className="relative flex-1 overflow-y-auto pr-2">

              <div className="absolute left-[15px] top-2 bottom-2 w-px bg-outline-variant/30"></div>

              <div className="flex flex-col gap-6 relative">
     
                <div className="flex gap-4 opacity-50">
                  <div className="mt-1 relative z-10 w-[30px] flex justify-center">
                    <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                  </div>
                  <div>
                    <p className="font-label-sm text-xs text-on-surface-variant mb-1">08:00 UTC</p>
                    <p className="font-body-md text-sm text-on-surface">System Diagnostic</p>
                    <p className="font-label-sm text-xs text-on-surface-variant mt-1">All systems nominal.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 relative z-10 w-[30px] flex justify-center">
                    <div className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_8px_rgba(0,241,254,0.8)] border-2 border-background"></div>
                  </div>
                  <div className="p-3 rounded-lg w-full border border-secondary shadow-[inset_0_0_10px_rgba(0,241,254,0.1),_0_0_15px_rgba(0,241,254,0.2)] bg-surface-container/50">
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-label-sm text-xs text-secondary">11:30 - 14:00 UTC</p>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] bg-secondary/20 text-secondary uppercase font-label-sm">In Progress</span>
                    </div>
                    <p className="font-body-md text-sm text-on-surface font-medium mb-2">Drone Alpha Deployment</p>
                    <p className="font-label-sm text-xs text-on-surface-variant mb-2">Investigating plastic cluster in Sector 7G.</p>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-[10px] text-on-surface">A</div>
                      </div>
                      <span className="text-[10px] text-on-surface-variant">Assigned to Alpha</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 relative z-10 w-[30px] flex justify-center">
                    <div className="w-2 h-2 rounded-full bg-surface-container-highest border border-outline-variant"></div>
                  </div>
                  <div>
                    <p className="font-label-sm text-xs text-on-surface-variant mb-1">15:00 UTC</p>
                    <p className="font-body-md text-sm text-on-surface">Sonar Calibration</p>
                    <p className="font-label-sm text-xs text-on-surface-variant mt-1">Scheduled maintenance for Matrix 01.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 relative z-10 w-[30px] flex justify-center">
                    <div className="w-2 h-2 rounded-full bg-surface-container-highest border border-outline-variant"></div>
                  </div>
                  <div>
                    <p className="font-label-sm text-xs text-on-surface-variant mb-1">18:45 UTC</p>
                    <p className="font-body-md text-sm text-on-surface">Data Uplink</p>
                    <p className="font-label-sm text-xs text-on-surface-variant mt-1">Syncing telemetry to HQ.</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassPanel>
        </div>
      </div>
    </div>
  );
}
