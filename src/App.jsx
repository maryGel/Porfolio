import Header from './components/Header';
import './App.css'
import { useState } from 'react'

function App() {

  const [openMenu, setOpenMenu] = useState(); //Open menu items for mobile view

  return (
    <div
      className={`bg-[url('/images/Background.jpg')] 
        bg-cover bg-center h-screen w-full overflow-x-clip antialiased`}
    >
      <Header
        openMenu = { openMenu }
        setOpenMenu = { setOpenMenu }
      />
    </div>
  )
}

export default App
