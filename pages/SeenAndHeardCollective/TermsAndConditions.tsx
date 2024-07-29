import React from 'react'
import Nav2 from '../../components/Nav2'
import SeenFooter from '../../components/SeenFooter'
import SEO from '../../components/Seo'

const TermsAndConditions = () => {
  return (
    <div>
    <SEO title={"About Viccci Protocol"} 
             description={"Viccci Protocol is a decentralized social exchange built on the cutting-edge Polygon Layer 2 technology. What sets it apart from other decentralized exchanges is its focus on creating a community-driven platform that prioritizes the needs of its users. Through its unique governance model, users have a direct say in the development and direction of the platform, and can earn rewards for participating in the ecosystem. Additionally, the use of Polygon's high-performance Layer 2 technology allows for fast, low-cost transactions, making it a suitable choice for both casual and professional traders. Overall, Viccci Protocol's combination of community empowerment and technical innovation makes it a standout player in the decentralized exchange space."} 
             image={"SeenLogo.png"} 
             url={"Viccci.xyz"}  />
        <Nav2/>
        <div className='mt-36'></div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
        Terms & Conditions
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
      Welcome to the Seen & Heard Collective app, governed by these Terms & Conditions
     ("Terms"). By using the app provided by Viccci Protocol and Seen & Heard 
     Collective ("we," "our," or "us"), you agree to be bound by these Terms. 
     If you disagree, please do not use the app. You must be at least 13 years old to 
     use the app and represent that you meet this age requirement. 
     We grant you a non-exclusive, non-transferable, revocable license to use the app 
     for personal, non-commercial purposes. You agree not to use the app for illegal 
     or unauthorized purposes, modify or create derivative works, disrupt the app's 
     operation, or use automated means to access the app. All content and features of 
     the app are owned by Viccci Protocol and Seen & Heard Collective or its 
     licensors and are protected by intellectual property laws. Our Privacy Policy, 
     which is incorporated into these Terms, explains how we handle your information. 
     We may terminate or suspend your access to the app for any reason, including 
     breaches of these Terms. The app is provided "as is" without warranties of any 
     kind, and we do not guarantee its uninterrupted or error-free operation. 
     Viccci Protocol and Seen & Heard Collective, including their directors, 
     employees, or agents, are not liable for any damages arising from your use 
     of the app. These Terms are governed by the laws of North Carolina, 
     and we may update them periodically. Please review this page for any changes. 
     For questions or suggestions, contact us at "info@viccci.xyz".</p>
    <SeenFooter/>
    </div>
  )
}

export default TermsAndConditions