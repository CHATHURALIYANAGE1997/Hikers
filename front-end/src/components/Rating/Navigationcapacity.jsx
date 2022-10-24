import React, { useState } from "react";
import "./rateTransport.css"
function Navigationcapacityoption() {
    const [navigationcapacity, setNavigationcapacity] = useState();
    return (
        <div>
            <h1>{navigationcapacity}</h1>
            <input type="radio" name="navigation" value="Excellent"  />Excellent
            <input type="radio" name="navigation" value="Very Goood"  />Very Good
            {/* onChange={e => setNavigationcapacity(e.target.value)} */}
            <input type="radio" name="navigation" value="Good" />Good
            <input type="radio" name="navigation" value="Average"  />Average
            <input type="radio" name="navigation" value="Poor"  />Poor
            <input type="radio" name="navigation" value="Very Poor"  />Very Poor
        </div>
    );
}
export default Navigationcapacityoption;


