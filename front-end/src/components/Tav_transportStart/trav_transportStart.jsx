import React from "react";

const TransportStart = (props) => {
    return (
        <div>
            <label htmlFor="" className="startPoint">{props.labelName}</label>
            <input type="text" className="inputStartNDestinationPoint" />
        </div>
    ) 
}
export default TransportStart