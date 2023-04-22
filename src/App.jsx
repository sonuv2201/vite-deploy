import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>DEMO</h2>
      <BrowserRouter basename='/vite-deploy'>
        <header>
          <Link to='/'>Home</Link> |
          <Link to='/about'>&nbsp;About</Link> |
          <Link to='/contact'>&nbsp;Contact</Link>
        </header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
