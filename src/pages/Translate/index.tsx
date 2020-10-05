import React,{useCallback,useState,useRef,ChangeEvent} from 'react';

import letters from '../../entities/letters'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import {Container,ContainerTranslate} from './styles'
import Content from '../../components/Content';
function Translate() {
  const [morse,setMorse] = useState('')
  const [text,setText] = useState('')
  const TextArea = useRef(null)
  const morseArea = useRef(null)

  const textTranslate = useCallback((e:ChangeEvent<HTMLTextAreaElement>)=>{
    const messageBeforeTranslate = e.target.value

    const validation = /[^a-z0-9\s]/i
    const invalid = validation.test(messageBeforeTranslate)
    if(invalid){
      return
    }
    setText(messageBeforeTranslate)
    
    const textArray = messageBeforeTranslate.split("")
    
    const arrayTranslated = textArray.map(textLetter =>{
      
      const textTranslated = letters.find(letter=> letter.letter === textLetter.toLowerCase())
      return textTranslated ? textTranslated.morse : " "
    })
    
    const finalMessage = arrayTranslated.join(' ')
    
    setMorse(finalMessage)
      
  },[])
  const morseTranslate = useCallback((e:ChangeEvent<HTMLTextAreaElement>)=>{
    const messageBeforeTranslate = e.target.value
    const validation = /[^-.\s]/
    const invalid = validation.test(messageBeforeTranslate)
    if(invalid){
      
      return
    }
    
    
    const morseArray = messageBeforeTranslate.split(" ")
    
    const arrayTranslated = morseArray.map(textLetter =>{
      
      const morseTranslated = letters.find(letter=> letter.morse === textLetter)
      return morseTranslated ? morseTranslated.letter : " "
    })
    
    const translate = arrayTranslated.join('')
    const morseAfterTranslate = morseArray.filter(morseLetter=> morseLetter.length <= 5).join(" ")
    
    setMorse(morseAfterTranslate)
    setText(translate)
  },[])

  return (
    <>
    <Header/>
    <Container >

      <ContainerTranslate>
        <h2>Texto</h2>
        <textarea
          ref={TextArea} 
          name="text" 
          id="text" 
          cols={30} 
          rows={10} 
          value={text} 
          onChange={textTranslate}
        />
      </ContainerTranslate>
      <ContainerTranslate>
        <h2>Morse</h2>
        <textarea
          ref={morseArea} 
          name="morse" 
          id="morse" 
          cols={30} 
          rows={10} 
          value={morse} 
          onChange={morseTranslate}
        />
      </ContainerTranslate>
    </Container>
    <Content/>
    <Footer/>
  </>
  );
}

export default Translate;
