import React, { useState } from "react";

const FeaturedNews = () => {
  const [hoveredImages, setHoveredImages] = useState({});

  const handleMouseEnter = (index) => {
    setHoveredImages((prevHoveredImages) => ({
      ...prevHoveredImages,
      [index]: true,
    }));
  };

  const handleMouseLeave = (index) => {
    setHoveredImages((prevHoveredImages) => ({
      ...prevHoveredImages,
      [index]: false,
    }));
  };

  return (
    <div className="grid grid-cols-4 gap-3 ">
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <img
          src={hoveredImages[0] ? "200.webp" : "f1.jpg"}
          alt=""
          className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded-full"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
        />
      </div>
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={hoveredImages[1] ? "200.webp" : "f2.png"}
          alt=""
          className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
        />
      </div>
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <img
          src={hoveredImages[2] ? "200.webp" : "f3.jpg"}
          alt=""
          className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded-full"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        />
      </div>
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={hoveredImages[3] ? "200.webp" : "f4.jpg"}
          alt=""
          className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
        />
      </div>
      {/* Repeat the above pattern for other images */}
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <img
          src={hoveredImages[4] ? "200.webp" : "f5.png"}
          alt=""
          className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded-full"
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={() => handleMouseLeave(4)}
        />
      </div>
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={hoveredImages[5] ? "200.webp" : "f6.png"}
          alt=""
          className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={() => handleMouseLeave(5)}
        />
      </div>
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <img
          src={hoveredImages[6] ? "200.webp" : "f7.jpg"}
          alt=""
          className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded-full"
          onMouseEnter={() => handleMouseEnter(6)}
          onMouseLeave={() => handleMouseLeave(6)}
        />
      </div>
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={hoveredImages[7] ? "200.webp" : "f8.jpg"}
          alt=""
          className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          onMouseEnter={() => handleMouseEnter(7)}
          onMouseLeave={() => handleMouseLeave(7)}
        />
      </div>
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <img
          src={hoveredImages[8] ? "200.webp" : "f9.jpg"}
          alt=""
          className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded-full"
          onMouseEnter={() => handleMouseEnter(8)}
          onMouseLeave={() => handleMouseLeave(8)}
        />
      </div>
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={hoveredImages[9] ? "200.webp" : "f10.png"}
          alt=""
          className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          onMouseEnter={() => handleMouseEnter(9)}
          onMouseLeave={() => handleMouseLeave(9)}
        />
      </div>
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <img
          src={hoveredImages[10] ? "200.webp" : "f11.jpg"}
          alt=""
          className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded-full"
          onMouseEnter={() => handleMouseEnter(10)}
          onMouseLeave={() => handleMouseLeave(10)}
        />
      </div>
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={hoveredImages[11] ? "200.webp" : "f12.png"}
          alt=""
          className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          onMouseEnter={() => handleMouseEnter(11)}
          onMouseLeave={() => handleMouseLeave(11)}
        />
      </div>
    </div>
  );
};

export default FeaturedNews;
