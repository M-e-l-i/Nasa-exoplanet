import React, { useState } from 'react';
import banner from '../assets/hero-banner.mp4';

const Loading = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };


  return (
    <div className="hero-section lg:min-h-[120vh] flex items-center">
      <video
        autoPlay
        muted
        loop
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src={banner}
      />
      
      <div className="hero-content-left primary min-h-[150vh]">
        <div className='text-div'>
            <h1 className='text-1'>Astralis</h1>
            <h2 className='text-2'>A fictional planet meant to outreach research on exoplanets</h2>
        </div>
      </div>

      <div className="hero-content-right primary text-container">
          <button className="btn">Explore Astralis</button>
      </div>
    </div>
  );
};

export default Loading;