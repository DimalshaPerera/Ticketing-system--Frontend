// import React from "react";
// import styles from "./ConfigSettings.module.css";

// const ConfigSettings = () => {
//   return (
//     <div className="component-box">
//       <h2 className="component-title">Configuration Settings</h2>
//       <div className={styles.form}>
//         <div className={styles.formGroup}>
//           <label>Total Number of Tickets</label>
//           <input type="text" placeholder="Value" />
//         </div>

//         <div className={styles.formGroup}>
//           <label>Ticket Release Rate</label>
//           <input type="text" placeholder="Value" />
//         </div>

//         <div className={styles.formGroup}>
//           <label>Customer Retrieval Rate</label>
//           <input type="text" placeholder="Value" />
//         </div>

//         <div className={styles.formGroup}>
//           <label>Maximum Ticket Capacity</label>
//           <input type="text" placeholder="Value" />
//         </div>
//         <button className={styles.updateButton}>Update settings</button>
//       </div>
//     </div>
//   );
// };

// export default ConfigSettings;
// import React, { useState, useEffect } from "react";
// import styles from "./ConfigSettings.module.css";
// import { Client } from "@stomp/stompjs";

// interface Configuration {
//   totalTickets: string;
//   ticketReleaseRate: string;
//   customerRetrievalRate: string;
//   maxTicketCapacity: string;
// }

// const ConfigSettings: React.FC = () => {
//   const [config, setConfig] = useState<Configuration>({
//     totalTickets: "",
//     ticketReleaseRate: "",
//     customerRetrievalRate: "",
//     maxTicketCapacity: "",
//   });
//   const [stompClient, setStompClient] = useState<Client | null>(null);

//   useEffect(() => {
//     const client = new Client({
//       brokerURL: "ws://localhost:8080/ws",
//       onConnect: () => {
//         client.subscribe("/topic/config", (message) => {
//           const newConfig = JSON.parse(message.body);
//           setConfig(newConfig);
//         });
//         client.publish({
//           destination: "/app/config/request",
//         });
//       },
//     });

//     client.activate();
//     setStompClient(client);

