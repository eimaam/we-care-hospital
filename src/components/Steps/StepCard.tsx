import React, { ReactElement } from 'react'

import dummy from "../../assets/icons8-typescript.svg"

interface Props {
  icon: ReactElement,
  title: string,
  detail: string
}

export const StepCard = (props: Props) => {
  return (
    <div className='steps--card'>
      <h1>{props.icon}</h1>
      <h3>{props.title}</h3>
      <p>{props.detail}</p>
    </div>
  )
}
