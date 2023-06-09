import React from "react";
import ImageSlider from "../imageSlider/ImageSlider";
import Card from "./../card/Card";
import SideProfile from "./../sideProfile/SideProfile";
import PieChart from "../pieChart/PieChart";
import BarChart from "../barChart/BarChart";

const RightBar = () => {
  return (
    <div
      class="d-sm-flex justify-content-sm-around d-lg-block border border-info border-opacity-25 rounded p-2 flex-shrink-1  w-sm-50  "
      // style={{ width: "350px" }}
    >
      {/* <div class="card">
        <div class="card-header">
          <h2 class="mb-0 h6">
            <strong>Jobs By Employment Type</strong>
          </h2>
        </div>
        <div class="list-group mt-2">
          <button type="button" class="list-group-item list-group-item-action">
            Full Time
          </button>
          <button type="button" class="list-group-item list-group-item-action">
            Part Time
          </button>
          <button type="button" class="list-group-item list-group-item-action">
            Contract
          </button>
          <button type="button" class="list-group-item list-group-item-action">
            Freelance
          </button>
        </div>
      </div> */}

      {/* <ImageSlider data="Top Hiring Companies" />
      <div class="card mt-2 mb-2">
        <div class="card-header">
          <h2 class="mb-0 h6">
            <strong>Popular Jobs</strong>
          </h2>
        </div>
      </div>
      <div
        class="row row-cols-1 row-cols-md-1 g-4"
        style={{ cursor: "pointer" }}
      >
        <Card title="rightBar" />
      </div> */}
      {/* Jobs by same Company */}
      {/* <div class="card mt-2 mb-2">
        <div class="card-header">
          <h2 class="mb-0 h6">
            <strong> More Jobs by Same Company</strong>
          </h2>
        </div>
      </div> */}
      {/* <div
        class="row row-cols-1 row-cols-md-1 g-4"
        style={{ cursor: "pointer" }}
      >
        <Card title="rightBar" />
      </div> */}
      {/* Similar Jobs */}
      {/* <div class="card mt-2 mb-2">
        <div class="card-header">
          <h2 class="mb-0 h6">
            <strong>Similar Jobs </strong>
          </h2>
        </div>
      </div> */}
      {/* <div
        class="row row-cols-1 row-cols-md-1 g-4"
        style={{ cursor: "pointer" }}
      >
        <Card title="rightBar" />
      </div> */}

      <SideProfile />
      <PieChart />
      <BarChart />
    </div>
  );
};

export default RightBar;
