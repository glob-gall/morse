import React,{useCallback,useState,useRef,ChangeEvent} from 'react';
import {Container} from './styles/App'
import morseItems from './morseTranslate'
import GlobalStyle from './styles/Global'

function App() {
  const [morse,setMorse] = useState('')
  const [text,setText] = useState('')
  const TextArea = useRef(null)
  const morseArea = useRef(null)

  function hasKey<O>(obj: O, key: keyof any): key is keyof O {
    return key in obj
  }

  const textTranslate = useCallback((e:ChangeEvent<HTMLTextAreaElement>)=>{
    const message = e.target.value

    const validation = /[a-z,0-9]/
    const valid = validation.test(message)
    if(!valid){
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
    const message = e.target.value
    const validation = /[^\_,\.]/
    const invalid = validation.test(message)
    if(invalid){
      setMorse('')
      setText('')
    }else{
      setMorse(message)
      setText(message)
    }
  },[])

  return (
    <Container className="App">
      <textarea
        ref={TextArea} 
        name="text" 
        id="text" 
        cols={30} 
        rows={10} 
        value={text} 
        onChange={textTranslate}
      />

      <textarea
        ref={morseArea} 
        name="morse" 
        id="morse" 
        cols={30} 
        rows={10} 
        value={morse} 
        onChange={morseTranslate}
      />
      <GlobalStyle/>
    </Container>
  );
}

export default App;
