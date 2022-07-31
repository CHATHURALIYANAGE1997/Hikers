import React from "react";
import './guidenav.css';
import { GuideNavData } from './GuideNavData';

const GuideNav = () => {
    return (
        <div className="d-flex flex-column gn-container">
            <ul className="gn-list">
                {GuideNavData.map((val, key) => {
                    return (
                        <li 
                        key={key}
                        className="gn-row"
                        id={window.location.pathname == val.link ? "active" : ""}
                        onClick={() => {window.location.pathname = val.link}} >
                            <div id="gn-icon">{val.icon}</div>
                            <div id="gn-title">{val.title}</div>
                        </li>
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
