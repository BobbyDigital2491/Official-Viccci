import React from "react";
import SEO from "../components/Seo";
import Footer from "../components/Footer";
import NavComponent from "../components/NavComponent";
import Hero2 from "../components/Hero2";
import TokenInfo from "../components/TokenInfo";


export default function token() {
  return (
    <>
      <div className="relative ">
        <div className="absolute  -z-10 top-[-50rem] -left-[40rem] ">
          
        </div>
      </div>
      <SEO title={"Viccci Protocol Tokenomics"} 
      description={"Simplicity and ease-of-use...unlock the true potential of the decentralized social exchange."} 
      image={"log.png"} 
      url={"Viccci.xyz"}  />
      <NavComponent />
      <Hero2 />    
      <TokenInfo />
      
      <Footer />
    </>
  );
}
