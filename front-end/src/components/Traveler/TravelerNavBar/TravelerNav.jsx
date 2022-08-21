import React from "react";
import './travelernav.css';
import { TravelerNavData } from './TravelerNavData';
import { Link } from "react-router-dom";

const TravelerNav = () => {
    return (
        <div className="d-flex flex-column gn-container">
            <ul className="gn-list">
                {TravelerNavData.map((val, key) => {
                    return (
                        <Link to={val.link}>
                            <li
                                key={key}
                                className="gn-row"
                                id={window.location.pathname == val.link ? "active" : ""} >
                                <div id="gn-icon">{val.icon}</div>
                                <div id="gn-title">{val.title}</div>
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
}

export default TravelerNav;

