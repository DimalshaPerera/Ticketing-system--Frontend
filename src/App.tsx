// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./index.css";
import "./App.css";
import ConfigSettings from "./components/ConfigSettings/ConfigSettings";
import AvailableTickets from "./components/AvailableTickets/AvailableTickets";
import ControlPanel from "./components/ControlPanel/ControlPanel";

function App() {
  // const [count, setCount] = useState(0)

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
            <ControlPanel />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
