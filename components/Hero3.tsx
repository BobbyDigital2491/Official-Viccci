import React from 'react'

const Hero3 = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video
        className='object-cover h-full w-full absolute -z-10'
        src="/video.mp4"
        autoPlay
        loop
        muted
      />
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <br/>
        <h1 className='py-2'>Our 
          <span className='blue'>&nbsp;Team</span>
        </h1>
        <p className='text-xl py-4'>
        Each Co - Founder of Viccci Protocol brings a diverse range of skill sets to the decentralized social exchange. 
      The team is comprised of individuals with expertise in the blockchain technology field, software development, finance, 
      marketing and data analytics. The team brings a passion for creating a secure and accessible platform for the exchange. 
      This is the motivating force behind their commitment to scaling $VCP. This combination of expertise and business savvy 
      enabled them to build a strong foundation for the platform and to ensures continued growth and success. 
        </p>
        <div>
          
        </div>
      </div>
      <div>
        
      </div>
    
    </div>
  )
}

export default Hero3
