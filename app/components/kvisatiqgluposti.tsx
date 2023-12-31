import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const CustomSwiper = () => {
  useEffect(() => {
    const mySwiper = new Swiper('.swiper-container', {
      // Swiper options here
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // Enable navigation through clicking on pagination bullets
        renderBullet: function (index, className) {
          // Custom bullet content with SVG
          return `<svg class="${className}" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                     <circle cx="10" cy="10" r="8" fill="#333" />
                   </svg>`;
        },
      },
    });

    // Destroy Swiper instance on component unmount
    return () => {
      mySwiper.destroy();
    };
  }, []); // Empty dependency array ensures that this effect runs only once

  return (
    <div className="swiper-container">
      {/* Additional required wrapper */}
      <div className="swiper-wrapper">
        {/* Slides */}
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
        {/* Add more slides as needed */}
      </div>
      {/* If we need pagination */}
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default CustomSwiper;
