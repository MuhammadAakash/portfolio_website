import React from 'react'
import Buttons from './Butttons';
import './header.css';
import ME from '../../assets/me.jpg'
import Socials from './Socials';

function Header() {
  return (
    <header id='header'>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Mohammad Aakash</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <Buttons />
        <Socials />
        <div className="me">
          <img src={ME} alt="Myself" />
        </div>
        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header