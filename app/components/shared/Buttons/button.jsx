
import React from 'react'

export default function Button({Type,style,handleClick,name,text,children,loading}) {
  return (
    <button type={Type} name={name} className={style} onClick={handleClick}>
      {text} {children}
     
 
    </button>
  )
}
