import React from 'react'

const Partners = () => {
  return (
    <div className="py-14">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
    <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"><span className="text-sky-400">Trusted</span> By Companies Like</h2>
        <div className="mt-6">
            <ul className="flex gap-y-6 flex-wrap items-center justify-center [&>*]:px-12 ">
                {/* LOGO 1 */}
                <li className="flex-none">
                    <img src='/bfox.png' width={75} alt=''/>
                </li>

                {/* LOGO 2 */}
                <li className="flex-none">
                    <img src='/Sokoni.png' width={150} alt=''/>
                </li>

                {/* LOGO 3 */}
                <li className="flex-none">
                    <img src='/Bell.png' width={100} alt=''/>
                </li>

                {/* LOGO 4 */}
                <li className="flex-none">
                    <img src='/bfox.png' width={50} alt=''/>
                </li>

            </ul>
        </div>
    </div>
</div>
  )
}

export default Partners