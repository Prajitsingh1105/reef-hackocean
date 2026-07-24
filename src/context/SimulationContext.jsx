import React, { createContext, useState, useEffect, useContext } from 'react';

const SimulationContext = createContext(null);

export function SimulationProvider({ children }) {

  const [utcTime, setUtcTime] = useState(new Date().toISOString().substring(11, 19) + " UTC");
  
  const [activeDrones, setActiveDrones] = useState(142);
  const [apiCalls, setApiCalls] = useState(1200000); 
  const [threatCount, setThreatCount] = useState(3);
  
  const [droneAlphaBattery, setDroneAlphaBattery] = useState(84);
  const [droneBetaBattery, setDroneBetaBattery] = useState(62);
  

  useEffect(() => {
    const timer = setInterval(() => {
    
      const now = new Date();
      setUtcTime(now.toISOString().substring(11, 19) + " UTC");
      
  
      setApiCalls(prev => prev + Math.floor(Math.random() * 50));
      
  
      if (Math.random() > 0.8) {
        setDroneAlphaBattery(prev => Math.max(0, prev - 1));
      }
      if (Math.random() > 0.7) {
        setDroneBetaBattery(prev => Math.max(0, prev - 1));
      }
      
    
      if (Math.random() > 0.98) {
        setThreatCount(prev => prev + (Math.random() > 0.5 ? 1 : -1));
        if (threatCount < 0) setThreatCount(0);
      }
      
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <SimulationContext.Provider value={{
      utcTime,
      activeDrones,
      apiCalls,
      threatCount,
      droneAlphaBattery,
      droneBetaBattery
    }}>
      {children}
    </SimulationContext.Provider>
  );
}

export function useSimulation() {
  return useContext(SimulationContext);
}
