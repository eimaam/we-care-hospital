import React from 'react'
import { ServiceCard } from './ServiceCard'
import { serviceData } from './serviceData'


export const Services = () => {
  const serviceCards = serviceData.map((item, index) => {
    return <ServiceCard 
            key={index}
            icon={item.icon}
            title={item.title}
            detail={item.detail}
            />
  })
  return (
    <section className='services'>
      <div>
        <div className='service--info'>
          <h2>Our Services</h2>
          <p>We provide the best services for our clients</p>
        </div>
        <div className='service--cards--section'>
          {serviceCards}
        </div>
      </div>

    </section>
  )
}
