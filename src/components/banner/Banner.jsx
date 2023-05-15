import React from "react";

const Banner = () => {
  return (
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide w-75 mx-auto rounded mt-3 shadow p-1 mb-5 bg-secondary rounded"
      style={{ height: "300px", overflow: "hidden", objectFit: "contain" }}
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner h-100 rounded fw-bold font-monospace ">
        <div class="carousel-item active" data-bs-interval="10000">
          <img
            src="https://images.pexels.com/photos/1570604/pexels-photo-1570604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="d-block w-100"
            style={{ height: "300px", objectFit: "cover" }}
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block bg-light text-success">
            <h5>Heading 1</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="https://images.pexels.com/photos/627535/pexels-photo-627535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="d-block w-100"
            style={{ height: "300px", objectFit: "cover" }}
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block bg-light text-success">
            <h5>Heading 2</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://images.pexels.com/photos/997611/pexels-photo-997611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="d-block w-100"
            style={{ height: "300px", objectFit: "cover" }}
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block bg-light text-success">
            <h5>Heading 3</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
