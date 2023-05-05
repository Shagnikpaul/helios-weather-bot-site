import { useState } from 'react'
import WIP from './components/WIP'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <div className='flex flex-col h-screen justify-between'>
      <NavBar></NavBar>
      <WIP />
      <Footer/>
    </div>
  )
}

export default App
