import React from 'react'

const Hero4 = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
    <video
      className='object-cover h-full w-full absolute -z-10'
      src="https://bafybeiegubvvc553ux2joxq5qbyiypmvgavvhdrk7tckpgufby7q65j4ra.ipfs.dweb.link/video%20copy.mp4"
      autoPlay
      loop
      muted
    />
    <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
      <h1 className='py-2'>White 
        <span className='blue'>paper</span>
      </h1>
      <p className='text-xl py-4'>
      The Social Exchange is a decentralized platform built on Polygon layer 2 technology. It uses smart contracts to enable trustless interactions between users, eliminating the need for intermediaries and allowing for fast, secure transactions. The platform is powered by a unique token, Viccci, which is used to incentivize and reward users for their contributions to the ecosystem.
 
      </p>
      <div>
        
      </div>
    </div>
    <div>
      
    </div>
  
  </div>
  )
}

export default Hero4
