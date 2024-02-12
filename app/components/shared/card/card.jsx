import Link from 'next/link'
import React from 'react'


export default function Card({product}) {
  return (
 <>

   {product.map((products) => (
     <div key={products.id} className="group relative">
       <div className="  aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
         <img
           src={products.image}
           alt={products.title}
           className="h-full w-full   lg:h-full lg:w-full"
         />
        
       </div>
       <div className="mt-4 flex justify-between">
         <div>
           <h3  className="text-sm text-gray-700">
             <Link href={`pages/product/${products.id}`} >
               <span aria-hidden="true" className="absolute inset-0" />
               {products.title}
             </Link>
           </h3>
        
           <p className="mt-1 text-sm text-gray-500">{products.category} </p> 
         </div>
         <p className="text-sm font-medium text-gray-900">{products.price}</p>
       </div>
     </div>
   ))}
 </>
      
  )
}
