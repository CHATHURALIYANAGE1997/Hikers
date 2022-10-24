import React, { useState } from "react";
import "./rateTransport.css"
function Cleanlinessoption() {
    const [cleanliness, setCleanliness] = useState();
    return (
        <div>
            <h1>{cleanliness}</h1>
            <input type="radio" name="cleanliness" value="Excellent" />Excellent
            {/* onChange={e => setNavigationcapacity(e.target.value)} */}
            <input type="radio" name="cleanliness" value="Very Goood"  />Very Good
            <input type="radio" name="cleanliness" value="Good"  />Good
            <input type="radio" name="cleanliness" value="Average"  />Average
            <input type="radio" name="cleanliness" value="Poor"  />Poor
            <input type="radio" name="cleanliness" value="Very Poor"  />Very Poor
        </div>
    );
}
export default Cleanlinessoption;