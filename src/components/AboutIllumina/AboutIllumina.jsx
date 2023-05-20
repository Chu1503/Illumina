import React from 'react';
import './AboutIllumina.css';

const AboutIllumina = () => {
  return (
    <header>
      <div className='aboutIllumina'>
        <h1 className='title-about-illumina'>ABOUT ILLUMINA</h1>
      <div className='cta'>
      <div className='Logo'><img src="./images/logo.png" width="300" alt="LOGO" style={{ display: 'block', margin: '0 auto' }}/></div>
      </div>
      <div className='content-about-illumina'>
        <p>
        Illumina is a prominent hackathon that brings together the brightest minds from throughout the university
        to address some of the world's most critical issues.Conducted by VIT Vellore's IE(I) Student Chapter,
        the hackathon aims to encourage students and young professionals to be creative, innovative, and collaborative.
        During the 36-hour event, participants will work in groups to develop innovative solutions to real-world problems
        using cutting-edge technology and tools. At the end of the event, teams will present their ideas to a panel of judges, 
        who will evaluate them based on their creativity, feasibility, and impact. The winning team will receive monetary award 
        as well as the opportunity to present their work in front of a larger audience. By contributing to Illumina, you can assist 
        the future generation of innovators and entrepreneurs while also positioning your company as a leader in sustainability 
        and social responsibility. Don't miss out on this once-in-a-lifetime opportunity to mingle with a diverse group of students,
        young professionals, and industry executives.  Join us for this premiere event and help us illuminate the way to a brighter future.
        </p>
      </div>
      </div>
    </header>
  );
};

export default AboutIllumina;