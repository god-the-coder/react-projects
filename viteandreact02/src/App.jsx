import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let [counter, setCounter] = useState(0);


  function addvalue() {
    if (counter < 20) {
      setCounter(counter+1);
    }
  }

  function decvalue() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>god and react</h1>
      <h2>counter: {counter}</h2>
      <button onClick={addvalue}>increase {counter}</button>
      <br />
      <br />
      <button onClick={decvalue}>decrease {counter}</button>
    </>
  )
}

export default App
