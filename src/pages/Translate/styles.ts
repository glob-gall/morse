import styled from 'styled-components'

export const Container = styled.div`
  font-family:Helvetica, Arial, sans-serif;

  min-height:90vh;
  display:flex;
  justify-content:center;
  align-items:center;

  flex-wrap:wrap;
`

export const ContainerTranslate = styled.div`
  h2{
    margin-top:16px;
    color:#FFAF37;
    font-size:25px;
    margin-left:36px;
    transition: background-color 0.2s;

  }
  

  textarea{
    padding:8px;
    resize:none;
    background:#d4d4d4;
    margin:0px 24px ;

    color:#444;
    font-size:22px;
    font-weight:bold;

    /* width:300px; */
    width:80%;
    min-height:300px;

    /* max-width:300px;
    max-height:300px; */
    border:2px solid #333;
    border-radius:5px;
  }
`