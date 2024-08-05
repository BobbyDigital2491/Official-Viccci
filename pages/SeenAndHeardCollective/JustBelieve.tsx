import React from 'react'
import SEO from '../../components/Seo'
import Nav2 from '../../components/Nav2'
import JustHero from '../../components/JustHero'
import JustGallery from '../../components/JustGallery'
import Article from '../../components/Article'
import JustPartner from '../../components/JustPartner'
import JustFeature from '../../components/JustFeature'
import SeenFooter from '../../components/SeenFooter'
import JustCta from '../../components/JustCta'

const JustBelieve = () => {
  return (
    <div>
        <SEO title={"Seen & Heard Collective"} 
             description={"Viccci Protocol is a decentralized social exchange built on the cutting-edge Polygon Layer 2 technology. What sets it apart from other decentralized exchanges is its focus on creating a community-driven platform that prioritizes the needs of its users. Through its unique governance model, users have a direct say in the development and direction of the platform, and can earn rewards for participating in the ecosystem. Additionally, the use of Polygon's high-performance Layer 2 technology allows for fast, low-cost transactions, making it a suitable choice for both casual and professional traders. Overall, Viccci Protocol's combination of community empowerment and technical innovation makes it a standout player in the decentralized exchange space."} 
             image={"SeenLogo.png"} 
             url={"Viccci.xyz"}  />
        <Nav2 />
        <div className='mt-16'></div>
        <JustHero/>
        <JustPartner/>
        <JustFeature/>
        <Article/>
        <JustCta/>
        
        <SeenFooter/>

</div>
  )
}
export default JustBelieve