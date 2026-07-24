import { GlassPanel, MetricCard } from "../components/ui/Components";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useSimulation } from "../context/SimulationContext";

export default function MissionControl() {
  const { activeDrones, threatCount, apiCalls } = useSimulation();
  const [timecode, setTimecode] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const [viewState, setViewState] = useState({
    longitude: 142.20,
    latitude: 11.35,
    zoom: 6,
    pitch: 0,
    bearing: 0
  });

  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  const droneCoords = [141.8, 11.5];
  const threatCoords = [142.5, 11.0];

  useEffect(() => {
    if (mapRef.current) return; 
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: {
        version: 8,
        sources: {
          'satellite': {
            type: 'raster',
            tiles: [
              'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            ],
            tileSize: 256
          }
        },
        layers: [
          {
            id: 'satellite-layer',
            type: 'raster',
            source: 'satellite',
            minzoom: 0,
            maxzoom: 19
          }
        ]
      },
      center: [142.2000, 11.3500],
      zoom: 6,
    });
    mapRef.current = map;

    map.on('move', () => {
      const center = map.getCenter();
      setViewState({
        longitude: center.lng,
        latitude: center.lat,
        zoom: map.getZoom()
      });
    });

    map.on('load', () => {
      map.resize();

      map.addSource('connection', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [droneCoords, threatCoords]
          }
        }
      });

      map.addLayer({
        id: 'connection-line',
        type: 'line',
        source: 'connection',
        paint: {
          'line-color': '#00f1fe',
          'line-width': 2,
          'line-dasharray': [4, 4]
        }
      });

      const marker1El = document.createElement('div');
      marker1El.className = 'relative flex flex-col items-center z-20 pointer-events-none';
      marker1El.innerHTML = `
        <div class="w-20 h-20 rounded-full border border-error/50 animate-ping absolute"></div>
        <div class="w-3 h-3 bg-error rounded-full shadow-[0_0_15px_rgba(255,180,171,1)]"></div>
        <div class="mt-2 bg-surface-container/80 backdrop-blur-sm border border-outline-variant/50 p-2 rounded text-xs text-center">
          <p class="text-on-surface font-label-md">Ghost Fishing Net<br/>Detected</p>
          <p class="text-on-surface-variant font-label-sm text-[10px]">Depth: -620m</p>
        </div>
      `;
      new maplibregl.Marker({ element: marker1El })
        .setLngLat([141.5, 11.8])
        .addTo(map);

      const marker2El = document.createElement('div');
      marker2El.className = 'relative flex flex-col items-center z-20 pointer-events-none';
      marker2El.innerHTML = `
        <div class="w-16 h-16 rounded-full border border-tertiary/50 animate-ping absolute" style="animation-delay: 75ms"></div>
        <div class="w-3 h-3 bg-tertiary rounded-full shadow-[0_0_15px_rgba(113,248,228,1)]"></div>
        <div class="mt-2 bg-surface-container/80 backdrop-blur-sm border border-outline-variant/50 p-2 rounded text-xs text-center">
          <p class="text-on-surface font-label-md">Coral Bleaching<br/>Hotspot</p>
          <p class="text-on-surface-variant font-label-sm text-[10px]">Depth: -940m</p>
        </div>
      `;
      new maplibregl.Marker({ element: marker2El })
        .setLngLat([142.8, 12.1])
        .addTo(map);

      const marker3El = document.createElement('div');
      marker3El.className = 'relative flex flex-col items-center z-20 pointer-events-none';
      marker3El.innerHTML = `
        <div class="w-24 h-24 rounded-full border border-yellow-400/50 animate-ping absolute" style="animation-delay: 150ms"></div>
        <div class="w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_15px_rgba(250,204,21,1)]"></div>
        <div class="mt-2 bg-surface-container/80 backdrop-blur-sm border border-outline-variant/50 p-2 rounded text-xs text-center">
          <p class="text-on-surface font-label-md">Plastic Cluster<br/>High Density</p>
          <p class="text-on-surface-variant font-label-sm text-[10px]">Depth: -1320m</p>
        </div>
      `;
      new maplibregl.Marker({ element: marker3El })
        .setLngLat([141.2, 10.5])
        .addTo(map);

      const marker4El = document.createElement('div');
      marker4El.className = 'relative flex flex-col items-center z-20 pointer-events-none';
      marker4El.innerHTML = `
        <div class="w-16 h-16 rounded-full border border-purple-400/50 animate-ping absolute"></div>
        <div class="w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_15px_rgba(192,132,252,1)]"></div>
        <div class="mt-2 bg-surface-container/80 backdrop-blur-sm border border-outline-variant/50 p-2 rounded text-xs text-center">
          <p class="text-on-surface font-label-md">Cargo Waste<br/>Accumulation</p>
          <p class="text-on-surface-variant font-label-sm text-[10px]">Depth: -1780m</p>
        </div>
      `;
      new maplibregl.Marker({ element: marker4El })
        .setLngLat([143.1, 10.8])
        .addTo(map);
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  const recenter = useCallback((e) => {
    e.preventDefault();
    if (mapRef.current) {
      mapRef.current.flyTo({ center: [142.2000, 11.3500], zoom: 6 });
    }
  }, []);
  
  const zoomIn = useCallback((e) => {
    e.preventDefault();
    if (mapRef.current) {
      mapRef.current.zoomIn();
    }
  }, []);
  
  const zoomOut = useCallback((e) => {
    e.preventDefault();
    if (mapRef.current) {
      mapRef.current.zoomOut();
    }
  }, []);

  return (
    <div className="p-margin-mobile md:p-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-container-max mx-auto">
      
      <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard delay={0.1} title="Active Drones" value={activeDrones} change="12 offline" trend="down" icon="settings_remote" colorClass="secondary" />
        <MetricCard delay={0.2} title="Sonar Coverage" value="84.2%" change="2.1% vs yesterday" trend="up" icon="radar" colorClass="tertiary" />
        <MetricCard delay={0.3} title="Threat Level" value={threatCount} change={`${threatCount} active alerts`} trend="down" icon="warning" colorClass="error" pulse={threatCount > 0} />
        <MetricCard delay={0.4} title="API Calls" value={apiCalls.toLocaleString()} change="Requests today" trend="up" icon="api" colorClass="secondary-fixed" />
      </div>

     
      <div className="lg:col-span-8 flex flex-col gap-6 overflow-hidden">
        <GlassPanel delay={0.5} active={true} className="w-full h-[450px] relative p-0 group overflow-hidden">
          <div ref={mapContainerRef} className="absolute inset-0 w-full h-full z-0">
          </div>
          
          <div className="relative z-10 p-6 h-full flex flex-col justify-between pointer-events-none">
            <div className="flex justify-between items-start pointer-events-none">
              <div className="bg-surface-container/80 backdrop-blur-md border border-outline-variant/50 rounded-lg p-3 pointer-events-auto">
                <div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-1">Sector 7G</div>
                <div className="font-headline-md text-headline-md text-on-surface">Mariana Trench</div>
              </div>
              <div className="flex flex-col gap-2 pointer-events-auto">
                <button type="button" onClick={zoomIn} className="w-10 h-10 rounded bg-surface-container/80 backdrop-blur-md border border-outline-variant/50 flex items-center justify-center text-on-surface hover:text-secondary hover:border-secondary transition-colors shadow-lg">
                  <span className="material-symbols-outlined">add</span>
                </button>
                <button type="button" onClick={zoomOut} className="w-10 h-10 rounded bg-surface-container/80 backdrop-blur-md border border-outline-variant/50 flex items-center justify-center text-on-surface hover:text-secondary hover:border-secondary transition-colors shadow-lg">
                  <span className="material-symbols-outlined">remove</span>
                </button>
                <button type="button" onClick={recenter} className="w-10 h-10 rounded bg-surface-container/80 backdrop-blur-md border border-outline-variant/50 flex items-center justify-center text-on-surface hover:text-secondary hover:border-secondary transition-colors shadow-lg mt-2">
                  <span className="material-symbols-outlined">my_location</span>
                </button>
              </div>
            </div>
            
            <div className="flex justify-between items-end pointer-events-none">
              <div className="bg-surface-container/80 backdrop-blur-md border border-outline-variant/50 rounded-lg px-4 py-2 flex items-center gap-4">
                 <div className="font-label-sm text-label-sm text-secondary">
                   LAT: {viewState.latitude.toFixed(4)}° N | LON: {viewState.longitude.toFixed(4)}° E
                 </div>
              </div>
            </div>
          </div>
        </GlassPanel>
      </div>

      <div className="lg:col-span-4 flex flex-col gap-6">
        <GlassPanel delay={0.6} className="p-5 relative flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest text-[10px]">MICROPLASTIC TREND</h3>
            <button className="bg-surface-container border border-outline-variant/50 rounded px-2 py-1 text-xs flex items-center gap-1 text-on-surface-variant hover:text-on-surface">
              7 Days <span className="material-symbols-outlined text-[10px]">keyboard_arrow_down</span>
            </button>
          </div>
          <div className="flex-1 min-h-[150px] relative chart-grid rounded-lg border border-outline-variant/20 p-2">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 50">
              <polyline fill="none" points="0,40 10,35 20,25 30,28 40,15 50,22 60,30 70,10 80,15 90,5 100,2" stroke="var(--color-secondary-container, #00f1fe)" strokeWidth="1.5"></polyline>
              <circle className="animate-pulse" cx="90" cy="5" fill="var(--color-secondary-container, #00f1fe)" r="2"></circle>
            </svg>
            <div className="absolute left-1 top-2 bottom-6 flex flex-col justify-between text-[8px] text-on-surface-variant">
              <span>1000</span><span>750</span><span>500</span><span>250</span><span>0</span>
            </div>
            <div className="absolute bottom-1 left-8 right-2 flex justify-between text-[8px] text-on-surface-variant">
              <span>May 13</span><span>May 15</span><span>May 17</span><span>May 19</span>
            </div>
            <div className="absolute top-6 right-6 bg-surface-container border border-secondary/30 p-1.5 rounded text-[8px]">
              <span className="text-on-surface-variant block">May 19</span>
              <span className="text-secondary font-bold">812 µg/m³</span>
            </div>
          </div>
        </GlassPanel>

        <GlassPanel delay={0.7} className="p-5 relative flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest text-[10px]">DEEP-SEA DEBRIS TYPES</h3>
            <button className="bg-surface-container border border-outline-variant/50 rounded px-2 py-1 text-xs flex items-center gap-1 text-on-surface-variant hover:text-on-surface">
              This Month <span className="material-symbols-outlined text-[10px]">keyboard_arrow_down</span>
            </button>
          </div>
          <div className="flex-1 min-h-[150px] flex items-end justify-around pb-4 pt-2 relative">
            <div className="absolute inset-x-0 bottom-4 top-2 flex flex-col justify-between pointer-events-none">
              <div className="border-b border-outline-variant/10 w-full h-0"></div>
              <div className="border-b border-outline-variant/10 w-full h-0"></div>
              <div className="border-b border-outline-variant/10 w-full h-0"></div>
              <div className="border-b border-outline-variant/10 w-full h-0"></div>
            </div>
            <div className="w-8 bg-secondary-container rounded-t relative z-10" style={{height: "80%"}}>
              <span className="absolute -top-4 w-full text-center text-[10px] text-on-surface">1,842</span>
            </div>
            <div className="w-8 bg-tertiary rounded-t relative z-10" style={{height: "60%"}}>
              <span className="absolute -top-4 w-full text-center text-[10px] text-on-surface">1,256</span>
            </div>
            <div className="w-8 bg-yellow-500 rounded-t relative z-10" style={{height: "45%"}}>
              <span className="absolute -top-4 w-full text-center text-[10px] text-on-surface">894</span>
            </div>
            <div className="w-8 bg-purple-500 rounded-t relative z-10" style={{height: "25%"}}>
              <span className="absolute -top-4 w-full text-center text-[10px] text-on-surface">412</span>
            </div>
            <div className="absolute bottom-0 w-full flex justify-around text-[8px] text-on-surface-variant">
              <span>Ghost Nets</span>
              <span>Plastics</span>
              <span>Cargo Waste</span>
              <span>Other Debris</span>
            </div>
          </div>
        </GlassPanel>

        <GlassPanel delay={0.8} className="p-5 relative flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest text-[10px]">BIODIVERSITY OVERVIEW</h3>
            <button className="bg-surface-container border border-outline-variant/50 rounded px-2 py-1 text-xs flex items-center gap-1 text-on-surface-variant hover:text-on-surface">
              Today <span className="material-symbols-outlined text-[10px]">keyboard_arrow_down</span>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-between min-h-[100px]">
            <div className="w-24 h-24 rounded-full border-[12px] border-tertiary border-r-yellow-500 border-b-error relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[12px] border-surface-container-low/50 pointer-events-none mix-blend-overlay"></div>
              <div className="text-center">
                <span className="block font-bold text-lg text-on-surface leading-tight">82.1<span className="text-xs">%</span></span>
                <span className="block text-[8px] text-on-surface-variant">Overall</span>
              </div>
            </div>
            <div className="space-y-2 text-[10px]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                <span className="text-on-surface">Healthy (82.1%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                <span className="text-on-surface">At Risk (12.3%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-error"></span>
                <span className="text-on-surface">Critical (5.6%)</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-outline-variant/20 flex justify-between items-center text-xs">
            <span className="text-on-surface-variant">Endangered Species Monitored</span>
            <span className="font-bold text-on-surface flex items-center gap-1">47 <span className="material-symbols-outlined text-[12px] text-secondary">pest_control</span></span>
          </div>
        </GlassPanel>
      </div>

      <div className="col-span-1 lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
        <GlassPanel delay={0.9} className="col-span-1 lg:col-span-4 p-8 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -left-10 top-0 bottom-0 w-1/2 bg-contain bg-no-repeat bg-left opacity-70 pointer-events-none" style={{backgroundImage: "url('https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg')"}}></div>
          <div className="relative z-10 ml-auto w-2/3">
            <h4 className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2 text-[10px]">JOIN THE GUARDIAN NETWORK</h4>
            <h2 className="font-headline-md text-headline-md text-on-surface font-bold leading-tight mb-4">
              Be the reason our oceans have a <span className="text-secondary cyan-glow-text">future.</span>
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-6">Every action today protects a thousand species tomorrow.</p>
            <div className="grid grid-cols-3 gap-2 mb-8 text-center text-[10px]">
              <div>
                <span className="material-symbols-outlined text-secondary text-sm mb-1">verified_user</span>
                <p className="text-on-surface font-bold">Real Impact</p>
                <p className="text-on-surface-variant opacity-70">See your contributions make change.</p>
              </div>
              <div>
                <span className="material-symbols-outlined text-secondary text-sm mb-1">public</span>
                <p className="text-on-surface font-bold">Global Community</p>
                <p className="text-on-surface-variant opacity-70">Join passionate ocean guardians.</p>
              </div>
              <div>
                <span className="material-symbols-outlined text-secondary text-sm mb-1">track_changes</span>
                <p className="text-on-surface font-bold">Mission Updates</p>
                <p className="text-on-surface-variant opacity-70">Get real-time mission briefings.</p>
              </div>
            </div>
            <button className="w-full py-3 rounded-lg bg-surface-container border border-secondary/50 text-secondary hover:bg-secondary/10 transition-colors flex items-center justify-center gap-2 font-label-md text-sm">
              <span className="material-symbols-outlined">group_add</span> Join as a Volunteer
            </button>
            <p className="text-center text-xs text-on-surface-variant mt-4">Already a guardian? <a className="text-secondary hover:underline" href="#">Sign in</a></p>
          </div>
        </GlassPanel>

        <GlassPanel delay={1.0} className="col-span-1 lg:col-span-4 p-8 relative">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest text-[10px]">VOLUNTEER SIGNUP</h4>
            <button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-sm">close</span></button>
          </div>
          <div className="flex items-center justify-between mb-8 relative">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-outline-variant/30 -z-10"></div>
            <div className="w-6 h-6 rounded-full bg-secondary text-background flex items-center justify-center text-xs font-bold ring-4 ring-surface-container">1</div>
            <div className="w-6 h-6 rounded-full bg-surface-container border border-outline-variant text-on-surface-variant flex items-center justify-center text-xs font-bold">2</div>
            <div className="w-6 h-6 rounded-full bg-surface-container border border-outline-variant text-on-surface-variant flex items-center justify-center text-xs font-bold">3</div>
          </div>
          <h3 className="text-on-surface font-bold mb-4">Tell us about you.</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-[10px] text-on-surface-variant mb-1">Full Name</label>
              <input className="w-full bg-background border border-outline-variant/50 rounded-lg p-2.5 text-sm text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary placeholder-on-surface-variant/50" placeholder="Enter your name" type="text"/>
            </div>
            <div>
              <label className="block text-[10px] text-on-surface-variant mb-1">Email Address</label>
              <input className="w-full bg-background border border-outline-variant/50 rounded-lg p-2.5 text-sm text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary placeholder-on-surface-variant/50" placeholder="you@example.com" type="email"/>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] text-on-surface-variant mb-1">Country</label>
                <select className="w-full bg-background border border-outline-variant/50 rounded-lg p-2.5 text-sm text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary appearance-none">
                  <option>Select your country</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] text-on-surface-variant mb-1">Area of Interest</label>
                <select className="w-full bg-background border border-outline-variant/50 rounded-lg p-2.5 text-sm text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary appearance-none">
                  <option>Select an area</option>
                </select>
              </div>
            </div>
            <button className="w-full mt-6 py-3 rounded-lg bg-gradient-to-br from-secondary-container to-tertiary text-background font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity" type="button">
              Next <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </form>
        </GlassPanel>

        <GlassPanel delay={1.1} className="col-span-1 lg:col-span-4 p-8 relative flex flex-col">
          <h4 className="font-label-sm text-label-sm text-secondary uppercase tracking-widest text-[10px] mb-4">SECURE THE NEXT DEEP-SEA DRONE</h4>
          <div className="w-full h-32 flex items-center justify-center mb-4">
            <img className="max-h-full object-contain mix-blend-screen opacity-80" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"/>
          </div>
          <div className="mt-auto">
            <p className="text-[10px] text-secondary mb-1">Community Funding Progress</p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-display-lg text-4xl text-secondary cyan-glow-text">$287,450</span>
              <span className="text-sm text-on-surface-variant">of $500,000</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-3 flex-1 bg-surface-container rounded-full overflow-hidden border border-outline-variant/30">
                <div className="h-full bg-secondary-container w-[57%] shadow-[0_0_10px_rgba(0,241,254,0.5)]"></div>
              </div>
              <span className="font-bold text-on-surface text-sm">57%</span>
            </div>
            <div className="flex justify-between mb-6 px-4 py-3 bg-surface-container/50 border border-outline-variant/20 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-on-surface-variant">group</span>
                <div>
                  <p className="text-on-surface font-bold leading-tight">1,248</p>
                  <p className="text-[10px] text-on-surface-variant">Guardians</p>
                </div>
              </div>
              <div className="w-px bg-outline-variant/30"></div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-on-surface-variant">schedule</span>
                <div>
                  <p className="text-on-surface font-bold leading-tight">23</p>
                  <p className="text-[10px] text-on-surface-variant">Days Left</p>
                </div>
              </div>
            </div>
            <button className="w-full py-3 rounded-lg bg-surface-container border border-secondary/50 text-secondary hover:bg-secondary/10 transition-colors flex items-center justify-center gap-2 font-label-md text-sm mb-2">
              <span className="material-symbols-outlined text-sm">favorite</span> Donate to the Mission
            </button>
            <p className="text-center text-[10px] text-on-surface-variant">Every dollar drives the mission forward.</p>
          </div>
        </GlassPanel>
      </div>
    </div>
  );
}
