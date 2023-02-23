import React from "react";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavComponent from "../components/NavComponent";
import SEO from "../components/Seo";
import Next from "../components/Next";
import Special from "../components/Special";
import Factory from "../components/Factory";
import Developers from "../components/Developers";
import Time from "../components/Time";
import Faq from "../components/Faq";

export default function index() {
  return (
    <>
      <SEO title={"Viccci Protocol: Built Using Polygon Layer 2 technology."} 
      description={"Viccci Protocol is a decentralized social exchange built on the cutting-edge Polygon Layer 2 technology. What sets it apart from other decentralized exchanges is its focus on creating a community-driven platform that prioritizes the needs of its users. Additionally, the use of Polygon's high-performance Layer 2 technology allows for fast, low-cost transactions, making it a suitable choice for both casual and professional traders. Overall, Viccci Protocol's combination of community empowerment and technical innovation makes it a standout player in the decentralized exchange space."} 
      image={"public/log.png"} 
      url={"Viccci.xyz"}  />
      <NavComponent />
      <Hero />
      <AboutUs />
      <Next />
      <Special />
      <Factory />
      <Time />
      <br/><br/>
      <Developers />
      <Faq />
      
      <Footer />
      
    </>
  );
}
