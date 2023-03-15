import React, { useState } from 'react'
import Logo from "../../assets/Logo.png"
import "./Nav-Bar.css"
import MenuIcon from "@mui/icons-material/Menu"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import CloseIcon from "@mui/icons-material/Close"
import {Link , NavLink} from "react-router-dom"
import services from "../../helpers/serviceData"


export default function NavBar() {
    const [iseOpen, setIsOpen] = useState(false)

    //   const [show, setShow] = useState(true);
    //   const [lastScrollY, setLastScrollY] = useState(0);
    
    
    //   useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //       window.addEventListener('scroll', controlNavbar);
    
    //       // cleanup function
    //       return () => {
    //         window.removeEventListener('scroll', controlNavbar);
    //       };
    //     }
    //   }, [lastScrollY]);
    

    //   const controlNavbar = () => {
    //     if (typeof window !== 'undefined') { 
    //       if (window.scrollY < lastScrollY) { // if scroll down hide the navbar
    //         setShow(false); 
    //       } else { // if scroll up show the navbar
    //         setShow(true);  
    //       }
    
    //       // remember current page location to use in the next move
    //       setLastScrollY(window.scrollY); 
    //     }
    //   };

  return (
    <div className='NavBarContainer'>
    <div className={`NavBarContainerFlex flex  j-end ${iseOpen ? "fixed" : ""} `}>
        <div className='LogoContainer'>
    <Link to="/">
            <img src={Logo} alt='Logo' className='LogoPic' />
    </Link>
        </div>
            <div className='navBarPadding flex'>

        <ul  className='links flex a-center gap-half'>
            <li className='flex a-center' style={{cursor:"pointer"}} onClick={()=> setIsOpen(!iseOpen)}> <div> <ArrowDropDownIcon /> </div> <p>Services</p></li>
            <li>
            <NavLink to="/product">
            Products
            </NavLink>
            </li>
            <li>
            <NavLink to="/solutions">
            Solutions
            </NavLink>
            </li>
            <NavLink to="/service/Purchase" state={services[3].subDescription}>
            <li>Purchase</li>
            </NavLink>
            <li>
            <NavLink to="/service/Sales" state={services[4].subDescription}>
            Sales
            </NavLink>
            </li>
            <li>
            <NavLink to="/dataSecurity">
            Data Security
            </NavLink>
            </li>
        </ul>
            </div>


        <div className='Buttons flex gap-half  j-end'>

            <div className='buttonsLinks flex gap-half'>
            <Link to="/contact">
            Contact
            </Link>
            <Link to="/about">
            About us
            </Link>
            </div>
            
            <div className='NavBarIcon'>
            <div onClick={(e)=>setIsOpen(!iseOpen)}>
            {
                !iseOpen ? (
                <MenuIcon/> 
                ) : (
                    <CloseIcon />
                )
            }
            </div>
            </div>
            </div>

        </div>


            <div className={`NavBarPopUp ${iseOpen ? "top" : ""}`}>
                <div className='navBarPopBoxesUp flex j-around'>
                    <div className='navBarBoxUp navBarBoxLinks'>
                        <h2>
                    <Link onClick={()=>setIsOpen(false)}  to="/">
                        Services
                    </Link>
                        </h2>
                        <div className='flex col gap-small'>
                        <Link onClick={()=>setIsOpen(false)} to={`/service/IT-Deposal&Recycle`} state={services[0].subDescription}>Recycling</Link>
                        <Link onClick={()=>setIsOpen(false)} to={`/service/IT-Recycle&Deposal`} state={services[0].subDescription}>Diposal</Link>
                        <Link onClick={()=>setIsOpen(false)} to={`/service/Reverse-Logistics`} state={services[1].subDescription}>Reverse-Logistics</Link>
                        <Link onClick={()=>setIsOpen(false)} to={`/service/Data-Destruction`} state={services[2].subDescription}>Data-Destruction</Link>
                        <Link onClick={()=>setIsOpen(false)} to={`/service/Purchase!`} state={services[3].subDescription}>Purchase</Link>
                        <Link onClick={()=>setIsOpen(false)} to={`/service/Offers!`} state={services[4].subDescription}>Offers</Link>
                        </div>
                    </div>

                            <div className='navBarBoxUp navBarBoxSolution'>
                                <h2>
                                <Link onClick={()=>setIsOpen(false)}  to="/solutions">
                                Solutions
                                </Link>
                                </h2>
                                <div className='flex col gap-small'>
                                <Link onClick={()=>setIsOpen(false)} to="/solutions">IT Remarketing</Link>
                                <Link onClick={()=>setIsOpen(false)} to="/solutions">You offer IT-hardware</Link>
                                <Link onClick={()=>setIsOpen(false)} to="/solutions">IT Refurbishing</Link>
                                <Link onClick={()=>setIsOpen(false)} to="/solutions">IT-Lifecycle-Management</Link>
                            </div>
                                </div>

                            <div className='navBarBoxUp navBarBoxBlogs'>
                            <h2>
                            <Link onClick={()=>setIsOpen(false)}  to="/product">
                               Product
                            </Link>
                            </h2>
                            <Link onClick={()=>setIsOpen(false)}  to="/product">
                                Our Products
                            </Link>
                            </div>

                </div>
                <div className='navBarPopBoxesDown flex j-around'>
                    <div className='navBarBoxDown navBarBoxContact'>
                    <h2>   <Link onClick={()=>setIsOpen(false)} to="/contact">
                    Contact
                    </Link>
                    </h2>
                        <Link onClick={()=>setIsOpen(false)}  to="/contact">Contact Sales</Link>
                    </div>

                    <div className='navBarBoxDown navBarBoxAbout'>
                        <h2>  <Link  onClick={()=>setIsOpen(false)} to="/about">
                        About
                        </Link>
                        </h2>
                        <Link onClick={()=>setIsOpen(false)} to="/about">Our Business</Link>
                    </div>

                    <div className='navBarBoxDown navBarBoxGuides'>
                        <h2>
                        <Link onClick={()=>setIsOpen(false)}  to="/dataSecurity">
                        Data Security
                        </Link>
                        </h2>
                        <Link onClick={()=>setIsOpen(false)} to="/dataSecurity">Data Security System</Link>
                        
                    </div>
                </div>
            </div>

                </div>
  )
}
