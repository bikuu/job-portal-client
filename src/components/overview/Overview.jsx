import React from "react";

const Overview = () => {
  return (
    <div className="container-fluid">
      <div className="row m-4 mt-5 align-items-center ">
        <div className="col row text-center">
          <span className="h4 text-info">1234</span>{" "}
          <span className="fw-light" style={{ fontSize: "16px" }}>
            Total Jobs
          </span>
        </div>
        <div className="col row text-center">
          {" "}
          <span className="h4 text-primary">1234</span>{" "}
          <span className="fw-light" style={{ fontSize: "16px" }}>
            Total Applied Users
          </span>
        </div>
        <div className="col row text-center">
          {" "}
          <span className="h4 text-success">1234</span>{" "}
          <span className="fw-light" style={{ fontSize: "16px" }}>
            Total Users Contacted
          </span>
        </div>
        {/* <div className="col row text-center">
          {" "}
          <span className="h4 text-danger">1234</span>{" "}
          <span className="fw-light" style={{ fontSize: "16px" }}>
            Profile Visits
          </span>
        </div> */}
        <div className="col row text-center">
          {" "}
          <button className="btn btn-outline-info h4">Post New Job</button>{" "}
        </div>
      </div>
      <hr />

      <div className="container">
        <nav class="navbar navbar-expand bg-light">
          <ul class=" navbar-nav w-100  d-flex  justify-content-around">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Matching Jobs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Applied Jobs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Saved Jobs
              </a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#">
                Posted Jobs
              </a>
            </li> */}
          </ul>
        </nav>

        <div class="tab-content">
          <div class="tab-pane table-responsive active">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Job Position</th>
                  <th>Company</th>
                  <th>Deadline</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a
                      data-toggle="tooltip"
                      data-placement="bottom"
                      href="/associate-solutions-engineer/"
                      title=""
                      data-original-title="Associate Solutions Engineer"
                      className="text-decoration-none text-dark"
                    >
                      Associate Solutions…
                    </a>
                  </td>
                  <td>
                    <img class="mr-1" src="" alt="" />
                    <span class="">Logpoint Nepal</span>
                  </td>
                  <td>June 2, 2023, 11:55 p.m.</td>
                  <td>
                    <div class="btn-group">
                      <i
                        class="fa-solid fa-ellipsis fa-lg text-info"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      ></i>
                      <ul class="dropdown-menu">
                        <li>
                          <span class="dropdown-item">View Detail</span>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      data-toggle="tooltip"
                      data-placement="bottom"
                      href="/associate-solutions-engineer/"
                      title=""
                      data-original-title="Associate Solutions Engineer"
                      className="text-decoration-none text-dark"
                    >
                      Associate Solutions…
                    </a>
                  </td>
                  <td>
                    <img class="mr-1" src="" alt="" />
                    <span class="">Logpoint Nepal</span>
                  </td>
                  <td>June 2, 2023, 11:55 p.m.</td>
                  <td>
                    <div class="btn-group">
                      <i
                        class="fa-solid fa-ellipsis fa-lg text-info"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      ></i>
                      <ul class="dropdown-menu">
                        <li>
                          <span class="dropdown-item">View Detail</span>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="float-right mb-4 ">
              <a
                href="/jobseeker/recently-applied/"
                className="text-decoration-none text-dark"
              >
                View All
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
