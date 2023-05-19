import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light ">
      <div class="container-fluid ms-lg-5 ">
        <a class="navbar-brand" href="#">
          Job Portal
        </a>
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
            <div class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Browse Job
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
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
