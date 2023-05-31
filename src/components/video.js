import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/nav.css';

const VideoBackground = () => {
    return (
      <div className="video-background">
        <ReactPlayer
          url="https://thumbs.gfycat.com/AffectionateDesertedGoa-mobile.mp4"
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
        {/* Add your other content on top of the video background */}
      </div>
    );
  };
  
  export default VideoBackground;