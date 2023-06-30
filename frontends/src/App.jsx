import { useState } from 'react'
import WIP from './components/WIP'
import { Link, Route, Switch } from "wouter";
import './App.css'


import NavBar from './components/NavBar'
import MainPage from './components/MainPage'
import P404 from './components/P404';
import CommadnsPage from './components/CommandsPage';

function App() {

  return (
        <div className='flex flex-col justify-between h-screen flex-wrap'>

          <NavBar></NavBar>
          <Switch>
            <Route path='/' component={MainPage} />
            <Route path='/commands' component={CommadnsPage} />
            <Route component={P404}></Route>
          </Switch>
          
        </div>
    
  )
}

export default App
