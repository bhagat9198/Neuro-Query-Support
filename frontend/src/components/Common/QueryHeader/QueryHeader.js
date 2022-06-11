import React, { useState } from "react";
import UIButton from "../Buttons/UIButton";
import styles from "./QueryHeader.module.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import QueryForm from "../QueryForm/QueryForm";
function QueryHeader() {
  const [modal, setmodal] = useState(false);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.row}>
        <p className={styles.headerText}>All Tickets</p>

        <UIButton
          onClick={() => {
            console.log("clicked");
            setmodal((prev) => !prev);
          }}
        >
          <AddCircleOutlineIcon />
          <span className={styles.btnText}>Add Query</span>
        </UIButton>
      </div>
    </div>
  );
}

export default QueryHeader;
