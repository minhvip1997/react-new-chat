import React from 'react'

import {ConversationsSideBarStyle} from '../../utils/styles/index'
import {TbEdit} from 'react-icons/tb';
type Props = {}

const ConversationsSideBar = (props: Props) => {
  return (
    <ConversationsSideBarStyle>
      <header>
        <h1>Conversations</h1>
        <TbEdit size={24}/>
      </header>
    </ConversationsSideBarStyle>
  )
}

export default ConversationsSideBar;