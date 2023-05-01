import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img className='cent' src='https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F041%2F943%2F1aa1blank.jpg' ></img>
      <h1 className='heading'>Cooking™ something Interesting...</h1>
      <p className='heading'>Work in progress...</p>
    </>
  )
}

export default App
