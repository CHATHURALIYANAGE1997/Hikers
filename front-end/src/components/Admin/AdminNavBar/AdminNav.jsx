import React from "react";
import './adminnav.css';
import { AdminNavData } from './AdminNavData';

const AdminNav = () => {
    return (
        <div className="d-flex flex-column an-container">
            <ul className="an-list">
                {AdminNavData.map((val, key) => {
                    return (
                        <li 
                        key={key}
                        className="an-row"
                        id={window.location.pathname == val.link ? "active" : ""}
                        onClick={() => {window.location.pathname = val.link}} >
                            <div id="an-icon">{val.icon}</div>
                            <div id="an-title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default AdminNav;

//Install material ui
//npm install @material-ui/core
//npm install @material-ui/icons
