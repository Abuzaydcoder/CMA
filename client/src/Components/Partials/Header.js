import React from 'react'
import './Header.css'
import logo from '../../assets/graphics/cmap svg.svg';
import { Link } from 'react-router-dom';
// import {FaHome} from 'react-icons/fa'

const Header = () => {
  return (
      <nav className='main-nav-wrapper'>
          <div className='main-nav-grp'>
              <Link to='/'>
                  <img src={logo} alt=''></img>
              </Link>
            
          </div>
          
          <div className='main-nav-grp nav-grp-links' >
              <Link to='/Login'>
                   Login
                  </Link>
              
                  <Link className='get-started-btn' to='/Signup'>
                   Get Started
                  </Link>
              
          </div>
      </nav>
  )
}

export default Header