import React, { useState } from "react";
import styles from "./QuerySummary.module.css";
import UICard from "../Card/UICard";
import UIButton from "../Buttons/UIButton";
import { TextField } from "@mui/material";
function QuerySummary(props) {
  const [comment, setComment] = useState("")
  console.log(comment)
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleSection}>
        <div>
          <span className={styles.recent}>Summary</span>
        </div>
        <div className={styles.titleDetails}>
          <p className={styles.titleText}>{props?.title || "QUERY TITLE"}</p>
          <div
            className={`${
              props.status === "open"
                ? styles.statusContainerClosed
                : styles.statusContainerOpen
            }`}
          >
            {props?.status || "Closed"}
          </div>
        </div>
      </div>
      <hr className={styles.hrStyles} />
      <div className={styles.bodySection}>
        <div className={styles.detailsSection}>
          <div>
            <p className={styles.lightText}>Created at:</p>
            <span>{props.created_at}, {props.time}</span>
          </div>
          <div>
            <p className={styles.lightText}>Assigned to:</p>
            <span>{props.assigned_to}</span>
          </div>
        </div>
        <div className={styles.description}>
          <p className={styles.lightText}>Description:</p>
          <p style={{ margin: 0, marginBottom: "2rem" }}>
            {props.description}
          </p>
        </div>
        {/* <UIButton variant="primary">Go To Query</UIButton> */}
        <div style={{width: "100%"}}>
        <TextField
        sx={{width: "100%", mb: 2}}
          id="standard-multiline-static"
          label="Leave a reply"
          variant="standard"
          multiline
          rows={4}
          onChange={(e) => setComment(e.target.value)}
        />
        <UIButton type="Primary">Add comment</UIButton>
        </div>
      </div>
    </div>
  );
}
export default QuerySummary;
