import React from 'react'

import {ConversationsSideBarStyle} from '../../utils/styles/index'
import {TbEdit} from 'react-icons/tb';
import {ConversationSidebarItem,ConversationSidebarContainer, ConversationSidebarHeader} from '../../utils/styles/index'
import { ConversationType } from '../../utils/type';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
type Props = {
  conversations: ConversationType[]
}

const ConversationsSideBar: React.FC<Props> = ({conversations}) => {
  const navigate = useNavigate()
  return (
    <ConversationsSideBarStyle>
      <ConversationSidebarHeader>
        <h1>Conversations</h1>
        <TbEdit size={24}/>
      </ConversationSidebarHeader>
      <ConversationSidebarContainer>
        {conversations.map((conversation, key)=>
        <ConversationSidebarItem key={key} onClick={()=> navigate(`/conversations/${conversation.id}`)}>
          <div className={styles.conversationAvatar}></div>
          <div>
            <span className={styles.conversationName}>{conversation.name}</span>
            <span className={styles.conversationLastMessage}>{conversation.lastMessage}</span>
          </div>
          
        </ConversationSidebarItem>
        )}
      </ConversationSidebarContainer>
    </ConversationsSideBarStyle>
  )
}

export default ConversationsSideBar;