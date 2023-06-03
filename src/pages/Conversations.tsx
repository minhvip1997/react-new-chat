import React from 'react'
import { Page } from '../utils/styles';
import ConversationsSideBar from '../components/conversations/ConversationsSideBar';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import ConversationPanel from '../components/conversations/ConversationPanel';

type Props = {}

const Conversations = (props: Props) => {
  const {id} = useParams()
  console.log(useParams());
  return (
    <Page>

      <ConversationsSideBar/>
      {!id && <ConversationPanel/>}
      {/* <ConversationPanel/> */}
      <Outlet/>
    </Page>
  )
}

export default Conversations;