import React from 'react'

const Hero2 = () => {
  return (
      <div className='w-full h-[90vh] top-[90px]'>
      <video
        className='object-cover h-full w-full absolute -z-10'
        src="/video.mp4"
        autoPlay
        loop
        muted
      />
      <br/><br/>
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <h1 className='py-2'>Token
          <span className='blue'>omics</span> 
        </h1>
        <p className='text-xl py-4'>
        Viccci is a limited and fixed supply token at the center of the Social Exchange ecosystem. 
        A portion of the total supply is distributed to users through incentives and rewards programs, 
        encouraging participation and growth. Viccci serves as the primary means of exchange on the platform, used for transactions, 
        tipping, and rewards. With its value tied to the growth of the Social Exchange, Viccci serves not only as a means of exchange 
        but also as a store of value. As the platform becomes more widely adopted, the value of Viccci is expected to increase. Join the 
        Social Exchange ecosystem and become a part of the future of digital asset trading with Viccci.
        </p>
        <div>
          
        </div>
      </div>
      <div>
        
      </div>
    
    </div>
  )
}

export default Hero2
