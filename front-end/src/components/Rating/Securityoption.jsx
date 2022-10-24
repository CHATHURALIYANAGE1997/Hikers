
import React, { useState } from "react";
import "./rateTransport.css"
function Securityoption() {
    const [security, setSecurity] = useState();
    return (
            <div>
                <h1>{security}</h1>
                <input type="radio"  name="security" value="Excellent"  />Excellent
                {/* onChange={e => setNavigationcapacity(e.target.value)} */}
                <input type="radio"  name="security" value="Very Goood" />Very Good
                <input type="radio"  name="security" value="Good"  />Good
                <input type="radio"  name="security" value="Average" />Average
                <input type="radio"  name="security" value="Poor" />Poor
                <input type="radio"  name="security" value="Very Poor"  />Very Poor
            </div>
    );
}
export default Securityoption;
