import React from 'react'

const Testimonials = () => {
  return (
    <section id="testimonies" className="py-20 bg-black">
    <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="mb-12 space-y-5 md:mb-16 md:text-center">
                <h1
                    className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-slate-200 bg-opacity-60 hover:bg-opacity-40">
                    Words from Others
                </h1>
                <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
                    Customer <span className='text-sky-400'>Testimonials</span>
                </h1>
                <p className="text-xl text-gray-100 md:text-center md:text-2xl">
                    Here's what others have to say about us.
                </p>
            </div>
        </div>


        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">


            <ul className="space-y-8">
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-sky-200 to-blue-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/KurtisBlow1" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-600 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src="https://pbs.twimg.com/profile_images/608637256287387648/AwI0m5ly_400x400.jpg"
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Kurtis Blow</h3>
                                        <p className="text-sky-400 text-md">Pioneer Rapper &amp; Entrepreneur</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">
                                    "I believe in the future of augmented reality, artificial intelligence, the advances in the internet.. 
                                    wow it's all amazing and these guys are steps ahead of so many"</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-sky-200 to-blue-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://www.linkedin.com/in/brandifoxmba/" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-600 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/425990871_10224462260329372_8218497596770532298_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_V5E8BS62ckAb4xdpv4&_nc_ht=scontent-lga3-1.xx&oh=00_AfBGsOKpQPRDeunzKB4RxR3kY6EQOCP0f_LIAwb7x75MnQ&oe=661B429D"
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Brandi Fox</h3>
                                        <p className="text-sky-400 text-md">Business Consultant</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">"I was able to create a whole business plan after attending the "Mixed Reality" class. That led to me creating my own Virtual Reality company which is now fully operational." </p>
                            </div>
                        </a>
                    </div>
                </li>
                
               
            </ul>


            <ul className="hidden space-y-8 sm:block">
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r  from-sky-200 to-blue-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://www.linkedin.com/in/camerynm/" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-600 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src="https://media.licdn.com/dms/image/D4D03AQEo5tufb1Ecdw/profile-displayphoto-shrink_200_200/0/1701124173767?e=1718236800&v=beta&t=Qu374Rc0VSRQtUWbu2_Ho3ww_lVtuEGLDgLwI7RLJi0"
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Cameryn Mitchel</h3>
                                        <p className="text-sky-400 text-md">Chair at B.E.L.L. of Rock Hill</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">"Enim neque volutpat ac tincidunt vitae
                                    semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam
                                    pellentesque nec. Turpis cursus in hac habitasse platea dictumst".</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r  from-sky-200 to-blue-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://www.instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ%3D%3D" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-600 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src="https://www.thanx4askin.com/Detox.jpg"
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Detox Jones</h3>
                                        <p className="text-sky-400 text-md">Executive Producer of Thanx4askin podcast</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">"When my podcast started to scale I needed a website to manage my content and sell my products. 
                                Viccci created my website and manages it for me while I handle other aspects of my business "</p>
                            </div>
                        </a>
                    </div>
                </li>
                
                
            </ul>


            <ul className="hidden space-y-8 lg:block">
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r  from-sky-200 to-blue-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://www.facebook.com/ken.butler.75" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-600 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/272791657_4805338896217263_5072370625456614445_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DyOT58YgDm0Ab5oYB5j&_nc_ht=scontent-lga3-2.xx&oh=00_AfDmC0NBohE9i8LAVYGXS9iFl4pHPu0-ZsBu7gAFCewMIA&oe=6619F79D"
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Ken Butler"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Ken Bulter</h3>
                                        <p className="text-sky-400 text-md">Viccci Supporter</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">
                                    "This is a movement with a real purpose that will lead to generational wealth. I got so much information from their classes,
                                    the information they provide is pure GOLD!! Amazing team!!"</p>
                            </div>
                        </a>
                    </div>
                </li>
               
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r  from-sky-200 to-blue-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/birdperson__?lang=en" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-600 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eb0d4a56-580b-48a9-9d1a-15c2faab2fff/db54va8-75b6e529-0a44-413d-b133-d729fe58802b.jpg/v1/fill/w_794,h_700,q_75,strp/bird_person_from_rick_and_morty_by_bluffton_db54va8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzAwIiwicGF0aCI6IlwvZlwvZWIwZDRhNTYtNTgwYi00OGE5LTlkMWEtMTVjMmZhYWIyZmZmXC9kYjU0dmE4LTc1YjZlNTI5LTBhNDQtNDEzZC1iMTMzLWQ3MjlmZTU4ODAyYi5qcGciLCJ3aWR0aCI6Ijw9Nzk0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WHaqaeCkQnzSLYyXotwQudz9i5hdVt-FAQHSrns9HRs"
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Satya Nadella"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Bird Person</h3>
                                        <p className="text-sky-400 text-md">Warrior / Diplomat</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">
                                This software development company is quite remarkable indeed.  I would highly recommend their services to fellow avians and sentient beings across the galaxies.</p>
                            </div>
                        </a>
                    </div>
                </li>
            
            </ul>


        </div>
    </div>
</section>
  )
}

export default Testimonials