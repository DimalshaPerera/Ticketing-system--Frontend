// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./index.css";
import "./App.css";
import ConfigSettings from "./components/ConfigSettings/configSettings";
import AvailableTickets from "./components/AvailableTickets/availableTickets";
import ControlPanel from "./components/ControlPanel/controlPanel";
import SystemLog from "./components/SystemLog/systemLog";
import CustomerVendor from "./components/CustomerVendor/customerVendor";
import { useState } from "react";

function App() {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <>
      <div className="header">
        <div className="title">Real Time Ticketing System Simulation</div>
        <span className="sub-title">
          Simulating a real time ticketing system with interactions between
          customers and vendors
        </span>
      </div>
      <div className="main-container">
        <div className="first-container">
          <ConfigSettings />
          <div>
            <AvailableTickets />
            <ControlPanel setIsRunning={setIsRunning} />
          </div>
        </div>
        <div className="sec-container">
          <SystemLog isRunning={isRunning} />
          <CustomerVendor />
        </div>
      </div>
    </>
  );
}

export default App;
