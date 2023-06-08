import styled from 'styled-components';
import { PageProps } from './styleType';

export const SIDEBAR_WIDTH =250;

export const InputField = styled.input`
font-size: 18px;
outline: none;
border: none;
color: white;
font-family: 'Inter';
width: 100%;
box-sizing: border-box;
background-color: inherit;
margin:  4px 0;
padding: 0;

`;
export const InputContainer = styled.div`
background-color: #131313;
padding: 12px 16px;
border-radius: 10px;
width: 100%;
box-sizing: border-box;
`;

export const InputLabel = styled.label`

font-size: 14px;
margin : 4px 0;
color: '#8f8f8f'
`;

export const Button = styled.button`
width: 100%;
background-color: #2b09ff;
color: #fff;
border: none;
outline: none;
font-family: 'Inter';
font-size: 16px;
border-radius: 10px;
padding: 25px 0;
font-weight: 500;
transition: 250ms background-color ease;
transition: 550ms border ease;
&:focus{
    background-color: #4f34ff;
    border: 2px solid #ffffff;
}
&:hover{
    cursor: pointer;
    background-color: #3415ff;
}
&:active{
    background-color: #3a1cff;
}
`;
export const Page =styled.div<PageProps>`
height: 100%;
background-color: #1a1a1a;
display: ${(props)=>props.display};
justify-content:  ${(props)=>props.justifyContent};
align-items: ${(props)=>props.alignItems};
`
export const ConversationsSideBarStyle = styled.aside`
background-color: #1a1a1a;
height: 100%;
width: ${SIDEBAR_WIDTH}px;
position: absolute;
top: 0px;
left: 0px;
border-right: 1px solid #5454543d;
overflow-y: scroll;
&::-webkit-scrollbar{
    width: 5px;
    height: 5px;
}
&::-webkit-scrollbar-thumb{
    background-color: #2d2d2d;
}
`;

export const ConversationsChanelPageStyled =styled.div`
height: 100%;
margin-left: ${SIDEBAR_WIDTH}px;
`;
export const ConversationSidebarItem =styled.div`
display: flex;
align-items: center;
gap:20px;
padding: 10px 20px;
border-bottom: 1px solid #fff;
box-sizing: border-box;
background-color: #5454543d;
`
export const ConversationSidebarContainer =styled.div`
margin-top: 100px;
`
export const ConversationSidebarHeader =styled.header`
position: fixed;
top: 0;
left: 0;

width:${SIDEBAR_WIDTH}px;   
box-sizing: border-box; 
background-color: #151515;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    align-items: center;
    border-bottom: 1px solid #5454543d;
    & h1{
        font-weight: 400;
    }
`
export const DARK = '#131313'