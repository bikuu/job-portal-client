import React from "react";

const RightBar = () => {
  return (
    <div class="d-sm-flex justify-content-sm-around d-lg-block border border-info border-opacity-25 rounded p-2 w-lg-25 w-sm-50">
      <div class="card">
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
      </div>

      <div class="card mt-lg-2 ms-sm-2">
        <div class="card-header">
          <h2 class="mb-0 h6">
            <strong>Top Hiring Companies</strong>
          </h2>
        </div>
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade rounded mt-2"
          data-bs-ride="carousel"
          style={{ width: "300px", height: "200px" }}
        >
          <div class="carousel-inner rounded">
            <div class="carousel-item active">
              <img
                src="https://images.pexels.com/photos/5731866/pexels-photo-5731866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                class="d-block w-100"
                alt="..."
                style={{ height: "200px", objectFit: "cover" }}
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images.pexels.com/photos/4052752/pexels-photo-4052752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                class="d-block w-100"
                alt="..."
                style={{ height: "200px", objectFit: "cover" }}
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images.pexels.com/photos/712857/pexels-photo-712857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                class="d-block w-100"
                alt="..."
                style={{ height: "200px", objectFit: "cover" }}
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
