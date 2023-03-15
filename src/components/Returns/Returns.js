import React from 'react'
import "./Returns.css"
import Groups2Icon from "@mui/icons-material/Groups2"
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize"
import SwitchAccessShortcutAddIcon from "@mui/icons-material/SwitchAccessShortcutAdd"

export default function Returns() {
  return (
    <div className='returnContainer'>
        <h2 className='returnContainerHeader'>Maximum recovery, maximum returns</h2>
        <div className='returnsBoxes flex'>

            <div className='returnsBox '>

            <div  className='returnsIcon'>
            <DashboardCustomizeIcon style={{fontSize:"60px", color:"tomato"}} />
            </div>

            <div className='returnBoxText'>
                <h3 className='returnBoxTextHeader'>Specialised Services</h3>
                <div className='returnBoxTextDesc'>We offer professional services specific to each industry. We can work with your organisation in many different ways from outright purchasing all of your assets to profit sharing. Get in touch today to find out what we can do for you.</div>
            </div>
            </div>


            <div className='returnsBox '>

            <div  className='returnsIcon'>
            <SwitchAccessShortcutAddIcon style={{fontSize:"60px", color:"#ff9800"}} className='returnsIcon' />
            </div>

            <div className='returnBoxText'>
                <h3 className='returnBoxTextHeader'>High Returns</h3>
                <div className='returnBoxTextDesc'>Our tailored services translate into higher returns. We’ve been doing this for a while now and know how to sell and what channels to sell on to ensure a high and quick turnaround on all IT equipment and electronics.</div>
            </div>
            </div>

            <div className='returnsBox '>

            <div  className='returnsIcon'>
            <Groups2Icon style={{fontSize:"60px", color:"#2196f3"}}  />
            </div>
            <div className='returnBoxText'>
                <h3 className='returnBoxTextHeader'>Transparency</h3>
                <div className='returnBoxTextDesc'>We pride ourselves in offering full transparency to show which items are recycled for precious metals and which are refurbished and resold to end users, ensuring nothing makes its way into landfills here or in Asia.</div>
            </div>
            </div>

        </div>
    </div>
  )
}
