import React, { useEffect } from 'react'

// import Animate on Scroll Lib
import AOS from "aos";
import 'aos/dist/aos.css';


interface Props {
  avatar: string,
  name: string,
  job: string,
  comment: string
}


export const ReviewCard = (props: Props) => {

  useEffect(() => {
    AOS.init({delay: 300})
  }, [])
  return (
    <div className='review--card' data-aos="zoom-out-right" data-aos-easing="ease-out">
        <img src={props.avatar} alt="" />
      <div>
        <h4>{props.name}</h4>
        <h5>{props.job}</h5>
        <p>{props.comment}</p>    
      </div>

    </div>
  )
}
