import React, { useEffect } from 'react';
import './Sponsors.css';

const Sponsors = () => {
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
      <div className='sponsors'>
        <h1 className='title-sponsors'>SPONSORS</h1>
        <div className="sponsor-cards">
          <div className="sponsor-tilt" id='orom' data-tilt data-tilt-glare></div>
          <div className="sponsor-tilt" id='yoode' data-tilt data-tilt-glare></div>
          <div className="sponsor-tilt" id='aromas' data-tilt data-tilt-glare></div>
          <div className="sponsor-tilt" id='skill-vertex'  data-tilt data-tilt-glare></div>
        </div>
      </div>
    </header>
  );
};

export default Sponsors;