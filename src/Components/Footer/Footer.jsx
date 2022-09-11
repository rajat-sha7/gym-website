import React from 'react'
import Github from '../../img/github.png'
import Instagram from '../../img/instagram.png'
import Linkedin from '../../img/linkedin.png'
import Logo from '../../img/logo.png'
import './Footer.css'


export const Footer = () => {
  return (
    <div className='footerContainer'>
  <hr/>
  <div className='footer'>
  <div className='social-links'>
    <img src={Github} alt=''/>
    <img src={Instagram} alt=''/>
    <img src={Linkedin} alt=''/>
  </div>
<div className='logo-f'>
   <img src={Logo} alt=''/>
</div>
</div>
<div className='blur footer-blur1'></div>
<div className='blur footer-blur2'></div>
    </div>
  )
}
