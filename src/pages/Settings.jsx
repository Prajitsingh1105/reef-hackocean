import { GlassPanel } from "../components/ui/Components";

export default function Settings() {
  return (
    <div className="p-margin-mobile md:p-margin-desktop w-full max-w-container-max mx-auto flex flex-col gap-6">
      <style>{`
        .glass-panel {
            background: rgba(10, 14, 20, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-top: 1px solid rgba(0, 241, 254, 0.3);
            border-left: 1px solid rgba(0, 241, 254, 0.1);
            border-right: 1px solid rgba(0, 241, 254, 0.1);
            border-bottom: 1px solid transparent;
        }
        .glow-border-active {
            border: 1px solid rgba(0, 241, 254, 1);
            box-shadow: inset 0 0 10px rgba(0, 241, 254, 0.2);
        }
        .nav-active {
            background: rgba(221, 252, 255, 0.1);
            color: #ddfcff;
            border-left: 4px solid #ddfcff;
        }
        .btn-primary {
            background: linear-gradient(135deg, #00f1fe 0%, #00dbe7 100%);
            border: 1px solid #00f1fe;
            color: #051424;
            text-shadow: 0 1px 2px rgba(255,255,255,0.3);
        }
        .input-field {
            background: #051424;
            border: 1px solid #45474b;
        }
        .input-field:focus {
            border: 1px solid #00f1fe;
            box-shadow: 0 0 0 4px rgba(0, 241, 254, 0.2);
            outline: none;
        }
      `}</style>
      
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassPanel delay={0.1} className="glass-panel p-6 rounded-xl flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></div>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-secondary">rss_feed</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Active Streams</span>
          </div>
          <div>
            <span className="font-display-lg text-display-lg text-on-surface block">142</span>
            <span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[16px]">arrow_upward</span> 12% vs yesterday
            </span>
          </div>
        </GlassPanel>

        <GlassPanel delay={0.2} className="glass-panel p-6 rounded-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <div className="w-1.5 h-1.5 rounded-full bg-error animate-ping"></div>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-error">api</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">API Calls</span>
          </div>
          <div>
            <span className="font-display-lg text-display-lg text-on-surface block">1.2M</span>
            <span className="font-label-sm text-label-sm text-error flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[16px]">arrow_downward</span> 5% vs yesterday
            </span>
          </div>
        </GlassPanel>

        <GlassPanel delay={0.3} className="glass-panel p-6 rounded-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></div>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-secondary">warning</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">System Alerts</span>
          </div>
          <div>
            <span className="font-display-lg text-display-lg text-on-surface block">3</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant mt-1 block">Requires attention</span>
          </div>
        </GlassPanel>

        <GlassPanel delay={0.4} className="glass-panel p-6 rounded-xl flex flex-col justify-between relative overflow-hidden glow-border-active">
          <div className="absolute top-0 right-0 p-4">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></div>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-secondary">security</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Security Score</span>
          </div>
          <div>
            <span className="font-display-lg text-display-lg text-secondary block">98%</span>
            <span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[16px]">check_circle</span> Optimal Status
            </span>
          </div>
        </GlassPanel>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
        
        <GlassPanel delay={0.5} className="lg:col-span-2 glass-panel rounded-xl flex flex-col">
          <div className="border-b border-outline-variant/30 px-6 py-4 flex gap-6 overflow-x-auto">
            <button className="font-label-md text-label-md text-secondary border-b-2 border-secondary pb-4 -mb-[17px] whitespace-nowrap">User Profile</button>
            <button className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors pb-4 whitespace-nowrap">System Config</button>
            <button className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors pb-4 whitespace-nowrap">Alert Rules</button>
            <button className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors pb-4 whitespace-nowrap">API Keys</button>
            <button className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors pb-4 whitespace-nowrap">Data Management</button>
          </div>
          
          <div className="p-8 flex-1 flex flex-col">
            <div className="flex items-start gap-8 mb-8">
              <div className="relative group cursor-pointer">
                <img className="w-24 h-24 rounded-full object-cover border-2 border-secondary" alt="Aqua Guardian" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvsnt6yFIlwZ0UZ21SIcQd4H6WRkaUUdOOURLckXUMuqi43qDKv_FVRsFePThpBbhNTjLfaDrnsdqC0c05AxhSXu0-aAuXehXatpTDj9kD3YCVmnvOnDgtDTABb83cRT-2fVfvYK9ymdxX6-df-r3rulD7tGex9Ji-ixUnoTZzc8lQS6nfAnItTkH64mK9NeFn8PEZ2j17v37wwGtEDRvoDIvGssQEPBPQkS6dDB8aKlopkFjzpZWd"/>
                <div className="absolute inset-0 bg-background/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-secondary">edit</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-1">Aqua Guardian</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-4">Mission Lead • Level 7 Clearance</p>
                <div className="flex gap-4">
                  <button className="px-4 py-2 rounded-md font-label-md text-label-md bg-secondary/10 text-secondary border border-secondary/30 hover:bg-secondary/20 transition-colors">Change Avatar</button>
                  <button className="px-4 py-2 rounded-md font-label-md text-label-md text-error hover:bg-error/10 transition-colors">Remove</button>
                </div>
              </div>
            </div>

            <form className="space-y-6 max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Display Name</label>
                  <input className="w-full input-field rounded-md px-4 py-2 text-on-surface font-body-md" type="text" defaultValue="Aqua Guardian"/>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Email Address</label>
                  <input className="w-full input-field rounded-md px-4 py-2 text-on-surface font-body-md" type="email" defaultValue="lead@reef.org"/>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Role</label>
                  <select className="w-full input-field rounded-md px-4 py-2 text-on-surface font-body-md appearance-none">
                    <option>Mission Lead</option>
                    <option>Analyst</option>
                    <option>Field Operator</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Timezone</label>
                  <select className="w-full input-field rounded-md px-4 py-2 text-on-surface font-body-md appearance-none">
                    <option>UTC (Coordinated Universal Time)</option>
                    <option>PST (Pacific Standard Time)</option>
                    <option>EST (Eastern Standard Time)</option>
                  </select>
                </div>
              </div>
              <div className="pt-6 border-t border-outline-variant/30 flex justify-end gap-4">
                <button className="px-6 py-2 rounded-md font-label-md text-label-md text-on-surface hover:bg-surface-variant transition-colors border border-outline-variant" type="button">Cancel</button>
                <button className="btn-primary px-6 py-2 rounded-md font-label-md text-label-md font-bold" type="button">Save Changes</button>
              </div>
            </form>
          </div>
        </GlassPanel>

        <GlassPanel delay={0.6} className="glass-panel rounded-xl p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-label-md text-label-md text-on-surface uppercase">System Status Toggles</h3>
            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></div>
          </div>
          
          <div className="space-y-6">
        
            <div className="flex items-center justify-between p-4 rounded-lg bg-surface-container/50 border border-outline-variant/20 hover:border-secondary/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/30">
                  <span className="material-symbols-outlined text-[20px]">flight_takeoff</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface">Drone Auto-Deploy</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Deploy on critical threat.</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" value=""/>
                <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between p-4 rounded-lg bg-surface-container/50 border border-outline-variant/20 hover:border-secondary/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/30">
                  <span className="material-symbols-outlined text-[20px]">radar</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface">Active Sonar Ping</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Continuous deep-scan.</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" value=""/>
                <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
              </label>
            </div>
            
    
            <div className="flex items-center justify-between p-4 rounded-lg bg-surface-container/50 border border-outline-variant/20 hover:border-secondary/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant border border-outline-variant/30">
                  <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface">Beta AI Models</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Use experimental inference.</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input className="sr-only peer" type="checkbox" value=""/>
                <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
              </label>
            </div>
          </div>
          
          <div className="mt-auto pt-6">
            <div className="p-4 rounded-lg bg-tertiary/10 border border-tertiary/30">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary">info</span>
                <div>
                  <p className="font-label-md text-label-md text-tertiary mb-1">System Restart Pending</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Changes to Sonar configuration require a subsystem restart during off-peak hours.</p>
                </div>
              </div>
            </div>
          </div>
        </GlassPanel>
      </div>
    </div>
  );
}
