import React from 'react'
import "./Contact.css"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CallIcon from '@mui/icons-material/Call';

 export default function ContactSection() {
  return (
    <div className='ContactContainer' >
        <div className='contactFlex flex  j-center gap'>
            <div className='companyInfo'>
                <h3>Let’s Work Together!</h3>
                <div className='MailDetails flex a-center  gap-small'>
                    <MailOutlineIcon />
                    <p>info@egytechnology.co.uk</p>
                </div>
                <div className='companyLocation  flex a-center  gap-small'>
                    <ApartmentIcon />
                    <p>40-46 Ashton Old Rd, Manchester M12 6LP, United kingdom</p>
                </div>
                <div className='companyPhone  flex a-center  gap-small'> 
                <CallIcon />
                <p>016 15377 966</p>
                </div>
            </div>
        <form className=' ContactForm '>
        <h2> <span>WE COVER</span> ALL OF THE UNITED KINGDOM </h2>
        <p>We have a full UK coverage and can offer instant response to any WEEE, data, storage or recycling issue that may arise</p>
             <div className=' ContactFormFlex flex a-center j-center gap-half'>

            <input name='Name' type="text" placeholder='Enter Ur Name' required />
            <input name='Mail' type="email" placeholder='Enter Ur Mail' required />
            <input name='Company' type="Text" placeholder='Company name' required />
            <input name='Company' type="Text" placeholder='Contact number' required />
            <select name="Which service are you interested in?">
            <option value="first">IT Recycling&Dipolal</option>
            <option value="DEFAULT">Reverse Logistics</option>
            <option value="third">Data Destruction</option>
            <option value="four">Buying</option>
            <option value="five">Sealling</option>
            </select>

            <textarea defaultValue="Hello Egy-Technology." name="Message" rows="4" cols="50" />
                Message
            <input type="submit" />

        </div>
        </form>
        </div>
    </div>
  )
}

 export function ContactSectionMini() {
  return (
    <div className='ContactContainer Mini flex a-center gap-half ' >
       <h2>Contact Us</h2>
        <form className=' ContactForm flex a-center  gap-half'>
            <input name='Name' type="text" placeholder='Enter Ur Name' required />
            <input name='Mail' type="email" placeholder='Enter Ur Mail' required />
            <input name='Contact' type="Text" placeholder='Contact number' required />
            <select name="Which service are you interested in?">
            <option value="DEFAULT" >IT Recycling&Dipolal</option>
            <option value="second">Reverse Logistics</option>
            <option value="one">Data Destruction</option>
            <option value="two">Buying</option>
            <option value="three">Sealling</option>
            </select>
            <input type="submit" />

        </form>
    </div>
  )
}



