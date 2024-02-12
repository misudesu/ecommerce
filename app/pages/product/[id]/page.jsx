'use client'
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { getById } from '@/app/store/slice/product';

import Overview from '@/app/components/shared/Card/over_view';


export default function SingleProduct({params}) {
  const {product} =useSelector((state)=>state.product)
  const dispatch=useDispatch()
 useEffect(()=>{

    dispatch(getById(params.id))
 },[])
 

  return (<>
  <Overview product={product} id={params.id}/>
  </>
  )
}
