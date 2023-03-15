import React from 'react'
import HeroVideo from "../../assets/egyTecnologyVideo.mp4"
import "./Hero.css"
import FactoryIcon from "@mui/icons-material/Factory"
import PublicIcon from "@mui/icons-material/Public"
import Badge from "../../assets/Badge.png"
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className='heroContainer'>
    <div className='heroVideo'>
        <video  autoPlay muted loop> 
            <source src={HeroVideo} type="video/webm" />
        </video>
        <div className='coverSubContainer'>
        <div className=' detailsBox flex a-center j-center'>

        <div className='World flex a-center gap-small'>
        <PublicIcon style={{fontSize:"50px" , color:"#21B6A8"}} />
        <div className='WorldText'>
          <p>Serving 100+</p>
          <p>countries</p>
        </div>
        </div>
        <div className='Factory flex a-center gap-small' >
          <FactoryIcon  style={{fontSize:"50px" , color:"#21B6A8"}} />
        <div className='WorldText'>
          <p>40+ facilities</p>
          <p>worldwide</p>
        </div>
        </div>
        <div className='Badge flex a-center'>
          <img src={Badge}  style={{width:"60px"}} alt='badge'/>      
        <div className='WorldText'>
          <p>Experience 10 years</p>
          <p>in WEEE Directive-certified</p>
        </div>
        </div>
        </div>

    </div>
    </div>

        <div className='heroTextContainer'>
        <div className='heroText'>
            <h2 className='heroTopText'>For A flat monthly fee</h2>
            <p className='heroDownText'>We can take care of all your IT needs, giving you more time to do what you do best </p>
            <Link to="/contact">
            <div className='btn heroButton flex j-center'>
                Run your business
            </div>
            </Link>
        </div>
        </div>
    </div>
  )
}
