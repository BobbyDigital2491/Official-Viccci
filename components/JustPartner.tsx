import React from 'react';

const JustPartner = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-6">
        <h2 className="text-neutral-200 text-3xl font-bold bg-red-600 rounded-md dark:text-neutral-200 md:text-4xl md:leading-tight">In Partnership With</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <img className="py-3 lg:py-5 mx-auto text-gray-500 dark:text-neutral-500" src='/Powerhouse.jpg' alt="Powerhouse" />

        <img className="py-3 lg:py-5 mx-auto text-gray-500 dark:text-neutral-500" src='/DrueWhite.jpg' alt="Drue White" />
        
        <img className="py-3 lg:py-5 mx-auto text-gray-500 dark:text-neutral-500" src='/JustPartner.png' alt="Just Partner" />

        <img className="py-3 lg:py-5 mx-auto text-gray-500 dark:text-neutral-500" src='/SeenLogo1.png' alt="Seen Logo" />
      </div>
    </div>
  );
}

export default JustPartner;
