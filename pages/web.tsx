import React from 'react'
import Nav from '../components/Nav'
import SEO from '../components/Seo'
import Footer from '../components/Footer'
import Feature1 from '../components/Feature1'
import Feature2 from '../components/Feature2'
import Vision from '../components/Vision'

const web = () => {
  return (
    <div>
        <SEO title={"About Viccci Protocol"} 
             description={"Viccci Protocol is a decentralized social exchange built on the cutting-edge Polygon Layer 2 technology. What sets it apart from other decentralized exchanges is its focus on creating a community-driven platform that prioritizes the needs of its users. Through its unique governance model, users have a direct say in the development and direction of the platform, and can earn rewards for participating in the ecosystem. Additionally, the use of Polygon's high-performance Layer 2 technology allows for fast, low-cost transactions, making it a suitable choice for both casual and professional traders. Overall, Viccci Protocol's combination of community empowerment and technical innovation makes it a standout player in the decentralized exchange space."} 
             image={"log.png"} 
             url={"Viccci.xyz"}  />
        <Nav />
        <div className=" mt-32"></div>
        <Feature2/>
        <Vision/>
        <Feature1/>
        <Footer/>
    </div>
  )
}

export default web