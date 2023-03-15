import React, { useState } from 'react'
import "./OurServices.css"
import {Link , useNavigate} from "react-router-dom"
import services from "../../helpers/serviceData"

export default function OurService() {
    const navigate = useNavigate()

    const [dataBox, setDataBox] = useState(false)

    
   

  return (
    <div className='ServicesContainer' id='service'>
     <h2 className='returnContainerHeader'>Our Services</h2>
     <div className='serviceOverFllow'>
        <div className='serviceBoxes flex a-center j-center'>

               {services.map((e)=> {
                    let icon = e.icon
               return(

            <div className='serviceBox'>
                <div className='serviceIcon'>
                  <e.icon style={{fontSize:"60px",color:e.iconColor}}/>
                </div>
                    <div className='serviceText'>
                <h3 className='serviceHeader'>{e.title}</h3>
                <p className='serviceDisc'> We offer you high-quality, professionally prepared business IT devices.
                </p>
                    </div>
                    <div className='ServiceButtonContainer'>
                 
                
                <div className='btn serviceButton'>
                <Link
                to={`/service/${e.name}`}
                state={e.subDescription}
                >
                    Read more..
                </Link>
                </div>
                    </div>
            </div>
               )})}
        </div>
        </div>

    </div>
  )
}
