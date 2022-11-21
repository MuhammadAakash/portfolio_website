import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si';

function Socials() {
  return (
    <div className="header-socials">
        <a href="https://www.linkedin.com/in/mohammad-aakash-7559aa1b5/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/MuhammadAakash" target="_blank"> <BsGithub /></a>
        <a href="https://leetcode.com/maakash249/" target="_blank"><SiLeetcode /></a>

    </div>
  )
}

export default Socials