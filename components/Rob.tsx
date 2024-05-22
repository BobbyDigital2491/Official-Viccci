import React from 'react'

const Rob = () => {
  return (
    <section className="w-full overflow-hidden dark:bg-black">
    <div className="flex flex-col">
       
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="User Cover"
                className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]" />

       
        <div className="sm:w-[80%] xs:w-[90%] mx-auto flex">
            <img src="https://zszleipyxmxmhjomwqtk.supabase.co/storage/v1/object/public/avatars/a1/Rpb.jpg" alt="User Profile"
                    className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]" />

           
            <h1
                className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
                Robert Lawrence</h1>

        </div>

        <div
            className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            
            <p className="w-fit text-white dark:text-white text-md">
            Born and raised in Brooklyn, NY. Robert Lawrence is a self taught developer with expertise in full stack development, C#, Unity & Blender. He is the lead developer of Viccci Protocol, a decentralized social exchange that is changing the way people trade and exchange digital assets. Robert's experience in developing robust and scalable software systems has been a valuable asset to the team, as he brings a unique blend of technical expertise and creative vision to the project.

In addition to his skills in traditional software development, Robert is also proficient in cutting-edge technologies such as React and Next.js. He has a passion for using technology to solve complex problems and create new opportunities, and this is evident in his work on Viccci Protocol.</p>


            <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
                <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                    <div className="w-full">
                        <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                            <div className="flex flex-col pb-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">First Name</dt>
                                <dd className="text-lg font-semibold">Robert</dd>
                            </div>
                            <div className="flex flex-col py-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Last Name</dt>
                                <dd className="text-lg font-semibold">Lawrence</dd>
                            </div>
                            <div className="flex flex-col py-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Date Of Birth</dt>
                                <dd className="text-lg font-semibold">4/24/1991</dd>
                            </div>
                            <div className="flex flex-col py-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Gender</dt>
                                <dd className="text-lg font-semibold">Male</dd>
                            </div>
                        </dl>
                    </div>
                    <div className="w-full">
                        <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                            <div className="flex flex-col pb-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Location</dt>
                                <dd className="text-lg font-semibold">Brooklyn, NY</dd>
                            </div>

                            <div className="flex flex-col pt-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone Number</dt>
                                <dd className="text-lg font-semibold">+18035344161</dd>
                            </div>
                            <div className="flex flex-col pt-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
                                <dd className="text-lg font-semibold">86filmz@@gmail.com </dd>
                            </div>

                            <div className="flex flex-col pt-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Website</dt>
                                <dd className="text-lg font-semibold">https://viccci.xyz</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                
                {/*<div className="my-10 lg:w-[70%] md:h-[14rem] xs:w-full xs:h-[10rem]">
                    

                   
                    

                </div>*/}
            </div>
        </div>
    </div>
</section>
  )
}

export default Rob
