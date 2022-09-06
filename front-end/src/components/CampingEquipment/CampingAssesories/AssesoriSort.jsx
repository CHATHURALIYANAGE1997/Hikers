import React from "react";
import { FiList } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";

const AccessoriesSort = () => {
  return (
    <div className="d-flex flex-row accessories-sort-container">
      <div className="col-6 d-flex accessories-sort-dropdown">
        <h6 className="my-auto accessories-sort-name">Sort By :</h6>
        <div className="btn-group">
          <button
            className="btn border-secondary btn-sm dropdown-toggle accessories-sort-dropdown-btn "
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
      <div className="col-6 d-flex accessories-sort-icon">
        <div className="align-self-center accessories-list-icon">
          <FiList/>
        </div>
        <div className="align-self-center accessories-grid-icon">
         <FiGrid/>
        </div>
      </div>
    </div>
  );
};
export default AccessoriesSort;
