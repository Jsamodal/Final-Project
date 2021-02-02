import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../images/logo.png'


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='nav-logo' onClick={closeMobileMenu}>
            <img  className='crave-logo'src={Logo} />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fa fas-times' : 'fa fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/locations'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Locations
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/beliefs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Beliefs
              </Link>
            </li>

            <li>
              <Link
                 to='/leadership'
                 className='nav-links'
                 onClick={closeMobileMenu}
              >
                Leadership
              </Link>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;