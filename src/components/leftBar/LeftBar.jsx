import ImageSlider from "../imageSlider/ImageSlider";
import SideProfile from "../sideProfile/SideProfile";
import JobCategory from "./jobCategory/JobCategory";

const LeftBar = () => {
  return (
    <div
      class=" border border-info border-opacity-25 rounded p-2 flex-shrink-1 w-sm-100 ms-2"
      style={{ width: "350px" }}
    >
      <JobCategory />
      <ImageSlider data="Our Social Networks" />
      <SideProfile />
    </div>
  );
};

export default LeftBar;
