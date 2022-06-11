import React, { useState } from "react";
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
    <div className={styles.cardContainer}>
      <form>
        <div className={styles.innerDiv}>
          <div className={styles.heading}>
            <h3>Create Query</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Select a category</span>
            <UISelect
              label="Category"
              data={selectData}
              value={category}
              setValue={setCategory}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Enter a Summary</span>
            <InputField
              label="Summary"
              type="text"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Please provide the details of the query</span>
            <InputField
              label="description"
              type="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Select a priority</span>
            <UISelect
              label="Priority"
              value={priority}
              data={[
                { value: 0, label: "low" },
                { value: 1, label: "mediocre" },
                { value: 0, label: "High" },
              ]}
              setValue={setPriority}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Select the preferred mentor</span>
            <UISelect
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
      </form>
    </div>
  );
}

export default QueryForm;
