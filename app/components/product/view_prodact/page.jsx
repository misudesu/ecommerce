'use client'
import React, { useEffect } from 'react'
import Table from '../../shared/Table/table'
import { useDispatch, useSelector } from 'react-redux'
import { get } from '@/app/store/slice/product'

export default function Prodact() {
    const {product} =useSelector((state)=>state.product)
    const dispatch=useDispatch()
   
    useEffect(()=>{
        dispatch(get())
    
    },[])
    console.log(product)
  return (
  <div>
    <Table/>
  </div>
  )
}
