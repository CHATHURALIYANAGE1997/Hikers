import React from "react";
import { FiList } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";

const TentSort = () => {
  return (
    <div className="d-flex flex-row tent-sort-container">
      <div className="col-6 d-flex tent-sort-dropdown">
        <h6 className="my-auto tent-sort-name">Sort By :</h6>
        <div className="btn-group">
          <button
            className="btn border-secondary btn-sm dropdown-toggle tent-sort-dropdown-btn "
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sort by date
          </button>
          <div className="dropdown-menu">...</div>
        </div>
      </div>
      <div className="col-6 d-flex tent-sort-icon">
        <div className="align-self-center camping-list-icon">
          <FiList/>
        </div>
        <div className="align-self-center camping-grid-icon">
         <FiGrid/>
        </div>
      </div>
    </div>
  );
};
export default TentSort;
