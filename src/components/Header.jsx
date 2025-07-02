import { menuItems } from './data';
import MobileMenu from './MobileMenu';

function Header({
  openMenu,
  setOpenMenu
}){


  return(
    <div className={`bg-[url('/images/Background.jpg')] 
      bg-cover bg-center h-28 w-full flex antialiased`}>
      <header className='top-0 z-10 w-full'>
        <nav className='container flex justify-end font-light text-white md:justify-center '>
          <div className='mt-10 mr-10'>
            {/* Menu button */}
            <button
              className={`cursor-pointer absolute md:hidden w-5`}
              onClick={() => setOpenMenu(!openMenu)}
              aria-label="Toggle Menu"
              aria-controls="nav-menu"
              aria-expanded={openMenu}
            >
             {openMenu ? <img src="/images/cross.png" alt="x"/> : <img src="/images/menu.png" alt="menu"/>}  
            </button>
  
          </div>

          <ul className={`hidden space-x-12 bg-black/70  md:flex mt-10  px-16 py-5 rounded-lg
              `}
            open={openMenu}
          >
            {
              menuItems.map((item) => (
                <li>
                  <a href={item.href}
                    className='text-sm font-semibold lg:text-base hover:text-white hover:underline hover:font-semibold'
                  >{item.label}</a>
                </li>
              ))
            }
          </ul>
        </nav>
      </header>

      {/* overlay for mobile menu */}
      {openMenu && (
        <div
          className='fixed inset-0 z-20 opacity-20 bg-slate-500'
          onClick={() => setOpenMenu(false)}
          aria-label="Close Menu"
        />
      )}

      {/* Mobile Menu */}
      <MobileMenu 
        openMenu = {openMenu}
        setOpenMenu = {setOpenMenu}
        menuItems = {menuItems}
            
      />

    </div>
  );
}

export default Header;