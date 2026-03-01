import { useState, useEffect, useCallback, useRef } from 'react'
import './App.css'
import './index.css'

function App() {
  const [lenght, setLength] = useState(8);
  const [numb, setNumb] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("gsbnnis");

  //useRef
  const passref = useRef(null);


  const passgen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numb) str += "1234567890";
    if (char) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    
    for (let i = 0; i < lenght; i++) {
      const ind = Math.floor(Math.random() * str.length);
      pass += str.charAt(ind);
    }

    setPass(pass);
  } , [lenght, numb, char, setPass]);

  const CopyPassOnClipBoard = useCallback(() => {
    window.navigator.clipboard.writeText(pass);

    alert("password copied");

    // const popup = document.getElementById("popup");
    // popup.style.display = "block";

    // setTimeout(() => {
    //   popup.style.display = "none";
    // }, 2000);

  }, [pass])

  useEffect(() => {
    passgen();
  }, [passgen])

  console.log(pass);

  return (
    <>
      <h1 className='text-center text-5xl'>Password Generator</h1>
      <div className='w-[700px] bg-gray-600 h-[150px] m-4 border border-black rounded-xl'>
        <div className='input-bar flex justify-center w-full h-[50%] mt-4'>
            <input className='w-[500px] h-[50px] text-black' ref={passref} placeholder='password' type="text" name="password" id="password" value={pass} readOnly/>
            <button onClick={CopyPassOnClipBoard} className='copy w-[100px] h-[50px] bg-blue-500 border border-gray-500 rounded-md text-xl'>COPY</button>
        </div>  
        <div className='input-slide flex justify-center w-full h-[50%] text-[20px]'>
            <input type="range" min={6} max={20} value={lenght} name="slide" id="input-slide" className='m-1 cursor-pointer' onChange={(e) => setLength(e.target.value)}/>
            <label htmlFor="input-slide" className='m-1 flex justify-center items-center'>lenght: {lenght}</label>

            <input type="checkbox" name="numbers" id="numbers" className='m-1' value={numb} onChange={() => setNumb((numb) => !numb)}/>
            <label className='flex justify-center items-center m-1' htmlFor="numbers">Numbers</label>

            <input type="checkbox" name="characters" value={char} onChange={() => setChar((char) => !char)} id="characters" className='m-1'/>
            <label className='flex justify-center items-center m-1' htmlFor="characters">Characters</label>  
        </div>  
      </div>
      
    </>
  )
}

export default App
