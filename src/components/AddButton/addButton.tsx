import React from "react";
import { FaPlus } from "react-icons/fa";
import styles from "./addButton.module.css";

const AddButton = () => {
  return (
    <div className={styles.btn}>
      <FaPlus className={styles.icon} />
    </div>
  );
};

export default AddButton;
