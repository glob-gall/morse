import React from 'react'
import {FiHelpCircle} from 'react-icons/fi'

import {Container,Title,Nav} from './styles'

const Header: React.FC = () => {

  return(

    <Container>
      <Title>Mors .</Title>
      <Nav><button><FiHelpCircle size={28} color="#4285F4"/></button></Nav>
    </Container>
  )
  

}

export default Header