import React from "react";
import UIButton from "../Buttons/UIButton";
import styles from "./QueryHeader.module.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
function QueryHeader() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.row}>
        <p className={styles.headerText}>All Tickets</p>
        <UIButton>
          <AddCircleOutlineIcon />
          <span className={styles.btnText}>Add Query</span>
        </UIButton>
      </div>
    </div>
  );
}

export default QueryHeader;
