import React from "react";
import './hotelnav.css';
import { HotelNavData } from './HotelNavData';
import {Link} from "react-router-dom";

const HotelNav = () => {
    return (
        <div className="d-flex flex-column hn-container">
            <ul className="gn-list">
                {HotelNavData.map((val, key) => {
                    return (
                        <Link to={val.link}>
                        <li 
                        key={key}
                        className="hn-row"
                        id={window.location.pathname == val.link ? "active" : ""} >
                            <div id="hn-icon">{val.icon}</div>
                            <div id="hn-title">{val.title}</div>
                        </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
}

export default HotelNav;

