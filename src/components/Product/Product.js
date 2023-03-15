import React from 'react'
import "./Product.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import laptop from "../../assets/laptop2.jpeg"
import computer from "../../assets/computer.jpg"
import screen from "../../assets/screen.png"
import accessories from "../../assets/accessories.jpeg"
import server from "../../assets/server.jpeg"
import tablet from "../../assets/tablet.jpeg"
import productData from '../../helpers/productData';
import { Link } from 'react-router-dom';


export default function Product() {
  return (
    <div className='productContainer'>
    <h2>OUR PRODUCT CATEGORIES</h2>
    <p>An overwiew of the product categories we sale!</p>
    <div className='productBoxes flex  j-center gap-half'>
    {
        productData.map((prod)=>{ 
            return(
        
        <div className='productBox'>
            <Link
             to={`/product/${prod.link}`}
                state={{prod}}
                 >
            <img src={prod.img} alt="/"/>
            <h3>{prod.name}</h3>
            <p>{prod.Descrip}</p>
            <div className='button flex a-center gap-small'>
                <KeyboardArrowRightIcon />
                WANT TO KNOW MORE
            </div>
            </Link>
        </div>
        )})
    }
      
    </div>
    </div>
  )
}
