'use client'
import { StarIcon } from '@heroicons/react/24/outline'
import React, { useEffect } from 'react'
import Update from '../../product/update/page'
import { Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getById } from '@/app/store/slice/product'
export default function SingleProduct({id}) {
    const {product,loading} =useSelector((state)=>state.product)
    const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getById(id))
  },[])
  return (
    
        <Spin spinning={loading} tip="Loading...">
    
    <div className="bg-white">
    <div className="pt-6">
   
      {/* Product info */}
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product[0]?.title}</h1>
        </div>

      

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{product[0]?.description}</p>
            </div>
          </div>
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3  overflow-hidden rounded-lg lg:block">
            <img
              src={product[0]?.image}
              alt={product[0]?.title}
              className="h-full w-full object-cover object-center"
            />
          </div>
         
        </div>
        
        </div>
          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight text-gray-900">{product[0]?.price}</p>

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0,1,2,3].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={`
                     ${ product[0]?.rating?.rate > product[0]?.rating?.count ? 'text-gray-900' : 'text-gray-200',
                      'h-5 w-5 flex-shrink-0'}
                    `}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{product[0]?.rating?.rate} out of 5 stars</p>
              <a href='' className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                {product[0]?.rating?.count} reviews
              </a>
            </div>
          </div>

      <Update products={product} id={id}/>
        </div>
      </div>
    </div>
  </div>
  </Spin>
    

  )
 
}
