import React from "react";
import styles from "./QuerySummary.module.css";
function QuerySummary(props) {
  return (
    <div>
      <div className={styles.titleSection}>
        <div>
          <span>Recent queries</span>
        </div>
        <h3>{"QUERY TITLE"}</h3>
      </div>
      <div className={styles.bodySection}></div>
    </div>
  );
}

export default QuerySummary;
