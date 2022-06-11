import React from "react";
import styles from "./QuerySummary.module.css";
import UICard from "../Card/UICard";
import UIButton from "../Buttons/UIButton";
function QuerySummary(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleSection}>
        <div>
          <span className={styles.recent}>Recent queries</span>
        </div>
        <div className={styles.titleDetails}>
          <p className={styles.titleText}>{"QUERY TITLE"}</p>
          <div
            className={`${
              props.status === "open"
                ? styles.statusContainerClosed
                : styles.statusContainerOpen
            }`}
          >
            {"Closed"}
          </div>
        </div>
      </div>
      <hr className={styles.hrStyles} />
      <div className={styles.bodySection}>
        <div className={styles.detailsSection}>
          <div>
            <p className={styles.lightText}>Created at:</p>
            <span>02/09/2021, 2:54 AM</span>
          </div>
          <div>
            <p className={styles.lightText}>Assigned to:</p>
            <span>Atul Singh</span>
          </div>
        </div>
        <div className={styles.description}>
          <p className={styles.lightText}>Description:</p>
          <p style={{ margin: 0, marginBottom: "2rem" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </div>
        <UIButton variant="primary">Go To Query</UIButton>
      </div>
    </div>
  );
}
export default QuerySummary;
