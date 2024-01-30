import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "slick-slider", // Add custom class name to slider
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Container to hide overflow */}
      <Slider {...settings}>
        <div>
          <img src="mon.png" alt="Slide 1" className="w-full" />
          {/* Set image width to fill container */}
        </div>
        <div>
          <img src="two.png" alt="Slide 2" className="w-full" />
        </div>
        <div>
          <img src="three.png" alt="Slide 3" className="w-full" />
        </div>
        <div>
          <img src="four.png" alt="Slide 4" className="w-full" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
