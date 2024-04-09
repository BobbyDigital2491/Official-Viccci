import React from 'react'

const Hero3 = () => {
  return (
    <div className="py-12 sm:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
            <p
                className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-white ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
                <span className="hidden md:inline">We Build Software.</span>
                <a target="_blank" className="font-semibold text-sky-400">
                    <span className="absolute inset-0" ></span> For your business <span>→</span>
                </a>
            </p>
        </div>
        <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Custom Built Software <br/> <span className='text-sky-400'>for your business</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
            Transform your business with tailored solutions crafted by our expert team of software developers. 
            We specialize in building custom software that accelerates innovation and drives results for your unique needs.
            </p>
            
        </div>
        
    </div>
</div>
  )
}

export default Hero3
