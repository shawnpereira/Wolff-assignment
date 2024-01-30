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
      <div>
        <div className="relative w-40 h-40 rounded-full overflow-hidden">
          <img
            src={hoveredImages[0] ? "200.webp" : "f1.jpg"}
            alt=""
            className="w-full h-full object-cover rounded-full"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
          />
        </div>
        <div className="select-none">
          <div className="w-max pl-8">
            <div className="my-4 flex items-center justify-center">
              <div className="absolute">
                <svg
                  width="127"
                  height="32"
                  viewBox="0 0 127 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M101.16 25.1304C133.644 32.9565 -7.12111 32.9565 25.3633 25.1304C-7.12111 32.9565 -7.12111 -0.956522 25.3633 6.86957C-7.12111 -0.956522 133.644 -0.956522 101.16 6.86957C133.644 -0.956522 133.644 32.9565 101.16 25.1304Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  ></path>
                </svg>
              </div>
              <span>Inside</span>
            </div>
          </div>
          <a
            href="/news/wolff-olins-listed-on-ad-ages-best-places-to-work-2024"
            className="block"
          >
            <h2 className="text-lg leading-120">
              Wolff Olins listed number 15 on Ad Age’s Best Places to Work 2024
            </h2>
          </a>
          <p className="mt-2 line-clamp-2 text-lg leading-120 text-gray-600">
            Wolff Olins has been listed at number 15 on Ad Age’s Best Places to
            Work 2024 in the US.
          </p>
        </div>
      </div>
      <div>
        <div>
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={hoveredImages[1] ? "200.webp" : "f2.png"}
              alt=""
              className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
            />
          </div>
        </div>
        <div></div>
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
