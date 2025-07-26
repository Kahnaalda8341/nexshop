import React, { useContext, useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router'
import {  Themecontext } from '../contexts/ThemeContext'
import { useTheme } from '../hooks/useTheme'

export default function Home() {
  // const [isDark] = useOutletContext()
  // const [isDark] = useContext( Themecontext)
  
  const [isDark] = useTheme()

  
  return (
    <main className={`home ${isDark ? 'dark' : ''}`}>
      <h1>Welcome to NexShop <br></br> By Kahna</h1>
      <p className='slogan'>NexShop - The Next Step in Shopping</p>
      <Link to='/product'>
        <button className='get-product-btn'>Get Products</button>
      </Link>
      <div className="some-recommend">
        <Link>Beauty</Link>
        <Link>Furniture</Link>
        <Link>Groceries</Link>
      </div>

    </main>
  )
}
