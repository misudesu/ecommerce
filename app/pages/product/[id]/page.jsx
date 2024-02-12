
import React from 'react'
import SingleProduct from '@/app/components/product/single_product/single_prodact';
export default function ProductDetaile({params}) {
  return (<SingleProduct  id={params.id}/>
  )
}
