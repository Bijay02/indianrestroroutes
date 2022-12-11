import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';


const Navbar = () => {
  return (
      <nav className='nav'>
        <Link to='/' className='logo'>
            <img src={logo} alt='logo_picture' height='50px' width='50px'/>
        </Link>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>     
        </ul>
      </nav>
  )
}

export default Navbar;