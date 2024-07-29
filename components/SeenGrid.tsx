import React from 'react'

const SeenGrid = () => {
  return (
    <div>
        
    <section className="bg-black dark:bg-black">
  <div className="container px-6 py-10 mx-auto">
      <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl dark:text-white">Upcoming <span className='text-red-500'>Events</span>   </h1>

          
      </div>

      <hr className="my-8 border-gray-200 dark:border-gray-700" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-1 xl:grid-cols-2">
      
      <div>
              
              <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="/JustBelieve.jpg" alt="" />

              <div className="mt-8">
                  

                  <h1 className="mt-4 text-xl font-semibold text-white dark:text-red-500">
                  Ivory Latta Hall of Fame Experience
                  </h1>

                  <p className="mt-2 text-white dark:text-white">
                  If you are interested in the tech space or already in and want to learn more about AI advances as well as Augmented Realty tech etc. then you should register for our upcoming event April 18th
                  </p>
                  
                  <div className="flex items-center justify-between mt-4">


                      <a href="/SeenAndHeardCollective/JustBelieve" className="inline-block text-red-500 underline hover:text-red-500">Read more</a>
                  </div>
                  

              </div>
          </div>


      </div>
  </div>
</section>
  </div>
  )
}

export default SeenGrid