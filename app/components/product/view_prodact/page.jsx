'use client'
import React, { useEffect } from 'react'
import Table from '../../shared/Table/table'
import { useDispatch, useSelector } from 'react-redux'
import { get } from '@/app/store/slice/product'
import Card from '../../shared/Card/prodact_iteam'
export default function Prodact() {

    const {product} =useSelector((state)=>state.product)
    const dispatch=useDispatch()
   
    useEffect(()=>{
       dispatch(get())
    },[])
    console.log(product)

  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    <Card product={product} />
    </div>
    </div>
  </div>
  )
}
