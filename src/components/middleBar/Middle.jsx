import React from "react";

const Middle = () => {
  return (
    <div class="border border-success border-opacity-25 rounded p-2  w-lg-50 w-sm-100 mt-sm-2  ms-2 me-2">
      <form class="d-flex" role="search">
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
    </div>
  );
};

export default Middle;
