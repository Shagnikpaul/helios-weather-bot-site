import { useState } from 'react'
import WIP from './components/WIP'
import './App.css'
import NavBar from './components/NavBar'

import MainPage from './components/MainPage'

function App() {

  return (
        <div className='flex flex-col justify-between h-screen flex-wrap'>
          <NavBar></NavBar>
          <MainPage className=" w-full"/>
          
        </div>
    
  )
}

export default App
