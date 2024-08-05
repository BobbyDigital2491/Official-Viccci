import React from 'react'

const JustCta = () => {
  return (
    
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
 
  <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold bg-red-600 rounded-md md:text-4xl md:leading-tight dark:text-white">Read our latest news</h2>
    <p className="mt-1 text-neutral-200 dark:text-neutral-200">Stay up to date with all the developments at the Seen & Heard Collective.</p>
  </div>
  
  <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-10 lg:mb-14">
    
    <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
      <div className="aspect-w-16 aspect-h-9">
        <img className="w-full object-cover h-96 rounded-t-xl" src="/Drue.png" alt="Blog Image"/>
      </div>
      <div className="p-4 md:p-5">
        <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
          Artist Spotlight
        </p>
        <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
          Drue Wole
        </h3>
        <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
        At the heart of Dreü Wolé lies a deep passion for creativity, innovation, and meticulous craftsmanship. We offer a diverse array of services, from fine art and interior design to fashion and sustainable solutions, all tailored to enhance your environment and express your unique style.
          Click below to see some of Drue Wole's artwork in augmented reality
        </p>
        <button type="button" className="focus:outline-none mt-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><a href='/SeenAndHeardCollective/DrueWoleGallery'>See More</a></button>
      </div>
    </a>
   
    <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
      <div className="aspect-w-16 aspect-h-9">
        <img className="w-full object-cover h-96 rounded-t-xl" src="https://thepowerhouse-v1721746378.websitepro-cdn.com/wp-content/uploads/The-Power-House-Rock-Hill-Grounds-with-Tables-6.26-1280x719.jpg" alt="Blog Image"/>
      </div>
      <div className="p-4 md:p-5">
        <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
          Business
        </p>
        <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
          Powerhouse RockHill
        </h3>
        <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
        The Power House is the heart of the re-imagined University Center. This mixed-use development brings a platform for retail, residential, and entertainment for the entire community to life.
        </p>
        <button type="button" className="focus:outline-none mt-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><a href='https://www.powerhouserockhill.com/'>See More</a></button>
      </div>
    </a>
   
    
   
  </div>
  
  
  
</div>

  )
}

export default JustCta