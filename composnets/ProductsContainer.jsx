import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

import ProductShimmer from './ProductShimmer'

export default function ProductsContainer({query,filterQuery}) {
 
  const[productData, setProductData] = useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then((res)=>res.json())
    .then((data)=>{
        setProductData(data.products)
    })
  },[])

  return (
    <>
      {productData.length < 1 ? (<ProductShimmer/>) : (<div className="products-container">
            {productData.filter((product)=>product.title.toLowerCase().includes(query) && (filterQuery.toLowerCase() === 'filter' ? true : filterQuery.toLowerCase() === product.category)).map((product)=>{

                return <ProductCard 
                key={product.id}
                thumbnail={product.thumbnail}
                title={product.title}
                price={product.price}
                rating={product.rating}
                review={product.reviews}
                discount={product.discountPercentage}
                />
            })}
        </div>)}
    </>  
  )
}
