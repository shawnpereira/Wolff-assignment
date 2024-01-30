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
    <div className="grid grid-cols-4 gap-16 ">
      {/*  */}
      <div>
        <div
          className="relative rounded-full overflow-hidden"
          style={{ width: 250, height: 250 }} // Set larger dimensions for the container
        >
          <img
            src={hoveredImages[1] ? "200.webp" : "f1.jpg"}
            alt=""
            className="w-full h-full object-cover rounded-full"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
            style={{
              objectFit: "cover", // Ensure the image covers the entire container
              transition: "transform 0.3s ease", // Add transition for smoothness
            }}
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
      {/*  */}
      {/*  */}
      <div>
        <div
          className="relative rounded-full overflow-hidden"
          style={{ width: 250, height: 250 }} // Set larger dimensions for the container
        >
          <img
            src={hoveredImages[2] ? "200.webp" : "f2.png"}
            alt=""
            className="w-full h-full object-cover rounded-full"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
            style={{
              objectFit: "cover", // Ensure the image covers the entire container
              transition: "transform 0.3s ease", // Add transition for smoothness
            }}
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
      {/*  */}
      {/*  */}
      <div>
        <div
          className="relative rounded-full overflow-hidden"
          style={{ width: 250, height: 250 }} // Set larger dimensions for the container
        >
          <img
            src={hoveredImages[3] ? "200.webp" : "f3.jpg"}
            alt=""
            className="w-full h-full object-cover rounded-full"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}
            style={{
              objectFit: "cover", // Ensure the image covers the entire container
              transition: "transform 0.3s ease", // Add transition for smoothness
            }}
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
      {/*  */}
      {/*  */}
      <div>
        <div
          className="relative rounded-full overflow-hidden"
          style={{ width: 250, height: 250 }} // Set larger dimensions for the container
        >
          <img
            src={hoveredImages[4] ? "200.webp" : "f4.jpg"}
            alt=""
            className="w-full h-full object-cover rounded-full"
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={() => handleMouseLeave(4)}
            style={{
              objectFit: "cover", // Ensure the image covers the entire container
              transition: "transform 0.3s ease", // Add transition for smoothness
            }}
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
      {/*  */}
      {/*  */}
      <div>
        <div
          className="relative rounded-full overflow-hidden"
          style={{ width: 250, height: 250 }} // Set larger dimensions for the container
        >
          <img
            src={hoveredImages[5] ? "200.webp" : "f5.png"}
            alt=""
            className="w-full h-full object-cover rounded-full"
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={() => handleMouseLeave(5)}
            style={{
              objectFit: "cover", // Ensure the image covers the entire container
              transition: "transform 0.3s ease", // Add transition for smoothness
            }}
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
      {/*  */}
      {/*  */}
      <div>
        <div
          className="relative rounded-full overflow-hidden"
          style={{ width: 250, height: 250 }} // Set larger dimensions for the container
        >
          <img
            src={hoveredImages[6] ? "200.webp" : "f6.png"}
            alt=""
            className="w-full h-full object-cover rounded-full"
            onMouseEnter={() => handleMouseEnter(6)}
            onMouseLeave={() => handleMouseLeave(6)}
            style={{
              objectFit: "cover", // Ensure the image covers the entire container
              transition: "transform 0.3s ease", // Add transition for smoothness
            }}
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
      {/*  */}
      {/*  */}
      <div>
        <div
          className="relative rounded-full overflow-hidden"
          style={{ width: 250, height: 250 }} // Set larger dimensions for the container
        >
          <img
            src={hoveredImages[7] ? "200.webp" : "f7.jpg"}
            alt=""
            className="w-full h-full object-cover rounded-full"
            onMouseEnter={() => handleMouseEnter(7)}
            onMouseLeave={() => handleMouseLeave(7)}
            style={{
              objectFit: "cover", // Ensure the image covers the entire container
              transition: "transform 0.3s ease", // Add transition for smoothness
            }}
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
      {/*  */}
      {/*  */}
      <div>
        <div
          className="relative rounded-full overflow-hidden"
          style={{ width: 250, height: 250 }} // Set larger dimensions for the container
        >
          <img
            src={hoveredImages[8] ? "200.webp" : "f8.jpg"}
            alt=""
            className="w-full h-full object-cover rounded-full"
            onMouseEnter={() => handleMouseEnter(8)}
            onMouseLeave={() => handleMouseLeave(8)}
            style={{
              objectFit: "cover", // Ensure the image covers the entire container
              transition: "transform 0.3s ease", // Add transition for smoothness
            }}
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
      {/*  */}
      {/*  */}
      <div>
        <div
          className="relative rounded-full overflow-hidden"
          style={{ width: 250, height: 250 }} // Set larger dimensions for the container
        >
          <img
            src={hoveredImages[9] ? "200.webp" : "f9.jpg"}
            alt=""
            className="w-full h-full object-cover rounded-full"
            onMouseEnter={() => handleMouseEnter(9)}
            onMouseLeave={() => handleMouseLeave(9)}
            style={{
              objectFit: "cover", // Ensure the image covers the entire container
              transition: "transform 0.3s ease", // Add transition for smoothness
            }}
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
      {/*  */}
      {/*  */}
      <div>
        <div
          className="relative rounded-full overflow-hidden"
          style={{ width: 250, height: 250 }} // Set larger dimensions for the container
        >
          <img
            src={hoveredImages[10] ? "200.webp" : "f10.png"}
            alt=""
            className="w-full h-full object-cover rounded-full"
            onMouseEnter={() => handleMouseEnter(10)}
            onMouseLeave={() => handleMouseLeave(10)}
            style={{
              objectFit: "cover", // Ensure the image covers the entire container
              transition: "transform 0.3s ease", // Add transition for smoothness
            }}
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
      {/*  */}
      {/*  */}
      <div>
        <div
          className="relative rounded-full overflow-hidden"
          style={{ width: 250, height: 250 }} // Set larger dimensions for the container
        >
          <img
            src={hoveredImages[11] ? "200.webp" : "f11.jpg"}
            alt=""
            className="w-full h-full object-cover rounded-full"
            onMouseEnter={() => handleMouseEnter(11)}
            onMouseLeave={() => handleMouseLeave(11)}
            style={{
              objectFit: "cover", // Ensure the image covers the entire container
              transition: "transform 0.3s ease", // Add transition for smoothness
            }}
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
      {/*  */}
      {/*  */}
      <div>
        <div
          className="relative rounded-full overflow-hidden"
          style={{ width: 250, height: 250 }} // Set larger dimensions for the container
        >
          <img
            src={hoveredImages[12] ? "200.webp" : "f12.png"}
            alt=""
            className="w-full h-full object-cover rounded-full"
            onMouseEnter={() => handleMouseEnter(12)}
            onMouseLeave={() => handleMouseLeave(12)}
            style={{
              objectFit: "cover", // Ensure the image covers the entire container
              transition: "transform 0.3s ease", // Add transition for smoothness
            }}
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
      {/*  */}
    </div>
  );
};

export default FeaturedNews;
