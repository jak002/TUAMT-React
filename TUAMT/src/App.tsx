import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

function App() {

  return (
    <>
    <header className="fixed top-0 flex w-full h-12 justify-center items-center bg-blue-900"
    //style={{position: 'fixed',top: 0, display:'flex', width:'100%',height:'3rem', justifyContent: 'center'}}
    >
      <nav className=' text-white flex w-full justify-start'>
        <Link to='/' className='w-24 flex justify-center'><button type='button' className=' bg-blue-950 text-white h-full w-full p-3 font-bold border-x border-blue-600'>TUAMT</button></Link>
        <Link to='/about' className='w-24 flex justify-center'><button type='button' className=' text-white h-full w-full p-3'>About</button> </Link>
      </nav>
      </header>
      <div className="py-14 mx-3 box-border">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </div>
      <footer className="fixed bottom-0 flex w-full p-2 h-12 justify-evenly items-center bg-red-900 text-white text-sm italic">
      <a href="https://www.vecteezy.com/free-vector/ak-47" className=' text-start'>Ak 47 Vectors by Vecteezy</a>
      <p className=' text-end'>Disclaimer: All measures determined by quick google search, probably not accurate.</p>
      </footer>
    </>
  )
}

export default App
