import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

function App() {

  return (
    <>
      <nav>
        <Link to='/'> TUAMT </Link>
        <Link to='/about'> About </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <footer>
      <a href="https://www.vecteezy.com/free-vector/ak-47">Ak 47 Vectors by Vecteezy</a>
      </footer>
    </>
  )
}

export default App
