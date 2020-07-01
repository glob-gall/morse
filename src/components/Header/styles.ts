import styled,{css} from 'styled-components'


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
`
export const ToolTip = styled.span`
    border:0;
    background:transparent;
    border-radius:50%;
    
    position:relative;
      &::after {
      width:200px;
      background-color: #4285F4;
      border-radius: 10px;
      color: #fafafa;
      display: none;
      padding: 10px 15px;
      position: absolute;
      text-align: center;
      z-index: 999;
    }

    &::before {
      background-color: #4285F4;
      content: '';
      display: none;
      position: absolute;
      width: 15px;
      height: 15px;
      z-index: 999;
    }

    &:hover::after {
      display: block;
    }

    &:hover::before {
      display: block;
    }


    &::after {
      content: "digite sua mensagem no campo  ' Texto '  para traduzir para código morse. E digite no campo  ' Morse '  para traduzir pra linguagem comum";
      bottom: 0;
      left: -70%;
      transform: translate(-50%, calc(100% + 10px));
    }

    &::before {
      bottom: 0;
      left: 50%;
      transform: translate(-50%, calc(100% + 5px)) rotate(45deg);
    }
  
`