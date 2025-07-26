import React, { useContext } from 'react'
import { Themecontext } from '../contexts/ThemeContext'

export default function ProductDetailsShimmar() {
const [isDark] = useContext(Themecontext)


  return (
    <div className={`product-detail-shimmar ${isDark ? 'dark' : ''}`}>
        <div className="img-shimmar">
            
        </div>
        <div className="detail-shimmar">
            <div className='name'></div>
            <div className='shimmar-rating'></div>
            <span></span>
            <div className='shimmar-desc'></div>
            <div>
            <span></span>
            <span></span>
            </div>
            <button></button>
            <button></button>
        </div>
    </div>
  )
}
