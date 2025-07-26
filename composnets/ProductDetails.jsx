import React, { useEffect, useState, useContext } from 'react'
import { Link, useOutletContext, useParams } from 'react-router';
import ProductCard from './ProductCard';
import { useLocation } from 'react-router';
import {  Themecontext } from '../contexts/ThemeContext';
import { useTheme } from '../hooks/useTheme';
const shoe = new URL('./Shoe.png', import.meta.url).href;
import ProductDetailsShimmar from './ProductDetailsShimmar';

export default function ProductDetails() {
    const [productDetails, setProductDetails] = useState()
    const [category, setCategory] = useState()
    const [relatedProduct, setRelatedProduct] = useState()
    const [sameCategory, setSameCategory] = useState([])
    const [discount, setDiscount] = useState()

    // const [isDark] = useOutletContext()
    // const [isDark] = useContext( Themecontext)
    
    const[isDark] = useTheme()
    const params = useParams()
    const product = params.productName
   
    const originalPrice = discount ? (productDetails.price / (1 - discount / 100)).toFixed(2) : ''    
    

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/search?q=${product}`)
        .then((res)=> res.json())
        .then((data)=>{
            setProductDetails(data.products[0])
            setCategory(data.products[0].category)
        })
        
        fetch('https://dummyjson.com/products')
        .then((res)=>res.json())
        .then((data)=>{
          setRelatedProduct(data.products)
        })
        
    },[product])

    useEffect(()=>{
      if(relatedProduct){
        const a = relatedProduct.filter((product)=> product.category === category)
        setSameCategory(a)
      }

      if(productDetails){
        setDiscount(productDetails.discountPercentage)
      }
    },[relatedProduct, category])

    if(!productDetails){
        return <ProductDetailsShimmar/>
    }

  return (
    <>
      <div className={`product-details ${isDark ? 'dark' : ''}`}>
        <img src={productDetails.thumbnail} alt="" />
        <div>
          <h1>{productDetails.title}</h1>
          <div className="rating-reviews">
            <div className="rating">
              <span>{productDetails.rating}</span>
              <i className="fa-solid fa-star"></i>
            </div>
            <span>({productDetails.reviews.length} Reviews)</span>
          </div>
          <p>${productDetails.price} <span className='original-price'>{originalPrice}</span> <span className='discount'>{discount}% Off</span></p>
          <span className='description'>{productDetails.description}</span>
          <div className='product-warranty-container'>
            <p>
              <i className="fa-solid fa-bag-shopping stock-icon"></i>
              <span><strong>Stock</strong>: {productDetails.availabilityStatus}</span>
            </p>
            <p>
              <i className="fa-solid fa-shield warranty-icon"></i>
              <span><strong>Warranty</strong>: {productDetails.warrantyInformation}</span>
            </p>
            <p>
              <i className="fa-solid fa-cube"></i>
              <span><strong>Minimum Order</strong> : {productDetails.minimumOrderQuantity}</span>
            </p>
            <p>
              <i className="fa-solid fa-circle-info"></i>
              <span><strong>Return Policy</strong> : {productDetails.returnPolicy}</span>
            </p>
          </div>
           <div className="buttons-container">
            <button className='add-to-cart'>Add to cart</button>
            <button className='buyBtn'>Buy now</button>
           </div>
        </div>
      </div>
      <div className={`related-products ${isDark ? 'dark' : ''}`}>
        <h2>Similar Products</h2>
        <div className='related-product-div'>
          {sameCategory.map((p)=>{
            return <ProductCard 
            key={p.id} 
            thumbnail={p.thumbnail} 
            title={p.title} 
            rating={p.rating} 
            price={p.price} 
            review={p.reviews}
            discount={p.discountPercentage}/>
          })}
        </div>
      </div>
    </>
  )
}
