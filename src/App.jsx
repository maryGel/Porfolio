import './App.css'
import { useState } from 'react'
// components
import Header from './components/Header';
import HomePage from './pages/Homepage';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import './App.css'


function App() {

  const [openMenu, setOpenMenu] = useState(); //Open menu items for mobile view

  return (
    <>
      <div className={`lg:mx-28 xl:mx-48`}>
        <Header
          openMenu = { openMenu }
          setOpenMenu = { setOpenMenu }
        />
        <HomePage />
        <Projects />
        <Skills />
        <AboutMe />
        <Contact />  
      </div>
      
        {/* arrow up */}
        <div className='fixed z-50 bottom-5 right-5'>
          <a href="#" className='rounded-full shadow-2xl cursor-pointer  hover:bg-gray-200'>
          <img className='w-12 h-12 p-3 mx-auto bg-gray-100 rounded-full cursor-pointer' src="./images/contact/upload.png" />
          </a>
        </div>  
    </>
   
  )
}

export default App
