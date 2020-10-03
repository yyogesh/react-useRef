import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [counter, setCounter] = useState(0); // 1
  const previousCounterRef = useRef(); // 2
  const renderCount = useRef(1);

  const inputRef = useRef();


  useEffect(() => {
    previousCounterRef.current = counter; // 4
    renderCount.current = renderCount.current + 1;
    inputRef.current.focus();
  }, [counter])

  // 3
  return (
    <div className="App">
      <h1>Count : {counter} </h1>
      {
        typeof previousCounterRef.current !== 'undefined' &&
        <h2>Previous : {previousCounterRef.current}</h2>
      }
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => {
        setCounter(Math.ceil(Math.random() * 10)) // 5
      }}>
        Click Me
       </button>

      <h4>
        {renderCount.current}
      </h4>
    </div>
  );
}

export default App;
