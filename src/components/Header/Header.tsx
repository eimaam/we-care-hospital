import React, { useEffect } from 'react'
import { Nav } from './Nav'

import hero from "../../assets/heroImage.svg"

import AOS from "aos";
import 'aos/dist/aos.css'; 



export const Header = () => {

    useEffect(() => {
    AOS.init();
    }, [])


  return (
    <header data-aos="fade-down" data-aos-delay="250">
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
