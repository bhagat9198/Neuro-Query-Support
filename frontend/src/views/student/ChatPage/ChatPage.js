import React from 'react'
import BodyLayout from '../../../components/BodyLayout'
import ChatBox from './ChatBox'
import ChatUserList from "./ChatUserList"
import ChatBoxStyles from './ChatBoxStyles.module.css'

function ChatPage() {
  return (
    <BodyLayout>
      <div className={ChatBoxStyles.chatPageContainer}>
        <div className={ChatBoxStyles.chatUserList}>
          <ChatUserList />
          <ChatUserList />
          <ChatUserList />
          <ChatUserList />
          <ChatUserList />
          <ChatUserList />
          <ChatUserList />
          <ChatUserList />
          <ChatUserList />
          <ChatUserList />
        </div>
        <div className={ChatBoxStyles.chatArea}>
          <ChatBox />
        </div>
      </div>
    </BodyLayout>
  )
}

export default ChatPage