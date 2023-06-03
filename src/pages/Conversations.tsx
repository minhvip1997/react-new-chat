import React from 'react'
import { Page } from '../utils/styles';
import ConversationsSideBar from '../components/conversations/ConversationsSideBar';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import ConversationPanel from '../components/conversations/ConversationPanel';
import mockConversation from '../_mocks_/conversations';
type Props = {}

const Conversations = (props: Props) => {
  const {id} = useParams()
  // console.log(useParams());
  return (
    <Page>

      <ConversationsSideBar conversations={mockConversation}/>
      {!id && <ConversationPanel/>}
      {/* <ConversationPanel/> */}
      <Outlet/>
    </Page>
  )
}

export default Conversations;