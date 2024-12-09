import React from "react";
import styles from "./ControlPanel.module.css";
import { CiPause1, CiPlay1, CiRepeat } from "react-icons/ci";

const ControlPanel = () => {
  return (
    <div className="component-box">
      <h2 className="component-title">Control Panel</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.controlButton}>
          <CiPlay1 className={styles.icon} />
          <span> Start</span>
        </button>

        <button className={styles.controlButton}>
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
