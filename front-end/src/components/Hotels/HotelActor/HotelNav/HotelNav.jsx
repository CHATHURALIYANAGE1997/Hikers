import React from "react";
import './hotelnav.css';
import { HotelNavData } from './HotelNavData';

const HotelNav = () => {
    return (
        <div className="d-flex flex-column hn-container">
            <ul className="gn-list">
                {HotelNavData.map((val, key) => {
                    return (
                        <li 
                        key={key}
                        className="hn-row"
                        id={window.location.pathname == val.link ? "active" : ""}
                        onClick={() => {window.location.pathname = val.link}} >
                            <div id="hn-icon">{val.icon}</div>
                            <div id="hn-title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default HotelNav;

