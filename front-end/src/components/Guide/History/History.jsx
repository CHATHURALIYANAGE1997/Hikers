import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './history.css';

const History = () => {
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
            <th scope="col">Travel</th>
            <th scope="col">Date</th>
            <th scope="col">Hotel</th>
            <th scope="col">Transport</th>
            <th scope="col">Team</th>
            <th scope="col">Total Income</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <div>Bathalegala Mountain</div>
              <div className="history-province">Notherth Western</div>
            </th>
            <td>12th April 2022</td>
            <td>ABC Hotel</td>
            <td>Car</td>
            <td className="d-flex flex-column">Mr. AS Perera
              <button className="history-see-more-btn">See more ...</button>
            </td>
            <td>LKR 10, 500</td>
          </tr>
          <tr>
            <th scope="row">
              <div>Hanthana Mountain Range</div>
              <div className="history-province">Notherth Western</div>
            </th>            
            <td>12th April 2022</td>
            <td>ABC Hotel</td>
            <td>Car</td>
            <td className="d-flex flex-column">Mr. AS Perera
              <button className="history-see-more-btn">See more ...</button>
            </td>
            <td>LKR 12, 500</td>
          </tr>
          <tr>
            <th scope="row">
              <div>Adara Kanda</div>
              <div className="history-province">Notherth Western</div>
            </th>            
            <td>12th April 2022</td>
            <td>ABC Hotel</td>
            <td>Car</td>
            <td className="d-flex flex-column">Mr. AS Perera
              <button className="history-see-more-btn">See more ...</button>
            </td>
            <td>LKR 8, 000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default History;