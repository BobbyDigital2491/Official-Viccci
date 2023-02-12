import React from 'react';
import SEO from '../components/Seo';
import NavComponent from '../components/NavComponent';
import Map from '../components/Map';
import Map2 from '../components/Map2';
import Map3 from '../components/Map3';
import Footer from '../components/Footer';
export default function about() {
  return (
    <>
      <SEO title={"Viccci Protocol"} 
      description={"Check out out roadmap"} 
      image={"log.png"} 
      url={"Viccci.xyz"}  />
        <NavComponent />
        <Map />
        <br/><br/>
        <Map2 />
        <br/><br/>
        <Map3 />
        <br/><br/>
        <Footer />
    </>
  );
}
