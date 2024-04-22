import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="rounded-lg w-full max-w-2xl overflow-hidden">
      <video className="w-full h-96" controls autoPlay>
        <source
          src="https://drive.google.com/file/d/1i_cR9OXo4fX1zfHAaHgeYJq-bxZUk5vU/view?usp=drive_link"
          type="video/mp4"
        />
        {/* Fallback content if the browser doesn't support HTML5 video */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
