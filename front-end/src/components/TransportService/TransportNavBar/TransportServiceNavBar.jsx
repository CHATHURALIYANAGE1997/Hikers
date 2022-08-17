import React from "react";
import './transportservice.css';
import { TransportServiceData } from './TransportServiceData';

const TransportServiceNavBar = () => {
    return (
        <div className="d-flex flex-column ts-container">
            <ul className="ts-list">
                {TransportServiceData.map((val, key) => {
                    return (
                        <li 
                        key={key}
                        className="ts-row"
                        id={window.location.pathname == val.link ? "active" : ""}
                        onClick={() => {window.location.pathname = val.link}} >
                            <div id="ts-icon">{val.icon}</div>
                            <div id="ts-title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default TransportServiceNavBar;

//Install material ui
//npm install @material-ui/core
//npm install @material-ui/icons
