import { useLocation } from "react-router-dom";
import { useSimulation } from "../../context/SimulationContext";

const routeInfo = {
  "/": { title: "Mission Control", subtitle: "Global view of autonomous fleet and marine vital signs." },
  "/fleet": { title: "Fleet Status", subtitle: "Monitoring autonomous drone network." },
  "/sonar": { title: "Sonar Matrix", subtitle: "Deep-sea acoustic mapping." },
  "/threats": { title: "Threat Alerts", subtitle: "Active hazards and ecological warnings." },
  "/analytics": { title: "Data Analytics", subtitle: "Ecosystem trend analysis." },
  "/biodiversity": { title: "Biodiversity", subtitle: "Monitoring ecosystem health and species vitality." },
  "/volunteers": { title: "Volunteers", subtitle: "Mobilizing the global network. Securing our future." },
  "/reports": { title: "Reports", subtitle: "Data analysis and documentation." },
  "/settings": { title: "Settings", subtitle: "System Configuration & User Preferences." },
};

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  const location = useLocation();
  const { utcTime, threatCount } = useSimulation();
  const info = routeInfo[location.pathname] || { title: "REEF", subtitle: "" };

  return (
    <header className="flex justify-between items-center px-4 md:px-margin-desktop w-full fixed top-0 right-0 md:left-72 md:w-[calc(100%-18rem)] h-20 bg-background/80 text-on-surface border-b border-outline-variant/20 backdrop-blur-md z-30 transition-all duration-300">
      <div className="flex items-center gap-3">
        <button
          className="md:hidden p-2 -ml-2 rounded-full hover:bg-surface-container-high text-secondary flex items-center justify-center transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
        <div>
          <h2 className="font-headline-md text-[18px] md:text-headline-md font-bold tracking-tight">{info.title}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant hidden sm:block">{info.subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
          <div className="w-2 h-2 rounded-full bg-tertiary blinking-dot"></div>
          System Status: All Systems Operational
        </div>
        <div className="font-label-md text-label-md text-secondary">{utcTime}</div>
        <button className="relative p-2 rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-secondary-fixed">
          <span className="material-symbols-outlined">notifications</span>
          {threatCount > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full animate-ping"></span>}
          {threatCount > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>}
        </button>
      </div>
    </header>
  );
}
