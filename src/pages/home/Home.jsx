import React from "react";
import RightBar from "./../../components/rightBar/RightBar";
import Middle from "./../../components/middleBar/Middle";
import LeftBar from "./../../components/leftBar/LeftBar";

const Home = () => {
  return (
    <div class="d-flex">
      <LeftBar />
      <Middle />
      <RightBar />
    </div>
  );
};

export default Home;
