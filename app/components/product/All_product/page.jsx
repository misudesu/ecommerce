'use client'
import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get } from '@/app/store/slice/product'
import Card from '../../shared/card/prodact_iteam'
import { NotificationDrawerContext } from '@/app/contexts/notification_and_Drawer_Provider'
import Button from '../../shared/buttons/button'

import { Spin } from 'antd'
import AddProduct from '../add/page'
export default function Prodact() {

    const {product,loading} =useSelector((state)=>state.product)
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(get())
    },[])
    const {showDrawer,open,setOpen,onClose}=useContext(NotificationDrawerContext)
    return (
      <Spin spinning={loading} tip="Loading...">
      <div className="bg-white">
      
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className='flex justify-between'>
<div>
<h2 className="text-lg lg:text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
      <p className="text-lg lg:text-1xl font-bold tracking-tight text-gray-400">this week</p>
</div>
<div>
  <AddProduct opens={open} setOpen={setOpen} onClose={onClose}/>
<Button
Type="submit"
             handleClick={showDrawer}
                 style="relative  rounded-md px-3 py-2 text-sm font-medium text-gray-300 bg-gray-700 hover:text-white "
                 >
                  Add Iteam
                 </Button>
</div>
      </div>
     
      <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

    <Card product={product} />

    </div>
    </div>
  </div>
  </Spin>
  )
}
