import React, { useState } from "react";
import { Modal } from "@mui/material";
import BodyLayout from "../../../components/BodyLayout";
import QueryCardItem from "../../../components/Common/QueryCard/QueryCardItem";
import QueryForm from "../../../components/Common/QueryForm/QueryForm";
import QueryHeader from "../../../components/Common/QueryHeader/QueryHeader";
import QuerySummary from "../../../components/Common/QuerySummary/QuerySummary";
import styles from "./QueryPage.module.css";
function QueryPage() {
  const query_data = [
    {
      title: "TITLE OF QUERY",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      created_at: "02/09/2021",
      time: "2:54 AM",
      category: "JavaScript",
      assigned_to: "Atul Singh",
      status: "closed"
    }, {
      title: "TITLE 2",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      created_at: "02/09/2021",
      time: "2:34 AM",
      category: "JavaScript",
      assigned_to: "Atgdgdgdl Singh",
      status: "closed"
    }, {
      title: "TITLE OF QUERY",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      created_at: "02/09/2021",
      time: "2:54 AM",
      category: "JavaScript",
      assigned_to: "Atul Singh",
      status: "closed"
    }, {
      title: "TITLE OF QUERY",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      created_at: "02/09/2021",
      time: "2:54 AM",
      category: "JavaScript",
      assigned_to: "Atul Singh",
      status: "closed"
    }, {
      title: "TITLE OF QUERY",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      created_at: "02/09/2021",
      time: "2:54 AM",
      category: "JavaScript",
      assigned_to: "Atul Singh",
      status: "closed"
    }, {
      title: "TITLE OF QUERY",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      created_at: "02/09/2021",
      time: "2:54 AM",
      category: "JavaScript",
      assigned_to: "Atul Singh",
      status: "closed"
    }
  ]
  const [queryValue, setQueryValue] = useState(query_data[0])
  const [showModal, setShowModal] = React.useState(false);

  return (
    <BodyLayout>
      <QueryHeader setModal={setShowModal} />
      {/* <QueryForm /> */}
      <Modal
        sx={{ mt: 5 }}
        open={showModal}
        onClose={() => setShowModal(false)}
      >
        <QueryForm setModal={setShowModal} />
      </Modal>

      <div className={styles.wrapperDiv}>
        <div className={styles.QueryList}>
          {query_data.map((query, index) => (
            <QueryCardItem title={query.title} category={query.category} description={query.description} created_at={query.created_at} time={query.time} assigned_to={query.assigned_to} status={query.status} onClick={() => setQueryValue(query_data[index])} />
          ))}
        </div>
        <div className={styles.QueryDetails}>
          <QuerySummary
            title={queryValue.title}
            description={queryValue.description}
            createdAt={queryValue.created_at}
            assignedTo={queryValue.assigned_to}
            status={queryValue.status}
            created_at={queryValue.created_at}
            assigned_to={queryValue.assigned_to}
            time={queryValue.time}
          />
        </div>
      </div>
    </BodyLayout>
  );
}

export default QueryPage;
