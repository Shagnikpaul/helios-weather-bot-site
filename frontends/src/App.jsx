import { useState } from 'react'
import WIP from './components/WIP'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/footer'

function App() {

  return (
    <div className='h-full'>
      <NavBar></NavBar>
      <WIP />
      <Footer />
    </div>
  )
}

export default App
