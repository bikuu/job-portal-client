import React from "react";

const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg "
      style={{ backgroundColor: " #adb5bd" }}
    >
      <div class="container-fluid ms-lg-5 ">
        <a class="navbar-brand" href="#">
          Job Portal
        </a>

        <form class="d-sm-flex d-lg-none" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse  d-lg-flex justify-content-around ms-lg-5"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav gap-lg-5 gap-sm-1">
            <a class="nav-link active" aria-current="page" href="#">
              Browse Jobs
            </a>
            <a class="nav-link" href="#">
              About Us
            </a>
            <a class="nav-link" href="#">
              FAQs
            </a>
          </div>
          <div class="navbar-nav gap-lg-5 gap-sm-1">
            <a class="nav-link" aria-current="page" href="#">
              Login Job Seeker
            </a>
            <a class="nav-link" href="#">
              Login Company
            </a>
            <a class="nav-link" href="#">
              Register Here
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;