import React from 'react'
import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <Link to='/'>TUAMT</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
