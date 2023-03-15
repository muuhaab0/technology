import React, { useEffect } from 'react'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import HardWare from '../components/HardWare/HardWare'
import Hero from '../components/Hero/Hero'
import NavBar from '../components/Nav-bar/Nav-Bar'
import OurService from '../components/OurServices/OurService'
import Returns from '../components/Returns/Returns'
import WhatWeDo from '../components/whatwedo/WhatWeDo'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <NavBar />
        <Hero/>
        <Returns />
        <OurService />
        <About />
        <HardWare />
        <WhatWeDo/>
        <Footer />
    </div>
  )
}
