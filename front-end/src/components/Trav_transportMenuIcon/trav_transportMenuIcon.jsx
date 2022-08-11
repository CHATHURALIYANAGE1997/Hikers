import React from "react";
import "./trav_transportMenuIcon.css"
// import { AiOutlineCar } from 'react-icons/ai';

const TranspMenuIcon = (props) => {
    return (
        <div>
            {/* <h2>Shirantha</h2> */}
            <div className="trm_wholeIcon">
                <div className="trm_icon">
                    {/* <AiOutlineCar size={60}/> */}
                    {props.icon}
                </div>
                {props.name}
            </div>
        </div>
    )
}
export default TranspMenuIcon