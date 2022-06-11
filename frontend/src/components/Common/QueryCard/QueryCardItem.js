import React from "react";
import styles from "./QueryCardItem.module.css";
function QueryCardItem(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.upperContainer}>
        <p className={styles.titleText}>TITLE OF QUERY</p>
        <div
          className={` ${
            props.status === "open"
              ? styles.statusContainerOpen
              : styles.statusContainerClosed
          }`}
        >
          <span>{"Open"}</span>
        </div>
      </div>
      <div className={styles.lowerContainer}>
        <div>
          <p className={styles.categoryText}>Category of problem</p>
        </div>
        <div>
          <p className={styles.dateText}>Date30/02/21 00:00 AM</p>
        </div>
      </div>
    </div>
  );
}

export default QueryCardItem;
