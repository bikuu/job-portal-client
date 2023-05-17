import React from "react";

const SearchBar = () => {
  return (
    <form class="d-flex w-50 mx-auto " role="search">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search Jobs"
        aria-label="Search"
      />
      <button class="btn btn-outline-success" type="submit">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default SearchBar;
