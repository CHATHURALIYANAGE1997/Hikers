import React, { useState } from "react";
import "./rateTransport.css"
function Communicationoption() {
    const [communication, setCleanliness] = useState();
    return (
        <div>
            <h1>{communication}</h1>
            <input type="radio" name="communication" value="Excellent" />Excellent
            {/* onChange={e => setNavigationcapacity(e.target.value)} */}
            <input type="radio" name="communication" value="Very Goood"  />Very Good
            <input type="radio" name="communication" value="Good"  />Good
            <input type="radio" name="communication" value="Average"  />Average
            <input type="radio" name="communication" value="Poor"  />Poor
            <input type="radio" name="communication" value="Very Poor"  />Very Poor
        </div>
    );
}
export default Communicationoption;