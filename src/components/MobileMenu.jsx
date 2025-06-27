function MobileMenu({
  openMenu,
  menuItems
}) {
  return (
    <>
      <div 
        open={openMenu}      
        className={`
          h-screen bg-white/35 w-3/4 opacity-80 rounded-r-md
          py-12 px-5 text-base z-30 transform backdrop-blur transition-transform
          duration-300 fixed
          ${openMenu ? "translate-x-0" : "-translate-x-full"}
        `}
      >
          <ul 
            className='flex flex-col space-y-5 tracking-wide'
            id="nav-menu">
            {menuItems.map((item) => (
              <li 
                key={item.href}
                // className={`hover:translate-x-1 hover:font-semibold`}  
              >
                <a 
                className="block cursor-pointer nav-item"
                href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

      </div>      
    </>
  );
}

export default MobileMenu;