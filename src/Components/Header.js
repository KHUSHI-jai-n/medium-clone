import React from 'react'
import logo from '../Images/logo.png';

function Header() {
  return (
    <header>
      <img className="image" src={logo} alt='logo'/>
      <div className='nav'>
        <span className='nav-elements'>Our story</span>
        <span className='nav-elements'>Membership</span>
        <span className='nav-elements'>Write</span>
        <span className='nav-elements'>Sign In</span>
        <span className='nav-elements'><button className='btn2'>Get started</button></span>
      </div>
    </header>
  );
}

export default Header
