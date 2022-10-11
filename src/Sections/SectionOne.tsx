import React from 'react'

import familyVisit from "../assets/family_visit.svg"


export const SectionOne = () => {
  return (
    <section className='section1'>
      <div className='section--content'>
        <div className='section--info'>
            <h2>About us</h2>
            <h3>At WeCare, Your Health is our first priority</h3>
            <p>We care is one of the largest health care centers <br/> We provide essential outpatient and offer the best <br /> services for over millions of residents every day in various <br /> locations every year.</p>
            <button type='button'>Read More</button>
        </div>
        <div className='right--flex'>
          <img src={familyVisit} alt="family visit to hospital" />
          <div className='site--stats'>
              <div>
                  <h2>925</h2>
                  <h3>Verified Doctors</h3>
              </div>
              <div>
                  <h2>25K+</h2>
                  <h3>Happy Customers</h3>
              </div>
              <div>
                  <h2>95.5%</h2>
                  <h3>Positive Feedbacks</h3>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
