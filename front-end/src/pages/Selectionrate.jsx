import React, { useState } from "react";
// import "../components/Rating/rateTransport.css"
function Selectionrate() {
    const [security, setSecurity] = useState();
    const [punctuality, setPunctuality] = useState();
    const [navigationcapacity, setNavigationcapacity] = useState();
    const [cleanliness, setCleanliness] = useState();
    const [overallservicequality, setOverallservicequality] = useState();

    return (
        <div>
            <div>
                <h1>{security}</h1>
                <input type="radio" name="rate1" value="Excellent" onChange={e => setSecurity(e.target.value)} />Excellent
                <input type="radio" name="rate2" value="Very Goood" onChange={e => setSecurity(e.target.value)} />Very Good
                <input type="radio" name="rate3" value="Good" onChange={e => setSecurity(e.target.value)} />Good
                <input type="radio" name="rate4" value="Average" onChange={e => setSecurity(e.target.value)} />Average
                <input type="radio" name="rate5" value="Poor" onChange={e => setSecurity(e.target.value)} />Poor
                <input type="radio" name="rate6" value="Very Poor" onChange={e => setSecurity(e.target.value)} />Very Poor
            </div>
            <div>
                <h1>{punctuality}</h1>
                <input type="radio" name="rate1" value="Excellent" onChange={e => setPunctuality(e.target.value)} />Excellent
                <input type="radio" name="rate2" value="Very Goood" onChange={e => setPunctuality(e.target.value)} />Very Good
                <input type="radio" name="rate3" value="Good" onChange={e => setPunctuality(e.target.value)} />Good
                <input type="radio" name="rate4" value="Average" onChange={e => setPunctuality(e.target.value)} />Average
                <input type="radio" name="rate5" value="Poor" onChange={e => setPunctuality(e.target.value)} />Poor
                <input type="radio" name="rate6" value="Very Poor" onChange={e => setPunctuality(e.target.value)} />Very Poor
            </div>
            <div>
                <h1>{navigationcapacity}</h1>
                <input type="radio" name="rate1" value="Excellent" onChange={e => setNavigationcapacity(e.target.value)} />Excellent
                <input type="radio" name="rate2" value="Very Goood" onChange={e => setNavigationcapacity(e.target.value)} />Very Good
                <input type="radio" name="rate3" value="Good" onChange={e => setNavigationcapacity(e.target.value)} />Good
                <input type="radio" name="rate4" value="Average" onChange={e => setNavigationcapacity(e.target.value)} />Average
                <input type="radio" name="rate5" value="Poor" onChange={e => setNavigationcapacity(e.target.value)} />Poor
                <input type="radio" name="rate6" value="Very Poor" onChange={e => setNavigationcapacity(e.target.value)} />Very Poor
            </div>
            <div>
                <h1>{cleanliness}</h1>
                <input type="radio" name="rate1" value="Excellent" onChange={e => setCleanliness(e.target.value)} />Excellent
                <input type="radio" name="rate2" value="Very Goood" onChange={e => setCleanliness(e.target.value)} />Very Good
                <input type="radio" name="rate3" value="Good" onChange={e => setCleanliness(e.target.value)} />Good
                <input type="radio" name="rate4" value="Average" onChange={e => setCleanliness(e.target.value)} />Average
                <input type="radio" name="rate5" value="Poor" onChange={e => setCleanliness(e.target.value)} />Poor
                <input type="radio" name="rate6" value="Very Poor" onChange={e => setCleanliness(e.target.value)} />Very Poor
            </div>
            <div>
                <h1>{overallservicequality}</h1>
                <input type="radio" name="rate1" value="Excellent" onChange={e => setOverallservicequality(e.target.value)} />Excellent
                <input type="radio" name="rate2" value="Very Goood" onChange={e => setOverallservicequality(e.target.value)} />Very Good
                <input type="radio" name="rate3" value="Good" onChange={e => setOverallservicequality(e.target.value)} />Good
                <input type="radio" name="rate4" value="Average" onChange={e => setOverallservicequality(e.target.value)} />Average
                <input type="radio" name="rate5" value="Poor" onChange={e => setOverallservicequality(e.target.value)} />Poor
                <input type="radio" name="rate6" value="Very Poor" onChange={e => setOverallservicequality(e.target.value)} />Very Poor
            </div>
        </div >
    );
}
export default Selectionrate;