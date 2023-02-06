import React from "react";

export default function Footer() {
  return (
    <>
      <div className=" pt-4 sm:pt-10 lg:pt-12">
        

        <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-b gap-4 py-6 border-sky-400">
            <nav className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6">
              <a
                href="https://discord.gg/RYWGjzHH"
                className="text-white hover:text-sky-400 active:text-indigo-600 transition duration-100"
              >
                Discord
              </a>
              <a
                href="https://twitter.com/viccciprotocol"
                className="text-white hover:text-sky-400 active:text-indigo-600 transition duration-100"
              >
                Twitter
              </a>
              <a
                href="https://twitter.com/HMingos"
                className="text-white hover:text-sky-400 active:text-indigo-600 transition duration-100"
              >
                Mona Gallery
              </a>
              <a
                href="/blog"
                className="text-white hover:text-sky-400 active:text-indigo-600 transition duration-100"
              >
                Blog
              </a>
              
               <a
                href="#"
                className="text-white hover:text-sky-400 active:text-indigo-600 transition duration-100"
              >
                Team
              </a>
              <a
                href="/roadmap"
                className="text-white hover:text-sky-400 active:text-indigo-600 transition duration-100"
              >
                Roadmap
              </a>
              <a
                href="#"
                className="text-white hover:text-sky-400 active:text-indigo-600 transition duration-100"
              >
                Web 3 Factory
              </a>
            </nav>
            <div></div>
          </div>

          <div className="text-gray-400 text-sm text-start flex py-8 justify-between">
            <div className="flex">
              <h6>Privacy Policy</h6>{""}
              <h6 className="ml-4"> Terms and Conditions</h6>
            </div>
            <div>Copyright © 2022 Sokoni</div>
          </div>
        </footer>
      </div>
    </>
  );
}
