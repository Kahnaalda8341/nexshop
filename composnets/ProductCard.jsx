import React from 'react'
import AddtoCart from './AddtoCart'
import BuyBtn from './BuyBtn';
import { data, Link } from 'react-router'
const shoe = new URL('./Shoe.png', import.meta.url).href;

export default function ProductCard({thumbnail, title, price, rating, review, discount}) {
 
  const originalPrice = price / (1 - discount / 100)
  return (
    <Link  to={`/product/${title}`}> 
    <div className="product-card">
        <img src={thumbnail} alt="" />
        <h3>{title}</h3>
        <div className="rating-reviews">
          <p className="rating">{rating} <i className="fa-solid fa-star"></i></p>
          <span>({review.length} Reviews)</span>
        </div>
        <p className='price'>${price} <span className='original-price'>${originalPrice.toFixed(2)}</span> <span className='discount'>{discount}% Off</span></p>
        {/* <div className="buttons-container">
            <AddtoCart/>
            <BuyBtn/>
        </div> */}
    </div>
    </Link>
  )
}
