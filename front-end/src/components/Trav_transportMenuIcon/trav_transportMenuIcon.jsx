import React from "react";
import "./trav_transportMenuIcon.css"
import { useState } from "react";

const TranspMenuIcon = (props) => {
    return (
        <div>
            <div className="trm_wholeIcon" id="trm_wholeIcon">
                    <div className="trm_icon">
                        {props.icon}
                      
                    </div>       
                {props.name}
                
            </div>
        </div> 
    )
}
export default TranspMenuIcon