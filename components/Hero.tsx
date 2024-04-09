import Link from "next/link";

export default function Hero() {
  return (
    <div className="py-12 sm:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
            <p
                className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-white ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
                <span className="hidden md:inline">We Build Software.</span>
                <a href="#" target="_blank" className="font-semibold text-sky-400">
                    <span className="absolute inset-0" ></span> Learn
                    more <span>→</span>
                </a>
            </p>
        </div>
        <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              VCP <br/> <span className='text-sky-400'>Token</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
            VCP is a social exchange that is a decentralized platform built on Polygon layer 2 technology. 
            It uses smart contracts to enable trustless interactions between users, eliminating the need for intermediaries and allowing for fast, secure transactions. The platform is powered by a unique token, Viccci, which is used to incentivize and reward users for their contributions to the ecosystem.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="/services"
                    className="rounded-md bg-sky-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-200">Our Services
                </a>
                <a href="/contact" className="text-sm font-semibold leading-6 hover:text-sky-400 text-white">
                    Contact Us
                    <span> → </span>
                </a>
            </div>
        </div>
        
    </div>
</div>
  );
}
