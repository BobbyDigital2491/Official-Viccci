import React from 'react';



const Hero1 = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video
        className='object-cover h-full w-full absolute -z-10'
        src="/video.mp4"
        autoPlay
        loop
        muted
      />
      <br/><br/><br/><br/>
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <h1 className='py-2'>About&nbsp;
          <span className='blue'>$VCI</span> 
        </h1>
        <p className='text-xl py-4'>
        Viccci Protocol is a decentralized social exchange 
        built on the Polygon network using layer 2 technology. 
        Our platform allows users to trade, connect, and engage 
        with one another in a trustless and decentralized environment. 
        By leveraging the power of the Polygon network, we are able to provide 
        fast and low-cost transactions while maintaining the security and integrity
         of the blockchain. Our vision is to create a new standard for social exchange,
          one that is truly decentralized and community-driven.
        </p>
        <div>
          
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Hero1;
