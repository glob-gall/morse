import React,{useCallback,useState,useRef,ChangeEvent} from 'react';

function App() {
  const [morse,setMorse] = useState('')
  const [text,setText] = useState('')
  const TextArea = useRef(null)
  const morseArea = useRef(null)


  const textTranslate = useCallback((e:ChangeEvent<HTMLTextAreaElement>)=>{
    setText(e.target.value)
    setMorse(e.target.value)
  },[])
  const morseTranslate = useCallback((e:ChangeEvent<HTMLTextAreaElement>)=>{
    setMorse(e.target.value)
    setText(e.target.value)
  },[])

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
