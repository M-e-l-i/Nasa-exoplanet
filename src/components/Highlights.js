import React, { useState } from 'react';
import planet from '../assets/Astralis.png';

const Highlights = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };

    return(
    <div className="highlights-section lg:min-h-[120vh] flex items-center">
        <div className='text-div-1'>
            <h1 className='text-div-2 '>Highlights</h1>
            <p className='text-div-3'>Astralis is a planet situated 420 lightyears away from Earth. It is life to the species CB-15 who share a striking resemblance to us humans. The planet features three continents each divided into two countries and boasts a diverse range of terrains.</p>
        </div>
      <div class="image-container">
        <img src={planet} class="image" />
      </div>
    </div>
    );
};
export default Highlights;
