import React from "react";

const ImageSlider = ({ data }) => {
  return (
    <div class="card mt-lg-2">
      <div class="card-header">
        <h2 class="mb-0 h6">
          <strong>{data}</strong>
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
        {data === "Our Social Networks" && (
          <>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
