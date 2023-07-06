import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={ process.env.PUBLIC_URL + '/images/felix-el-gato.png' } alt='logo' className="logo-img" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  INICIO
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  PRODUCTOS
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  SERVICIOS
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  CONTACTO
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    </>
  )
}

export default Navbar