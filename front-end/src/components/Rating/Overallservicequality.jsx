import React, { useState } from "react";
import "./rateTransport.css"
function Overallservicequalityoption() {
    const [overallservicequality, setOverallservicequality] = useState();
    return (
        <div>
        <h1>{overallservicequality}</h1>
        <input type="radio" name="servicequality" value="Excellent" />Excellent
        <input type="radio" name="servicequality" value="Very Goood"  />Very Good
        <input type="radio" name="servicequality" value="Good" />Good
        <input type="radio" name="servicequality" value="Average"  />Average
        <input type="radio" name="servicequality" value="Poor"/>Poor
        <input type="radio" name="servicequality" value="Very Poor" />Very Poor
    </div>
    );
}
export default Overallservicequalityoption;