import React from 'react';
import Footer from '../components/Footer';
import SEO from '../components/Seo';
import Nav from '../components/Nav';
import Teams from '../components/Teams';
import Hero2 from '../components/Hero2';
import Mission from '../components/Mission';
import Gallery from '../components/Gallery';

const Team = () => {
  return (
    <div>
      <SEO title={"Viccci Protocol Team"} 
          description={"Meet the team working on Viccci Protocol"} 
          image={"log.png"} 
          url={"Viccci.xyz"}  />
      <Nav />
      <div className=" mt-32"></div>
      <Hero2/>
      <Teams />
      <div className=" mt-32"></div>
      <Mission/>
      <Gallery/>
      
      <Footer />
    </div>
    
  )
}

export default Team
