import React from 'react'
import Nav2 from '../../components/Nav2'
import SEO from '../../components/Seo'
import SeenFooter from '../../components/SeenFooter'

const PrivacyPolicy = () => {
  return (
    <div>
        <SEO title={"About Viccci Protocol"} 
             description={"Viccci Protocol is a decentralized social exchange built on the cutting-edge Polygon Layer 2 technology. What sets it apart from other decentralized exchanges is its focus on creating a community-driven platform that prioritizes the needs of its users. Through its unique governance model, users have a direct say in the development and direction of the platform, and can earn rewards for participating in the ecosystem. Additionally, the use of Polygon's high-performance Layer 2 technology allows for fast, low-cost transactions, making it a suitable choice for both casual and professional traders. Overall, Viccci Protocol's combination of community empowerment and technical innovation makes it a standout player in the decentralized exchange space."} 
             image={"SeenLogo.png"} 
             url={"Viccci.xyz"}  />
        <Nav2/>
        <div className='mt-36'></div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
        Privacy Policy
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
      Viccci Protocol and Seen & Heard Collective built the Seen & Heard Collective app as a Free app. This SERVICE is provided by Viccci Protocol and Seen & Heard Collective at no cost and is intended for use as is.

This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decides to use our Service.

Information Collection and Use
We do not collect any personal information from users of our app. Your privacy is of utmost importance to us, and we ensure that no data is collected, stored, or shared.

Security
We only see what Apple and Android make available to us in terms of users and usage. Since we do not collect any information ourselves, there is no need for additional data security measures. Your use of our app is completely anonymous.

Changes to This Privacy Policy
We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.

This policy is effective as of August 10th, 2024.

Contact Us
If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at Info@viccci.xyz.</p>
<SeenFooter/>
    </div>
  )
}

export default PrivacyPolicy