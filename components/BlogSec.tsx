import React from 'react'
import NavComponent from './NavComponent'

const BlogSec = () => {
  return (
    <div>
        
      <section className="bg-black dark:bg-black">
    <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl dark:text-white">Our <span className='blue'>Blog</span> </h1>

            
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                <div className="mt-8">
                    <span className="text-blue-500 uppercase">Blockchain</span>

                    <h1 className="mt-4 text-xl font-semibold text-white dark:text-white">
                        Crypto 101
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Understanding the Basics of Blockchain and Cryptocurrency.
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <a href="#" className="text-lg font-medium text-white-700 dark:text-gray-300 ">
                                Robert Lawrence
                            </a>

                            <p className="text-sm text-gray-500 dark:text-gray-400">January 21, 2023</p>
                        </div>

                        <a href="/post" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                    </div>

                </div>
            </div>

            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://desis.osu.edu/seniorthesis/wp-content/uploads/2020/09/sharing-economy.png" alt="" />

                <div className="mt-8">
                    <span className="text-blue-500 uppercase">Education</span>

                    <h1 className="mt-4 text-xl font-semibold text-white dark:text-white">
                        What is a Social Exchange?</h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                    A social exchange is a decentralized platform that combines features of social media with a cryptocurrency exchange....
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <h1 className="text-lg font-medium text-white dark:text-gray-300 ">
                                Robert Lawrence
                            </h1>

                            <p className="text-sm text-gray-500 dark:text-gray-400">February 6, 2022</p>
                        </div>

                        <a href="#" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                    </div>

                </div>
            </div>

            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://venturebeat.com/wp-content/uploads/2022/05/GettyImages-1357404897-KanawatTH.jpg?fit=2309%2C1299&strip=all" alt="" />

                <div className="mt-8">
                    <span className="text-blue-500 uppercase">DAPPS</span>

                    <h1 className="mt-4 text-xl font-semibold text-white dark:text-white">
                        Web 3 Factory
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-white">
                        The real time video chat platform built for Viccci Protocol for education, business conferences....
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <a href="#" className="text-lg font-medium text-white dark:text-gray-300 ">
                                Robert Lawrence
                            </a>

                            <p className="text-sm text-gray-500 dark:text-gray-400">February 19, 2022</p>
                        </div>

                        <a href="#" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default BlogSec
