import React from 'react'
import "./AboutIEI.css"
import Carousel from './Carousel'

const AboutIEI = () => {
  return (
    <header>
          <link href='https://use.fontawesome.com/releases/v5.11.2/css/all.css'/>
    <div className='aboutIEI'>
      <h1 className='title-about-iei'>ABOUT IE(I)</h1>
      <div className="container">
        <Carousel>
          <img src='./images/1.jpeg' alt='' style={{width: "100%", height: "100%"}}></img>
          <img src='./images/2.jpeg' alt='' style={{width: "100%", height: "100%"}}></img>
          <img src='./images/3.jpeg' alt='' style={{width: "100%", height: "100%"}}></img>
          <img src='./images/4.jpeg' alt='' style={{width: "100%", height: "100%"}}></img>
          <img src='./images/5.jpeg' alt='' style={{width: "100%", height: "100%"}}></img>
          <img src='./images/6.jpeg' alt='' style={{width: "100%", height: "100%"}}></img>
          <img src='./images/7.jpeg' alt='' style={{width: "100%", height: "100%"}}></img>
          <img src='./images/8.jpeg' alt='' style={{width: "100%", height: "100%"}}></img>
          <img src='./images/9.jpeg' alt='' style={{width: "100%", height: "100%"}}></img>
          <img src='./images/10.jpeg' alt='' style={{width: "100%", height: "100%"}}></img>
        </Carousel>
      </div>
      <div className='content-about-iei'>
        <p>
        The Institution of Engineers (India) is a non-profit national organisation that was founded in 1920. 
        Our objective is to effectively enhance engineering, engineering sciences, and technology, as well as their applications, 
        in India. We are dedicated to increasing technological knowledge, skill, and ability among our members and the broader public.
        As the world's largest professional association of engineers, IE(I) implements cutting-edge tactics to advance causes such 
        as sustainable development.In VIT, the IE(I) student chapter acts as the forum for technical and non-technical development 
        and achievements.
        The broad reach of IE(I) VIT enables it to reach a large and diverse audience and to hold a variety of technical events 
        and activities on a regular basis, including skill-building workshops, ideation events, and hackathons.
        </p>
      </div>
      </div>
  </header>
  )
}

export default AboutIEI


// const slideContainer = document.querySelector('.container');
// const slide = document.querySelector('.slider');
// const prevBtn = document.getElementById('prev-btn');
// const nextBtn = document.getElementById('next-btn');

// let slides = document.querySelectorAll('.slide');
// let index = 1;

// const firstClone = slides[0].cloneNode(true);
// const lastClone = slides[slides.length - 1].cloneNode(true);

// firstClone.id = 'first-clone';
// lastClone.id = 'last-clone';

// slide.append(firstClone);
// slide.prepend(lastClone);

