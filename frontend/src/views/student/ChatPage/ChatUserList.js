import * as React from "react";
import Styles from "./ChatUserList.module.css";

export default function ImageAvatars() {
  return (
    <div className={Styles.mainwrapper}>
      
      <div className={Styles.wrapper}>
        <div className={Styles.avatar}></div>

        <div className={Styles.textWrapper}>
          <div className={Styles.name}>Name</div>
          <div className={Styles.message}>
            messagemessagemessagemessagemessage
          </div>
          </div>
          <div>
            <div className={Styles.time}>12:43</div>
            <div className={Styles.msg}> 10</div>
        </div>

      </div>
    </div>
  );
}
