import React from 'react'
import { useTheme } from '../hooks/useTheme'

export default function ProductShimmer() {
  // const array = new Array(10).fill(1)
 
    const [isDark] = useTheme()

  const mapped = Array.from({length:10}).map((el, index)=>{
    return <div key={index} className="shimmar-card">
      <div className='img'></div>
      <h3></h3>
      <p></p>
      <div className="button-container">
        <button></button>
        <button></button>
      </div>
    </div>
  })
  return (
    <div className={`shimmar-container ${isDark ? 'dark' : ''}`}>
      {mapped}
    </div>
  )
}


{/* <img src={thumbnail} alt="" />
        <h3>{title}</h3>
        <p>${price}</p>
        <div className="buttons-container">
            <AddtoCart/>
            <BuyBtn/>
        </div> */}