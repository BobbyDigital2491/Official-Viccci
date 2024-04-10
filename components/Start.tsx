import React from 'react'

const Start = () => {
  return (
    <section className="bg-black dark:bg-black">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-white dark:text-white">Get Started Today</h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Reach out to us to build your custom business solution</p>
            <a href="/contact" className="text-white bg-sky-400 hover:bg-white hover:text-sky-400 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Contact Us</a>
        </div>
    </div>
</section>
  )
}

export default Start