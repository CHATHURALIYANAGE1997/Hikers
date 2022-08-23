import React from "react";
import "./trav_map.css";
import mapImg from "../../images/map.jpg"

const Map = () => {
    return (
        <div className="trm_mainDiv">
            <div className="trm_container">
                <img className="trm_mapImg" src={mapImg} alt="" srcset="" />
            </div>
        </div>
    )
}
export default Map