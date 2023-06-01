import styled from 'styled-components';

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
export const Page =styled.div`
height: 100%;
background-color: #1a1a1a;
display: flex;
justify-content: center;
align-items:center;
`


export const DARK = '#131313'