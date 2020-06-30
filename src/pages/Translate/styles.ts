import styled from 'styled-components'

export const Container = styled.div`
  font-family:Helvetica, Arial, sans-serif;

  height:90vh;
  display:flex;
  justify-content:center;
  align-items:center;
`

export const ContainerTranslate = styled.div`
  h3{
    color:#ff9000;
    font-size:25px;
    margin-left:36px;
    transition: background-color 0.2s;

    &:hover{
      color:#cc7300;
    }
  }

  textarea{
    background:#fdfdfd;
    margin:5px;

    color:#444;
    font-size:22px;
    font-weight:bold;

    min-width:300px;
    min-height:300px;

    max-width:300px;
    max-height:300px;
    border:2px solid #333;
    border-radius:5px;
  }
`