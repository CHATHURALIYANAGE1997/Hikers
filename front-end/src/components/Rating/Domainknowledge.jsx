import React, { useState } from "react";
import "./rateTransport.css"
function Domainknowledege() {
    const [domainknowledge, setCleanliness] = useState();
    return (
        <div>
            <h1>{domainknowledge}</h1>
            <input type="radio" name="domainknowledge" value="Excellent" />Excellent
            {/* onChange={e => setNavigationcapacity(e.target.value)} */}
            <input type="radio" name="domainknowledge" value="Very Goood"  />Very Good
            <input type="radio" name="domainknowledge" value="Good"  />Good
            <input type="radio" name="domainknowledge" value="Average"  />Average
            <input type="radio" name="domainknowledge" value="Poor"  />Poor
            <input type="radio" name="domainknowledge" value="Very Poor"  />Very Poor
        </div>
    );
}
export default Domainknowledege;