//     return () => {
//       if (client) {
//         client.deactivate();
//       }
//     };
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setConfig((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     if (stompClient) {
//       stompClient.publish({
//         destination: "/app/config/update",
//         body: JSON.stringify(config),
//       });
//     }
//   };

//   return (
//     <div className="component-box">
//       <h2 className="component-title">Configuration Settings</h2>
//       <div className={styles.form}>
//         <div className={styles.formGroup}>
//           <label>Total Number of Tickets</label>
//           <input
//             type="text"
//             name="totalTickets"
//             value={config.totalTickets}
//             onChange={handleInputChange}
//             placeholder="Value"
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label>Ticket Release Rate</label>
//           <input
//             type="text"
//             name="ticketReleaseRate"
//             value={config.ticketReleaseRate}
//             onChange={handleInputChange}
//             placeholder="Value"
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label>Customer Retrieval Rate</label>
//           <input
//             type="text"
//             name="customerRetrievalRate"
//             value={config.customerRetrievalRate}
//             onChange={handleInputChange}
//             placeholder="Value"
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label>Maximum Ticket Capacity</label>
//           <input
//             type="text"
//             name="maxTicketCapacity"
//             value={config.maxTicketCapacity}
//             onChange={handleInputChange}
//             placeholder="Value"
//           />
//         </div>
//         <button className={styles.updateButton} onClick={handleSubmit}>
//           Update settings
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ConfigSettings;
// import React, { useState, useEffect } from "react";
// import styles from "./ConfigSettings.module.css";
// import axios from 'axios';

// interface Configuration {
//   totalTickets: string;
//   ticketReleaseRate: string;
//   customerRetrievalRate: string;
//   maxTicketCapacity: string;
// }

// const ConfigSettings = () => {
//   const [config, setConfig] = useState<Configuration>({
//     totalTickets: '',
//     ticketReleaseRate: '',
//     customerRetrievalRate: '',
//     maxTicketCapacity: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch configuration when component mounts and every 5 seconds
//   useEffect(() => {
//     const fetchConfig = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/api/config');
//         setConfig(response.data);
//         setError(null);
//       } catch (err) {
//         setError('Failed to fetch configuration');
//         console.error('Error fetching config:', err);
//       }
//     };

//     // Initial fetch
//     fetchConfig();

//     // Set up polling
//     const interval = setInterval(fetchConfig, 5000);

//     // Cleanup interval on unmount
//     return () => clearInterval(interval);
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setConfig(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async () => {
//     setLoading(true);
//     try {
//       await axios.post('http://localhost:8080/api/config/update', config);
//       setError(null);
//     } catch (err) {
//       setError('Failed to update configuration');
//       console.error('Error updating config:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="component-box">
//       <h2 className="component-title">Configuration Settings</h2>
//       {error && <div className={styles.error}>{error}</div>}
//       <div className={styles.form}>
//         <div className={styles.formGroup}>
//           <label>Total Number of Tickets</label>
//           <input
//             type="text"
//             name="totalTickets"
//             value={config.totalTickets}
//             onChange={handleInputChange}
//             placeholder="Value"
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label>Ticket Release Rate</label>
//           <input
//             type="text"
//             name="ticketReleaseRate"
//             value={config.ticketReleaseRate}
//             onChange={handleInputChange}
//             placeholder="Value"
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label>Customer Retrieval Rate</label>
//           <input
//             type="text"
//             name="customerRetrievalRate"
//             value={config.customerRetrievalRate}
//             onChange={handleInputChange}
//             placeholder="Value"
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label>Maximum Ticket Capacity</label>
//           <input
//             type="text"
//             name="maxTicketCapacity"
//             value={config.maxTicketCapacity}
//             onChange={handleInputChange}
//             placeholder="Value"
//           />
//         </div>
//         <button
//           className={styles.updateButton}
//           onClick={handleSubmit}
//           disabled={loading}
//         >
//           {loading ? 'Updating...' : 'Update settings'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ConfigSettings;
import React, { useState, useEffect } from "react";
import styles from "./ConfigSettings.module.css";
import axios from "axios";

interface Configuration {
  totalTickets: string;
  ticketReleaseRate: string;
  customerRetrievalRate: string;
  maxTicketCapacity: string;
}

const ConfigSettings = () => {
  const [config, setConfig] = useState<Configuration>({
    totalTickets: "",
    ticketReleaseRate: "",
    customerRetrievalRate: "",
    maxTicketCapacity: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/config");
        console.log("Received config:", response.data);
        if (response.data) {
          setConfig(response.data);
        }
        setError(null);
      } catch (err) {
        console.error("Error fetching config:", err);
        setError("Failed to fetch configuration");
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
    const interval = setInterval(fetchConfig, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfig((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/config/update",
        config
      );
      console.log("Update response:", response.data);
      setConfig(response.data);
      setError(null);
    } catch (err) {
      console.error("Error updating config:", err);
      setError("Failed to update configuration");
    } finally {
      setLoading(false);
    }
  };

  if (loading && !config.totalTickets) {
    return (
      <div className="component-box">
        <h2 className="component-title">Configuration Settings</h2>
        <div className={styles.loading}>Loading configuration...</div>
      </div>
    );
  }

  return (
    <div className="component-box">
      <h2 className="component-title">Configuration Settings</h2>
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.form}>
        <div className={styles.formGroup}>
          <label>Total Number of Tickets</label>
          <input
            type="number"
            name="totalTickets"
            value={config.totalTickets}
            onChange={handleInputChange}
            placeholder="Value"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Ticket Release Rate</label>
          <input
            type="number"
            name="ticketReleaseRate"
            value={config.ticketReleaseRate}
            onChange={handleInputChange}
            placeholder="Value"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Customer Retrieval Rate</label>
          <input
            type="number"
            name="customerRetrievalRate"
            value={config.customerRetrievalRate}
            onChange={handleInputChange}
            placeholder="Value"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Maximum Ticket Capacity</label>
          <input
            type="number"
            name="maxTicketCapacity"
            value={config.maxTicketCapacity}
            onChange={handleInputChange}
            placeholder="Value"
          />
        </div>
        <button
          className={styles.updateButton}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update settings"}
        </button>
      </div>
    </div>
  );
};

export default ConfigSettings;
