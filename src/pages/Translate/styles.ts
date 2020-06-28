import styled from 'styled-components'

export const Container = styled.div`
  font-family:Helvetica, Arial, sans-serif;

  background:#ecfffb;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;

  textarea{
    background:#b4f1f1;
    margin:5px;

    color:#2d767f;
    font-size:22px;
    font-weight:bold;

    min-width:300px;
    min-height:300px;

    max-width:300px;
    max-height:300px;
    border:2px solid #1e6262;
    border-radius:5px;
  }
`