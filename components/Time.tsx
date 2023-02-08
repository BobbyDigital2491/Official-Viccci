import React from 'react'

const Time = () => {
  return (
    <section className="bg-black dark:bg-black">
    <div className="container px-6 py-10 mx-auto">
    <h2
      className="
        mb-4
        text-2xl
        font-bold
        text-center 
        lg:text-3xl
        md:mb-6
        text-white
      "
    >
        <br/>
      From <span className='blue'>Our Blog</span> 
    </h2>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="/post" className="text-xl font-semibold text-white hover:underline dark:text-white ">
                        <span className='blue'>Crypto 101: Blockchain & Cryptocurrency</span>
                    </a>
                    <h1 className="text-lg text-white  dark:text-white ">
                    Understanding the Basics of Blockchain and Cryptocurrency.
                    </h1>
                    
                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 21 January 2023</span>
                </div>
            </div>

            <div className="lg:flex">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://desis.osu.edu/seniorthesis/wp-content/uploads/2020/09/sharing-economy.png" alt="" />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-white hover:underline dark:text-white ">
                        <span className='blue'>What is a social exchange?</span>
                    </a>
                    <h1 className="text-lg text-white  dark:text-white ">
                    A social exchange is a decentralized platform that combines features of social media with a cryptocurrency exchange....
                    </h1>
                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 6 February 2023</span>
                </div>
            </div>

            <div className="lg:flex">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://venturebeat.com/wp-content/uploads/2022/05/GettyImages-1357404897-KanawatTH.jpg?fit=2309%2C1299&strip=all" alt="" />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-white hover:underline dark:text-white ">
                        <span className='blue'>Web 3 Factory: Decentralized Realtime Video Chat </span>
                    </a>
                    <h1 className="text-lg text-white  dark:text-white ">
                    The real time video chat platform built for Viccci Protocol....
                    </h1>
                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 7 February 2023</span>
                </div>
            </div>

            <div className="lg:flex">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://dailyhodl.com/wp-content/uploads/2022/08/matic-top-altcoin-pick.jpg" alt="" />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-white hover:underline dark:text-white ">
                        <span className='blue'>Polygon: Layer 2 Technology</span>
                    </a>
                    
                    <h1 className="text-lg text-white hover:underline dark:text-white ">
                    An in-depth look at Polygon Layer 2 technology.
                    </h1>

                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 10 February 2020</span>
                </div>
            </div>

            
        </div>
    </div>
</section>
  )
}

export default Time
