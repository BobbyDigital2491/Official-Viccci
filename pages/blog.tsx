import React from 'react'
import BlogSec from '../components/BlogSec'
import Footer from '../components/Footer'
import SEO from '../components/Seo'
import Nav from '../components/Nav'

const blog = () => {
  return (
    
    <div>  
      <SEO title={"Viccci Protocol Blog"} 
           description={"Blog Under Construction."} 
           image={"log.png"} 
           url={"Viccci.xyz"}  />
      <Nav />
      <div className=" mt-32"></div>
      <BlogSec />
      <Footer />
      
    </div>
  )
}

export default blog
