import React,{useCallback,useState,useRef,ChangeEvent} from 'react';
import morseItems from '../../entities/morseTranslate'
import letters from '../../entities/letters'
import Header from '../../components/Header'

import {Container,ContainerTranslate} from './styles'
function Translate() {
  const [morse,setMorse] = useState('')
  const [text,setText] = useState('')
  const TextArea = useRef(null)
  const morseArea = useRef(null)

  function hasKey<O>(obj: O, key: keyof any): key is keyof O {
    return key in obj
  }

  const textTranslate = useCallback((e:ChangeEvent<HTMLTextAreaElement>)=>{
    const message = e.target.value

    const validation = /[^a-z,0-9,\s]/
    const valid = validation.test(message)
    if(valid){
      setText('')
      setMorse('')
      return
    }
    setText(message)
    const textToMorse = message.split('')
    const morseMessage = textToMorse.map(txt =>{
      if (hasKey(morseItems, txt)){
        return morseItems[txt]
      }
    })
    
    const finalMessage = morseMessage.join(' ')
    
    setMorse(finalMessage)
      
  },[])
  const morseTranslate = useCallback((e:ChangeEvent<HTMLTextAreaElement>)=>{
    const messageBeforeTranslate = e.target.value
    const validation = /[^\_,\.,\s]/
    const invalid = validation.test(messageBeforeTranslate)
    if(invalid){
      setMorse('')
      setText('')
      return
    }
    
    
    const morseArray = messageBeforeTranslate.split(" ")
    
    const arrayTranslated = morseArray.map(morseLetter =>{
      
      const morseTranslated = letters.find(letter=> letter.morse === morseLetter)
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
