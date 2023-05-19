import React from "react";

const Card = () => {
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4" style={{ cursor: "pointer" }}>
      <div class="col">
        <div class="card h-100">
          <img
            src="https://images.pexels.com/photos/4052752/pexels-photo-4052752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="card-img-top"
            style={{ height: "150px", objectFit: "cover" }}
            alt="..."
          />
          <div class="card-body">
            <p class="fs-6 mb-1 text-end">
              <strong>
                <i>ABC</i>
              </strong>{" "}
              is Looking for :
            </p>

            <h5 class="card-title ">Jr. MERN Stack Developer</h5>
            <p class="fs-6 mb-0">Full Time, Part Time, Freelance</p>
            <p class="fw-semibold  mb-0">Baneswor, Kathmandu</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Job Added 3 mins Ago</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img
            src="https://images.pexels.com/photos/5731866/pexels-photo-5731866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h4 class="card-title">Job Title</h4>
            <h5 class="h6">Full Time, Part Time, Freelance</h5>
            <h5 class="h6">Baneswor, Kathmandu</h5>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img
            src="https://images.pexels.com/photos/5731866/pexels-photo-5731866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h4 class="card-title">Job Title</h4>
            <h5 class="h6">Full Time, Part Time, Freelance</h5>
            <h5 class="h6">Baneswor, Kathmandu</h5>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img
            src="https://images.pexels.com/photos/5731866/pexels-photo-5731866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h4 class="card-title">Job Title</h4>
            <h5 class="h6">Full Time, Part Time, Freelance</h5>
            <h5 class="h6">Baneswor, Kathmandu</h5>
          </div>
          <div class="card-footer">
            <small class="text-muted">Job Added 3 mins Ago</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img
            src="https://images.pexels.com/photos/5731866/pexels-photo-5731866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h4 class="card-title">Job Title</h4>
            <h5 class="h6">Full Time, Part Time, Freelance</h5>
            <h5 class="h6">Baneswor, Kathmandu</h5>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img
            src="https://images.pexels.com/photos/5731866/pexels-photo-5731866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h4 class="card-title">Job Title</h4>
            <h5 class="h6">Full Time, Part Time, Freelance</h5>
            <h5 class="h6">Baneswor, Kathmandu</h5>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
