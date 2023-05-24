import { useState } from "react";
import { categories } from "../../../assets/categories";

const JobCategory = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div class="card" style={{ width: "300px" }}>
        <div class="card-header">
          <h2 class="mb-0 h6">
            <strong>Jobs By Category</strong>
          </h2>
        </div>
      </div>
      <div
        class="list-group mt-2"
        style={{ height: `${show ? "auto" : "240px"}`, overflow: "hidden" }}
      >
        {categories.map((category) => (
          <button type="button" class="list-group-item list-group-item-action">
            {category}
          </button>
        ))}
      </div>
      <hr />
      <button class="btn btn-light" onClick={() => setShow((prev) => !prev)}>
        {show ? "Less" : "More"}
      </button>
    </div>
  );
};

export default JobCategory;
