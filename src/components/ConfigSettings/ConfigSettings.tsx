import React from "react";
import styles from "./ConfigSettings.module.css";

const ConfigSettings = () => {
  return (
    <div className="component-box">
      <h2 className="component-title">Configuration Settings</h2>
      <div className={styles.form}>
        <div className={styles.formGroup}>
          <label>Total Number of Tickets</label>
          <input type="text" placeholder="Value" />
        </div>

        <div className={styles.formGroup}>
          <label>Ticket Release Rate</label>
          <input type="text" placeholder="Value" />
        </div>

        <div className={styles.formGroup}>
          <label>Customer Retrieval Rate</label>
          <input type="text" placeholder="Value" />
        </div>

        <div className={styles.formGroup}>
          <label>Maximum Ticket Capacity</label>
          <input type="text" placeholder="Value" />
        </div>
        <button className={styles.updateButton}>Update settings</button>
      </div>
    </div>
  );
};

export default ConfigSettings;
