import React, { useContext, useEffect, useState } from 'react'
import ProductsContainer from './ProductsContainer';
import { useOutletContext } from 'react-router';
import {  Themecontext } from '../contexts/ThemeContext';
import { useTheme } from '../hooks/useTheme';

export default function Products() {
  const [query, setQuery] = useState('')
  const [isRotate, setIsRotate] = useState('')
  const [filterValue, setFilterValue] = useState('Filter')
  
  // console.log(filterValue)
  // const [isDark] = useOutletContext()
  // const [isDark] = useContext( Themecontext)

  const [isDark] = useTheme()
  return (
    <div className={`products ${isDark ? 'dark':''}`}>
        <h1>Our Products</h1>
        <div className="search-filter-container">
            <div className="search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder='Search' onChange={(e)=>{
                  setQuery(e.target.value.toLowerCase())
                }}/>
            </div>
            <div className="filter" onClick={(e)=>{
              if(!isRotate){
                e.currentTarget.classList.add('rotate')
                setIsRotate(true)
                e.currentTarget.querySelector('.dropdown').classList.add('show')
              }else{
                e.currentTarget.classList.remove('rotate')
                setIsRotate(false)
                e.currentTarget.querySelector('.dropdown').classList.remove('show')
              }
              }}>
                <span>{filterValue}</span>
                <i className="fa-solid fa-angle-down"></i>
                <ul className='dropdown' onClick={(e)=>{setFilterValue(e.target.innerText)}}>
                  <li>Filter</li>
                  <li>Beauty</li>
                  <li>Fragrances</li>
                  <li>Furniture</li>
                  <li>Groceries</li>
                </ul>
            </div>
        </div>
        <ProductsContainer query={query} filterQuery={filterValue}/>
    </div>
  )
}
