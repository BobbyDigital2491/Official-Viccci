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
        <SEO title={"Viccci Protocol Whitepaper"} 
             description={"Check out the Viccci Protocol Whitepaper."} 
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
