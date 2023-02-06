import React from 'react';
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';
import AboutCard from './AboutCard';

const AboutUs = () => {
  return (
    <div className='w-full bg-black text-white text-center'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 '>
        <div>
          <h1 className='py-4 text-blue'>Decentralized <span className='blue'>Social Exchange</span></h1>
          <p className='py-4 text-xl'>
            The Defi protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.
          </p>

          {/* Card Container */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>

            {/* Card */}
            <AboutCard icon={<SiHiveBlockchain size={40} />} heading='Reliable, tamper-proof network' text='Viccci Protocol is built on the tamper-proof and reliable technology of Polygon Layer 2, ensuring that all transactions and data on the platform are secure and trustworthy. This ensures that the platform can be relied upon for safe and secure trading and exchange of digital assets.' />
            <AboutCard icon={<SiFsecure size={40} />} heading='Decentralized Governance' text='Viccci Protocol is a community-driven decentralized social exchange that allows users to have a direct say in the development and direction of the platform through its unique governance model.'/>
            <AboutCard icon={<SiStrapi size={40} />} heading='High-Performance Transactions' text='Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.' />
            <AboutCard icon={<VscServerProcess size={40} />} heading='Data Ownership' text='The platform empowers users to own and monetize their own data, giving them complete control over their information.' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
