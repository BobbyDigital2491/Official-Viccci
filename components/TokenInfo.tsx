import React from 'react'

const TokenInfo = () => {
  return (
    <div className="bg-black">
    <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
      <div className="text-center">
        <div className="text-3xl uppercase font-bold tracking-wider mb-1 text-white">
          Viccci <span className='blue'>Protocol</span> 
        </div>
        <img src="/log.png" className="bg-white border-4 rounded-md h-auto max-w-sm mx-auto" />
       <br/>
        <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-white lg:w-2/3 mx-auto">
        The total supply of Viccci is limited and fixed, with no further tokens to be created or mined. A portion of the total 
        supply will be distributed to users through a series of incentives and rewards programs. These programs are designed to 
        encourage users to participate in and contribute to the growth of the Social Exchange ecosystem. Viccci will be used as 
        the primary means of exchange on the Social Exchange platform. It will be used to transact, tip, and reward other users 
        for their contributions to the platform. Viccci can also be used to access premium features and services on the platform.
        In addition to its use as a means of exchange, Viccci will also serve as a store of value on the Social Exchange platform. 
        The value of Viccci will be determined by market demand and the growth of the Social Exchange ecosystem. As the platform 
        grows and becomes more widely adopted, the value of Viccci is expected to increase.
        <br/>
        <br/>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
        Key <span className="blue">Features</span>
        </h2>
        <br/>
        <li><span className="blue">Decentralized</span>: The Social Exchange is built on the Ethereum blockchain, offering a decentralized and secure environment for social interactions and transactions.</li>
        <li><span className="blue">Incentivized</span>: Viccci is used to incentivize and reward users for their contributions to the Social Exchange ecosystem. This encourages active participation and helps to drive growth on the platform.</li>
        <li><span className="blue">User-friendly</span>: The Social Exchange platform is designed to be intuitive and user-friendly, making it accessible to users of all experience levels.</li>
        <li><span className="blue">Scalable</span>: The Social Exchange is built on a highly scalable architecture, allowing it to support a large and growing user base.</li>
        <li><span className="blue">Layer 2</span>: Built using Polygon which is able to fully benefit from Ethereum’s network effects. Scalable, secure, with low transaction fees. In addition to all these features Polygon has a robust system of tools to aid in the development process.</li>
        </h3>

        <section className="bg-black">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">
        Sometimes <span className='blue'>simple is better</span>
      </h2>

      <p className="mt-4 text-white sm:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
        laborum labore provident impedit esse recusandae facere libero harum
        sequi.
      </p>
    </div>

    <div className="mt-8 sm:mt-12">
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div
          className="flex flex-col rounded-lg border border-sky-400 px-4 py-8 text-center"
        >
          <dt className="order-last text-lg font-medium text-white">
            Total Supply
          </dt>

          <dd className="text-4xl font-extrabold text-sky-400 md:text-5xl">
            27.5m
          </dd>
        </div>

        <div
          className="flex flex-col rounded-lg border border-sky-400 px-4 py-8 text-center"
        >
          <dt className="order-last text-lg font-medium text-gwhite">
            Built using the EVM
          </dt>

          <dd className="text-4xl font-extrabold text-sky-400 md:text-5xl">ERC-20</dd>
        </div>

        <div
          className="flex flex-col rounded-lg border border-sky-400 px-4 py-8 text-center"
        >
          <dt className="order-last text-lg font-medium text-white">
            60% of total supply injected into liquidity pool
          </dt>

          <dd className="text-4xl font-extrabold text-sky-400 md:text-5xl">1.65M </dd>
        </div>
      </dl>
    </div>
  </div>
</section>
<h1 className='text-white text-6xl border border-sky-400 rounded-lg py-8'>Total Supply: <span className='blue'>2.75m</span></h1>
<br/>
      <h3 className='text-white text-xl  hover:text-grey active:text-white transition duration-100'><a href='whitepaper' >See <span className='blue'>Whitepaper</span> for further details</a></h3>
      </div>
    </div>
  </div>
  )
}

export default TokenInfo
