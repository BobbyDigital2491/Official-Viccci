import React from "react";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import SEO from "../components/Seo";
import Next from "../components/Next";
import NewHero from "../components/NewHero";
import Nav from "../components/Nav";
import Ct from "../components/Ct";
import Testimonials from "../components/Testimonials";
import Start from "../components/Start";

export default function index() {
  return (
    <>
      <head/>
      <SEO title={"Viccci Protocol"} 
      description={"Viccci Protocol is a decentralized social exchange built on the cutting-edge Polygon Layer 2 technology. What sets it apart from other decentralized exchanges is its focus on creating a community-driven platform that prioritizes the needs of its users. Additionally, the use of Polygon's high-performance Layer 2 technology allows for fast, low-cost transactions, making it a suitable choice for both casual and professional traders. Overall, Viccci Protocol's combination of community empowerment and technical innovation makes it a standout player in the decentralized exchange space."} 
      image={"/log.png"} 
      url={"Viccci.xyz"}  />
      <Nav/>
      <div className=" mt-32"></div>
      <NewHero />
      <Ct/>
      <AboutUs />
      <Next />
      <Testimonials/>
      <Start/>
      <br/><br/>
      
  
      
      
      <Footer />
      
    </>
  );
}
