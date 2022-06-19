import * as React from "react";
import { getMaxText } from "../../../util";
import Styles from "./ChatUserList.module.css";

export default function ImageAvatars() {
  return (
    <div className={Styles.mainwrapper}>

      <div className={Styles.wrapper}>
        <div>
          <div className={Styles.avatar}></div>
        </div>
        <div className={Styles.textWrapper}>
          <div className={Styles.name}>Namevdsdsvsdvdsvsd</div>
          <div className={Styles.message}>
            {getMaxText("testcccccccccccs fesggggggggggggg rrrrrrrrrrrrrrrrgd g rdhreheher", 35)}
          </div>
        </div>
        <div className={Styles.timeNotificationWrapper}>
          <div className={Styles.time}>12:43</div>
          <div className={Styles.msg}> 10</div>
        </div>

      </div>
    </div>
  );
}
