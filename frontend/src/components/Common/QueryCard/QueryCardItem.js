import React from "react";
import styles from "./QueryCardItem.module.css";
function QueryCardItem({ title, description, created_at, time, assigned_to, status, category, onClick }) {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={styles.upperContainer}>
        <p className={styles.titleText}>{title}</p>
        <div
          className={` ${
            status === "open"
              ? styles.statusContainerOpen
              : styles.statusContainerClosed
          }`}
        >
          <span>{status}</span>
        </div>
      </div>
      <div className={styles.lowerContainer}>
        <div>
          <p className={styles.categoryText}>{category}</p>
        </div>
        <div>
          <p className={styles.dateText}>
            <span>Date:</span>{created_at} {time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default QueryCardItem;
