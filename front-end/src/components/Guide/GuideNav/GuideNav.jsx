import React from "react";
import './guidenav.css';
import { GuideNavData } from './GuideNavData';
import { Link } from "react-router-dom";

const GuideNav = () => {
    return (
        <div className="d-flex flex-column gn-container">
            <ul className="gn-list">
                {GuideNavData.map((val, key) => {
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

export default GuideNav;

//Install material ui
//npm install @material-ui/core
//npm install @material-ui/icons
