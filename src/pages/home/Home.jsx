import React from "react";
import RightBar from "./../../components/rightBar/RightBar";
import Middle from "./../../components/middleBar/Middle";
import LeftBar from "./../../components/leftBar/LeftBar";

const Home = () => {
  return (
    <div class="d-lg-flex d-sm-block mx-auto" style={{ width: "95%" }}>
      {/* <LeftBar /> */}
      <Middle />
      <RightBar />
    </div>
  );
};

export default Home;
