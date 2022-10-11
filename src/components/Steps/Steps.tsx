import React from 'react'
import { StepCard } from './StepCard'
import { stepsData } from './stepsData'




export const Steps = () => {
  const cards = stepsData.map((item, index) => {
    return <StepCard 
            icon={item.icon}
            title={item.title}
            detail={item.detail}
            />
  })
  return (
    <section className='steps'>
      <div>
        <div className='steps--info'>
          <h2>Easy steps to get your solution</h2>
          <p>Book Appointment Easily with our Doctors within the same day or next day.</p>
          <button type='button' className='button--white'>Book Appointment</button>
        </div>
        <div id='cards'>
          {cards}
        </div>
      </div>
    </section>
  )
}
