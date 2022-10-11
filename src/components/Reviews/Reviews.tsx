import React from 'react'
import { ReviewCard } from './ReviewCard'
import { reviewData } from './reviewData'

export const Reviews = () => {
  const reviewCards = reviewData.map((item, index) => {
    return <ReviewCard 
          key={index}
          avatar={item.avatar}
          name={item.name}
          job={item.job}
          comment={item.comment}
          />
  })
  return (
    <section className='reviews'>
      <div>
        <h2>Reviews from our amiable clients</h2>
        <div className='review--cards--section'>
          {reviewCards}
        </div>
      </div>
    </section>
  )
}
