import React from 'react'
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa"

export const Footer = () => {
  return (
    <footer>
    <div>
      <div className='subscribe'>
        <div>
          <h3>Subscribe to our Newsletter</h3>
        </div>
        <div>
          <input type="email" title='email' placeholder='Email Address'/>
          <button onClick={(e) => {alert("Subscribed Successfully! ✅")}}>Subscribe</button>
        </div>
      </div>
      <div className='footer--contents'>
        <div>
          <h2>WeCare</h2>
          <p>Here at WeCare, your health is our first priority and <br /> we make sure to satisfy our clients 100%</p>
          <FaInstagram className='footer--icon'/> <FaTwitter className='footer--icon'/> <FaFacebook className='footer--icon'/> <FaLinkedin className='footer--icon'/>
        </div>
        <div className='links'>  
          <ul>
            <li>Company</li>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Doctors</li>
            <li>Contact</li>
          </ul>

          <ul>
            <li>Support</li>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Doctors</li>
          </ul>

          <ul>
            <li>Contact</li>
            <li>+234-xxx-xxx-xxx</li>
            <li>+234-xxx-xxx-xxx</li>
            <li>support@wecare.gmail.com</li>
          </ul>
        </div>

      </div>
      <div className='footer--note'>
        <hr />
        <p>Copyright &copy; All right reserved. </p>
        <p><a href="https://www.behance.net/elizabethajayi21" target="_blank" rel="noopener noreferrer">UI Designer: Elizabeth </a></p>
      </div>
    </div>
    </footer>
  )
}
