import React from 'react'
import { useLocation } from 'react-router-dom';
import "./ProductDetailsSection.css"

export default function ProductDetailsSection(prop) {
  const { state } = useLocation();
  return (
    <div className='productDetailsContainer'>
        <div className='productImgContainer'>
          <div className='productImgContainerText'>
          <h6>We Are Offering</h6>
          <p>{state.prod.name}</p>
          </div>
        </div>
        <div className='productDetails'>
          <h2>{state.prod.DetailsTitle}</h2>
          <div
                dangerouslySetInnerHTML={{__html:state.prod.Details}}>
              </div>
        </div>
        
    </div>
  )
}
