import { menuItems } from './data';

function Header(){
  return(
    <>
      <header className='text-white'>
        <nav>
          <div>
            <img src="/images/menu.png"/>
          </div>

          <ul className='hidden space-x-4 md:flex'>
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
    </>
  );
}

export default Header;