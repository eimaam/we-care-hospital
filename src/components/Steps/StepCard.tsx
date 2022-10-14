import React, { ReactElement, useEffect } from 'react'

import dummy from "../../assets/icons8-typescript.svg"
// import Animate on Scroll Lib
import AOS from "aos";
import 'aos/dist/aos.css'; 

interface Props {
  icon: ReactElement,
  title: string,
  detail: string
}

export const StepCard = (props: Props) => {

  // initializing AOS
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className='steps--card' data-aos="fade-up" data-aos-delay="700" data-aos-easing="ease-out">
      <h1>{props.icon}</h1>
      <h3>{props.title}</h3>
      <p>{props.detail}</p>
    </div>
  )
}
