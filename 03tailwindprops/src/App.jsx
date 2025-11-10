import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss";
import Card from './components/card';
function App() {
  const [count, setCount] = useState(0)
  const myobj = {
    username : "Tarun",
    age : 21
  }
  return (
    <>
      <h1 className = 'bg-green-400 text-black p-4 rounded-4xl mb-2'> Tailwind test </h1>
      <Card username = "TarunMundhra" channel = "TarunGG" someObj = {myobj}/>
      <Card  />
    </>
  )
}

export default App
