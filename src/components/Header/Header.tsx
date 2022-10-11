import React from 'react'
import { Nav } from './Nav'

import hero from "../../assets/heroImage.svg"

export const Header = () => {
  return (
    <header>
        <Nav />
        <div className='hero--section'>
            <div className='site--info'>
                <h1>Best care For you <br/> & your Family</h1>
                <p>Here at WeCare, your health is our first priority and <br /> we make sure to satisfy our clients 100%.</p>
                <button type='button'>Book Appointment</button>
            </div>
            <img src={hero} alt="developer" />
        </div>
    </header>
  )
}
