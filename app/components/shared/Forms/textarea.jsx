import React from 'react'

export default function Texatarea({name,handlingUpdate,type,placeholder,value,styleInput,styleContener}) {
  return (
    <div className={styleContener}>
      <textarea name={name} value={value} onChange={handlingUpdate} type={type} placeholder={placeholder} className={styleInput}  />
  </div>
  

  )
}
