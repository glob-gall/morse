import React from 'react'
import {FiHelpCircle} from 'react-icons/fi'

import {Container,Title,Nav,ToolTip} from './styles'

const Header: React.FC = () => {

  return(

    <Container>
      <Title>Mors .</Title>
      <Nav>
        <ToolTip>
          <FiHelpCircle size={28} color="#4285F4"/>
        </ToolTip>
      </Nav>
    </Container>
  )
  

}

export default Header