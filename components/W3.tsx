import React from 'react'

const W3 = () => {
  return (
    <div>
        <section className="bg-black dark:bg-black">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-4xl font-semibold text-white capitalize lg:text-4xl dark:text-white">Our   <span className=' text-sky-400'>Solution</span></h1>
        <br/>
        

        <div className="mt-1 xl:mt-1 lg:flex lg:items-center">
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 ">
                <div className="space-y-3">
                    <p className="text-white dark:text-gray-300 mt ">
                        The solution to the problem of data harvesting in the Web 2 space is to move towards a Web 3 model
                        that prioritizes the privacy and control of users over their data. This can be achieved by building 
                        decentralized platforms, such as Viccci Protocol, that allow users to own and control their own data,
                         and make decisions about who has access to it. In the case of Viccci Protocol, it is a decentralized 
                         social exchange built on Polygon Layer 2 technology that empowers users to own and monetize their own data.
                          With its unique governance model, users have a direct say in the development and direction of the platform, 
                          ensuring that their needs are prioritized. By providing a decentralized platform that prioritizes the privacy 
                          and control of users, Viccci Protocol is helping to create a new paradigm for data ownership and control in the
                           Web 3 era, in which users are in control of their own information and are able to make decisions about how it 
                           is used.

</p>
                </div>
            </div>
            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
                <img className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-lg " src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/cf3a49135903777.61f0168cc7e02.gif" alt="" />
            </div>
        </div>
    </div>
</section></div>
  )
}

export default W3