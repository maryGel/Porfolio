import './App.css'
import { useState } from 'react'
// components
import Header from './components/Header';
import HomePage from './pages/Homepage';
import Projects from './pages/Projects';


function App() {

  const [openMenu, setOpenMenu] = useState(); //Open menu items for mobile view

  return (
    <div
      className='bg-white/80'
    >
      <Header
        openMenu = { openMenu }
        setOpenMenu = { setOpenMenu }
      />
      <HomePage />
      <Projects />
    </div>
  )
}

export default App
