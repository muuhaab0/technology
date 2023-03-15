import React from 'react'
import { ContactSectionMini } from '../ContactUs/Contact'
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

import services from "../../helpers/serviceData"

export default function Footer({prop}) {
    console.log(services)
  return (
    <div className='footerContainer'>
    {
    prop ? "" : (
    <ContactSectionMini />
    )
    }
        <div className='footerBoxes flex  j-between'>
            <div className="footerContact">
                <h3>CONTACT DETAILS</h3>
                <h4>HEAD OFFICE</h4>
                <p className='footerAdress'>40-46 Ashton Old Rd, Manchester M12 6LP,<br/>
                 United kingdom</p>
                <p className='phoneNumber'>
                <p>
                P: 016 15377 966
                </p>
                <p>
                E: info@egytechnology.co.uk
                </p>
                </p>
            </div>

            <div className='footerLinks'>
            <h3>BROWSE FURTHER</h3>
            <div className='footerLinksContainer flex'>
            <p>
                <Link to="/dataSecurity">Data Security</Link>
                </p>
                <p>
                <Link to={`/service/IT-Deposal&Recycle`} state={services[0].subDescription}>Diposal</Link>
                </p>
                <p> <Link to={`/service/IT-Deposal&Recycle`} state={services[0].subDescription}>Recycling</Link>
                </p>
                <p><Link to={`/service/Purchase!`} state={services[3].subDescription}>Purchase
                </Link></p>
                <p><Link to={`/service/Offers!`} state={services[4].subDescription}>
                Offers
                </Link></p>
                <p><Link to="/solutions">
                Solutions</Link></p>
                <p>Our Products</p>
            </div>
            </div>

            <div className="footerPlatForms">
                <h3>FOLLOW US</h3>
                <div className='footerPlatFormsContaner flex gap-half'>
                <p><FacebookIcon /></p>
                <p><TwitterIcon /></p>
                <p><InstagramIcon /></p>
                </div>
                <h2> <Link to="/about">About</Link></h2>
                <p><Link to="/about">Our Company</Link></p>
                <p><Link to="/why-we">Why We</Link></p>
            </div>
        </div>
        <hr className='footerHr'/>
            <p className='footerCopyRight'>Copyright © 2023 Egy-Technology Ltd</p>
    </div>
  )
}
