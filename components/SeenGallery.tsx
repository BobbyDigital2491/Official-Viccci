import React, { useState } from 'react';

const SeenGallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images: string[] = [
    "https://peach-informal-llama-875.mypinata.cloud/ipfs/QmY8En6ifUnJZ1QvYb3yHnsBFqLui5yVtPDb9Tcu3xQypB",
    "https://peach-informal-llama-875.mypinata.cloud/ipfs/QmVMmK8sRJJFRoKypGhenCyzG6kdxXddmGtdDoLkLfFSeh",
    "https://peach-informal-llama-875.mypinata.cloud/ipfs/QmR3bTzh49zc2pYWazSYKVHXMuxKuwFjqzeDXPR6R5iind",
    
  ];

  const openModal = (image: string) => {
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
        Drue Wole AR Gallery
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

export default SeenGallery;
