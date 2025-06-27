import { menuItems } from './data';
import MobileMenu from './MobileMenu';

function Header({
  openMenu,
  setOpenMenu
}){


  return(
    <>
      <header className='fixed top-0 z-10 w-full px-4 py-4'>
        <nav className='container flex justify-end text-white'>
          <div className='mt-5 mr-5'>
            <button
              className={`cursor-pointer md:hidden w-5`}
              onClick={() => setOpenMenu(!openMenu)}
              aria-label="Toggle Menu"
              aria-controls="nav-menu"
              aria-expanded={openMenu}
            >
             {openMenu ? <img src="/images/cross.png" alt="x"/> : <img src="/images/menu.png" alt="menu"/>}  
            </button>
  
          </div>

          <ul className='hidden space-x-4 md:flex'
            open={openMenu}
          >
            {
              menuItems.map((item) => (
                <li>
                  <a href={item.href}>{item.label}</a>
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

    </>
  );
}

export default Header;