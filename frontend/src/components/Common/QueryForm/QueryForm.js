import React, { useState } from "react";
import UIButton from "../Buttons/UIButton";
import InputField from "../InputField/InputField";
import UISelect from "../Select/UISelect";
import styles from "./QueryForm.module.css";
const selectData = [
  { value: 0, label: "Java" },
  { value: 1, label: "JavaScript" },
  { value: 2, label: "Python" },
];
function QueryForm() {
  const [summary, setSummary] = useState();
  const [category, setCategory] = useState();
  const [priority, setPriority] = useState();
  const [description, setDescription] = useState();
  const [assignedTo, setAssignedTo] = useState();

  return (
    <div className={styles.backDrop}>
      <div className={styles.cardContainer}>
        <form>
          <div className={styles.innerDiv}>
            <div className={styles.heading}>
              <h3>Create Query</h3>
            </div>
            <div className={styles.topicSection}>
              <div className={styles.topic}>
                <span>Topic</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#7e8e9f", fontWeight: "500" }}>
                  Select a category
                </span>
                <UISelect
                  label="Category"
                  data={selectData}
                  value={category}
                  setValue={setCategory}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marinTop: "5px",
                }}
              >
                <span style={{ color: "#7e8e9f", fontWeight: "500" }}>
                  Select the preferred mentor
                </span>
                <UISelect
                  sx={{ margin: 0 }}
                  label="Assign To"
                  value={assignedTo}
                  data={[
                    { value: 1, label: "teacher1" },
                    { value: 2, label: "teacher2" },
                  ]}
                  setValue={setAssignedTo}
                />
              </div>
            </div>
            <div
              style={{
                margin: "10px",
                width: "100%",
                borderBottom: "2px solid #dedede",
              }}
            ></div>

            <div className={styles.summarySection}>
              <div className={styles.topic}>
                <span>Summary</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#7e8e9f", fontWeight: "500" }}>
                  Enter a Summary
                </span>
                <InputField
                  label="Summary"
                  type="text"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#7e8e9f", fontWeight: "500" }}>
                  Please provide the details of the query
                </span>
                <InputField
                  label="Description"
                  type="textarea"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#7e8e9f", fontWeight: "500" }}>
                  Select a priority
                </span>
                <UISelect
                  label="Priority"
                  value={priority}
                  data={[
                    { value: 0, label: "low" },
                    { value: 1, label: "mediocre" },
                    { value: 2, label: "High" },
                  ]}
                  setValue={setPriority}
                />
              </div>
            </div>
            <UIButton type="primary">Create Query</UIButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QueryForm;
