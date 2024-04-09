import React from 'react'

const CHero = () => {
  return (
    <div id="about" className="relative bg-black overflow-hidden mt-16">
    <div className="max-w-7xl mx-auto">
        <div className=" z-10 pb-8 bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden  absolute right-0 inset-y-0 h-full w-48 text-black transform translate-x-1/2"
                fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                    <h2 className="my-6 text-xl tracking-tight font-extrabold text-white sm:text-3xl md:text-5xl">
                        Hope to hear from you <span className='text-sky-400'>soon</span>
                    </h2>

                    <p className='text-white'>
                        At Viccci Protocol we are passionate about leveraging technology to empower businesses and organizations. 
                        As a premier software development company, we specialize in creating custom solutions tailored to meet the
                        unique needs and goals of our clients. 
                    </p>
                </div>
            </main>
        </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img className="h-full w-full object-contain sm:h-full md:h-full lg:w-full lg:h-full" src="/log.png" alt=""/>
    </div>
</div>
  )
}

export default CHero