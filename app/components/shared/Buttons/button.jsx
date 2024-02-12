import React from 'react'

export default function Button({Type,style,handleClick,text}) {
  return (
    <button type={Type} name={name} className={style} onClick={handleClick}>
      {text}
    </button>
  )
}
