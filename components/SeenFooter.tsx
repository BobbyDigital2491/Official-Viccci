import React from 'react'

const SeenFooter = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-b border-gray-800 py-6">
          <div className="flex items-center">
            <img src="/SeenLogo.png" className="h-12" alt="Logo" />
            <h1 className="px-4 text-xl font-bold">Seen & Heard Collective </h1>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
            <a
              href="/services"
              className="hover:text-red-600"
            >
              Download App
            </a>
            
            <a
              href="https://www.instagram.com/Viccci_Protocol/"
              className="hover:text-red-600"
            >
              Instagram
            </a>
            <a href="/SeenAndHeardCollective/PrivacyPolicy" className="hover:text-red-600">
              Privacy Policy
            </a>
            <a href="/team" className="hover:text-red-600">
              Team
            </a>
            
            
          </nav>
        </div>

        <div className="mt-8 flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <a href="/SeenAndHeardCollective/PrivacyPolicy" className="hover:text-red-600">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-red-600">
              Terms and Conditions
            </a>
          </div>
          <div className="text-gray-400">
            &copy; {new Date().getFullYear()} Sokoni
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SeenFooter