import React from 'react'
import './footer.css';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

function Footer() {
  return (
    <section id='contact'>
      <footer>
        <a href="#" className='footer-logo'>Mohammad Aakash</a>
        <ul className="permalinks">
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer-socials">
          <a href="https://www.facebook.com/aakashsial254" target="_blank"><BsFacebook /></a>
          <a href="https://www.instagram.com/muhammad_aakash4/" target="_blank"><BsInstagram /></a>
          <a href="https://twitter.com/MohammadAakash4" target="_blank"><BsTwitter /></a>
        </div>
        <div className="footer-copyright">
          <small>&copy; Mohammad Aakash. All right reserved.</small>
        </div>
      </footer>
    </section>
  )
}

export default Footer