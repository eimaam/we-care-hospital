import React, { ReactElement } from 'react'
import { FaBars, FaHamburger, FaTimes } from 'react-icons/fa'

export const Nav = () => {
  const showHide = () => {
    let mNav = document.getElementById('mNav') as HTMLElement;
    let nav = document.getElementById('nav') as HTMLElement;
    // let toggler = document.getElementsByTagName('p') as HTMLElement
    let showIcon = document.getElementById('showMenu') as HTMLElement;
    let hideIcon = document.getElementById('hideMenu') as HTMLElement;
    // let tagline = document.getElementById('tagline') as HTMLElement;

    if(mNav.style.display !== "flex"){
        mNav.style.display = "flex"
        showIcon.style.display = "none"
        hideIcon.style.display = "block"
        // tagline.style.display = "none"
    }else{
        mNav.style.display = "none"
        showIcon.style.display = "block"
        hideIcon.style.display = "none"
    }
}
  return (
    <nav>
        <FaBars id='showMenu' onClick={showHide}/>
        <FaTimes id='hideMenu' onClick={showHide}/>
          <div id='tagline'>
              <h2>WeCare</h2>
          </div>
          <ul id='mNav'>
              <li><a href="/" className='active'>Home</a></li>
              <li><a href="/home">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/doctors">Doctors</a></li>
              <li><a href="/contact">Contact</a></li>
          </ul>
          <div className='nav--buttons'>
              <button className='button--white'>Login</button>
              <button>Sign up</button>
          </div>
    </nav>
  )
}
