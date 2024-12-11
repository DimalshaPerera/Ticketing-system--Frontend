// import React from "react";
// import styles from "./ControlPanel.module.css";
// import { CiPause1, CiPlay1, CiRepeat } from "react-icons/ci";

// const ControlPanel = () => {
//   return (
//     <div className="component-box">
//       <h2 className="component-title">Control Panel</h2>
//       <div className={styles.buttonContainer}>
//         <button className={styles.controlButton}>
//           <CiPlay1 className={styles.icon} />
//           <span> Start</span>
//         </button>

//         <button className={styles.controlButton}>
//           <CiPause1 className={styles.icon} />
//           <span> Stop</span>
//         </button>

//         <button className={styles.controlButton}>
//           <CiRepeat className={styles.icon} />
//           <span>Reset</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ControlPanel;
import React, { useState } from "react";
import styles from "./ControlPanel.module.css";
import { CiPause1, CiPlay1, CiRepeat } from "react-icons/ci";

const ControlPanel = () => {
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div className="component-box">
      <h2 className="component-title">Control Panel</h2>
      <div className={styles.statusLine}>
        {" "}
        <small
          className={`${styles.status} ${
            isRunning ? styles.running : styles.stopped
          }`}
        >
          Status: {isRunning ? "Running" : "Stopped"}
        </small>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.controlButton} onClick={handleStart}>
          <CiPlay1 className={styles.icon} />
          <span> Start</span>
        </button>

        <button className={styles.controlButton} onClick={handleStop}>
          <CiPause1 className={styles.icon} />
          <span> Stop</span>
        </button>

        <button className={styles.controlButton}>
          <CiRepeat className={styles.icon} />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
