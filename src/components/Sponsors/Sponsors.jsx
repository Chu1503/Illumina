import React, { useEffect, useState } from 'react';
import './Sponsors.css';
import CountdownTimer from './CountdownTimer';

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
        <div className="updates">
          <div className="h1">LIVE UPDATES</div>
          <CountdownTimer />
        </div>
      </div>
    </header>
  );
};

export default Sponsors;
