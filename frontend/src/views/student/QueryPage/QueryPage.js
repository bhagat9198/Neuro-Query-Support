import { Modal } from "@mui/material";
import React from "react";
import BodyLayout from "../../../components/BodyLayout";
import QueryCardItem from "../../../components/Common/QueryCard/QueryCardItem";
import QueryForm from "../../../components/Common/QueryForm/QueryForm";
import QueryHeader from "../../../components/Common/QueryHeader/QueryHeader";
import QuerySummary from "../../../components/Common/QuerySummary/QuerySummary";
import styles from "./QueryPage.module.css";
function QueryPage() {
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
          <QueryCardItem />
          <QueryCardItem />
          <QueryCardItem />
          <QueryCardItem />
          <QueryCardItem />
          <QueryCardItem />
          <QueryCardItem />
        </div>
        <div className={styles.QueryDetails}>
          <QuerySummary
            title=""
            description=""
            createdAt=""
            assignedTo=""
            status=""
          />
        </div>
      </div>
    </BodyLayout>
  );
}

export default QueryPage;
