import React, { useState } from 'react';

const SeenHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative pt-2 pb-12 bg-inherit xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="https://peach-informal-llama-875.mypinata.cloud/ipfs/QmbRDeb2BotK9SJq26sDqWBMzUPXkBJa11N3JxywWjJZr7"
          alt=""
        />
      </div>

      <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="w-full lg:w-2/3 xl:w-1/2">
            <p className="mt-6 tracking-tighter text-white">
              <span className="font-sans font-normal text-7xl">
                Seen <span className="text-red-600">&</span> Heard Collective
              </span>
              <br />
            </p>
            <p className="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">
              Explore innovative products like never before with the Seen & Heard Collective app. Download today to experience interactive features, exclusive offers, and a unique way to connect with the latest trends and must-have items.
            </p>
            <p className="mt-8 font-sans text-xl font-normal text-white">
              Available for free on Apple Devices
            </p>

            <div className="flex items-center mt-5 space-x-3 sm:space-x-4">
              <a
                href="#"
                title=""
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-5
                  py-2
                  font-sans
                  text-base
                  font-semibold
                  transition-all
                  duration-200
                  border-2 border-transparent
                  rounded-full
                  sm:leading-8
                  bg-white
                  sm:text-lg
                  text-black
                  hover:bg-opacity-90
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                "
                role="button"
              >
                Download
              </a>

              <button
                onClick={handleOpenModal}
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-5
                  py-2
                  font-sans
                  text-base
                  font-semibold
                  transition-all
                  duration-200
                  bg-red-600
                  border-2
                  rounded-full
                  sm:leading-8
                  text-white
                  border-black
                  hover:bg-white
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
                  hover:text-black
                  sm:text-lg
                  focus:ring-offset-secondary
                "
              >
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z"
                  />
                </svg>
                Watch trailer
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="relative w-full max-w-4xl p-4 bg-white rounded-lg">
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 mt-4 mr-4 text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-96"
                src="https://www.youtube.com/embed/U6SCAK3HuvI?si=BorCCK1RdtsPPEX"
                title="Promo"
                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                
                
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeenHero;
