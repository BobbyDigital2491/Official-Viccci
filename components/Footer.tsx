import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-b border-gray-800 py-6">
          <div className="flex items-center">
            <img src="/log.png" className="h-12" alt="Logo" />
            <h1 className="px-4 text-xl font-bold">Viccci <span className="text-sky-400">Protocol</span></h1>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
            <a
              href="/services"
              className="hover:text-sky-400"
            >
              Services
            </a>
            <a href="https://twitter.com/vicccip" className="hover:text-sky-400">
              Twitter
            </a>
            <a
              href="https://www.instagram.com/Viccci_Protocol/"
              className="hover:text-sky-400"
            >
              Instagram
            </a>
            <a href="/class" className="hover:text-sky-400">
              Classes
            </a>
            <a href="/team" className="hover:text-sky-400">
              Team
            </a>
            <a
              href="https://vspaces.vercel.app/"
              className="hover:text-sky-400"
            >
              V Spaces
            </a>
            <a href="/vcp" className="hover:text-sky-400">
              VCP Token
            </a>
          </nav>
        </div>

        <div className="mt-8 flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <a href="/privacy" className="hover:text-sky-400">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-sky-400">
              Terms and Conditions
            </a>
          </div>
          <div className="text-gray-400">
            &copy; {new Date().getFullYear()} Sokoni
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
