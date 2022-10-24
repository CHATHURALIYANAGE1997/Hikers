import React, { useState } from "react";
import "./rateTransport.css"
function Punctualityoption() {
    const [punctuality, setPunctuality] = useState();
    return (
        <div>
            <h1>{punctuality}</h1>
            <input type="radio" name="punctuality" value="Excellent"  />Excellent
            {/* onChange={e => setNavigationcapacity(e.target.value)} */}
            <input type="radio" name="punctuality" value="Very Goood"  />Very Good
            <input type="radio" name="punctuality" value="Good"  />Good
            <input type="radio" name="punctuality" value="Average" />Average
            <input type="radio" name="punctuality" value="Poor" />Poor
            <input type="radio" name="punctuality" value="Very Poor" />Very Poor
        </div>
    );
}
export default Punctualityoption;
