import React from 'react'
import './Offers.css'
import exclusive from '../Asserts/Frontend_Assets/exclusive_image.png'
export default function Offers() {
  return (
    <div className = 'offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive} alt="" />
      </div>
    </div>
  )
}
