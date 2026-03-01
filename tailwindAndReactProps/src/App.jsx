import { useState } from 'react'
import './App.css'
import Card1 from './Card'
import Card2 from './card2'

function App() {

  let obj = {
    name: "utkarsh",
    age: 20
  }
  
  let arr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-red-400 rounded-xl p-4 mb-4'>god ninja</h1>
      <Card1/>
      <Card1 name = "godninja" age = "18" mentor = "hanuman" myobj= {obj} myarr= {arr}/>

    </>
  )
}

export default App

