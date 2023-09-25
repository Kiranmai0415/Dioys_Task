// src/App.js
import React from 'react';
import './Slide.css';
import Slideshow from '../Slideshows/Slideshow';
import family from '../image/family.jpg'
import bittu from '../image/bittu-daddy.jpg'
import MomDad from '../image/MomDad.jpg'



const Slides = () => {
  const images = [
   bittu, 
   family,
   MomDad
    // Add more image URLs as needed
  ];

  return (
    <div className="App">
      <h1>Photo Slideshow</h1>
      <Slideshow images={images} />
    </div>
  );
};

export default Slides;
