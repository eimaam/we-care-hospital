import React, { ReactElement, useEffect } from 'react'

// import Animate on Scroll Lib
import AOS from "aos";
import 'aos/dist/aos.css';

interface Props {
  icon: ReactElement,
  title: string,
  detail: string
}

export const ServiceCard = (props: Props) => {

  useEffect(() => {
    AOS.init({delay: 250})
  }, [])

  return (
    <div className='service--card' data-aos="zoom-in">
      <h1>{props.icon}</h1>
      <div>
        <h3>{props.title}</h3>
        <p>{props.detail}</p>
      </div>
    </div>
  )
}
