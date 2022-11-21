import React, { useEffect } from 'react';
import './nav.css';
import { BiHome } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react';

function Nav() {
  const [activeNav, setActiveNav] = useState("#header");
  const sections = document.querySelectorAll("section");
  const header = document.querySelector("header");
  const navLi = document.querySelectorAll(".nav a");
  let current: any = "";
  window.onscroll = () => {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 120) {
        current = section.getAttribute("id");
      }
      if (window.pageYOffset <= 940) {
        current = "header"
      }
    });
    
    if(current === "portfolio") {
      current = "services";
    }
    navLi.forEach((a) => {
      a.classList.remove("active");
      if (a.classList.contains(current)) {
        a.classList.add("active");
      }
    });
  };
  return (
    <nav className='nav'>
      <a href="#header" onClick={() => { setActiveNav("#header") }} className={activeNav  === "#header" ? "active header" : "header"}><BiHome /></a>
      <a href="#about" onClick={() => { setActiveNav("#about") }} className={activeNav === "#about" ? "active about" : "about"}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => { setActiveNav("#experience") }} className={activeNav === "#experience" ? "active experience" : "experience"}><BiBook /></a>
      <a href="#services" onClick={() => { setActiveNav("#services") }} className={activeNav === "#services" ? "active services" : "services"}><RiServiceLine /></a>
      <a href="#contact" onClick={() => { setActiveNav("#contact") }} className={activeNav === "#contact" ? "active contact" : "contact"}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav