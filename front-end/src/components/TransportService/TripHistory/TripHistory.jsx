import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './triphistory.css';

const TripHistory = () => {
  return (
    <div className="d-flex flex-column history-container">
      <div className="input-group w-100 justify-content-center mb-3">
        <div className="form-outline w-75 mr-auto ml-auto">
          <input type="search" id="form1" className="form-control history-input" placeholder="Search" />
        </div>
        <button type="button" className="btn btn-primary history-search-btn">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Destination</th>
            <th scope="col">Passenger Count</th>
            <th scope="col">Distance</th>
            <th scope="col">Team</th>
            <th scope="col">Income</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">12th April 2022</th>
            <td>Kurunegala to Dolukanda Mountain</td>
            <td>03</td>
            <td>11 km</td>
            <td className="d-flex flex-column">Mr. AS Perera
              <button className="history-see-more-btn">See more ...</button>
            </td>
            <td>LKR 10, 500</td>
          </tr>
          <tr>
            <th scope="row">12th April 2022</th>
            <td>Kurunegala town to Kiribathketa gala</td>
            <td>02</td>
            <td>4.7 km</td>
            <td className="d-flex flex-column">Mr. AS Perera
              <button className="history-see-more-btn">See more ...</button>
            </td>
            <td>LKR 10, 500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TripHistory;