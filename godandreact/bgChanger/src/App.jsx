import './App.css'
import { useState } from 'react'

function App() {

  const storage = [
    "#F3F4F6",
    "#FAF7F2",
    "#E6F2ED",
    "#EAF3FA",
    "#F2EEF7",
    "#E8F5E9",
    "#F5EFE6",
  ];

  let [color, setColor] = useState("olive")

  return (
    <div className='h-screen w-screen duration-200 transition-colors flex flex-wrap justify-center items-center' style={{ backgroundColor: color }}>
      <div className='text-4xl fixed flex justify-center top-12 font-bold items-center'>Background Color Changer Using React</div>

      <div className='fixed flex flex-wrap bottom-12 inset-x-0 justify-center bg-white m-10'>
        <button className='bg-[#F3F4F6] shadow-black rounded-2xl m-1' onClick={() => setColor(storage[0])}>first</button>
        <button className='bg-[#FAF7F2] ' onClick={() => setColor(storage[1])}>second</button>
        <button className='bg-[#E6F2ED]' onClick={() => setColor(storage[2])}>third</button>
        <button className='bg-[#EAF3FA]' onClick={() => setColor(storage[3])}>fourth</button>
        {/* <button className='bg-[]' onClick={() => setColor(storage[4])}></button> */}
        <button className='bg-[#EAF3FA]' onClick={() => setColor(storage[4])}>fifth</button>
        <button className='bg-[#E8F5E9]' onClick={() => setColor(storage[5])}>sixth</button>
        <button className='bg-[#F5EFE6]' onClick={() => setColor(storage[6])}>seventh</button>
      </div>


    </div>

  )
}

export default App
