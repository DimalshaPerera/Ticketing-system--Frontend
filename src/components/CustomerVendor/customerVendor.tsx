import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import styles from "./customerVendor.module.css";
import AddButton from "../AddButton/addButton";

const CustomerVendor = () => {
  const [customerAmount, setCustomerAmount] = useState(1);
  const [vendorAmount, setVendorAmount] = useState(1);
  return (
    <div className="component-box container">
      <div className="component-title">Customers</div>
      {Array.from(Array(customerAmount)).map((_, i) => (
        <div key={i} className="component-box subcontainer">
          <div className={styles.customerItem}>
            <CiUser className={styles.icon} />
            <div className={styles.textContainer}>
              <span className={styles.iconText}>Customer 1</span>
            </div>
          </div>
        </div>
      ))}
      <div onClick={() => setCustomerAmount(customerAmount + 1)}>
        <AddButton />
      </div>

      <div className="component-title">Vendors</div>
      {Array.from(Array(vendorAmount)).map((_, i) => (
        <div key={i} className="component-box subcontainer">
          <div className={styles.customerItem}>
            <CiUser className={styles.icon} />
            <div className={styles.textContainer}>
              <span className={styles.iconText}>Vendor 1</span>
            </div>
          </div>
        </div>
      ))}
      <div onClick={() => setVendorAmount(vendorAmount + 1)}>
        <AddButton />
      </div>
    </div>
  );
};

export default CustomerVendor;
