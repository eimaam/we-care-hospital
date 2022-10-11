import React from 'react'

export const Nav = () => {
  return (
    <nav>
        <div>
            <h2>WeCare</h2>
        </div>
        <ul>
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
