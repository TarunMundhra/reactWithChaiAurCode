import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  //let counter = 15


  let [ counter , setCounter ] = useState(15)


  const addValue = () =>{
    // counter = counter + 1 
    // console.log( " value added " , counter )
    if(counter < 20)  setCounter( prevCounter => prevCounter+1)
    if(counter < 20)  setCounter( prevCounter => prevCounter+1)
    if(counter < 20)  setCounter( prevCounter => prevCounter+1)
    if(counter < 20)  setCounter( prevCounter => prevCounter+1) 
    //for case of counter+1 only in setCounter it will be taken in badge via diffing algo taken as same updation
    //no updation happens

  }

  const removeValue = () => {
    if( counter > 0 ) setCounter( counter - 1 )
  }
  return (
    <>
      <h1> Chai aur React</h1>
      <h2> Counter value : {counter} </h2>

      <button
        onClick={ addValue } 
      > Add value : {counter} </button>
      <br />
      <button
      onClick={ removeValue }
      > remove value : {counter} </button>
    </>
  )
}

export default App
