import React from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Text from "./Components/Text";
import Video from "./Components/Video";
import SelectedWork from "./Components/SelectedWork";
import FeaturedNews from "./Components/FeaturedNews";
import BubbleButton from "./Components/BubbleButton";

const App = () => {
  return (
    <div>
      <div className="p-10 sticky top-0  z-50 ">
        <Navbar />
      </div>
      <div className="z-10">
        <Slider />
      </div>

      <div className="p-16 px-10">
        <Text />
      </div>
      <div className="p-16">
        <Video />
      </div>
      <div className="max-w-full  pb-12 lg:pb-0  pt-2 text-2xl leading-120 p-14 ">
        <hr className="border-black py-1" />
        <div> Selected Work</div>
      </div>
      <div className="p-16">
        <SelectedWork />
      </div>
      <div className="p-16">
        <FeaturedNews />
      </div>
      <div className="p-14">
        <BubbleButton />
      </div>
    </div>
  );
};

export default App;
