import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
  html{
    background:#303030;
  }
  *{
    font-family:Helvetica,Arial, sans-serif;
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
  }
  button{
    cursor: pointer;
  }
` 

export default GlobalStyle