import React, { useState } from 'react';

const JustGallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const images = [
      "https://peach-informal-llama-875.mypinata.cloud/ipfs/QmQEtFMVGQSrcNdcSdN3L4ziXMy2y25gYAwQw13WDbT7Xh",
      "https://peach-informal-llama-875.mypinata.cloud/ipfs/QmPXcq6MZT3jbT8n6qcgvTykx3gJGLdQ8re2oXmgTMvjcm",
      "https://peach-informal-llama-875.mypinata.cloud/ipfs/QmYDonaHDUfe6eu8Rx9pvZmFtREgSSyG2fsiymQK7zoN4h",
      "https://peach-informal-llama-875.mypinata.cloud/ipfs/Qmd5SwVmMLRXJUL7ptMDsuKk6KULojmnkcaBvAPXXtqguG",
      "https://peach-informal-llama-875.mypinata.cloud/ipfs/QmX7LDnVB6zK57oJ4ihzeTyQceUmT5byhLC8Q579Xvxafu",
      "https://peach-informal-llama-875.mypinata.cloud/ipfs/QmR25jUesGyiGW8fd2j5rNvGYzrGWct2ofNkXnBn7Lwvzv",
      "/JustBelieve.jpg",
      "https://peach-informal-llama-875.mypinata.cloud/ipfs/QmRsFKKB8FAwNCbHcNh2G4LuF9Je5TG79EV5K8N6y3QMcN",
      
    ];
  
    const openModal = (image) => {
      setSelectedImage(image);
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setSelectedImage(null);
      setIsOpen(false);
    };
  
    return (
      <div className="mt-32 flex flex-col items-center justify-center min-h-screen">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
          Just Believe Online Gallery
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
          The Seen & Heard App is for everyone. The online gallery is full of image targets to work in tandem with our app. Enjoy your experience.
        </p>
  
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index}>
              <img
                className="h-auto max-w-full rounded-lg cursor-pointer"
                src={image}
                alt={`Gallery Image ${index + 1}`}
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>
  
        {isOpen && selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative max-w-4xl max-h-4xl">
              <button
                className="absolute top-0 right-0 m-4 text-white text-3xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <img
                className="h-auto max-w-full rounded-lg"
                src={selectedImage}
                alt="Selected"
                style={{ maxHeight: '90vh', maxWidth: '90vw' }}
              />
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default JustGallery;