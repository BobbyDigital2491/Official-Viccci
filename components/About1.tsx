import React from 'react'

const About = () => {
  return (
    <div id="about" className="relative bg-black overflow-hidden mt-16">
    <div className="max-w-7xl mx-auto">
        <div className=" z-10 pb-8 bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden  absolute right-0 inset-y-0 h-full w-48 text-black transform translate-x-1/2"
                fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                    <h2 className="my-6 text-5xl tracking-tight font-extrabold text-white sm:text-3xl md:text-5xl">
                        About <span className='text-sky-400'>us</span>
                    </h2>

                    <p className='text-white'>
                        At Viccci Protocol we are passionate about leveraging technology to empower businesses and organizations. 
                        As a premier software development company, we specialize in creating custom solutions tailored to meet the
                        unique needs and goals of our clients. Our team of experienced developers, designers, and project managers 
                        collaborates closely with each client to deliver innovative software applications that drive efficiency, 
                        enhance productivity, and fuel growth. Whether you need a custom web application, mobile app, or enterprise 
                        software solution, we are committed to providing cutting-edge technologies and exceptional service. We strive 
                        to build long-lasting partnerships by delivering high-quality, scalable, and intuitive software solutions that 
                        exceed expectations. 
                    </p>
                </div>
            </main>
        </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/3">
        <img className="h-56 w-full object-cover sm:object-top md:object-top lg:object-cover sm:h-72 md:h-96 md-24 lg:w-full lg:h-full" src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/437377051_10160560010122600_7008792032854683566_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=y2adMTKy5tQAb4kHBAq&_nc_ht=scontent-lga3-1.xx&oh=00_AfBnJmWBWds2Jf_SrqCPaK5mtYHga-IKGn44qsf3fCu5ww&oe=662AF930" alt=""/>
    </div>
</div>
  )
}

export default About