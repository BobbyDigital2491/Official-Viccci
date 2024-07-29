import React from 'react'
import Nav2 from '../../components/Nav2'
import SeenFooter from '../../components/SeenFooter'
import SEO from '../../components/Seo'
import SeenGallery from '../../components/SeenGallery'

const DrueWoleGallery = () => {
  return (
    <div>
        <SEO title={"Seen & Heard Collective"} 
             description={"Viccci Protocol is a decentralized social exchange built on the cutting-edge Polygon Layer 2 technology. What sets it apart from other decentralized exchanges is its focus on creating a community-driven platform that prioritizes the needs of its users. Through its unique governance model, users have a direct say in the development and direction of the platform, and can earn rewards for participating in the ecosystem. Additionally, the use of Polygon's high-performance Layer 2 technology allows for fast, low-cost transactions, making it a suitable choice for both casual and professional traders. Overall, Viccci Protocol's combination of community empowerment and technical innovation makes it a standout player in the decentralized exchange space."} 
             image={"/SeenLogo.png"} 
             url={"Viccci.xyz"}  />
        <Nav2/>
        <SeenGallery/>
        <SeenFooter/>
    </div>
  )
}

export default DrueWoleGallery