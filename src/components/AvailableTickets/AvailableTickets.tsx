// import React from "react";
// import ticketsImage from "../../assets/tickets.png";
// import styles from "./availableTickets.module.css";

// const AvailableTickets = () => {
//   return (
//     <div className="component-box">
//       <h2 className="component-title">Available Tickets</h2>
//       <div className={styles.content}>
//         <img src={ticketsImage} alt="Tickets" className={styles.ticketImage} />
//         <div>
//           <h1>2000</h1>
//           <h6>tickets are available in the pool right now</h6>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AvailableTickets;
import React, { useState, useEffect } from "react";
import axios from "axios";
import ticketsImage from "../../assets/tickets.png";
import styles from "./availableTickets.module.css";

const AvailableTickets = () => {
  const [availableTickets, setAvailableTickets] = useState(0);

  useEffect(() => {
    const fetchAvailableTickets = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/ticketpool/available"
        );
        setAvailableTickets(response.data);
      } catch (err) {
        console.error("Error fetching available tickets:", err);
      }
    };

    // Initial fetch
    fetchAvailableTickets();

    // Poll every 5 seconds
    const interval = setInterval(fetchAvailableTickets, 5000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="component-box">
      <h2 className="component-title">Available Tickets</h2>
      <div className={styles.content}>
        <img src={ticketsImage} alt="Tickets" className={styles.ticketImage} />
        <div>
          <h1>{availableTickets}</h1>
          <h6>tickets are available in the pool right now</h6>
        </div>
      </div>
    </div>
  );
};

export default AvailableTickets;
