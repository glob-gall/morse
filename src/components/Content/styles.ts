import styled from 'styled-components';

export const Container = styled.div`
  margin:92px 16px 32px;
  display:flex;
  justify-content:space-evenly;
  flex-wrap:wrap;

  h2{
    width:100%;
    color:#EA920F;
    text-align:center;
    margin-bottom:16px;
  }

  div{
    background:#4285F4;
    padding: 12px;
    margin:12px;

    border-radius:5px;
    color:#EA920F;
    
    strong{
      color:#303030;
    }

    &:hover{
      box-shadow:0px 0px 12px #000;
    }
  }
`;
