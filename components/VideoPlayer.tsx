import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="rounded-lg w-full max-w-2xl overflow-hidden">
      <video className="w-max h-max" controls autoPlay>
        <source
          src="https://peach-informal-llama-875.mypinata.cloud/ipfs/QmPkzw4bh74PJySJxGEemL68okkJoEUCkMG1ZWHSPfZgrZ"
          type="video/mp4"
        />
        {/* Fallback content if the browser doesn't support HTML5 video */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
