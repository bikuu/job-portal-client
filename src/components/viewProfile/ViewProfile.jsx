import React from "react";

const ViewProfile = () => {
  return (
    <div className="container card w-75 mt-4">
      <div className="card-body">
        <div className="row d-flex justify-content-center justify-content-lg-around align-items-start">
          <img
            src="https://images.pexels.com/photos/4052752/pexels-photo-4052752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="col-md-3 me-lg-5 rounded-circle p-0 "
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h2>BibeK Lama</h2>
            <span>Address : Aarubari, Gokarneshwar</span>
            <span>Phone : 123456789</span>
            <span>Email : bikuulama@gmail.com</span>
            <span>Age : 30</span>
          </div>
          <div className="col-md-3  d-flex justify-content-center justify-content-lg-end mt-sm-2">
            <button className="btn btn-outline-success">Edit Profile</button>
          </div>
        </div>
        <div className="row">
          <div class="col-md-12 mt-3">
            <h5>
              <i class="fa-solid fa-bullseye fa-sm me-2"></i> Objective
            </h5>
            <hr />{" "}
            <div class="container">
              <p class="word-wrap"></p>
              <p>
                <span>
                  Self-motivated and hardworking fresher seeking for an
                  opportunity to work in a challenging environment to learn and
                  hone my skill and utilize my knowledge and intelligence in the
                  growth of organisation.
                </span>
              </p>
              <p></p>
            </div>
          </div>

          <div class="col-md-12 mt-3">
            <h5>
              <i class="fa-solid fa-user-graduate fa-sm me-2"></i> Education
            </h5>
            <hr />{" "}
            <div class="row pb-3">
              <div class="col-md-3">March, 2021</div>
              <div class="col-md-9">
                <h6>(Under Graduate (Bachelor)) - Bscs It</h6>
                <div>
                  Softwarica College Of It And E- Commerce
                  <span>, Mid-Western University </span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-12 mt-3">
            <h5>
              <i class="fa-solid fa-certificate fa-sm me-2"></i>{" "}
              Training/Certificates
            </h5>
            <hr />{" "}
            <div class="row pb-3">
              <div class="col-md-3">March, 2011 (4 Months )</div>
              <div class="col-md-9">
                <h6>Hardware And Networking</h6>
                <div>Aptech</div>
              </div>
            </div>
          </div>

          <div class="col-md-12 mt-3">
            <h5>
              <i class="fa-solid fa-asterisk fa-sm me-2"></i> Job Preference
            </h5>
            <hr />{" "}
            <div class="row">
              <div class="offset-md-3 col-md-9">
                <i class="fa-regular fa-circle-check fa-sm me-2"></i> Looking
                for: Entry Level
              </div>
              <div class="offset-md-3 col-md-9">
                <i class="fa-regular fa-circle-check fa-sm me-2"></i> Job
                Categories: IT &amp; Telecommunication
              </div>
              <div class="offset-md-3 col-md-9">
                <i class="fa-regular fa-circle-check fa-sm me-2"></i> Available
                for: Full Time
              </div>
              <div class="offset-md-3 col-md-9">
                <i class="fa-regular fa-circle-check fa-sm me-2"></i> Expected
                Salary: (Above) NRs 10,000.00
                <span class="badge text-bg-info mx-1">Monthly</span>
              </div>
              <div class="offset-md-3 col-md-9">
                <i class="fa-regular fa-circle-check fa-sm me-2"></i> Total
                Experience: 0 years
              </div>
              <div class="offset-md-3 col-md-9">
                <i class="fa-regular fa-circle-check fa-sm me-2"></i> Job
                Preference Location:
                <span class="badge text-bg-info mx-1">Kathmandu Area</span>
              </div>
            </div>
          </div>

          <div class="col-md-12 mt-3">
            <h5>
              <i class="fa-regular fa-lightbulb fa-sm me-2"></i> Skills
            </h5>
            <hr />

            <div class="row">
              <div class="offset-md-3 col-md-9">
                <span title="Backend Developer" class="badge text-bg-info mx-1">
                  Backend Developer
                </span>
                <span title="Node.Js" class="badge text-bg-info mx-1">
                  Node.Js
                </span>
                <span title="Javascript" class="badge text-bg-info mx-1">
                  Javascript
                </span>
                <span title="React" class="badge text-bg-info mx-1">
                  React
                </span>
                <span title="Mysql" class="badge text-bg-info mx-1">
                  Mysql
                </span>
                <span
                  title="Mobile Application Development"
                  class="badge text-bg-info mx-1"
                >
                  Mobile Application Development
                </span>
              </div>
            </div>
          </div>

          <div class="col-md-12 mt-3">
            <h5>
              <i class="fa-regular fa-address-card fa-sm me-2"></i> Personal
              Information
            </h5>
            <hr />{" "}
            <div class="row">
              <div class="offset-md-3 col-md-9">
                <i class="fa-regular fa-circle-check fa-sm me-2"></i> Gender:
                Male
              </div>
              <div class="offset-md-3 col-md-9">
                <i class="fa-regular fa-circle-check fa-sm me-2"></i> Permanent
                Address: Kathmandu
              </div>
              <div class="offset-md-3 col-md-9">
                <i class="fa-regular fa-circle-check fa-sm me-2"></i> Current
                Address: Kathmandu
              </div>
              <div class="offset-md-3 col-md-9">
                <i class="fa-regular fa-circle-check fa-sm me-2"></i> Marital
                Status: Unmarried
              </div>
              <div class="offset-md-3 col-md-9">
                <i class="fa-regular fa-circle-check fa-sm me-2"></i> Religion:
                Buddhism
              </div>
              <div class="offset-md-3 col-md-9">
                <i class="fa-regular fa-circle-check fa-sm me-2"></i>{" "}
                Nationality: Nepali
              </div>
            </div>
          </div>

          <div class="col-md-12 mt-3">
            <h5>
              <span class="icon-share mr-2"></span>
              Social Account
            </h5>
            <hr />
            <div class="row ">
              <div class="offset-md-3 col-md-9 ">
                <a
                  href="https://www.facebook.com/bbibekk/"
                  target="_blank"
                  className="text-decoration-none"
                >
                  https://www.facebook.com/bbibekk/
                </a>
              </div>
              <div class="offset-md-3 col-md-9">
                <a
                  href="https://www.instagram.com/bikuulama/"
                  target="_blank"
                  className="text-decoration-none"
                >
                  https://www.instagram.com/bikuulama/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
