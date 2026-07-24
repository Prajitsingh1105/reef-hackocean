import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MissionControl from "./pages/MissionControl";
import FleetStatus from "./pages/FleetStatus";
import SonarMatrix from "./pages/SonarMatrix";
import ThreatAlerts from "./pages/ThreatAlerts";
import DataAnalytics from "./pages/DataAnalytics";
import Biodiversity from "./pages/Biodiversity";
import Volunteers from "./pages/Volunteers";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import { SimulationProvider } from "./context/SimulationContext";

function App() {
  return (
    <SimulationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MissionControl />} />
            <Route path="fleet" element={<FleetStatus />} />
            <Route path="sonar" element={<SonarMatrix />} />
            <Route path="threats" element={<ThreatAlerts />} />
            <Route path="analytics" element={<DataAnalytics />} />
            <Route path="biodiversity" element={<Biodiversity />} />
            <Route path="volunteers" element={<Volunteers />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SimulationProvider>
  );
}

export default App;
