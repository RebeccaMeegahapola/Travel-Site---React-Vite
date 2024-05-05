import { useState } from 'react';
import '../styles/Navbar.css';
import { MenuItems } from './MenuItems';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
      <nav className='NavbarItems'>
        <img src={Logo} alt='' className='navbar-logo'/>

        <div className='menu-icons' onClick={handleClick}>
          <i className={clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
        </div>

        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            ))}
            
            <Link to='/register'>
                <button type="button">
                  Register
                </button>
            </Link>
        </ul>
      </nav>
    
  )
}

export default Navbar