import React from 'react'

const ExtendedT = () => {
  return (
    <div>
      <section className="bg-black dark:bg-black">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">Our <span className='blue'>Team</span></h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"></p>
      </div> 
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div className="items-center bg-black rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <div >
                  <img className="rounded-lg sm:rounded-none sm:rounded-l-lg" width={1000} src="bril.jpg" alt="Bril" />
              </div>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a className="text-white" href="#">Jibril <span className='blue'>Bethay</span></a>
                  </h3>
                  <span className="text-white dark:text-gray-400">Market Analyst</span>
                  <p className="mt-3 mb-4 font-light text-white dark:text-white">Jibril Bethay drives the technical and market strategy of the Viccci protocol.</p>
                  <ul className="flex space-x-4 sm:mt-0">
                      <li>
                          <a href="#" className="text-blue-500 hover:text-gray-900 dark:hover:text-white"  >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="#" className="text-sky-500 hover:text-gray-900 dark:hover:text-white">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                          </a>
                      </li>
                      
                  </ul>
              </div>
          </div> 
          <div className="items-center bg-black rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <div>
                  <img className="rounded-lg sm:rounded-none sm:rounded-l-lg" width={1000} src="https://bafkreifyzzqcqs3z7z67d2drnj2yohzmoxqbiurmyhlovopo2pvv5owv64.ipfs.w3s.link/?filename=Q.png" alt="Quentyn Sellers" />
              </div>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#" className='text-white'>Quentyn <span className='blue'>Sellers</span></a>
                  </h3>
                  <span className="text-white dark:text-gray-400">Research and Development</span>
                  <p className="mt-3 mb-4 font-light text-white dark:text-white">Quentyn drives the research and development side of Viccci protocol.</p>
                  <ul className="flex space-x-4 sm:mt-0">
                      <li>
                          <a href="#" className="text-blue-500 hover:text-gray-900 dark:hover:text-white">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="#" className="text-sky-500 hover:text-gray-900 dark:hover:text-white">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                          </a>
                      </li>
                     
                  </ul>
              </div>
          </div> 
          <div className="items-center bg-black rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <div>
                  <img className=" rounded-lg sm:rounded-none sm:rounded-l-lg" width={900} src="https://img1.wsimg.com/isteam/ip/c62ec2e6-ed0a-4c01-a452-434d38fb7244/307972599_2114008585448661_4875268806780398333.jpg/:/cr=t:4.18%25,l:0%25,w:100%25,h:73.93%25/rs=w:365,h:365,cg:true" alt="Michael Avatar" />
              </div>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#" className='text-white'>Tawny <span className='blue'>Jones</span></a>
                  </h3>
                  <span className="text-white dark:text-gray-400">Market Analyst / Research & Development</span>
                  <p className="mt-3 mb-4 font-light text-whit dark:text-white">Tawny drives the social media department of Viccci.</p>
                  <ul className="flex space-x-4 sm:mt-0">
                      <li>
                          <a href="#" className="text-blue-500 hover:text-gray-900 dark:hover:text-white">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="#" className="text-sky-500 hover:text-gray-900 dark:hover:text-white">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                          </a>
                      </li>
                      
                  </ul>
              </div>
          </div> 
          <div className="items-center bg-black rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <div>
                  <img className=" rounded-lg sm:rounded-none sm:rounded-l-lg" width={1000} src="https://bafybeieqh46nm2uyugaeyycfmbr3tuknmxyupcwbohmmq6n6rhjsvlvmom.ipfs.w3s.link/QProfile.png" alt="Quan Adams" />
              </div>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#" className='text-white'>Quan <span className='blue'>Adams</span></a>
                  </h3>
                  <span className="text-white dark:text-gray-400">Lead Artist</span>
                  <p className="mt-3 mb-4 font-light text-white dark:text-white">Quan is the lead artist for for Viccci Protocol.</p>
                  <ul className="flex space-x-4 sm:mt-0">
                      <li>
                          <a href="#" className="text-blue-500 hover:text-gray-900 dark:hover:text-white">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="#" className="text-sky-500 hover:text-gray-900 dark:hover:text-white">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                          </a>
                      </li>
                     
                  </ul>
              </div>
          </div>  
      </div>  
  </div>
</section>
    </div>
  )
}

export default ExtendedT
