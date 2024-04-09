import React from 'react'

const Upcoming = () => {
  return (
    <div >
        
      <section className="bg-black dark:bg-black">
    <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl dark:text-white">Upcoming <span className='text-sky-400'>Classes</span> & <span className='text-sky-400'>Events</span>   </h1>

            
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div>
                
                <img className="object-full object-center w-full h-82 rounded-lg lg:h-92" src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/435386734_10160538690842600_1232768833721755427_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_YDfiHI4_gYAb7UOnqv&_nc_ht=scontent-lga3-1.xx&oh=00_AfCpIRWflEBWVbhX_sjyyuQQWElgn-bAxzRl8_gVhA2QYg&oe=661A103C" alt="" />

                <div className="mt-8">
                    

                    <h1 className="mt-4 text-xl font-semibold text-white dark:text-sky-400">
                        Bell Business Insider
                    </h1>

                    <p className="mt-2 text-white dark:text-white">
                    If you are interested in the tech space or already in and want to learn more about AI advances as well as Augmented Realty tech etc. then you should register for our upcoming event April 18th
                    </p>
                    
                    <div className="flex items-center justify-between mt-4">


                        <a href="https://www.bellofrockhill.org/events/bell-business-insider" className="inline-block text-sky-400 underline hover:text-white">Register Now</a>
                    </div>

                </div>
            </div>

            
        </div>
    </div>
</section>
    </div>
  )
}

export default Upcoming