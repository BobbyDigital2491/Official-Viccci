import React from 'react';

const Hero = () => {
    return (
        <div class="py-12 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mb-8 flex justify-center">
            <p
                class="relative rounded-full px-4 py-1.5 text-sm leading-6 text-white ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
                <span class="hidden md:inline">We Build Software.</span>
                <a target="_blank" class="font-semibold text-sky-400">
                    <span class="absolute inset-0" ></span> For Your Business <span>→</span>
                </a>
            </p>
        </div>
        <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Welcome to <br/> <span className='text-sky-400'>Viccci Protocol</span>
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-200">
            Transform your business with tailored solutions crafted by our expert team of software developers. 
            We specialize in building custom software that accelerates innovation and drives results for your unique needs.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <a href="/services"
                    class="rounded-md bg-sky-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400">Check
                    out our services
                </a>
                <a href="/about" class="text-sm font-semibold leading-6 text-white">
                    Learn more
                    <span> → </span>
                </a>
            </div>
        </div>
        <div class="mt-10 flow-root sm:mt-2">
            <div
                class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img src="/expo.png" width="2432" height="1442" class="rounded-lxl shadow-2xl ring-1 ring-gray-900/10"/>
            </div>
        </div>
    </div>
</div>
    );
};

export default Hero;
