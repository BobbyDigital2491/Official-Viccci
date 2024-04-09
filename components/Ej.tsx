import React from 'react'

const ej = () => {
  return (
    <section className="w-full overflow-hidden dark:bg-black">
    <div className="flex flex-col">
       
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="User Cover"
                className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]" />

       
        <div className="sm:w-[80%] xs:w-[90%] mx-auto flex">
            <img src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/215165627_10158703911782600_4023616782383536024_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=r8j8taE1ZAQAb55AfLh&_nc_ht=scontent-lga3-2.xx&oh=00_AfCfQ3p0_NgPaQnIhpqFhddIgbqf2eXIfxt34uizLCBzSg&oe=661896D9" alt="User Profile"
                    className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]" />

           
            <h1
                className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
                Ej Gailliard</h1>

        </div>

        <div
            className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            
            <p className="w-fit text-white dark:text-white text-md">
            Eric Gailliard Jr (EJ), born and raised in Rock Hill, SC. EJ is a young entrepreneur who has worked in the financial sectors for over 10 years. He specializes in the capital markets and is a day trader in several markets specifically stock indexes. He has also done several courses on reading charts and the different languages.
            Professionally, EJ has worked in Operations and Business Analytics where he has been extremely savvy in working data applications and its respective software.The skill sets in Market analysis, risk management, tokenomics and analytics software will be an asset to Viccci protocol.</p>


            <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
                <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                    <div className="w-full">
                        <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                            <div className="flex flex-col pb-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">First Name</dt>
                                <dd className="text-lg font-semibold">Ej</dd>
                            </div>
                            <div className="flex flex-col py-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Last Name</dt>
                                <dd className="text-lg font-semibold">Gailliard</dd>
                            </div>
                            <div className="flex flex-col py-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Date Of Birth</dt>
                                <dd className="text-lg font-semibold">21/02/1997</dd>
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
                                <dd className="text-lg font-semibold">Rockhill, SC</dd>
                            </div>

                            <div className="flex flex-col pt-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone Number</dt>
                                <dd className="text-lg font-semibold">+18035344161</dd>
                            </div>
                            <div className="flex flex-col pt-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
                                <dd className="text-lg font-semibold">edgailliardjr@gmail.com </dd>
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

export default ej