import React from 'react';

import letters from '../../entities/letters'
import { Container } from './styles';

const Content: React.FC = () => {
  return (
    <Container>
      <h2>Tabela Morse</h2>
      {letters.map(letter=> <div><strong>{letter.letter}</strong> / <strong>{letter.morse}</strong></div>)}
    </Container>
  );
};

export default Content;
