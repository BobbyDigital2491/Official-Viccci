import React from "react";

export default function Footer() {
  return (
    <>
      <div className=" pt-4 sm:pt-10 lg:pt-12">
        

        <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-b gap-4 py-6 border-sky-400">
            <nav className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6">
              <a
                href="https://discord.gg/kQrWW29djw"
                className="text-white hover:text-sky-400 active:text-indigo-600 transition duration-100"
              >
                Discord
              </a>
              <a
                href="https://twitter.com/vicccip"
                className="text-white hover:text-sky-400 active:text-indigo-600 transition duration-100"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/Viccci_Protocol/"
                className="text-white hover:text-sky-400 active:text-indigo-600 transition duration-100"
              >
                Instagram
              </a>
              <a
                href="/blog"
                className="text-white hover:text-sky-400 active:text-indigo-600 transition duration-100"
              >
                Blog
              </a>
              
               <a
                href="/team"
                className="text-white hover:text-sky-400 active:text-indigo-600 transition duration-100"
              >
                Team
              </a>
              <a
                href="https://vspaces.vercel.app/"
                className="text-white hover:text-sky-400 active:text-indigo-600 transition duration-100"
              >
                V Spaces
              </a>
               <a
                href="https://birds-three.vercel.app/"
                className="text-white hover:text-sky-400 active:text-indigo-600 transition duration-100"
              >
                Early Bird NFT Drop
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
