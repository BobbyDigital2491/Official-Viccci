import React from 'react'
import NavComponent from '../components/NavComponent'
import BlogSec from '../components/BlogSec'
import Footer from '../components/Footer'
import SEO from '../components/Seo'

const blog = () => {
  return (
    
    <div>  
      <NavComponent />
      <SEO title={"Viccci Protocol Blog"} 
      description={"Blog Under Construction."} 
      image={"log.png"} 
      url={"Viccci.xyz"}  />
      
      <BlogSec />
      <Footer />
      
    </div>
  )
}

export default blog
