import React,{useCallback,useState,useRef,ChangeEvent} from 'react';

import letters from '../../entities/letters'
import Header from '../../components/Header'

import {Container,ContainerTranslate} from './styles'
function Translate() {
  const [morse,setMorse] = useState('')
  const [text,setText] = useState('')
  const TextArea = useRef(null)
  const morseArea = useRef(null)

  const textTranslate = useCallback((e:ChangeEvent<HTMLTextAreaElement>)=>{
    const messageBeforeTranslate = e.target.value

    const validation = /[^a-z0-9\s]/
    const invalid = validation.test(messageBeforeTranslate)
    if(invalid){
      return
    }
    setText(messageBeforeTranslate)
    
    const textArray = messageBeforeTranslate.split("")
    
    const arrayTranslated = textArray.map(textLetter =>{
      
      const textTranslated = letters.find(letter=> letter.letter === textLetter)
      return textTranslated ? textTranslated.morse : " "
    })
    
    const finalMessage = arrayTranslated.join(' ')
    
    setMorse(finalMessage)
      
  },[])
  const morseTranslate = useCallback((e:ChangeEvent<HTMLTextAreaElement>)=>{
    const messageBeforeTranslate = e.target.value
    const validation = /[^_.\s]/
    const invalid = validation.test(messageBeforeTranslate)
    if(invalid){
      
      return
    }
    
    
    const morseArray = messageBeforeTranslate.split(" ")
    //   .map(morseLetter=>{
    //     return (morseLetter.length > 5) ? `${morseLetter} ` : morseLetter
    //   })
    // console.log(morseArray);
    
    const arrayTranslated = morseArray.map(textLetter =>{
      
      const morseTranslated = letters.find(letter=> letter.morse === textLetter)
      return morseTranslated ? morseTranslated.letter : " "
    })
    
    const translate = arrayTranslated.join('')
    setMorse(messageBeforeTranslate)
    setText(translate)
  },[])

  return (
    <>
    <Header/>
    <Container >

      <ContainerTranslate>
        <h3>Frase</h3>
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
        <h3>Morse</h3>
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
  </>
  );
}

export default Translate;
