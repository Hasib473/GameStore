import React, { useState, useEffect } from "react";
import slider2 from '../assets/slider2.png'
import slider1 from '../assets/slider1.png';
import slider3 from '../assets/slider3.png';

const ImageSlider = () => {
  const images = [
    slider1,
    slider2,
    slider3,
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full h-[350px] md:h-[250px] lg:h-[350px] relative overflow-hidden rounded-xl shadow-lg">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="slider"
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === idx ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
