import React, { ReactElement } from 'react'
import dummy from "../../assets/icons8-typescript.svg"

interface Props {
  icon: ReactElement,
  title: string,
  detail: string
}

export const ServiceCard = (props: Props) => {
  return (
    <div className='service--card'>
      <h1>{props.icon}</h1>
      <div>
        <h3>{props.title}</h3>
        <p>{props.detail}</p>
      </div>
    </div>
  )
}
