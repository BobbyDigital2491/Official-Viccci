import React from 'react';

const Article = () => {
  return (
    <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
      <div className="max-w-2xl">
        

        <div className="space-y-5 md:space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl text-center bg-red-600 rounded-md font-bold md:text-3xl dark:text-white">
              This One is for the Books
            </h2>
            <p className="text-lg text-gray-800 dark:text-neutral-200">
            Discover the magic of Latta’s career and interact with the artwork in a way you've never experienced before. 
            </p>
          </div>

          <figure>
            <img
              className="w-full rounded-xl"
              src="https://setmagazine.com/wp-content/uploads/2024/04/IMG_3072.jpg"
              alt="Image Description"
            />
            <figcaption className="mt-3 flex text-sm text-gray-500 dark:text-neutral-400">
              
            </figcaption>
          </figure>

          <div className="space-y-4 text-gray-800 dark:text-neutral-200">
            <p>
            Ivory Latta, a basketball prodigy, began her illustrious career at York 
            Comprehensive High School in South Carolina, where she quickly established
            herself as one of the nation’s top talents. Her exceptional skills on the 
            court earned her a scholarship to the University of North Carolina at 
            Chapel Hill, where she led the Tar Heels to multiple NCAA Tournament 
            appearances and was named the ACC Player of the Year twice. Latta’s 
            tenacity and remarkable scoring ability transitioned seamlessly to the 
            WNBA, where she played for teams such as the Detroit Shock, Atlanta Dream, 
            and Washington Mystics. Her dynamic play and infectious energy made her a 
            fan favorite and a respected leader on and off the court.
            </p>
            <p>
            In celebration of Ivory Latta’s incredible career, we are hosting a unique art exhibition that captures the most iconic moments of her journey through stunning paintings. </p>
            <p>
            This event will feature an innovative augmented reality app, allowing attendees to interact with the artwork and relive Latta’s legendary performances in an immersive way. Whether you experienced her brilliance firsthand or are discovering her story for the first time, this exhibition promises to bring her legacy to life in an unforgettable experience.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 mx-auto">
          <button
            type="button"
            className="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px- py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => window.location.href='/SeenAndHeardCollective/JustBelieveGallery'}
            >
            See Online Gallery
         </button>

         <button
            type="button"
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => window.location.href='https://viccci.xyz'}
            >
            Download App
         </button>
  
          </div>

        </div>
      </div>
    </div>
  );
};

export default Article;
