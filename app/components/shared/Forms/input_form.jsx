import React from 'react'

export default function Input({name,handlingUpdate,type,placeholder,styleInput,styleContener}) {
  return ( <div className={styleContener}>

      <input name={name} onChange={handlingUpdate} type={type} placeholder={placeholder} className={styleInput}  />
  </div>
  )
}
