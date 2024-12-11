import React from "react";
import styles from "./systemLog.module.css";

const SystemLog = () => {
  return (
    <div>
      <div className="component-title">System Log</div>
      <div className={styles.log}>customer added ticket</div>
    </div>
  );
};

export default SystemLog;
