import React from 'react'
import { ConversationsChanelPageStyled } from '../utils/styles/index'
import { useParams, useSearchParams } from 'react-router-dom';
type Props = {}


const ConversationsChanelPage = (props: Props) => {
  console.log(useParams());
  
  return (
    <ConversationsChanelPageStyled>
      Chanel PageChanel PageChanel PageChanel PageChanel Page
      Chanel PageChanel PageChanel PageChanel Page
    </ConversationsChanelPageStyled>
  )
}

export default ConversationsChanelPage;