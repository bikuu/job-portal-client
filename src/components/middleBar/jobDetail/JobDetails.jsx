import { useState } from "react";

const JobDetails = () => {
  const [show, setShow] = useState(false);
  return (
    <div class=" ">
      <div class="card" style={{ height: show ? "auto" : "350px" }}>
        <div class="position-relative" style={{ height: "200px" }}>
          <img
            src="https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="card-img h-100"
            alt="..."
          />
          <div class="d-flex align-items-center mb-3 ms-3 position-absolute bottom-0 start-0">
            <img
              src="https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="card-img rounded"
              style={{ width: "100px", height: "70px", objectFit: "cover" }}
              alt=""
            />
            <h5 class="card-title mx-2">Comapany Name</h5>
          </div>
          <div
            class="d-flex align-items-center mb-3 mx-3 position-absolute bottom-0 end-0 text-light gap-2"
            style={{ cursor: "pointer" }}
          >
            <i class="fa-solid fa-globe fa-sm"></i>
            <i class="fa-brands fa-facebook fa-sm"></i>
            <i class="fa-brands fa-linkedin fa-sm"></i>
            <i class="fa-brands fa-instagram fa-sm"></i>
          </div>
        </div>
        <p class={`card-text h-50 m-3 ${show ? "" : "overflow-hidden"}`}>
          <strong>Company Name </strong> is amet consectetur adipisicing elit.
          Eum, voluptatibus ad asperiores aliquid neque doloribus, dolorem,
          perspiciatis quis voluptatum odio commodi illum quas quia labore
          aliquam! Et consectetur perspiciatis nihil autem enim saepe
          reprehenderit error alias nisi sed earum, eius voluptatem quia.
          Asperiores in non cum veniam maxime eligendi nihil possimus, eius
          voluptates facere magnam, adipisci quo provident magni animi
          voluptatem, fugiat tempora itaque odit enim corporis recusandae
          commodi! Debitis a voluptatum dolorum iure natus eos tenetur
          accusantium velit, blanditiis cumque maxime, repellat asperiores
          veritatis necessitatibus commodi fuga eum neque. Excepturi eveniet
          fugiat possimus aperiam deserunt, hic cum quas neque. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Facilis consequuntur quia
          exercitationem libero provident culpa fugiat assumenda? Rem ex nulla
          laboriosam voluptatum magni voluptate cum dolores laborum fuga omnis,
          ratione repellendus quibusdam, perferendis accusantium officia labore
          expedita necessitatibus natus laudantium possimus tempora officiis
          consequatur, modi nesciunt. Tenetur possimus sapiente nihil! Molestias
          quod adipisci odit modi placeat qui tempore voluptatem quam natus
          consectetur! Labore accusamus dolorem sequi aut voluptatibus ipsum!
          Soluta qui temporibus asperiores quasi, iusto rem? Autem facere minima
          aut sit pariatur incidunt ab quos officiis obcaecati commodi. Possimus
          voluptate aperiam eius. Qui numquam, ab earum delectus eaque maxime
          quia.
        </p>
        <button
          class="btn text-dark pt-0"
          onClick={() => setShow((prev) => !prev)}
        >
          View More
        </button>
      </div>

      <div className="card">
        <div className="card-title d-flex justify-content-between align-items-center m-3">
          <h5>Sr. Full Stack Developer</h5> <span>Apply Before : 5 Days</span>
        </div>
        <hr class="m-0" />
        <div className="card-group card-body">
          <h6 class="mb-1 border-bottom-1">
            <strong>Basic Job Information</strong>
          </h6>

          <table class="table table-hover m-0">
            <tbody>
              <tr>
                <td width="33%">Job Category</td>
                <td width="3%">:</td>
                <td width="64%">Marketing / Advertising / Customer Service</td>
              </tr>
              <tr>
                <td>Job Level</td>
                <td>:</td>
                <td>Mid Level</td>
              </tr>
              <tr>
                <td>No. of Vacancy/s</td>
                <td>:</td>
                <td>
                  [ <strong>1</strong> ]
                </td>
              </tr>
              <tr>
                <td>Employment Type</td>
                <td>:</td>
                <td itemprop="employmentType">Contract</td>
              </tr>
              <tr>
                <td>Job Location</td>
                <td>:</td>
                <td>
                  <span class="clearfix">Kathmandu, Nepal</span>
                </td>
              </tr>
              <tr>
                <td>Offered Salary</td>
                <td>:</td>
                <td>Negotiable</td>
              </tr>
              <tr>
                <td>
                  Apply Before<span class="mx-2">(Deadline)</span>
                </td>
                <td>:</td>
                <td>May. 31, 2023 23:55 (1&nbsp;week, 2&nbsp;days from now)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-group">
          <div class="card border-0">
            <div class="card-header p-2">
              <h3 class="mb-1 h6">
                <strong>Job Specification</strong>
              </h3>
            </div>
            <div class="card-body p-0 table-responsive">
              <table class="table table-hover m-0">
                <tbody>
                  <tr>
                    <td width="33%">Education Level</td>
                    <td width="3%">:</td>
                    <td width="64%">
                      <span itemprop="educationRequirements">
                        Graduate (Masters)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td width="33%">Experience Required</td>
                    <td width="3%">:</td>
                    <td width="64%">
                      <span itemprop="experienceRequirements">
                        More than or equal to 1 year
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <hr class="mt-0 mb-4" />
        <div class="card-group">
          <div class="card border-0">
            <div class="card-body p-2">
              <h3 class="mb-1 h6">
                <strong>Job Description</strong>
              </h3>
            </div>
            <div class="card-text p-2" itemprop="description">
              <ul>
                <li>
                  Primarily responsible for planning and execution of Buyer
                  Growth channel objectives with focus on user conversion, and
                  retention strategies - with objective on optimizing the
                  channels performances
                </li>
                <li>
                  Primarily responsible for data extraction and performance
                  analysis of CRM channels
                </li>
                <li>
                  Primary ownership of Daraz Club &amp; Loyalty; Channel
                  strategy &amp; performance analysis
                </li>
                <li>
                  Responsible for assessing &amp; optimization push notification
                  journeys
                </li>
                <li>
                  Report &amp; communicate outcomes of the analysis/CRM reports
                </li>
                <li>
                  Broadly responsible for coordinating with other CRM associates
                  to align on the multi-channel strategy and maintain a coherent
                  strategy in relation to other CRM engagement channels
                </li>
                <li>
                  Plan &amp; conduct A/B testing and optimize the channels by
                  identifying the key areas of improvements
                </li>
                <li>
                  Coordinate with cross functional teams as the face of CRM,
                  where required
                </li>
                <li>
                  Serve a supporting role in execution of operational tasks, if
                  required
                </li>
                <li>
                  Assist CRM Manager in performance analysis (gather data,
                  prepare spread sheets) on a daily, weekly, monthly basis
                </li>
                <li>
                  Assist with other work as and when required by the Management
                </li>
              </ul>
              <p>
                <strong>Requirements</strong>
              </p>
              <ul>
                <li>
                  Master’s Degree in Business, Marketing, Business Management or
                  Equivalent Professional Qualification
                </li>
                <li>
                  Minimum 1 year of professional work experience preferred. 6-12
                  months experience in CRM / digital marketing operations is an
                  added advantage
                </li>
                <li>
                  Proficiency in basics SQL, HTML and MS Office tools,
                  especially Excel required
                </li>
                <li>Creative, hardworking, methodical and very structured</li>
                <li>
                  Ability to work independently and within the team, and manage
                  a team
                </li>
                <li>
                  Willingness to learn, be a self-starter, try new things, live
                  outside of normal comfort zone
                </li>
              </ul>
              <p>
                <strong>Competencies</strong>
              </p>
              <ul>
                <li>Technical</li>
                <li>Analytical</li>
                <li>Communication</li>
                <li>Initiative</li>
                <li>Team Player</li>
              </ul>
              <p>
                <strong>Benefits</strong>
              </p>
              <ul>
                <li>
                  International working environment, and a unique opportunity to
                  learn from the best in e-commerce and business growth.
                </li>
                <li>
                  A platform to learn from Alibaba’s world-leading ecosystem
                </li>
                <li>
                  Rigorous training and exposure in team management, leadership,
                  business analytics, and operations.
                </li>
                <li>
                  An opportunity to train the next generation of business
                  leaders
                </li>
                <li>Competitive salary and incentive package</li>
                <li>Health &amp; Medical insurance</li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="m-0" />
        <div class=" px-0 m-2 d-flex justify-content-start">
          <button type="button" class="btn btn-success">
            <i class="fa-solid fa-circle-plus fa-sm me-2"></i>
            APPLY NOW
          </button>
          <button class="btn text-primary">
            <i class="fa-regular fa-star fa-sm me-2"></i>Save Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
