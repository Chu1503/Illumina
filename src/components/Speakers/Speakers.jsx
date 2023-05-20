import React, { useEffect } from 'react';
import './Speakers.css';

const Speakers = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/vanilla-tilt.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <header>
      <div className='speakers'>
        <h1 className='title-speakers'>SPEAKERS</h1>
        <div className='cards'>
          <div className='tiltcard' data-tilt data-tilt-glare data-tilt-max="10" data-tilt-startX="20" data-tilt-startY="-20" data-tilt-reset-to-start="true" data-tilt-scale="1.1"></div>
          <div className='tiltcard' data-tilt data-tilt-glare data-tilt-max="10"></div>
        </div>
      </div>
    </header>
  );
};

export default Speakers;