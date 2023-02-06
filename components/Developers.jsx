import React from 'react';

const Developers = () => {
  return (
    <div className='w-full text-white bg-black'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 md:flex'>
        <div>
          <h1>Join Us <span className='blue'>Today</span></h1>
          <p>
          Viccci Protocol is a decentralized social exchange that empowers users  to take control of their data and monetize their social interactions. Built on the Polygon blockchain, the platform allows users to create and share content, connect with others, and earn rewards for their contributions. With Viccci Protocol, users have the freedom to participate in a decentralized economy without the need for intermediaries or centralized authorities. The platform also offers a range of features such as privacy controls, content moderation, and community management tools to ensure a safe and engaging user experience. Join the Viccci Protocol community and be part of a new era of social interaction and economic empowerment.
          </p>
        </div>
        <div className='flex justify-center w-full py-16'>
            <img className='max-w-[150px] max-h-[250px] shadow-lg shadow-cyan-500/50' src="/log.png" alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Developers;
