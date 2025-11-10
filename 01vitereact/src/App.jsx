import { useState } from 'react'
import Chai from './Chai.jsx'

function App() {
  const [count, setCount] = useState(0)

  const username = " chai aur Tarun "
  return (
    <>
    <Chai/>
    <h1> this is your homepage you're {username} </h1> 
    //curly braces here is evaluated expression( interview perspective) gives final outcome not javascript code

    <p> take para </p>
    </>
  )
}

export default App
