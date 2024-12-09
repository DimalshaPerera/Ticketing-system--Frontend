import React from "react";
import ticketsImage from "../../assets/tickets.png";
import styles from "./AvailableTickets.module.css";

const AvailableTickets = () => {
  return (
    <div className="component-box">
      <h2 className="component-title">Available Tickets</h2>
      <div className={styles.content}>
        <img src={ticketsImage} alt="Tickets" className={styles.ticketImage} />
        <div>
          <h1>2000</h1>
          <h6>tickets are available in the pool right now</h6>
        </div>
      </div>
    </div>
  );
};

export default AvailableTickets;
