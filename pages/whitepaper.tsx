import React from 'react';
import SEO from '../components/Seo';
import NavComponent from '../components/NavComponent';
import Map from '../components/Map';
import Map2 from '../components/Map2';
import Map3 from '../components/Map3';
import Footer from '../components/Footer';
import Hero4 from '../components/Hero4';
import W1 from '../components/W1';
import W2 from '../components/W2';
import W3 from '../components/W3';
import Bt from '../components/Bt';
import Ct from '../components/Ct';
import W4 from '../components/W4';


const whitepaper = () => {
  return (
    <div>
        <SEO title={"Viccci Protocol"} 
             description={"Viccci Protocol is a decentralized social exchange built on the cutting-edge Polygon Layer 2 technology. What sets it apart from other decentralized exchanges is its focus on creating a community-driven platform that prioritizes the needs of its users. Through its unique governance model, users have a direct say in the development and direction of the platform, and can earn rewards for participating in the ecosystem. Additionally, the use of Polygon's high-performance Layer 2 technology allows for fast, low-cost transactions, making it a suitable choice for both casual and professional traders. Overall, Viccci Protocol's combination of community empowerment and technical innovation makes it a standout player in the decentralized exchange space."} 
             image={".../public/log.png"} 
             url={"Viccci.xyz"}  />
        <NavComponent />
        <Hero4 />
        <br/><br/>
        <W1 />
        <W3 />
        <W2 />
        <W4 />
        <Bt />
        <br/><br/>
        <Map2 />
   
       

       
        <Footer />  
    </div>
  )
}

export default whitepaper
