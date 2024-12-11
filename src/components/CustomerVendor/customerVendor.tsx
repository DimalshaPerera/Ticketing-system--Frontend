// import React, { useState } from "react";
// import { CiUser } from "react-icons/ci";
// import styles from "./customerVendor.module.css";
// import AddButton from "../AddButton/addButton";

// const CustomerVendor = () => {
//   const [customerAmount, setCustomerAmount] = useState(1);
//   const [vendorAmount, setVendorAmount] = useState(1);
//   return (
//     <div className="component-box container">
//       <div className="component-title">Customers</div>
//       {Array.from(Array(customerAmount)).map((_, i) => (
//         <div key={i} className="component-box subcontainer">
//           <div className={styles.customerItem}>
//             <CiUser className={styles.icon} />
//             <div className={styles.textContainer}>
//               <span className={styles.iconText}>Customer 1</span>
//             </div>
//           </div>
//         </div>
//       ))}
//       <div onClick={() => setCustomerAmount(customerAmount + 1)}>
//         <AddButton />
//       </div>

//       <div className="component-title">Vendors</div>
//       {Array.from(Array(vendorAmount)).map((_, i) => (
//         <div key={i} className="component-box subcontainer">
//           <div className={styles.customerItem}>
//             <CiUser className={styles.icon} />
//             <div className={styles.textContainer}>
//               <span className={styles.iconText}>Vendor 1</span>
//             </div>
//           </div>
//         </div>
//       ))}
//       <div onClick={() => setVendorAmount(vendorAmount + 1)}>
//         <AddButton />
//       </div>
//     </div>
//   );
// };

// export default CustomerVendor;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiUser } from "react-icons/ci";
import styles from "./customerVendor.module.css";
import AddButton from "../AddButton/addButton";

interface Configuration {
  numOfCustomers: number;
  numOfVendors: number;
}

const CustomerVendor = () => {
  const [customerAmount, setCustomerAmount] = useState(1);
  const [vendorAmount, setVendorAmount] = useState(1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await axios.get<Configuration>(
          "http://localhost:8080/api/config"
        );
        if (response.data) {
          setCustomerAmount(response.data.numOfCustomers);
          setVendorAmount(response.data.numOfVendors);
        }
        setError(null);
      } catch (err) {
        console.error("Error fetching configuration:", err);
        setError("Failed to fetch configuration");
      }
    };

    fetchConfig();
    const interval = setInterval(fetchConfig, 5000); // Poll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="component-box container">
      {error && <div className={styles.error}>{error}</div>}

      <div className="component-title">Customers</div>
      {Array.from(Array(customerAmount)).map((_, i) => (
        <div key={i} className="component-box subcontainer">
          <div className={styles.customerItem}>
            <CiUser className={styles.icon} />
            <div className={styles.textContainer}>
              <span className={styles.iconText}>Customer {i + 1}</span>
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
              <span className={styles.iconText}>Vendor {i + 1}</span>
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
