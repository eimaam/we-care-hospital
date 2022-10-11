import React, { ImgHTMLAttributes, ReactNode, ReactSVGElement } from 'react'
import avatarF from "../../assets/avatar-f.svg"


interface Props {
  avatar: string,
  name: string,
  job: string,
  comment: string
}


export const ReviewCard = (props: Props) => {
  return (
    <div className='review--card'>
        <img src={props.avatar} alt="" />
      <div>
        <h4>{props.name}</h4>
        <h5>{props.job}</h5>
        <p>{props.comment}</p>    
      </div>

    </div>
  )
}
