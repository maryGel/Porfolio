import './App.css'
import { useState } from 'react'
// components
import Header from './components/Header';
import HomePage from './pages/Homepage';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import './App.css'


function App() {

  const [openMenu, setOpenMenu] = useState(); //Open menu items for mobile view

  return (
    <div
      className={`lg:mx-28 xl:mx-48`}
    >
      
      <Header
        openMenu = { openMenu }
        setOpenMenu = { setOpenMenu }
      />
      <HomePage />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
