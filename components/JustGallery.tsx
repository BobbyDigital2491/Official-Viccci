import React, { useState } from 'react';

interface ImageModalProps {
  src: string;
  alt: string;
  handleClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, handleClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
    <div className="relative w-full max-w-screen-lg p-4 bg-black rounded-lg">
      <button
        onClick={handleClose}
        className="absolute top-0 right-0 mt-4 mr-4 text-gray-300"
      >
        <svg
          className="w-8 h-8"
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
      <img
        className="max-w-full max-h-screen mx-auto object-contain"
        src={src}
        alt={alt}
      />
    </div>
  </div>
);

interface Image {
  src: string;
  alt: string;
}

const ImageCarousel: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<Image>({ src: '', alt: '' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const images: Image[] = [
    { src: '/JustBelieve.jpg', alt: 'Drue Wole 3' },
    { src: 'https://peach-informal-llama-875.mypinata.cloud/ipfs/QmPXcq6MZT3jbT8n6qcgvTykx3gJGLdQ8re2oXmgTMvjcm', alt: 'Drue Wole 1' },
    { src: 'https://peach-informal-llama-875.mypinata.cloud/ipfs/QmQEtFMVGQSrcNdcSdN3L4ziXMy2y25gYAwQw13WDbT7Xh', alt: 'Drue Wole 2' },
    { src: 'https://peach-informal-llama-875.mypinata.cloud/ipfs/QmYDonaHDUfe6eu8Rx9pvZmFtREgSSyG2fsiymQK7zoN4h', alt: 'Drue Wole 3' },
    { src: 'https://peach-informal-llama-875.mypinata.cloud/ipfs/Qmd5SwVmMLRXJUL7ptMDsuKk6KULojmnkcaBvAPXXtqguG', alt: 'Drue Wole 3' },
    { src: 'https://peach-informal-llama-875.mypinata.cloud/ipfs/QmR25jUesGyiGW8fd2j5rNvGYzrGWct2ofNkXnBn7Lwvzv', alt: 'Drue Wole 3' },
    { src: 'https://peach-informal-llama-875.mypinata.cloud/ipfs/QmX7LDnVB6zK57oJ4ihzeTyQceUmT5byhLC8Q579Xvxafu', alt: 'Drue Wole 3' },
    { src: 'https://peach-informal-llama-875.mypinata.cloud/ipfs/QmRsFKKB8FAwNCbHcNh2G4LuF9Je5TG79EV5K8N6y3QMcN', alt: 'Drue Wole 3' },
    { src: 'https://peach-informal-llama-875.mypinata.cloud/ipfs/QmVMmK8sRJJFRoKypGhenCyzG6kdxXddmGtdDoLkLfFSeh', alt: 'Drue Wole 2' },
    { src: 'https://peach-informal-llama-875.mypinata.cloud/ipfs/QmR3bTzh49zc2pYWazSYKVHXMuxKuwFjqzeDXPR6R5iind', alt: 'Drue Wole 3' },
  ];

  const handleOpenModal = (image: Image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mt-36 mb-6">
        <h2 className="text-2xl text-center bg-red-600 rounded-md font-bold md:text-3xl dark:text-white">
          Just Believe AR Gallery
        </h2>
      </div>
      <div className="relative">
        <div className="flex justify-center">
          <div
            className="cursor-pointer"
            onClick={() => handleOpenModal(images[currentIndex])}
          >
            <img
              className="max-h-screen max-w-screen"
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
            />
          </div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
        >
          &#8250;
        </button>
      </div>
      {isModalOpen && (
        <ImageModal src={modalImage.src} alt={modalImage.alt} handleClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ImageCarousel;
