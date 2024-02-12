import React from 'react'

export default function Input({name,handlingUpdate,type,placeholder,value,styleInput,styleContener}) {
  return ( <div className={styleContener}>

      <input name={name} value={value} onChange={handlingUpdate} type={type} placeholder={placeholder} className={styleInput}  />
  </div>
  )
}
