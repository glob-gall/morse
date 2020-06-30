import styled from 'styled-components'

export const Container = styled.header`
  
  height:10vh;
  border-bottom:solid 1px #000;
  margin: 0 56px;
  display:flex;
  align-items:center;
`

export const Title = styled.h1`
  color:#4285F4;
  font-size:36px;
  margin-left:36px;


  transition: background-color 0.2s;

  &:hover{
    color:#3174d3;
  }
`
export const Nav = styled.div`
  margin-left:auto;
  margin-right:36px;
  button{
    border:0;
    background:transparent;
    border-radius:50%;
  }
`