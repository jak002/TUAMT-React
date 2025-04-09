import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

function App() {

  return (
    <>
    <header className="fixed top-0 flex w-full h-12 justify-center items-center bg-red-900 border-b-2 border-red-300"
    //style={{position: 'fixed',top: 0, display:'flex', width:'100%',height:'3rem', justifyContent: 'center'}}
    >
      <nav className=' text-white'>
        <Link to='/'> TUAMT </Link>
        <Link to='/about'> About </Link>
      </nav>
      </header>
      <div className="py-14 max-w-4xl mx-3">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </div>
      <footer className="fixed bottom-0 flex w-full h-12 justify-evenly items-center bg-blue-900 border-t-2 border-blue-300 text-white text-sm italic">
      <a href="https://www.vecteezy.com/free-vector/ak-47">Ak 47 Vectors by Vecteezy</a>
      <p>Disclaimer: All measures determined by quick google search. Accuracy not included.</p>
      </footer>
    </>
  )
}

export default App
