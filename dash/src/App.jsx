import { useState } from 'react'
import './App.css'
import List from './components/List'
import Card from './components/Card'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className='app'>
      <h1>AppName</h1>
      <div className='appbody'>
        <div className='sidebar'>
          <NavBar />
        </div>
        <div className='page'>
          <div className='cards'>
            <Card />
            <Card />
            <Card />
          </div>
          <List />
        </div>
      </div>
    </div>
  )
}

export default App
