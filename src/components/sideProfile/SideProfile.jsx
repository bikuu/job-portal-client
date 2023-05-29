import React from "react";

const SideProfile = () => {
  return (
    <div className="container-fluid d-flex justify-content-start align-items-center border border-1 rounded  mt-2">
      <div className=" m-1">
        <img
          src="https://images.pexels.com/photos/712857/pexels-photo-712857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="rounded-circle"
          style={{ width: "80px", height: "80px", cursor: "pointer" }}
        />
      </div>
      <div className="row ms-2">
        <span className="h5 text-info m-0">Bibek Lama</span>
        <span className="fw-light" style={{ fontSize: "13px" }}>
          <i class="fa-regular fa-calendar-check fa-sm"></i> Date Joined : May
          22, 2018
        </span>
      </div>
    </div>
  );
};

export default SideProfile;
