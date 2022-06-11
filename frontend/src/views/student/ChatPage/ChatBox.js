import React from 'react'
import Styles from './ChatBoxStyles.module.css'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
function ChatBox() {

  const guestChat = () => {
    return (
      <div className={Styles.mainWrapper}>
        <div className={Styles.wrapper}>
          <div className={Styles.avatarWrapper}>
            <div className={Styles.avatar}></div>
          </div>
          <div className={Styles.guestMessage}>Test messagef a fews few g e geg reg reg erg reg hrshedgvdrgve gea wg eag are
        <div className={Styles.time}>23:00</div></div></div>
        
      </div>
    )
  }
  const userChat = () => {
    return (
      <div className={Styles.mainUserWrapper}>
        <div className={Styles.userWrapper}>
          <div className={Styles.avatarWrapper}>
            {/* <div className={Styles.avatar}></div> */}
          </div>
          <div className={Styles.userMessage}>Test messagef a fews few g e geg reg reg erg reg hrshedgvdrgve gea wg eag are<div className={Styles.timeUser}>23:00</div></div>
        </div>
        
      </div>
    )
  }
  return (
    <div>
      <div className='Header'>

      </div>
      <div className='ChatBox'>
        {guestChat()}
        {userChat()}
        {userChat()}
        {guestChat()}
        {userChat()}
        {guestChat()}
        {userChat()}
        {guestChat()}
        {guestChat()}
        {userChat()}
        <div className={Styles.inputBoxStyle}>
          <input className={Styles.inputBox} />
          {/* <div className={Styles.iconContainer}> */}
            <SendRoundedIcon color='primary' sx={{ cursor: "pointer" }} />
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default ChatBox