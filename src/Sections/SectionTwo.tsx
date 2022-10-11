import React from 'react'
import { FaFirstAid } from "react-icons/fa"

import wheelchair from "../assets/wheelchair.svg"
import firstAidBubble from "../assets/freepik--speech-bubble--inject-5.svg"

export const SectionTwo = () => {
  return (
    <section className='section2'>
      <div className='section--content'>
        <div>
          <h2>We always ensure the best medical treatment for your health. </h2>
          <h3><span><img src={firstAidBubble} alt="speech bubble" /></span> Modern Clinic</h3>
          <h3><span><img src={firstAidBubble} alt="speech bubble" /></span> Professional Treatment</h3>
          <h3><span><img src={firstAidBubble} alt="speech bubble" /></span> Discount on all Medical Treatment</h3>
          <button type='button'>Book Appointment</button>
        </div>
        <img src={wheelchair} alt="" className='img'/>
      </div>
    </section>
  )
}
