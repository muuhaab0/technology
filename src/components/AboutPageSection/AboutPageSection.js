import React from 'react'
import "./AboutPageSection.css"
import company from "../../assets/it-company.jpg"
import WhatWeDo from '../whatwedo/WhatWeDo'

export default function AboutPageSection() {
  return (
    <div className='aboutContainer'>
        <div className='aboutCompany flex  j-center gap'>
            <div className='aboutCompanyIMg'>
            <img src={company} alt="company"/>
            </div>

            <div className='aboutCompanyText'>
                <h2>About Egy-Technology</h2>
                <p>Around the world, EgyTechnology helps businesses flourish. Unleashing the power of their IT, we set them on the path to achieving more with greener, safer and smarter solutions.</p>
                <p>Egy-Technology is the leading global IT Life Services provider with 25+ years’ experience in asset life extension and comprehensive multi-vendor data center maintenance.</p>
                <p>We are the single point of contact (SPOC) for support regardless of equipment brand, adapting to the time, budget and geographic needs of our customers to maximize their hardware performance and return on investment.</p>
                <p>We transform IT processes to prioritize business growth and continuity with innovative services that reduce our clients’ environmental impact and surpass their expectations every time.</p>
            </div>
        </div>
            <div className='aboutMission'>
                <div className='aboutMissionContainer'>
                    <h2>Our Mission</h2>
                        <p>Our mission is to be the preferred global IT infrastructure lifecycle service provider with the largest footprint of people and spare parts in the industry. We do this the right way: by staying close to our customers and their needs, applying our core values to everything we do and being committed to a more sustainable IT world.</p>
                </div>

                <div className='aboutMissionContainer'>
                    <h2>Our Vision</h2>
                    <p>Our vision is a sustainable digital world where IT leaders have the full power to choose the best time and the best solution to transform their infrastructure.</p>
                </div>

                <div className='aboutMissionContainer'>
                <h2>Our Values</h2>
                <p>Our values are the driving force behind every action we take to fulfil our commitment to all our stakeholders – our clients, our employees, our shareholders, and society as a whole.</p>
                </div>
            </div>

            <WhatWeDo />
    </div>
  )
}
