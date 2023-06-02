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
          <div className='tiltcard' id='speaker1' data-tilt data-tilt-glare data-tilt-max="10"></div>
          <div className='tiltcard' id='speaker2' data-tilt data-tilt-glare data-tilt-max="10"></div>
          <div className='tiltcard' id='speaker' data-tilt data-tilt-glare data-tilt-max="10"></div>
        </div>
      </div>
    </header>
  );
};

export default Speakers;