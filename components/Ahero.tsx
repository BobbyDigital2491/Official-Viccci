import React from 'react'

const Ahero = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About
                <br className="hidden lg:inline-block"/>Us
            </h1>
            <p className="mb-8 leading-relaxed">At Viccci Protocol we are passionate about leveraging technology to empower businesses and organizations. 
                        As a premier software development company, we specialize in creating custom solutions tailored to meet the
                        unique needs and goals of our clients. Our team of experienced developers, designers, and project managers 
                        collaborates closely with each client to deliver innovative software applications that drive efficiency, 
                        enhance productivity, and fuel growth. Whether you need a custom web application, mobile app, or enterprise 
                        software solution, we are committed to providing cutting-edge technologies and exceptional service. We strive 
                        to build long-lasting partnerships by delivering high-quality, scalable, and intuitive software solutions that 
                        exceed expectations. </p>
            <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
            </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/437377051_10160560010122600_7008792032854683566_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=y2adMTKy5tQAb4kHBAq&_nc_ht=scontent-lga3-1.xx&oh=00_AfBnJmWBWds2Jf_SrqCPaK5mtYHga-IKGn44qsf3fCu5ww&oe=662AF930"/>
        </div>
    </div>
</section>
  )
}

export default Ahero