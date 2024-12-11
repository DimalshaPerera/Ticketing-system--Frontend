// import React from "react";
// import styles from "./systemLog.module.css";

// const SystemLog = () => {
//   return (
//     <div>
//       <div className="component-title">System Log</div>
//       <div className={styles.log}>customer added ticket</div>
//     </div>
//   );
// };

// export default SystemLog;
import React, { useEffect, useState } from "react";
import styles from "./systemLog.module.css";

interface SystemLogProps {
  isRunning: boolean;
}

interface LogEntry {
  id: number;
  message: string;
  timestamp: string;
}

const SystemLog: React.FC<SystemLogProps> = ({ isRunning }) => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let intervalId: number;

    const fetchLogs = async () => {
      try {
        const response = await fetch("http://localhost:8080/logs");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Received logs:", data); // Debug log
        setLogs(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching logs:", error);
        setError("Failed to fetch logs");
      }
    };

    // Initial fetch
    fetchLogs();

    // Set up polling if running
    if (isRunning) {
      intervalId = setInterval(fetchLogs, 2000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  return (
    <div className="component-box">
      <div className="component-title">System Log</div>
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.logContainer}>
        {logs.length === 0 ? (
          <div className={styles.noLogs}>No logs available</div>
        ) : (
          logs.map((log) => (
            <div key={log.id} className={styles.log}>
              <span className={styles.timestamp}>{log.timestamp}</span>
              <span className={styles.message}>{log.message}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SystemLog;
