import React,{useState,useEffect} from 'react'
import Dropdown from './components/Dropdown'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About';
import Menu from './pages/Menu';
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom';
// import Navbar from './components/Navbar'
import './App.css';

const App = () => {
   
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener('resize', hideMenu)
    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  })

  return (
    <div>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/menu" element={ <Menu />} />
          <Route path="/about" element={ <About />} />
      </Routes>
      <Footer/>
    
    </div>
  )
}

export default App