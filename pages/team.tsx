import React from 'react';
import NavComponent from '../components/NavComponent';
import Footer from '../components/Footer';
import Ej from '../components/Ej';
import Rob from '../components/Rob';
import Khari from '../components/Khari';
import SEO from '../components/Seo';
import Hero3 from '../components/Hero3';
import ExtendedT from '../components/ExtendedT';

const Team = () => {
  return (
    <div>
      
      <SEO title={"Viccci Protocol Team"} 
          description={"Meet the team working on Viccci Protocol"} 
          image={"log.png"} 
          url={"Viccci.xyz"}  />
      <NavComponent />
      <Hero3 />
      <Ej />
      <Rob />
      <Khari />
      <ExtendedT />
      <Footer />
    </div>
    
  )
}

export default Team
