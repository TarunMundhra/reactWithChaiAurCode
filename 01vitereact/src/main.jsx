import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1> my app is gg </h1>
  )
}

// const reactElement = {
//   type : 'a',
//   props : {
//     href : 'https:/google.com',
//     target : '_blank'
//   }, 
//   children : 'visit google'
// }

const anotherElement = (
  <a href = "https://google.com" target = '_blank'> visit google </a>
)

const reactElement = React.createElement( // babel(transfiler) injects it 
  'a',
  { href : '  https://google.com' , target : '_blank'},
  'click me to visit google !! '
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
